const Works = () => {
  return (
    <section
      id="works"
      className="pt-10 pl-5 pr-5 mx-auto md:pt-0 md:py-20 md:w-2/3 md:pl-0 md:pr-0"
    >
      <div className="flex items-center justify-start gap-10 pb-14">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#ccd6f6] font-mono">
          03. Some Things I&apos;ve Build
        </h2>
        <div className="w-24 md:w-60 h-[0.5px] bg-[#8892b0]"></div>
      </div>

      <div className="space-y-10 md:space-y-28">
        <div className="bg-[#112240] md:bg-[#0A192F] relative w-[100%] flex h-96 md:h-[50vh] 2xl:h-[40vh] items-center pt-8 md:py-10 rounded-md">
          <div className="w-[50%] relative hidden md:block">
            <div className="absolute w-full h-full border bg-[#64FFDA] z-10 opacity-50 hover:opacity-0 hover:cursor-pointer rounded-md"></div>
            <a href="#project">
              <img
                className="object-cover rounded-md h-[50vh] 2xl:h-[40vh]"
                src="/harvimart.png"
                alt="Project Image"
              />
            </a>
          </div>

          <div className="text-[#8892B0] text-start md:text-right absolute w-full md:w-[80%] right-0 space-y-2 text-xl z-20 p-4">
            <p className="text-[#64FFDA]">Featured Project</p>
            <h3 className="text-[#CCD6F6] text-2xl font-extrabold">
              Harvi Mart
            </h3>
            <div className="bg-[#112240] rounded-md z-20 p-2 pl-0 md:pl-2">
              <p className="text-sm md:py-8">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
            </div>
            <ul className="flex flex-wrap justify-start gap-2 text-sm md:justify-end md:gap-4">
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
              <li>iTerm2</li>
              <li>Hyper</li>
            </ul>
            <div className="flex justify-start gap-5 md:justify-end">
              <a href="github.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="github.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#112240] md:bg-[#0A192F] relative w-[100%] flex md:flex-row-reverse h-96 md:h-[50vh] 2xl:h-[40vh] items-center pt-8 md:py-10 rounded-md">
          <div className="w-[50%] relative hidden md:block">
            <div className="absolute w-full h-full border bg-[#64FFDA] z-10 opacity-50 hover:opacity-0 hover:cursor-pointer rounded-md"></div>
            <a href="#project">
              <img
                className="object-cover rounded-md h-[50vh] 2xl:h-[40vh]"
                src="/harvimart.png"
                alt="Project Image"
              />
            </a>
          </div>

          <div className="text-[#8892B0] text-start md:text-left absolute w-full md:w-[80%] left-0 space-y-2 text-xl z-20 p-4">
            <p className="text-[#64FFDA]">Featured Project</p>
            <h3 className="text-[#CCD6F6] text-2xl font-extrabold">
              Harvi Mart
            </h3>
            <div className="bg-[#112240] rounded-md z-20">
              <p className="p-2 pl-0 text-sm md:pl-2 md:py-8">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
            </div>
            <ul className="flex flex-wrap justify-start gap-2 text-sm md:gap-4">
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
              <li>iTerm2</li>
              <li>Hyper</li>
            </ul>
            <div className="flex justify-start gap-5 md:justify-start">
              <a href="github.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="github.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- product three  --> */}
        <div className="bg-[#112240] md:bg-[#0A192F] relative w-[100%] flex h-96 md:h-[50vh] 2xl:h-[40vh] items-center pt-8 md:py-10 rounded-md">
          <div className="w-[50%] relative hidden md:block">
            <div className="absolute w-full h-full border bg-[#64FFDA] z-10 opacity-50 hover:opacity-0 hover:cursor-pointer rounded-md"></div>
            <a href="#project">
              <img
                className="object-cover rounded-md h-[50vh] 2xl:h-[40vh]"
                src="/harvimart.png"
                alt="Project Image"
              />
            </a>
          </div>

          <div className="text-[#8892B0] text-start md:text-right absolute w-full md:w-[80%] right-0 space-y-2 text-xl z-20 p-4">
            <p className="text-[#64FFDA]">Featured Project</p>
            <h3 className="text-[#CCD6F6] text-2xl font-extrabold">
              Harvi Mart
            </h3>
            <div className="bg-[#112240] rounded-md z-20">
              <p className="p-2 pl-0 text-sm md:pl-2 md:py-8">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
            </div>
            <ul className="flex flex-wrap justify-start gap-2 text-sm md:gap-4">
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
              <li>iTerm2</li>
              <li>Hyper</li>
            </ul>
            <div className="flex justify-start gap-5 md:justify-end">
              <a href="github.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="github.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
