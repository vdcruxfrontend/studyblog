import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
const organizationName = "vdcruxfrontend";
const projectName = "studyblog";
const config: Config = {
  title: "브이디크럭스 프론트팀 스터디 블로그",
  tagline: "브이디크럭스 프론트 스터디 블로그입니다.",
  favicon: "img/favicon.ico",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  deploymentBranch: "gh-pages",
  organizationName,
  projectName,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial"
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: `https://github.com/${organizationName}/${projectName}/`,
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} 브이디크럭스 프론트엔드 팀`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
