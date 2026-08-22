"use client";

import { useLanguage } from "../context/LanguageContext";
import { Language } from "../lib/translations";
import { motion } from "framer-motion";

const LANGUAGES: { code: Language; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "ml", label: "ML", name: "മലയാളം" },
  { code: "ar", label: "AR", name: "العربية" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-[9990] flex items-center gap-0.5 sm:gap-1 rounded-full border border-gold/40 bg-[#F5EEDF]/90 p-0.5 sm:p-1 shadow-lg backdrop-blur-md transition-all">
      {LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <motion.button
            key={lang.code}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(lang.code)}
            title={lang.name}
            className={`relative flex h-6.5 sm:h-7 items-center justify-center rounded-full px-2 sm:px-2.5 text-[10px] sm:text-[11px] font-medium tracking-wider transition-colors ${
              isActive
                ? "bg-emerald-regal text-gold-bright shadow-sm"
                : "text-emerald-regal hover:bg-emerald-regal/10"
            }`}
          >
            <span>{lang.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
