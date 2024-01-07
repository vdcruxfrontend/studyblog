import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const organizationName = "vdcruxfrontend";
const projectName = "studyblog";

const config: Config = {
  title: "스터디 블로그",
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
    defaultLocale: "ko",
    locales: ["ko"]
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          blogSidebarTitle: "All posts",
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
      title: "VDCrux 프론트팀 스터디 블로그",
      items: [
        { to: "/blog", label: "블로그", position: "left" },
        {
          href: `https://github.com/${organizationName}/${projectName}/`,
          label: "GitHub",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository"
        }
      ]
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} 브이디크럭스 프론트엔드 팀`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java", "kotlin"]
    }
  } satisfies Preset.ThemeConfig
};

export default config;
