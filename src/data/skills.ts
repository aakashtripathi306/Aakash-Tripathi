import { SiExpress, SiSocketdotio, SiVercel, SiRender } from "react-icons/si";
import { ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";

import JavascriptSvg from "@/public/icons/javascript.svg";

import JavaSvg from "@/public/icons/java.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";

import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

import ViteSvg from "@/public/icons/vite.svg";
import ReactNativeSvg from "@/public/icons/react-native.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";

import MysqlSvg from "@/public/icons/mysql.svg";
// Tools and Tech
import GitSvg from "@/public/icons/git.svg";

import PostmanSvg from "@/public/icons/postman.svg";
import DigitalOceanSvg from "@/public/icons/digitalocean.svg";
export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },

      {
        name: "Javascript",
        icon: JavascriptSvg,
      },

      {
        name: "Java",
        icon: JavaSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },

      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },

      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },

      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "React Native",
        icon: ReactNativeSvg,
      },
      {
        name: "Redux-Toolkit",
        icon: ReduxSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "MYSQL",
        icon: MysqlSvg,
      },
      // {
      //   name: "Prisma",
      //   icon: SiPrisma,
      // },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Digital Ocean",
        icon: DigitalOceanSvg,
      },

      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Render",
        icon: SiRender,
      },
    ],
  },
];
