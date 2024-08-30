import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setScrollDirection("down");
      } else if (scrollTop < lastScrollTop) {
        // Scrolling up
        setScrollDirection("up");
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full px-10 py-5 ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } backdrop-blur-sm transition ease-in shadow-lg`}
      >
        <nav className="flex items-center justify-between font-mono text-primary-default">
          {/* <!-- nav logo --> */}
          <div className="rounded-sm bg-primary-light">
            <p className="transition ease-in-out rounded-sm bg-primary-bg hover:-translate-y-1 hover:-translate-x-1 ">
              <Link to={"/"}> {`<Mang.dev/>`}</Link>
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
                <a href="#work" className="hover:text-primary-darkText">
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
