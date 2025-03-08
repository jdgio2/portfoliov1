export const validIcons = {
    html5: {
        name: "HTML5",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        iconType: "full-stack",
    },
    css3: {
        name: "CSS3",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        iconType: "full-stack",
    },
    javascript: {
        name: "JavaScript",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        iconType: "full-stack",
    },
    typescript: {
        name: "TypeScript",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        iconType: "full-stack",
    },
    react: {
        name: "React",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        iconType: "full-stack",
    },
    tailwind: {
        name: "Tailwind",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        iconType: "full-stack",
    },
    nodejs: {
        name: "Node.js",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        iconType: "full-stack",
    },
    express: {
        name: "Express",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        iconType: "full-stack",
    },
    figma: {
        name: "Figma",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        iconType: "full-stack",
    },
    postgresql: {
        name: "PostgreSQL",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        iconType: "full-stack",
    },
    mysql: {
        name: "MySQL",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        iconType: "full-stack",
    },
    docker: {
        name: "Docker",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        iconType: "full-stack",
    },
    git: {
        name: "Git",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        iconType: "full-stack",
    },
    axios: {
        name: "Axios",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
        iconType: "full-stack",
    },
    bootstrap: {
        name: "Bootstrap",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        iconType: "full-stack",
    },
    postman: {
        name: "Postman",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        iconType: "full-stack",
    },
    rust: {
        name: "Rust",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
        iconType: "other",
    },
    cplusplus: {
        name: "C++",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        iconType: "other",
    },
    python: {
        name: "Python",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        iconType: "other",
    },
    playwright: {
        name: "Playwright",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
        iconType: "other",
    },
    linux: {
        name: "Linux",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        iconType: "other",
    },
} as const;

export type IconKey = keyof typeof validIcons;
