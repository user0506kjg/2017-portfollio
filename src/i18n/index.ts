import { projectStructure, type ProjectStructure } from '../data/projects';
import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import {
  defaultLocale,
  localeMeta,
  locales,
  type Content,
  type Locale,
  type ProjectText,
} from './types';

export { defaultLocale, localeMeta, locales };
export type { Content, Locale };

const bundles: Record<Locale, Content> = { en, pt, es };

export const getContent = (lang: Locale): Content => bundles[lang];

/**
 * Prefix a root-relative path with the locale.
 *
 * English is served unprefixed at the site root, so `/about` stays `/about`
 * while Portuguese becomes `/pt/about`. Pass the paths through here rather
 * than hand-writing them, or a link will quietly drop the visitor back into
 * English halfway through the site.
 */
export function localePath(lang: Locale, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (lang === defaultLocale) return clean ? `/${clean}` : '/';
  return clean ? `/${lang}/${clean}` : `/${lang}/`;
}

/**
 * One route per locale for a `[...lang]` page.
 *
 * The default locale maps to an undefined rest param, which Astro renders at
 * the bare path — so English stays at `/about` while the others get a prefix.
 */
export function localeStaticPaths() {
  return locales.map((lang) => ({
    params: { lang: lang === defaultLocale ? undefined : lang },
    props: { lang },
  }));
}

/** The same page in every locale, for the switcher and for hreflang tags. */
export function alternates(path = '/') {
  return locales.map((lang) => ({
    lang,
    ...localeMeta[lang],
    href: localePath(lang, path),
  }));
}

export interface LocalisedProject extends ProjectStructure {
  category: string;
  title: string;
  description: string;
  alt: string;
  source?: string;
}

/**
 * Join the shared structure to the locale's words.
 *
 * A slug with no entry in the locale file throws at build time instead of
 * rendering a blank card — the whole point of keeping the two halves keyed.
 */
export function getProjects(lang: Locale): LocalisedProject[] {
  const content = getContent(lang);
  return projectStructure.map((p) => {
    const text: ProjectText | undefined = content.projects[p.slug];
    if (!text) {
      throw new Error(`Missing ${lang} text for project "${p.slug}" (src/i18n/${lang}.ts)`);
    }
    const category = content.categories[p.categoryKey];
    if (!category) {
      throw new Error(`Missing ${lang} label for category "${p.categoryKey}"`);
    }
    return {
      ...p,
      category,
      title: text.title,
      description: text.description,
      alt: text.alt,
      // Employer cards take their role line from the locale; everything else
      // keeps the domain or store name held in the structure.
      source: p.sourceKind === 'employer' ? text.source : p.source,
    };
  });
}

/** Filter tabs, in a fixed order, labelled for the locale. */
export function getFilters(lang: Locale) {
  const { filters } = getContent(lang);
  const order = ['all', 'ai', 'backend', 'data', 'ecommerce', 'wordpress', 'android', 'fullstack'];
  return order.map((key) => ({ key, label: filters[key] }));
}
