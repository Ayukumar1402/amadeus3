import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// NOTE for maintainers: replace `organizationName` / `projectName` / `url`
// below once this repo has a real GitHub home. Everything else works as-is.
const GITHUB_ORG = 'Ayushkumar1402';
const GITHUB_REPO = 'amadeus3';

const config: Config = {
  title: 'Amadeus KB',
  tagline: 'Amadeus command lookup for support agents — built by agents, for agents',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: `https://${GITHUB_ORG}.github.io`,
  baseUrl: `/${GITHUB_REPO}/`,

  organizationName: GITHUB_ORG,
  projectName: GITHUB_REPO,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      'docusaurus-lunr-search',
      {
        excludeRoutes: [],
      },
    ],
  ],

  clientModules: [
    require.resolve('./src/clientModules/searchHotkey.ts'),
    require.resolve('./src/clientModules/scrollReveal.ts'),
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;700&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/tree/main/`,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          admonitions: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Amadeus KB',
      logo: {
        alt: 'Amadeus KB — split-flap board mark',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'topicsSidebar',
          position: 'left',
          label: 'Browse topics',
        },
        {
          to: '/error-codes',
          label: 'Error codes',
          position: 'left',
        },
        {
          href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/blob/main/CONTRIBUTING.md`,
          label: 'Contribute',
          position: 'right',
        },
        {
          href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge base',
          items: [
            {label: 'All topics', to: '/'},
            {label: 'Error codes', to: '/error-codes'},
            {label: 'PNR creation', to: '/pnr-creation'},
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'How to add a topic',
              href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/blob/main/CONTRIBUTING.md`,
            },
            {
              label: 'Open an issue',
              href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/issues/new`,
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'GitHub', href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}`},
            {label: 'License (MIT)', href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/blob/main/LICENSE`},
          ],
        },
      ],
      copyright: `Community-maintained, open source under the MIT license. Not affiliated with or endorsed by Amadeus IT Group or Expedia Group.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
