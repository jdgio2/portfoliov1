export default function Header() {
  return (
    <section
      id="header"
      className="p-3 bg-onahau-200 sticky top-0 left-0 right-0 shadow-md z-50"
    >
      <nav className="justify-center flex flex-row space-x-5 mx-3">
        <h1 className="font-bold text-xl">Logo</h1>
        <a href="#" className="hidden md:block text-lg font-semibold">
          Hero
        </a>
        <a href="#" className="hidden md:block text-lg font-semibold">
          Intro
        </a>
        <a href="#" className="hidden md:block text-lg font-semibold">
          Projects
        </a>
        <a href="#" className="hidden md:block text-lg font-semibold">
          Skills
        </a>
        <a href="#" className="hidden md:block text-lg font-semibold">
          Contact
        </a>
      </nav>
    </section>
  );
}
