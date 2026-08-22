"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING_EVENT } from "../lib/eventConfig";
import {
  getGoogleCalendarUrl,
  generateIcsContent,
  downloadIcsFile,
} from "../lib/calendarUtils";
import { useLanguage } from "../context/LanguageContext";


export default function AddToCalendar() {
  const { t } = useLanguage();
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState<number | null>(60);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showReminderModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showReminderModal]);

  // Direct Google Calendar export
  const handleGoogleCalendar = () => {
    const url = getGoogleCalendarUrl(WEDDING_EVENT);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Direct Apple / ICS Calendar download
  const handleAppleCalendar = () => {
    const icsContent = generateIcsContent(WEDDING_EVENT);
    downloadIcsFile(WEDDING_EVENT.filename, icsContent);
  };

  // Export with selected reminder
  const handleExportWithReminder = (type: "google" | "apple") => {
    const minutes = selectedReminder ?? 60;
    if (type === "google") {
      const url = getGoogleCalendarUrl(WEDDING_EVENT, minutes);
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      const icsContent = generateIcsContent(WEDDING_EVENT, minutes);
      downloadIcsFile(WEDDING_EVENT.filename, icsContent);
    }
    setShowReminderModal(false);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <div className="section-content relative z-10 mt-5 sm:mt-8 flex w-full max-w-[340px] xs:max-w-[360px] sm:max-w-md lg:max-w-4xl flex-col items-center text-center px-3 sm:px-0">
      {/* Header */}
      <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3">
        <span className="hairline hidden w-12 bg-emerald-regal/40 sm:inline-block" />
        <span className="hidden sm:inline-block text-xs font-medium uppercase tracking-widest2 text-emerald-regal">
          {t("saveHeaderFull")}
        </span>
        <span className="flex sm:hidden flex-col items-center leading-tight gap-0.5 text-[11px] font-medium uppercase tracking-wider text-emerald-regal">
          <span>{t("saveHeaderLine1")}</span>
          <span>{t("saveHeaderLine2")}</span>
        </span>
        <span className="hairline hidden w-12 bg-emerald-regal/40 sm:inline-block" />
      </div>

      {/* Action Controls: 2-column grid on mobile & tablet, 3-flex row on desktop */}
      <div className="grid w-full grid-cols-2 gap-x-[0.25rem] gap-y-[0.5rem] sm:gap-x-[0.5rem] sm:gap-y-[0.75rem] lg:flex lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:gap-6">
        {/* Google Calendar Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGoogleCalendar}
          className="group relative inline-flex h-11 sm:h-12 w-full lg:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-gold/40 bg-[#F5EEDF] px-3 sm:px-5 py-2.5 sm:py-3.5 text-[10.5px] xs:text-[11px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal shadow-sm transition-all hover:border-gold hover:bg-emerald-regal hover:text-gold-bright whitespace-nowrap"
        >
          <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
          </svg>
          <span>{t("googleBtn")}</span>
        </motion.button>

        {/* Apple Calendar Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleAppleCalendar}
          className="group relative inline-flex h-11 sm:h-12 w-full lg:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-gold/40 bg-[#F5EEDF] px-3 sm:px-5 py-2.5 sm:py-3.5 text-[10.5px] xs:text-[11px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal shadow-sm transition-all hover:border-gold hover:bg-emerald-regal hover:text-gold-bright whitespace-nowrap"
        >
          <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.12-.98.04-2.19.66-2.88 1.47-.62.72-1.16 1.88-1.01 3.01 1.1.09 2.23-.54 2.9-1.36z" />
          </svg>
          <span>{t("appleBtn")}</span>
        </motion.button>

        {/* Set a Reminder Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowReminderModal(true)}
          className="col-span-2 lg:col-span-1 group relative inline-flex h-11 sm:h-12 w-full lg:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-gold/40 bg-emerald-regal px-3 sm:px-5 py-2.5 sm:py-3.5 text-[10.5px] xs:text-[11px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-gold-bright shadow-sm transition-all hover:scale-102 whitespace-nowrap"
        >
          <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current text-gold-bright shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
          <span>{t("reminderBtn")}</span>
        </motion.button>
      </div>

      {/* Confirmation Notification Toast */}
      {copiedNotification && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-3 font-display text-sm italic font-medium text-emerald-regal"
        >
          {t("toastCreated")}
        </motion.p>
      )}

      {/* Viewport-level Modal Rendered via React Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {showReminderModal && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
                {/* Full-screen Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowReminderModal(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs"
                />

                {/* Dialog Content Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  className="relative z-10 w-full max-w-md rounded-t-[60px] rounded-b-3xl border border-gold/40 bg-[#F5EEDF] p-6 sm:p-8 text-center shadow-2xl"
                >
                  <button
                    onClick={() => setShowReminderModal(false)}
                    className="absolute right-5 top-5 text-emerald-regal/70 hover:text-emerald-regal font-medium text-xl"
                    aria-label="Close"
                  >
                    &times;
                  </button>

                  <span className="text-[10px] font-medium uppercase tracking-widest2 text-bronze">
                    {t("customAlert")}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold italic text-emerald-regal sm:text-3xl">
                    {t("modalTitle")}
                  </h3>
                  <p className="mt-2 text-xs font-normal text-charcoal/80">
                    {t("modalDesc")}
                  </p>

                  {/* Options */}
                  <div className="my-6 grid grid-cols-2 gap-3">
                    {[
                      { label: t("opt1Day"), minutes: 1440 },
                      { label: t("opt3Hours"), minutes: 180 },
                      { label: t("opt1Hour"), minutes: 60 },
                      { label: t("opt30Mins"), minutes: 30 },
                    ].map((opt) => (
                      <button
                        key={opt.minutes}
                        onClick={() => setSelectedReminder(opt.minutes)}
                        className={`rounded-2xl border px-3 py-3 text-xs font-medium transition-all ${selectedReminder === opt.minutes
                          ? "border-gold bg-emerald-regal text-gold-bright shadow-sm"
                          : "border-gold/30 bg-white/40 text-emerald-regal hover:border-gold/60"
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                      onClick={() => handleExportWithReminder("google")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-emerald-regal px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-gold-bright shadow-sm hover:scale-102"
                    >
                      Google Calendar
                    </button>
                    <button
                      onClick={() => handleExportWithReminder("apple")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-[#E0D4B8] px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-emerald-regal shadow-sm hover:bg-emerald-regal hover:text-gold-bright"
                    >
                      Apple Calendar (.ics)
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
