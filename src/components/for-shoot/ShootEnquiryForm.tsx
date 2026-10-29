"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

interface ShootEnquiryFormProps {
  initialCategory?: string;
}

export default function ShootEnquiryForm({ initialCategory = "Pre-Wedding" }: ShootEnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    shootCategory: initialCategory,
    preferredDate: "",
    alternativeDate: "",
    expectedCrewSize: "",
    preferredLocation: "",
    productionType: "Photography",
    equipmentRequirements: "",
    projectDescription: "",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.mobileNumber.trim() || !formData.projectDescription.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Mobile, and Project Description).");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate client submission flow (or connect to backend when API endpoint is available)
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to submit your enquiry at this time. Please call our concierge directly at +91 99099 22000.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-zinc-200/90 shadow-xl text-[#202522]">
      <div className="mb-6">
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A46D] uppercase font-sans">
          PRODUCTION DESK
        </span>
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#173A2B] mt-1">
          Tell Us About Your Shoot
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 font-sans mt-2 leading-relaxed">
          Share a few details about your creative project so the resort team can review your requirements and discuss suitable arrangements.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-xl bg-[#173A2B]/10 border border-[#173A2B]/20 text-[#173A2B] space-y-3 font-sans">
          <div className="flex items-center space-x-2 text-[#173A2B] font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-[#C5A46D]" />
            <span>Enquiry Received Successfully!</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Your shoot enquiry for <strong>{formData.shootCategory}</strong> has been received by our production coordinator. Our team will review location availability and contact you via email or phone within 24 hours.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                email: "",
                mobileNumber: "",
                shootCategory: initialCategory,
                preferredDate: "",
                alternativeDate: "",
                expectedCrewSize: "",
                preferredLocation: "",
                productionType: "Photography",
                equipmentRequirements: "",
                projectDescription: "",
                additionalNotes: "",
              });
            }}
            className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider underline hover:text-[#173A2B] pt-2"
          >
            Submit Another Shoot Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
          {status === "error" && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center space-x-2 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-zinc-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Priyanshu Dave"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-zinc-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="priyanshu@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              />
            </div>
          </div>

          {/* Row 2: Mobile Number & Shoot Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-semibold text-zinc-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              />
            </div>

            <div>
              <label htmlFor="shootCategory" className="block text-xs font-semibold text-zinc-700 mb-1">
                Shoot Category <span className="text-red-500">*</span>
              </label>
              <select
                id="shootCategory"
                name="shootCategory"
                required
                value={formData.shootCategory}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              >
                <option value="Pre-Wedding">Pre-Wedding</option>
                <option value="Wedding">Wedding</option>
                <option value="Music Video">Music Video</option>
                <option value="Film Production">Film Production</option>
                <option value="Advertising">Advertising</option>
                <option value="Fashion">Fashion</option>
                <option value="Family or Maternity">Family or Maternity</option>
                <option value="Social Media Content">Social Media Content</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Row 3: Preferred Date & Alternative Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-xs font-semibold text-zinc-700 mb-1">
                Preferred Date (Optional)
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              />
            </div>

            <div>
              <label htmlFor="alternativeDate" className="block text-xs font-semibold text-zinc-700 mb-1">
                Alternative Date (Optional)
              </label>
              <input
                id="alternativeDate"
                name="alternativeDate"
                type="date"
                value={formData.alternativeDate}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              />
            </div>
          </div>

          {/* Row 4: Expected Crew Size & Preferred Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="expectedCrewSize" className="block text-xs font-semibold text-zinc-700 mb-1">
                Expected Crew Size (Optional)
              </label>
              <input
                id="expectedCrewSize"
                name="expectedCrewSize"
                type="text"
                value={formData.expectedCrewSize}
                onChange={handleChange}
                placeholder="e.g. 5–8 persons"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              />
            </div>

            <div>
              <label htmlFor="preferredLocation" className="block text-xs font-semibold text-zinc-700 mb-1">
                Preferred Location (Optional)
              </label>
              <input
                id="preferredLocation"
                name="preferredLocation"
                type="text"
                value={formData.preferredLocation}
                onChange={handleChange}
                placeholder="e.g. Poolside, Gardens, Theme Village"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              />
            </div>
          </div>

          {/* Row 5: Production Type & Equipment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="productionType" className="block text-xs font-semibold text-zinc-700 mb-1">
                Production Type
              </label>
              <select
                id="productionType"
                name="productionType"
                value={formData.productionType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              >
                <option value="Photography">Still Photography</option>
                <option value="Videography">Cinematic Videography</option>
                <option value="Commercial">Commercial / Brand</option>
                <option value="Film">Film / Short Film</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="equipmentRequirements" className="block text-xs font-semibold text-zinc-700 mb-1">
                Equipment Requirements (Optional)
              </label>
              <input
                id="equipmentRequirements"
                name="equipmentRequirements"
                type="text"
                value={formData.equipmentRequirements}
                onChange={handleChange}
                placeholder="e.g. Tripods, Strobe lights, Gimbal, Drone"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
              />
            </div>
          </div>

          {/* Row 6: Project Description */}
          <div>
            <label htmlFor="projectDescription" className="block text-xs font-semibold text-zinc-700 mb-1">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows={3}
              required
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Tell us briefly about your creative vision, intended wardrobe/theme, and shooting schedule..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition resize-y"
            />
          </div>

          {/* Row 7: Additional Notes */}
          <div>
            <label htmlFor="additionalNotes" className="block text-xs font-semibold text-zinc-700 mb-1">
              Additional Notes (Optional)
            </label>
            <input
              id="additionalNotes"
              name="additionalNotes"
              type="text"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="e.g. Green room requirement, meal packages for crew..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A46D] transition"
            />
          </div>

          {/* Notice near button */}
          <div className="pt-2 pb-1">
            <p className="text-[11px] text-zinc-500 italic leading-relaxed">
              * Notice: Submitting this form is an enquiry only. Your shoot is not booked or approved until the resort confirms the arrangements.
            </p>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-bold shadow-lg hover:scale-[1.01] transition-transform flex items-center justify-center space-x-2 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SUBMIT SHOOT ENQUIRY</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

