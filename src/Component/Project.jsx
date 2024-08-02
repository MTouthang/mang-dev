const Project = () => {
  return (
    // <!-- Projects -->
    <section className="w-3/4 py-10 mx-auto md:py-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#ccd6f6] font-mono">
          Other Noteworthy Projects
        </h2>
        <p className="text-xl text-[#64FFDA]">build and grow 🚀</p>
      </div>

      {/* <!-- project container --> */}
      <div className="flex flex-wrap justify-center gap-4 mt-5 border-1">
        {/* <!-- project cards  -->
          <!-- product one --> */}
        <div className="p-4 space-y-10 h-96 w-64 rounded-md bg-[#112240] hover:-translate-y-2 transition ease-in-out shadow-lg">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 text-[#64FFDA]"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="flex justify-around gap-2 text-[#8892B0]">
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
          <div className="space-y-2">
            <h3 className="text-xl text-[#ccd6f6] font-bold pb-4">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="text-base text-[#8892B0]">
              Building a custom Multisite compatible Word press plugin to build
              global search with Algolia
            </p>
            <ul className="flex justify-between pt-5 text-base text-[#8892B0]">
              <li>Algolia</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>

        {/* <!-- product two --> */}
        <div className="p-4 space-y-10 h-96 w-64 rounded-md bg-[#112240] hover:-translate-y-2 transition ease-in-out shadow-lg">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 text-[#64FFDA]"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="flex justify-around gap-2 text-[#8892B0]">
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
          <div className="space-y-2">
            <h3 className="text-xl text-[#ccd6f6] font-bold pb-4">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="text-base text-[#8892B0]">
              Building a custom Multisite compatible Word press plugin to build
              global search with Algolia
            </p>
            <ul className="flex justify-between pt-5 text-base text-[#8892B0]">
              <li>Algolia</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>

        {/* <!-- product three --> */}
        <div className="w-64 p-4 space-y-10 h-96 rounded-md bg-[#112240] hover:-translate-y-2 transition ease-in-out shadow-lg">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 text-[#64FFDA]"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="flex justify-around gap-2 text-[#8892B0]">
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
          <div className="space-y-2">
            <h3 className="text-xl text-[#ccd6f6] font-bold pb-4">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="text-base text-[#8892B0]">
              Building a custom Multisite compatible Word press plugin to build
              global search with Algolia
            </p>
            <ul className="flex justify-start pt-5 text-base text-[#8892B0] gap-2 flex-wrap">
              <li>Algolia</li>
              <li>WordPress</li>
              <li>PHP</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>

        {/* <!-- product four --> */}
        <div className="w-64 p-4 space-y-10 h-96 rounded-md bg-[#112240] hover:-translate-y-2 transition ease-in-out shadow-lg">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 text-[#64FFDA]"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="flex justify-around gap-2 text-[#8892B0]">
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
          <div className="space-y-2">
            <h3 className="text-xl text-[#ccd6f6] font-bold pb-4">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="text-base text-[#8892B0]">
              Building a custom Multisite compatible Word press plugin to build
              global search with Algolia
            </p>
            <ul className="flex justify-between pt-5 text-base text-[#8892B0]">
              <li>Algolia</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
        {/* <!-- product five --> */}
        <div className="w-64 p-4 space-y-10 h-96 rounded-md bg-[#112240] hover:-translate-y-2 transition ease-in-out shadow-lg">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 text-[#64FFDA]"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="flex justify-around gap-2 text-[#8892B0]">
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
          <div className="space-y-2">
            <h3 className="text-xl text-[#ccd6f6] font-bold pb-4">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="text-base text-[#8892B0]">
              Building a custom Multisite compatible Word press plugin to build
              global search with Algolia
            </p>
            <ul className="flex justify-between pt-5 text-base text-[#8892B0]">
              <li>Algolia</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
        {/* <!-- product six --> */}
        <div className="w-64 p-4 space-y-10 h-96 rounded-md bg-[#112240] hover:-translate-y-2 transition ease-in-out shadow-lg">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 text-[#64FFDA]"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="flex justify-around gap-2 text-[#8892B0]">
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
          <div className="space-y-2">
            <h3 className="text-xl text-[#ccd6f6] font-bold pb-4">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="text-base text-[#8892B0]">
              Building a custom Multisite compatible Word press plugin to build
              global search with Algolia
            </p>
            <ul className="flex justify-between pt-5 text-base text-[#8892B0]">
              <li>Algolia</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hover:bg-[#64FFDA] w-44 rounded mx-auto my-10">
        <button className="px-10 py-3 border-2 rounded text-[#64FFDA] border-[#64FFDA] hover:-translate-y-1 hover:-translate-x-1 bg-[#0A192F] transition ease-in-out w-44 font-mono">
          Show more
        </button>
      </div>
    </section>
  );
};

export default Project;
