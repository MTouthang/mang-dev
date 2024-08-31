import { useState, useEffect } from "react";

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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full px-10 py-5 ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } backdrop-blur-sm transition ease-in shadow-lg`}
      >
        <nav className="flex items-center justify-between text-primary-default">
          {/* <!-- nav logo --> */}
          <div className="rounded-sm bg-primary-textHightLight">
            <p
              className="px-1 transition ease-in-out border rounded-sm border-primary-textHightLight bg-primary-bg hover:-translate-y-1 hover:-translate-x-1 hover:text-primary-textHightLight"
              onClick={scrollTop}
            >
              {`<mang.dev/>`}
            </p>
          </div>

          {/* <!-- nav menu items and button --> */}
          <div className="flex items-center gap-5 text-sm ">
            <ol className="hidden gap-6 text-primary-default md:flex">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-textHightLight hover:underline underline-offset-4"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-primary-textHightLight hover:underline underline-offset-4"
                >
                  Works
                </a>
              </li>

              <li>
                <a
                  href="#project"
                  className="hover:text-primary-textHightLight hover:underline underline-offset-4"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#reading"
                  className="hover:text-primary-textHightLight hover:underline underline-offset-4"
                >
                  Readings
                </a>
              </li>
              <li>
                <a
                  href="#reading"
                  className="hover:text-primary-textHightLight hover:underline underline-offset-4"
                >
                  blogs
                </a>
              </li>
            </ol>
            <div className="rounded bg-primary-textHightLight">
              <button className="px-4 py-1 transition ease-in-out border rounded hover:text-primary-textHightLight text-primary-default border-primary-textHightLight hover:-translate-y-1 hover:-translate-x-1 bg-primary-bg">
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
