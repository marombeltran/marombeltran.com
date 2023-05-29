import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://marombeltran.com/",
  author: "Marom Beltran",
  desc: "Marom Beltran | Personal Blog",
  title: ">\\marombeltran",
  ogImage: "marombeltran.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 96,
  height: 26,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://twitter.com/marom_beltran",
    linkTitle: `${SITE.title} en Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@marombeltran",
    linkTitle: `${SITE.title} en YouTube`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/marombeltran",
    linkTitle: ` ${SITE.title} en Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marlon-o-beltran-a-526730203/",
    linkTitle: `${SITE.title} en LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mrmbeltran@proton.me",
    linkTitle: `Enviar email a ${SITE.title}`,
    active: true,
  }
];
