const Header = () => {
  return (
    <>
      <header className="px-10 py-5 ">
        <nav className="flex items-center justify-between font-mono text-primary-dark">
          {/* <!-- nav logo --> */}
          <div className="bg-primary-light rounded-sm">
            <p className="bg-primary-bg  rounded-sm hover:-translate-y-1 hover:-translate-x-1 transition ease-in-out ">
              {`<Mang.dev/>`}
            </p>
          </div>

          {/* <!-- nav menu items and button --> */}
          <div className="flex items-center gap-5 ">
            <ol className=" gap-6 text-primary-dark hidden md:flex">
              <li>
                <a href="#about" className="hover:text-primary-light">
                  About
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-primary-light">
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-primary-light">
                  Projects
                </a>
              </li>
            </ol>
            <div className="bg-primary-light rounded">
              <button className="py-1 px-4 border-2 rounded border-primary-light hover:-translate-y-1 hover:-translate-x-1 bg-primary-bg transition ease-in-out font-mono">
                <a href="#contact"> Contact </a>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
