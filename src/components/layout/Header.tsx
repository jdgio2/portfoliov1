import logo from "../../assets/logo.svg";
export default function Header() {
  return (
    <section id="header" className="sticky top-0 left-0 right-0 z-50">
      <nav className="justify-center md:justify-around items-center p-1 shadow-xs backdrop-blur-lg bg-linear-to-t via-white/50 via-20% from-white/20 to-white/100 flex flex-row">
        <a
          href="#"
          className="md:block text-lg font-semibold"
          aria-label="Logo"
        >
          <img
            src={logo}
            className="w-16 h-16 justify-self-center"
            alt="JD's Logo"
          />
        </a>
        <a href="#intro" className="hidden md:block text-lg font-semibold">
          Intro
        </a>
        <a href="#skills" className="hidden md:block text-lg font-semibold">
          Skills
        </a>
        <a href="#projects" className="hidden md:block text-lg font-semibold">
          Projects
        </a>
        <a href="#contact" className="hidden md:block text-lg font-semibold">
          Contact
        </a>
      </nav>
    </section>
  );
}
