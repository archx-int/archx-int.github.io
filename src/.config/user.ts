import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'archx',
    subtitle: 'archx.info',
    author: 'archx',
    description: 'archx.info',
    website: 'https://archx.info/',
    socialLinks: [
      { name: 'github', href: 'https://github.com/archx-int' },
      { name: 'rss', href: '/atom.xml' },
    ],
  },

  appearance: {
    locale: 'en-us',
    themeStyle: 'dark',
  },
}
