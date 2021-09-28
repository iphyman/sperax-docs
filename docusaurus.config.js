// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Sperax USD docs',
  tagline: 'Sperax documentation and guides',
  url: 'https://docs.sperax.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Sperax', // Usually your GitHub org/user name.
  projectName: 'Sperax-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: "protocol",
          routeBasePath: "protocol/",
          // Please change this to your repo.
          editUrl: 'https://github.com/iphyman/sperax-docs/tree/main/',
          includeCurrentVersion: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "SDK",
        path: "sdk",
        routeBasePath: "sdk/",
        sidebarPath: require.resolve("./sdkSidebars.js"),
        includeCurrentVersion: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/twitter_card_bg.jpg",
      prism: {
        additionalLanguages: ["solidity"],
      },
      algolia: {
        apiKey: "Your_algolia_API_key",
        indexName: "Your_Index_name",
        appId: "Your_app_ID",
      },
      navbar: {
        title: 'Sperax Docs',
        logo: {
          alt: 'Sperax Logo',
          src: 'img/sperax_icon_black.svg',
        },
        items: [{
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
            // dropdownItemsAfter: [{
            //   to: '/versions',
            //   label: 'All versions'
            // }],
            docsPluginId: "default",
            className: "persistent",
          },
          {
            to: "/protocol/reference/smart-contracts",
            label: "Contracts",
            position: "left",
            className: "V1_active"
          },
          {
            to: "/sdk/introduction",
            label: "SDK",
            position: "left",
            className: "V1_active"
          },
          {
            to: "/sdk/Subgraph",
            label: "Subgraph (API)",
            position: "left",
            className: "V1_active"
          },
          {
            to: "/protocol/concepts/governance/overview",
            label: "Governance",
            position: "left",
            className: "V1_active"
          },
          {
            to: "https://github.com/Sperax/USDs-Whitepaper/blob/main/USDs_Whitepaper.pdf",
            label: "Whitepaper",
            position: "right",
            className: "persistent",
          },
          {
            href: "https://github.com/iphyman/sperax-docs",
            label: "GitHub",
            position: "right",
            className: "persistent",
          },
          {
            href: "https://gitcoin.co/hackathon/gr11?org=sperax",
            label: "Bounties",
            position: "right",
            className: "persistent",
          },
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsBefore: [],
            dropdownItemsAfter: [{
              to: "https://my-site.com/help-us-translate",
              label: "Help us translate",
            }, ],
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [{
            title: "Developers",
            items: [{
                label: "Bounties",
                to: "https://gitcoin.co/hackathon/gr11?org=sperax",
              },
              {
                label: "#dev-chat",
                to: "https://discord.gg/bYMNBnj",
              },
              {
                label: "Lifted",
                to: "https://sperax.io/lifted",
              },
              {
                label: "Whitepaper",
                to: "https://github.com/Sperax/USDs-Whitepaper/blob/main/USDs_Whitepaper.pdf",
              },
            ],
          },
          {
            title: "Projects",
            items: [{
                label: "SperaxChain",
                to: "https://github.com/Sperax/SperaxChain",
              },
              {
                label: "BDLS",
                to: "https://github.com/Sperax/bdls",
              },
              {
                label: "USDs-in-progress",
                to: "https://github.com/Sperax/USDs-In-Progress",
              },
            ],
          },
          {
            title: "Resources",
            items: [{
                label: "Home",
                to: "https://sperax.io/",
              },
              {
                label: "ERC20 Block Explorer",
                to: "https://etherscan.io/token/0xb4a3b0faf0ab53df58001804dda5bfc6a3d59008",
              },
              {
                label: "BrandKit",
                to: "https://sperax.io/brandKit",
              },
              {
                label: "Roadmap",
                to: "https://sperax.io/#Timeline"
              },
              {
                label: "Teams",
                to: "https://sperax.io/team"
              },
            ],
          },
          {
            title: "Community",
            items: [{
                label: "Blog",
                to: "https://medium.com/sperax",
              },
              {
                label: "Discord",
                to: "https://discord.gg/bYMNBnj",
              },
              {
                label: "FaceBook",
                to: "https://www.facebook.com/sperax",
              },
              // {
              //   label: "Governance",
              //   to: "https://gov.sperax.io/",
              // },
              {
                label: "Telegram",
                to: "https://twitter.com/sperax_io",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/sperax_io",
              },
            ],
          },
        ],
        copyright: `Sperax Foundation © Sperax ${new Date().getFullYear()} All rights reserved.`,
      },

      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: "\u{263D}",
          lightIcon: "\u{263C}"
        }
      }
    }),
});