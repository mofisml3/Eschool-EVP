/**
 * Date / time formatting helpers. All MVP output uses Western digits
 * and the Gregorian calendar per docs/00-editorial-principles.md.
 */

const dateFormatter = new Intl.DateTimeFormat('ar-IQ-u-nu-latn-ca-gregory', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat('ar-IQ-u-nu-latn-ca-gregory', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

export function formatTime(iso: string): string {
  return timeFormatter.format(new Date(iso));
}

export function formatDateTime(iso: string): string {
  const date = new Date(iso);
  return `${dateFormatter.format(date)} — ${timeFormatter.format(date)}`;
}
