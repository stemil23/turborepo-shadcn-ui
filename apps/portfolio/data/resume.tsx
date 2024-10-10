import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Stew \"Stin\" Milne",
  initials: "SM",
  url: "https://stewmilne.id.au",
  location: "Melbourne Australia",
  locationLink: "https://www.google.com/maps/place/melbourne",
  description:
    "Consultant, UI Engineer and full-stack developer working with ReactJS, NextJS AstroJS, NodeJS. ",
  summary:
  " Hello I am very clever",
  
  // " [Linked text](/#link), [Linked text 2](https://www.youtube.com/).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Hono.js",
    "EdgeDB",
    "Postgres",
    "Cloudflare Pages and Workers",
    "Cloudflare Developer Platform",
    "Magic UI",
    "Tailwind CSS",
    "Shadcn/ui",
    "Astro.js",
    "MapBox",
    "Storybook",
    "Design systems",
    "DNS",
    "Information architecture"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "stemil23@gmail.com",
    tel: "+610490100028",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/stemil23",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stewartmilne/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Metabureau",
      href: "https://metabureau.com.au",
      badges: [],
      location: "Remote",
      title: "Consultant and Developer",
      logoUrl: "/atomic.png",
      start: "February 2009",
      end: "June 2022",
      description:
        "Design, development and general consulting services. Drupal development, maintenance and hosting. DNS and email configuration and support. Load testing of applications.",
    },
    {
      company: "Miscellaneous Freelance",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Web Developr",
      logoUrl: "/shopify.svg",
      start: "August 2013",
      end: "December 2019",
      description:
        "Freelance web designer and developer for variosu businesses and agencies.",
    },
    {
      company: "Integrativ",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Senior Consulatnt",
      logoUrl: "/shopify.svg",
      start: "August 2022",
      end: "December 2023",
      description:
        "General support and development tasks primarily related to iMIS member-based association management software. Database manageent, payment processing, analusis, designa nd solution development.",
    },
    {
      company: "REOP Ventures",
      href: "https://reop.com.au",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "REOp (Real Estate: Offmarket & Premarket) was a startup using DrupalCMS as a development platform to real estate marketing.",
    },
    {
      company: "IE",
      href: "https://ie.com.au",
      badges: [],
      location: "Melbourne, Australia",
      title: "Drupal Developer",
      logoUrl: "/splunk.svg",
      start: "January 2012",
      end: "April 2013",
      description:
        "Developer of the first iteration of Swinburne Online education portal. Duties included client consulting, ytheme development, hosting server configuration.",
    },
    {
      company: "MRG Metals",
      href: "https://li.me/",
      badges: [],
      location: "Perth, Western Australia",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Liaison with graphic designer and client to design and develop a Drupal CMS website.",
    },
    {
      company: "Indoor Air Quality",
      href: "https://indoorairqualiry.com.au/",
      badges: [],
      location: "Melbourne, Australia",
      title: "Proprietor",
      logoUrl: "/mitremedia.png",
      start: "May 2018",
      end: "August 2023",
      description:
        "Started an air quality testing and consulting small business.",
    },
    {
      company: "iSelect",
      href: "https://iselect.com.au/",
      badges: [],
      location: "Melbourne, Australia",
      title: "Senior Web Producer",
      logoUrl: "/mitremedia.png",
      start: "November 2005",
      end: "December 2007",
      description:
        "Leading front end web development.",
    },
    {
      company: "Ericsson Australia",
      href: "https://ericcson.com.au/",
      badges: [],
      location: "Melbourne, Australia",
      title: "UI Researcher abnd developer",
      logoUrl: "/mitremedia.png",
      start: "October 2005",
      end: "August 2006",
      description:
        "I pioneered the use of HTML on mobile devices. I provided some leadership within the project ensuring that developers and graophic designers were working in unison to deliver high quality mobile web inferfces. I pioneered the research and prototying stages of teh project. I developed the mobile fun Telstra Protal User Interface.",
    },
    {
      company: "AOT Travel",
      href: "https://ericcson.com.au/",
      badges: [],
      location: "Melbourne, Australia",
      title: "Web Designer and developer",
      logoUrl: "/mitremedia.png",
      start: "September 2005",
      end: "August 2003",
      description:
        "Design and development of multiple websites for tourism marketing and booking brands.",
    },
    {
      company: "AXA Australia",
      href: "https://axa.com.au/",
      badges: [],
      location: "Melbourne, Australia",
      title: "Web Site Administrator",
      logoUrl: "/mitremedia.png",
      start: "July 1998",
      end: "August 1999",
      description:
        "Web site admin including daily publishing of financial information. Content maintenance, photoshop and other tasks as required to ake changes to Axa Australia (formerly National Mutual) websites. ",
    },

  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },

  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },

  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

  ],
} as const;
