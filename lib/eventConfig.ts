export interface EventConfig {
  title: string;
  startDate: string; // YYYY-MM-DD
  startTime: string; // HH:mm (24h format)
  endDate: string;   // YYYY-MM-DD
  endTime: string;   // HH:mm (24h format)
  timezone: string;  // e.g. "Asia/Kolkata"
  venue: string;
  description: string;
  filename: string;
}

export const WEDDING_EVENT: EventConfig = {
  title: "Bais & Nishad Wedding",
  startDate: "2026-08-29",
  startTime: "16:00", // 4:00 PM IST
  endDate: "2026-08-29",
  endTime: "22:00",   // 10:00 PM IST
  timezone: "Asia/Kolkata",
  venue: "Vista Convention Centre, Vengad",
  description: "Wedding celebration of Bais & Nishad",
  filename: "bais-nishad-wedding.ics",
};

export const VENUE_DETAILS = {
  name: "Vista Convention Centre, Vengad",
  address: "Vengad, Kolathur, Vengad, Kerala 679338, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vista+Convention+Centre%2C+Vengad%2C+Kolathur%2C+Kerala+679338",
  appleMapsUrl: "https://maps.apple.com/?q=Vista+Convention+Centre%2C+Vengad&address=Vengad%2C+Kolathur%2C+Kerala+679338",
  embedUrl: "https://maps.google.com/maps?q=Vista%20Convention%20Centre%2C%20Vengad&t=&z=14&ie=UTF8&iwloc=&output=embed",
};
