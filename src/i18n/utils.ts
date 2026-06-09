import { labels } from "./ui";

type Lang = keyof typeof labels

export function t(lang: Lang, key: string): string {
  const translation = labels[lang]
  return key.split('.').reduce((obj: any, k) => obj?.[k], translation) ?? key
}

export function getLang(locale: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'es'
}