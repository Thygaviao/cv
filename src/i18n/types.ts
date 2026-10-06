export type Locale = 'ru' | 'en';

export interface SeoData {
  title: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  focus: string;
  period: string;
  description: string;
  achievements: string[];
  responsibilities: string[];
  tech: string[];
}

export interface EngineeringCase {
  title: string;
  problem: string;
  work: string;
  result: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface LanguageProficiency {
  language: string;
  level: string;
}

export interface Translations {
  locale: Locale;
  seo: SeoData;
  header: {
    name: string;
    role: string;
    nav: NavItem[];
    themeToggleAria: string;
    languageToggleAria: string;
  };
  hero: {
    greetingBadge: string;
    openToWorkStatus: string;
    name: string;
    title: string;
    subtitle: string;
    descriptionParagraphs: string[];
    cta: {
      viewExperience: string;
      downloadCv: string;
      recommendationLetter: string;
      cvUnavailableTooltip: string;
      linkedIn: string;
      telegram: string;
    };
  };
  metrics: {
    sectionTitle: string;
    items: MetricItem[];
  };
  about: {
    sectionTitle: string;
    paragraphs: string[];
    keyHighlightsTitle: string;
    keyHighlights: string[];
  };
  experience: {
    sectionTitle: string;
    achievementsLabel: string;
    responsibilitiesLabel: string;
    techStackLabel: string;
    items: ExperienceItem[];
  };
  cases: {
    sectionTitle: string;
    problemLabel: string;
    solutionLabel: string;
    resultLabel: string;
    items: EngineeringCase[];
  };
  skills: {
    sectionTitle: string;
    primaryTitle: string;
    primarySkills: string[];
    groups: SkillGroup[];
  };
  languages: {
    sectionTitle: string;
    items: LanguageProficiency[];
  };
  contact: {
    sectionTitle: string;
    description: string;
    buttons: {
      email: string;
      telegram: string;
      linkedIn: string;
      downloadCv: string;
      recommendationLetter: string;
    };
  };
  footer: {
    name: string;
    role: string;
    allRightsReserved: string;
    backToTop: string;
  };
}
