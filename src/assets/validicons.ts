export const validIcons = {
  html5: {
    name: "HTML5",
    className: "devicon-html5-plain colored",
    iconType: "full-stack",
  },
  css3: {
    name: "CSS3",
    className: "devicon-css3-plain colored",
    iconType: "full-stack",
  },
  javascript: {
    name: "JavaScript",
    className: "devicon-javascript-plain colored",
    iconType: "full-stack",
  },
  typescript: {
    name: "TypeScript",
    className: "devicon-typescript-plain colored",
    iconType: "full-stack",
  },
  react: {
    name: "React",
    className: "devicon-react-plain colored",
    iconType: "full-stack",
  },
  tailwind: {
    name: "Tailwind",
    className: "devicon-tailwindcss-original colored",
    iconType: "full-stack",
  },
  nodejs: {
    name: "Node.js",
    className: "devicon-nodejs-plain-wordmark colored",
    iconType: "full-stack",
  },
  express: {
    name: "Express",
    className: "devicon-express-original colored",
    iconType: "full-stack",
  },
  azure: {
    name: "Azure",
    className: "devicon-azure-plain colored",
    iconType: "full-stack",
  },
  postgresql: {
    name: "PostgreSQL",
    className: "devicon-postgresql-plain colored",
    iconType: "full-stack",
  },
  mysql: {
    name: "MySQL",
    className: "devicon-mysql-plain colored",
    iconType: "full-stack",
  },
  docker: {
    name: "Docker",
    className: "devicon-docker-plain colored",
    iconType: "full-stack",
  },
  git: {
    name: "Git",
    className: "devicon-git-plain colored",
    iconType: "full-stack",
  },
  axios: {
    name: "Axios",
    className: "devicon-axios-plain colored",
    iconType: "full-stack",
  },
  bootstrap: {
    name: "Bootstrap",
    className: "devicon-bootstrap-plain colored",
    iconType: "full-stack",
  },
  postman: {
    name: "Postman",
    className: "devicon-postman-plain colored",
    iconType: "full-stack",
  },
  rust: {
    name: "Rust",
    className: "devicon-rust-plain colored",
    iconType: "other",
  },
  cplusplus: {
    name: "C++",
    className: "devicon-cplusplus-plain colored",
    iconType: "other",
  },
  python: {
    name: "Python",
    className: "devicon-python-plain colored",
    iconType: "other",
  },
  playwright: {
    name: "Playwright",
    className: "devicon-playwright-plain colored",
    iconType: "other",
  },
  linux: {
    name: "Linux",
    className: "devicon-linux-plain colored",
    iconType: "other",
  },
} as const;

export type IconKey = keyof typeof validIcons;
