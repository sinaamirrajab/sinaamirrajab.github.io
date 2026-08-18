import { siteConfig } from "@/lib/site";

export function parseDateOnly(value: string) {
  return new Date(`${value}T00:00:00.000Z`);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat(siteConfig.locale, {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(parseDateOnly(value));
}

export function isFutureDate(value: string, now = new Date()) {
  return parseDateOnly(value).getTime() > now.getTime();
}
