const Header = () => {
  return (
    <>
      <header className="px-10 py-5 ">
        <nav className="flex items-center justify-between font-mono text-primary-default">
          {/* <!-- nav logo --> */}
          <div className="rounded-sm bg-primary-light">
            <p className="transition ease-in-out rounded-sm bg-primary-bg hover:-translate-y-1 hover:-translate-x-1 ">
              {`<Mang.dev/>`}
            </p>
          </div>

          {/* <!-- nav menu items and button --> */}
          <div className="flex items-center gap-5 ">
            <ol className="hidden gap-6 text-primary-default md:flex">
              <li>
                <a href="#about" className="hover:text-primary-darkText">
                  About
                </a>
              </li>

              <li>
                <a href="#works" className="hover:text-primary-darkText">
                  Works
                </a>
              </li>

              <li>
                <a href="#project" className="hover:text-primary-darkText">
                  Projects
                </a>
              </li>
            </ol>
            <div className="rounded bg-primary-light">
              <button className="px-4 py-1 font-mono transition ease-in-out border-2 rounded text-primary-default border-primary-light hover:-translate-y-1 hover:-translate-x-1 bg-primary-bg">
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
