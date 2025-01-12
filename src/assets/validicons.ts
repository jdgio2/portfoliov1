export const validIcons = {
  html5: {
    name: "HTML5",
    className: "devicon-html5-plain colored",
  },
  css3: {
    name: "CSS3",
    className: "devicon-css3-plain colored",
  },
  javascript: {
    name: "JavaScript",
    className: "devicon-javascript-plain colored",
  },
  typescript: {
    name: "TypeScript",
    className: "devicon-typescript-plain colored",
  },
  react: {
    name: "React",
    className: "devicon-react-plain colored",
  },
  nodejs: {
    name: "Node.js",
    className: "devicon-nodejs-plain-wordmark colored",
  },
  express: {
    name: "Express",
    className: "devicon-express-original colored",
  },
  git: {
    name: "Git",
    className: "devicon-git-plain colored",
  },
  postgresql: {
    name: "PostgreSQL",
    className: "devicon-postgresql-plain colored",
  },
} as const;

export type IconKey = keyof typeof validIcons;
