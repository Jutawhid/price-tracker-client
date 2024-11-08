import { DateTime } from "luxon";

export const dateFormatter = "dd/mm/yy";
export const currentDate = new Date();
export const oneMonthEarlier = new Date(currentDate);
oneMonthEarlier.setMonth(currentDate.getMonth() - 1);

export function dateFormatWithTime(date: Date | string): string {
  return DateTime.fromISO(String(date), { setZone: true })
    .setZone("local", { keepLocalTime: true })
    .toFormat("dd-MMM-yyyy, hh:mm a");
}

export function dateFormat(date: Date | string): string {
  return DateTime.fromISO(String(date), { setZone: true })
    .setZone("local", { keepLocalTime: true })
    .toFormat("dd-MMM-yyyy");
}

export function timeFormat(date: Date | string): string {
  return DateTime.fromISO(String(date), { setZone: true })
    .setZone("local", { keepLocalTime: true })
    .toFormat("hh:mm a");
}
