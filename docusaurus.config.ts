import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Vecmocon ERP Implementation',
  tagline: 'Complete ERPNext Implementation Guide for EV Parts Manufacturing',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://vecmocon-erp-docs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'atulgen', // Usually your GitHub org/user name.
  projectName: 'vecmocon-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Vecmocon ERP',
      logo: {
        alt: 'Vecmocon Technologies Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'erpSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/atulgen/vecmocon-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/',
            },
            {
              label: 'Process Summary',
              to: '/docs/process_summary',
            },
            {
              label: 'Implementation Plan',
              to: '/docs/implementation_plan',
            },
          ],
        },
        {
          title: 'Departments',
          items: [
            {
              label: 'Sales',
              to: '/docs/sales_mappings/',
            },
            {
              label: 'Finance',
              to: '/docs/finance_mappings/',
            },
            {
              label: 'Production',
              to: '/docs/production_mappings/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'ERP Scope',
              to: '/docs/erp_scope_of_work',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/atulgen/vecmocon-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vecmocon Technologies. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
