// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ignite🔥',
  tagline: 'Welcome to the Spark Ignite Handbook! This is your go-to guide for everything you need to know about our dynamic company. Dive in to discover valuable insights and essential guidelines tailored to help you shine.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ignite.spark.love',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Spark-love', // Usually your GitHub org/user name.
  projectName: 'Ignite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
          editUrl:
            'https://github.com/Spark-love/Ignite/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Spark-love/Ignite/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/spark-social-card.jpg',
      navbar: {
        title: 'Ignite',
        logo: {
          alt: 'Spark Logo',
          src: 'img/spark-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Handbook',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Spark-love/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About Spark',
                to: 'https://spark.love/careers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/spark.love',
              },
              {
                label: 'TikTok',
                href: 'https://tiktok.com/spark.love',
              },
              {
                label: 'X(Twitter)',
                href: 'https://twitter.com/spark.loves',
              },
            ],
          },
          {
            title: 'Join Spark',
            items: [
              {
                label: 'Careers',
                to: 'https://spark.love/careers',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Club Spark Pte Ltd.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
