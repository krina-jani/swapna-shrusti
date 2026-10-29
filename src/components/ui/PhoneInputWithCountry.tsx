"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { ChevronDown, Phone, Search } from "lucide-react";
import {
  COUNTRY_PHONE_CONFIGS,
  DEFAULT_COUNTRY,
  CountryPhoneConfig,
} from "@/data/countryPhoneCodes";

export interface PhoneInputWithCountryProps {
  value: string;
  onChange: (fullPhoneNumber: string, nationalNumber: string, country: CountryPhoneConfig) => void;
  required?: boolean;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
  inputClassName?: string;
  selectClassName?: string;
  showIcon?: boolean;
  iconClassName?: string;
  variant?: "light" | "sand" | "warm" | "outline";
}

// Helper to convert 2-letter ISO code to SVG flag CDN url
const getFlagUrl = (isoCode: string) =>
  `https://flagcdn.com/24x18/${isoCode.toLowerCase()}.png`;

export default function PhoneInputWithCountry({
  value,
  onChange,
  required = false,
  placeholder,
  name = "phone",
  id,
  className = "",
  inputClassName = "",
  showIcon = false,
  iconClassName = "w-4 h-4 text-zinc-400",
  variant = "light",
}: PhoneInputWithCountryProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  // Selected country (defaults to India +91)
  const [selectedCountry, setSelectedCountry] = useState<CountryPhoneConfig>(DEFAULT_COUNTRY);
  // National digits only
  const [nationalNumber, setNationalNumber] = useState<string>("");
  // Custom dropdown open state
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync state if value prop changes externally
  useEffect(() => {
    if (!value) {
      setNationalNumber("");
      return;
    }

    const matched = COUNTRY_PHONE_CONFIGS.find((c) => value.startsWith(c.dialCode));
    if (matched) {
      setSelectedCountry(matched);
      const digitsOnly = value.slice(matched.dialCode.length).replace(/\D/g, "").slice(0, matched.digits);
      setNationalNumber(digitsOnly);
    } else {
      const digitsOnly = value.replace(/\D/g, "").slice(0, selectedCountry.digits);
      setNationalNumber(digitsOnly);
    }
  }, [value]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelectCountry = (country: CountryPhoneConfig) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery("");

    const truncated = nationalNumber.slice(0, country.digits);
    setNationalNumber(truncated);
    const full = truncated ? `${country.dialCode} ${truncated}` : "";
    onChange(full, truncated, country);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and strictly limit to country digits
    const raw = e.target.value.replace(/\D/g, "");
    const limited = raw.slice(0, selectedCountry.digits);
    setNationalNumber(limited);

    const full = limited ? `${selectedCountry.dialCode} ${limited}` : "";
    onChange(full, limited, selectedCountry);
  };

  const filteredCountries = COUNTRY_PHONE_CONFIGS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.dialCode.includes(searchQuery) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Styling based on variant
  let containerBaseStyle = "";
  let inputBg = "";

  if (variant === "warm") {
    containerBaseStyle = "bg-[#E6DDD0]/80 border border-[#D8CCBA] rounded-2xl focus-within:border-[#C9A363] focus-within:bg-white";
    inputBg = "bg-transparent text-[#123D30] placeholder:text-zinc-600";
  } else if (variant === "sand") {
    containerBaseStyle = "bg-[#F4EFE6]/70 border border-[#E3D8C6] rounded-xl focus-within:border-[#C5A46D] focus-within:bg-white";
    inputBg = "bg-transparent text-[#202522] placeholder:text-zinc-500";
  } else if (variant === "outline") {
    containerBaseStyle = "bg-[#FCFAF6] border border-zinc-200 rounded-xl focus-within:border-[#C5A46D] focus-within:ring-1 focus-within:ring-[#C5A46D]";
    inputBg = "bg-transparent text-zinc-800 placeholder-zinc-400";
  } else {
    containerBaseStyle = "bg-white border border-zinc-300 rounded-lg focus-within:border-[#C5A46D] focus-within:ring-1 focus-within:ring-[#C5A46D]";
    inputBg = "bg-transparent text-zinc-800 placeholder-zinc-400";
  }

  const effectivePlaceholder = placeholder || selectedCountry.format;

  return (
    <div className={`relative flex items-center transition-all shadow-sm ${containerBaseStyle} ${className}`}>
      {/* Optional Leading Icon */}
      {showIcon && (
        <div className="pl-3.5 pr-1 flex items-center pointer-events-none">
          <Phone className={iconClassName} />
        </div>
      )}

      {/* Flag + Dial Code Trigger Button */}
      <div className="relative shrink-0" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center space-x-1.5 pl-3 pr-2.5 py-2.5 sm:py-3 border-r border-zinc-300/60 hover:bg-black/5 rounded-l-inherit transition-colors cursor-pointer select-none"
          title={`${selectedCountry.name} (${selectedCountry.dialCode})`}
        >
          <img
            src={getFlagUrl(selectedCountry.code)}
            alt={selectedCountry.name}
            className="w-5 h-3.5 object-cover rounded-sm shadow-xs border border-black/10 shrink-0"
            loading="lazy"
          />
          <span className="text-xs font-semibold text-zinc-800 font-sans tracking-tight">
            {selectedCountry.dialCode}
          </span>
          <ChevronDown
            className={`w-3 h-3 text-zinc-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Custom Country Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full mt-1.5 w-64 max-h-72 bg-white rounded-xl shadow-2xl border border-zinc-200 z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
            {/* Search Input inside dropdown */}
            <div className="p-2 border-b border-zinc-100 flex items-center space-x-1.5 bg-[#FAF7F0]">
              <Search className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code..."
                className="w-full bg-transparent text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
              />
            </div>

            {/* List of Countries */}
            <div className="overflow-y-auto flex-1 divide-y divide-zinc-50">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => {
                  const isSelected = c.code === selectedCountry.code;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => handleSelectCountry(c)}
                      className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-[#FAF7F0] transition-colors cursor-pointer text-xs ${
                        isSelected ? "bg-[#C5A46D]/10 font-bold" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-2 min-w-0">
                        <img
                          src={getFlagUrl(c.code)}
                          alt={c.name}
                          className="w-5 h-3.5 object-cover rounded-xs border border-black/10 shrink-0"
                          loading="lazy"
                        />
                        <span className="text-zinc-800 truncate font-sans text-xs">
                          {c.name}
                        </span>
                      </div>
                      <span className="text-zinc-500 font-mono text-[11px] shrink-0 ml-2">
                        {c.dialCode}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="p-3 text-center text-xs text-zinc-400 font-sans">
                  No matching countries
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* National Phone Input */}
      <div className="relative flex-1 flex items-center">
        <input
          id={inputId}
          name={name}
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          required={required}
          value={nationalNumber}
          onChange={handleInputChange}
          placeholder={effectivePlaceholder}
          maxLength={selectedCountry.digits}
          className={`w-full px-3 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none ${inputBg} ${inputClassName}`}
        />

        {/* Live digit counter indicator */}
        <div className="pr-3 pl-1 text-[10px] font-mono text-zinc-400 select-none pointer-events-none shrink-0">
          <span
            className={
              nationalNumber.length === selectedCountry.digits
                ? "text-emerald-600 font-bold"
                : nationalNumber.length > 0
                ? "text-amber-600"
                : "text-zinc-400"
            }
          >
            {nationalNumber.length}
          </span>
          /{selectedCountry.digits}
        </div>
      </div>
    </div>
  );
}
