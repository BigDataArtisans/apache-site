
const versions = require('./versions.json');

module.exports = {
  title: 'Apache YuniKorn',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'apache', // Usually your GitHub org/user name.
  projectName: 'incubator-yunikorn-core', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'introduction',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          path: '../website-1.x/blog',
          editUrl:
              'https://github.com/facebook/docusaurus/edit/master/website-1.x/',
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      hideOnScroll: false,
      title: 'Apache YuniKorn',
      logo: {
        alt: 'YuniKorn Site Logo',
        src: 'img/yunikorn_blue_256.png',
      },
      links: [
        {label: 'Quick Start', to: 'docs/next/introduction', position: 'left'},
        {label: 'Download', to: 'blog', position: 'left'},
        {label: 'Apache', to: 'apache', position: 'left',
          items: [
            {
              label: 'Apache Software Foundation',
              href: 'http://www.apache.org/foundation/how-it-works.html'
            },
            {
              label: 'Apache License',
              href: 'http://www.apache.org/foundation/how-it-works.html'
            },
            {
              label: 'Sponsorship',
              href: 'http://www.apache.org/foundation/how-it-works.html'
            },
            {
              label: 'Assets',
              href: 'http://www.apache.org/foundation/how-it-works.html'
            },
            {
              label: 'Thanks',
              href: 'http://www.apache.org/foundation/how-it-works.html'
            }
          ]
        },
        {label: 'Roadmap', to: 'blog', position: 'left'},
        {
          label: 'Docs',
          to: 'docs', // "fake" link
          position: 'right',
          activeBaseRegex: `docs/(?!next/(support|team|resources))`,
          items: [
            {
              label: versions[0],
              to: 'docs/',
              activeBaseRegex: `docs/(?!${versions.join('|')}|next)`,
            },
            ...versions.slice(1).map((version) => ({
              label: version,
              to: `docs/${version}/`,
            })),
          ],
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'showcase', label: 'Showcase', position: 'left'},
        {
          to: 'docs/next/support',
          label: 'Community',
          position: 'left',
          activeBaseRegex: `docs/next/(support|team|resources)`,
        },
        {
          href: 'https://github.com/apache/incubator-yunikorn-core',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
