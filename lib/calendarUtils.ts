import { EventConfig } from "./eventConfig";

/**
 * Formats a Date object to UTC string format: YYYYMMDDTHHmmssZ
 */
function toIcsUtcString(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

/**
 * Converts local event date & 24h time in Asia/Kolkata (+05:30) to Date object
 */
function parseEventDateTime(dateStr: string, timeStr: string): Date {
  // e.g. "2026-08-29" + "T" + "16:00" + ":00+05:30"
  return new Date(`${dateStr}T${timeStr}:00+05:30`);
}

/**
 * Generates a pre-filled Google Calendar event URL
 */
export function getGoogleCalendarUrl(
  config: EventConfig,
  reminderMinutes?: number
): string {
  const startDate = parseEventDateTime(config.startDate, config.startTime);
  const endDate = parseEventDateTime(config.endDate, config.endTime);

  const startUtc = toIcsUtcString(startDate);
  const endUtc = toIcsUtcString(endDate);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: config.title,
    dates: `${startUtc}/${endUtc}`,
    details: config.description,
    location: config.venue,
    ctz: config.timezone,
  });

  if (reminderMinutes && reminderMinutes > 0) {
    // Add reminder hint in details if supported
    params.set(
      "details",
      `${config.description}\n\n(Reminder set for ${reminderMinutes} minutes before)`
    );
  }

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates RFC 5545 standard .ics file text content
 */
export function generateIcsContent(
  config: EventConfig,
  reminderMinutes?: number
): string {
  const startDate = parseEventDateTime(config.startDate, config.startTime);
  const endDate = parseEventDateTime(config.endDate, config.endTime);

  const startUtc = toIcsUtcString(startDate);
  const endUtc = toIcsUtcString(endDate);
  const stampUtc = toIcsUtcString(new Date());

  const uid = `bais-nishad-wedding-${config.startDate.replace(/-/g, "")}@wedding-invitation`;

  let alarmBlock = "";
  if (reminderMinutes && reminderMinutes > 0) {
    alarmBlock = [
      "BEGIN:VALARM",
      `TRIGGER:-PT${reminderMinutes}M`,
      "ACTION:DISPLAY",
      `DESCRIPTION:Reminder: ${config.title}`,
      "END:VALARM",
    ].join("\r\n");
  }

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Bais & Nishad Wedding//Invitation Website//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${stampUtc}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `SUMMARY:${config.title}`,
    `DESCRIPTION:${config.description}`,
    `LOCATION:${config.venue.replace(/,/g, "\\,")}`,
    "STATUS:CONFIRMED",
    alarmBlock,
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  return lines.join("\r\n");
}

/**
 * Triggers client-side file download for Apple Calendar / .ics files
 */
export function downloadIcsFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();

  document.body.removeChild(anchor);
  setTimeout(() => URL.revokeObjectURL(url), 200);
}
