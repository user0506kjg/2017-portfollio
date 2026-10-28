/**
 * The shape every locale file must satisfy.
 *
 * Typing it this way means a missing translation is a build error rather than
 * an English string quietly leaking onto a Portuguese page.
 */

export const locales = ['en', 'pt', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export interface LocaleMeta {
  /** Value for <html lang>. */
  htmlLang: string;
  /** Name shown in the switcher, written in that language. */
  label: string;
  /** Short code shown on narrow screens. */
  short: string;
  /** ISO 3166-1 alpha-2 of the flag to draw. */
  flag: 'GB' | 'BR' | 'ES';
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { htmlLang: 'en', label: 'English', short: 'EN', flag: 'GB' },
  pt: { htmlLang: 'pt-BR', label: 'Português', short: 'PT', flag: 'BR' },
  es: { htmlLang: 'es', label: 'Español', short: 'ES', flag: 'ES' },
};

export interface SkillGroup {
  icon: string;
  title: string;
  blurb: string;
  items: string[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  icon: string;
}

export interface IconCard {
  icon: string;
  title: string;
  text: string;
}

export interface ProcessStep extends IconCard {
  step: string;
}

export interface StatEntry {
  value: number;
  suffix: string;
  label: string;
}

export interface ProjectText {
  title: string;
  description: string;
  alt: string;
  /** Only on the six employer-linked cards: the role the work came from. */
  source?: string;
}

export interface Content {
  profile: {
    name: string;
    initial: string;
    given: string;
    family: string;
    role: string;
    roleFull: string;
    tagline: string;
    heroLead: string;
    heroRest: string;
    heroBlurb: string;
    summary: string;
    summaryCont: string;
  };

  nav: { home: string; about: string; expertise: string; projects: string };

  ui: {
    skipToContent: string;
    languageLabel: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    backToTop: string;
    availability: string;
    viewWork: string;
    myBackground: string;
    allWork: string;
    fullBackground: string;
    exploreExpertise: string;
    seeTheWork: string;
    seeMyWork: string;
    myExpertise: string;
    backHome: string;
    current: string;
    opensInNewTab: string;
    opensEmployerSite: string;
    footerExplore: string;
    footerMore: string;
    rightsReserved: string;
    nothingHereTitle: string;
    nothingHereBody: string;

    // home
    homeAboutLead: string;
    homeAboutAccent: string;
    homeApproachHeading: string;
    homeCoreStack: string;
    homeUniversity: string;
    homeDegrees: string;
    homeWorkLead: string;
    homeWorkAccent: string;
    homeWorkSubtitle: string;
    homeCtaLeadAccent: string;
    homeCtaLeadRest: string;
    homeCtaBody: string;
    homeWhyLead: string;
    homeWhyAccent: string;
    homeWhySubtitle: string;

    // about
    aboutEyebrow: string;
    aboutApproachLead: string;
    aboutApproachAccent: string;
    aboutPragmatic: string;
    aboutSpecialise: string;
    aboutSpecialiseItems: string[];
    aboutExperienceLead: string;
    aboutExperienceAccent: string;
    aboutExperienceSubtitle: string;
    aboutEducationAccent: string;
    aboutCtaLead: string;
    aboutCtaAccent: string;
    aboutCtaBody: string;

    // expertise
    expertiseLead: string;
    expertiseAccent: string;
    expertiseSubtitle: string;
    processLead: string;
    processAccent: string;
    processSubtitle: string;
    expertiseCtaLead: string;
    expertiseCtaAccent: string;
    expertiseCtaBody: string;

    // projects
    projectsLead: string;
    projectsAccent: string;
    projectsSubtitle: string;
    projectsCtaLead: string;
    projectsCtaAccent: string;
    projectsCtaBody: string;

    // 404
    notFoundTitle: string;
    notFoundHeading: string;
    notFoundBody: string;
  };

  meta: {
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    expertiseTitle: string;
    expertiseDescription: string;
    projectsTitle: string;
    projectsDescription: string;
  };

  stats: StatEntry[];
  coreStack: string[];
  skillGroups: SkillGroup[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  differentiators: IconCard[];
  process: ProcessStep[];

  /** Filter tab labels, keyed by the tag in projectStructure. */
  filters: Record<string, string>;
  /** Card badge text, keyed by `categoryKey` in projectStructure. */
  categories: Record<string, string>;
  /** Card words, keyed by `slug` in projectStructure. */
  projects: Record<string, ProjectText>;
}
