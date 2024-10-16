import { useState, useEffect } from "react";

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const [toggle, setToggle] = useState(false);

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
        } backdrop-blur-sm transition ease-in shadow-lg `}
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
          <div
            className={` ${toggle ? "block h-[120vh]" : "hidden "} z-40 bg-[#0E1217] md:bg-transparent  md:border-none transition ease-in-out absolute md:flex top-0 right-0 flex-col md:flex-row items-center  gap-6 p-10 text-sm  place-content-center md:items-start md:p-4 `}
          >
            <ol className={` gap-6 text-primary-default md:flex`}>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-textHightLight hover:underline underline-offset-4 "
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
                  href="#readings"
                  className="hover:text-primary-textHightLight hover:underline underline-offset-4"
                >
                  Readings
                </a>
              </li>
              {/* <li>
                <a
                  href="#reading"
                  className="hover:text-primary-textHightLight hover:underline underline-offset-4"
                >
                  blogs
                </a>
              </li> */}
            </ol>
            <div className="rounded bg-primary-textHightLight">
              <button className="px-4 py-1 transition ease-in-out border rounded hover:text-primary-textHightLight text-primary-default border-primary-textHightLight hover:-translate-y-1 hover:-translate-x-1 bg-primary-bg">
                <a href="#contact"> Contact </a>
              </button>
            </div>
          </div>
          <p className="z-40 md:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.8587 5.21967C6.56581 4.92678 6.09093 4.92678 5.79804 5.21967C5.50515 5.51256 5.50515 5.98744 5.79804 6.28033L9.51771 10L5.79804 13.7197C5.50515 14.0126 5.50515 14.4874 5.79804 14.7803C6.09093 15.0732 6.56581 15.0732 6.8587 14.7803L10.5784 11.0607L14.298 14.7803C14.5909 15.0732 15.0658 15.0732 15.3587 14.7803C15.6516 14.4874 15.6516 14.0126 15.3587 13.7197L11.639 10L15.3587 6.28033C15.6516 5.98744 15.6516 5.51256 15.3587 5.21967C15.0658 4.92678 14.5909 4.92678 14.298 5.21967L10.5784 8.93934L6.8587 5.21967Z"
                  fill="#E96AF0"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H9.75C9.33579 16 9 15.6642 9 15.25Z"
                  fill="#E96AF0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10Z"
                  fill="#E96AF0"
                />
              </svg>
            )}
          </p>
        </nav>
      </header>
    </>
  );
};

export default Header;
