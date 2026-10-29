export interface CountryPhoneConfig {
  code: string;       // ISO country code e.g. "IN"
  name: string;       // Country name e.g. "India"
  dialCode: string;   // E.g. "+91"
  digits: number;     // Expected/max digits e.g. 10
  format: string;     // Placeholder e.g. "99099 22000"
}

export const COUNTRY_PHONE_CONFIGS: CountryPhoneConfig[] = [
  { code: "IN", name: "India", dialCode: "+91", digits: 10, format: "99099 22000" },
  { code: "US", name: "United States", dialCode: "+1", digits: 10, format: "201 555 0123" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", digits: 10, format: "7911 123456" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", digits: 9, format: "50 123 4567" },
  { code: "CA", name: "Canada", dialCode: "+1", digits: 10, format: "416 555 0199" },
  { code: "AU", name: "Australia", dialCode: "+61", digits: 9, format: "412 345 678" },
  { code: "SG", name: "Singapore", dialCode: "+65", digits: 8, format: "8123 4567" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", digits: 9, format: "50 123 4567" },
  { code: "QA", name: "Qatar", dialCode: "+974", digits: 8, format: "3312 3456" },
  { code: "OM", name: "Oman", dialCode: "+968", digits: 8, format: "9123 4567" },
  { code: "KW", name: "Kuwait", dialCode: "+965", digits: 8, format: "9123 4567" },
  { code: "BH", name: "Bahrain", dialCode: "+973", digits: 8, format: "3612 3456" },
  { code: "DE", name: "Germany", dialCode: "+49", digits: 11, format: "151 12345678" },
  { code: "FR", name: "France", dialCode: "+33", digits: 9, format: "6 12 34 56 78" },
  { code: "IT", name: "Italy", dialCode: "+39", digits: 10, format: "320 123 4567" },
  { code: "ES", name: "Spain", dialCode: "+34", digits: 9, format: "612 345 678" },
  { code: "NL", name: "Netherlands", dialCode: "+31", digits: 9, format: "6 12345678" },
  { code: "CH", name: "Switzerland", dialCode: "+41", digits: 9, format: "79 123 45 67" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", digits: 9, format: "21 123 4567" },
  { code: "ZA", name: "South Africa", dialCode: "+27", digits: 9, format: "71 123 4567" },
  { code: "KE", name: "Kenya", dialCode: "+254", digits: 9, format: "712 345678" },
  { code: "JP", name: "Japan", dialCode: "+81", digits: 10, format: "90 1234 5678" },
  { code: "MY", name: "Malaysia", dialCode: "+60", digits: 10, format: "12 345 6789" },
  { code: "TH", name: "Thailand", dialCode: "+66", digits: 9, format: "81 234 5678" },
  { code: "ID", name: "Indonesia", dialCode: "+62", digits: 11, format: "812 3456 7890" },
  { code: "PH", name: "Philippines", dialCode: "+63", digits: 10, format: "917 123 4567" },
  { code: "BD", name: "Bangladesh", dialCode: "+880", digits: 10, format: "1712 345678" },
  { code: "NP", name: "Nepal", dialCode: "+977", digits: 10, format: "984 1234567" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94", digits: 9, format: "71 234 5678" },
  { code: "RU", name: "Russia", dialCode: "+7", digits: 10, format: "912 345 6789" },
  { code: "BR", name: "Brazil", dialCode: "+55", digits: 11, format: "11 91234 5678" },
  { code: "MX", name: "Mexico", dialCode: "+52", digits: 10, format: "55 1234 5678" },
  { code: "CN", name: "China", dialCode: "+86", digits: 11, format: "138 0013 8000" },
  { code: "KR", name: "South Korea", dialCode: "+82", digits: 10, format: "10 1234 5678" },
  { code: "HK", name: "Hong Kong", dialCode: "+852", digits: 8, format: "9123 4567" },
  { code: "IE", name: "Ireland", dialCode: "+353", digits: 9, format: "85 123 4567" },
  { code: "SE", name: "Sweden", dialCode: "+46", digits: 9, format: "70 123 45 67" },
  { code: "NO", name: "Norway", dialCode: "+47", digits: 8, format: "412 34 567" },
  { code: "DK", name: "Denmark", dialCode: "+45", digits: 8, format: "20 12 34 56" },
  { code: "FI", name: "Finland", dialCode: "+358", digits: 9, format: "40 123 4567" },
  { code: "PL", name: "Poland", dialCode: "+48", digits: 9, format: "512 345 678" },
  { code: "PT", name: "Portugal", dialCode: "+351", digits: 9, format: "912 345 678" },
  { code: "GR", name: "Greece", dialCode: "+30", digits: 10, format: "691 234 5678" },
  { code: "TR", name: "Turkey", dialCode: "+90", digits: 10, format: "532 123 4567" },
  { code: "EG", name: "Egypt", dialCode: "+20", digits: 10, format: "10 1234 5678" },
  { code: "NG", name: "Nigeria", dialCode: "+234", digits: 10, format: "803 123 4567" },
  { code: "GH", name: "Ghana", dialCode: "+233", digits: 9, format: "24 123 4567" },
  { code: "PK", name: "Pakistan", dialCode: "+92", digits: 10, format: "300 1234567" },
  { code: "MU", name: "Mauritius", dialCode: "+230", digits: 8, format: "5251 2345" },
  { code: "IL", name: "Israel", dialCode: "+972", digits: 9, format: "50 123 4567" },
];

export const DEFAULT_COUNTRY = COUNTRY_PHONE_CONFIGS[0]; // India (+91, 10 digits)
