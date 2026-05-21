export interface Service {
  title: string
  description: string
}

export interface SocialLink {
  platform: string
  url: string
}

export interface SiteContent {
  meta: {
    title: string
    description: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  about: {
    text: string
    hasPhoto: boolean
  }
  services: Service[]
  contacts: {
    phone?: string
    email?: string
    telegram?: string
    address?: string
    socials: SocialLink[]
  }
  web3formsKey: string
}

// Заполни этот объект данными из SPEC.md
export const content: SiteContent = {
  meta: {
    title: '[CLIENT_NAME] — [CLIENT_SPHERE]',
    description: '[META_DESCRIPTION]',
  },
  hero: {
    title: '[HERO_TITLE]',
    subtitle: '[HERO_SUBTITLE]',
    cta: 'Написать',
  },
  about: {
    text: '[ABOUT_TEXT]',
    hasPhoto: false,
  },
  services: [
    { title: '[SERVICE_1]', description: '[DESC_1]' },
    { title: '[SERVICE_2]', description: '[DESC_2]' },
    { title: '[SERVICE_3]', description: '[DESC_3]' },
  ],
  contacts: {
    phone: undefined,
    email: undefined,
    telegram: undefined,
    address: undefined,
    socials: [],
  },
  web3formsKey: '[WEB3FORMS_KEY]',
}
