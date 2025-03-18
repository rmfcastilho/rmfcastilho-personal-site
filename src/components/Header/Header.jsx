const Header = () => {
  return (
    <header className="h-16 w-full flex justify-between items-center sticky top-0">
      <h1 className="text-2xl font-bold">
        Rodrigo M. F. Castilho | Software Engineer
      </h1>

      <nav className="hidden sm:flex">
        <ul className="flex space-x-4">
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="/experience-timeline">CV in a Timeline</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
