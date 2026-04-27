import ar from './ar.json';

const dictionaries = { ar } as const;
export type LocaleId = keyof typeof dictionaries;
export type Dictionary = typeof ar;

let currentLocale: LocaleId = 'ar';

/**
 * MVP is Arabic-only; Phase 2 adds English by importing en.json into
 * `dictionaries` and exposing this setter. Component code never changes.
 */
export function setLocale(locale: LocaleId): void {
  currentLocale = locale;
}

export function getLocale(): LocaleId {
  return currentLocale;
}

/**
 * Resolve a dot-path key against the active dictionary.
 * Returns the key itself (and warns in dev) when missing — keeps the UI
 * rendering rather than throwing during a missing-string regression.
 */
export function t(key: string): string {
  const dict = dictionaries[currentLocale] as unknown as Record<string, unknown>;
  const value = key.split('.').reduce<unknown>(
    (acc, segment) =>
      acc && typeof acc === 'object'
        ? (acc as Record<string, unknown>)[segment]
        : undefined,
    dict,
  );

  if (typeof value !== 'string') {
    if (import.meta.env.DEV) {
      console.warn(`[i18n] Missing key: ${key}`);
    }
    return key;
  }

  return value;
}
