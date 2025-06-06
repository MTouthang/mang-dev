import resume from "../assets/ngtouthangfe.pdf";

const HeroSection = () => {
  return (
    <div>
      <main className="h-[90vh] relative mx-auto flex items-center justify-center w-full xl:w-3/4">
        {/* <!-- hero main body --> */}
        <div className="w-full px-3 mx-auto md:px-2 md:w-2/3">
          <p className="font-mono font-medium text-primary-textDimmed">
            <span className="text-2xl cursor-shake">👋</span>
            Hi, my name is
          </p>
          <h1 className="font-extrabold leading-[65px] text-5xl font-sans text-primary-textLight">
            Ngamlenmang Touthang
          </h1>
          <h1 className="text-3xl font-semibold lg:text-4xl md:text-3xl text-primary-textHightLight typing">
            I build things for the Web.
          </h1>
          <p className="py-8 text-md text-primary-default">
            I am an Associate (Full Stack Developer) at Physics Wallah,
            specializing in creating web applications. I develop content,
            documentation, and web projects for enthusiasts interested in
            building web applications from scratch, focusing on both frontend
            and backend development.
          </p>
          <div className="w-56 rounded hover:bg-primary-textHightLight">
            <a href={resume} target="blank">
              <button className="w-56 px-10 py-3 transition ease-in-out border-2 rounded text-primary-default border-primary-textHightLight hover:-translate-y-1 hover:-translate-x-1 bg-primary-bg hover:text-primary-textHightLight">
                Resume
              </button>
            </a>
          </div>
        </div>

        {/* <!-- hero main left --> */}
        <div className="fixed flex-col flex-wrap items-center justify-end hidden gap-8 md:bottom-0 md:flex md:left-10 text-primary-default">
          {/* <!-- hero social link --> */}
          <div className="flex flex-col gap-5">
            <a
              href="https://github.com/MTouthang"
              target="_blank"
              title="Github"
              className="transition ease-linear hover:text-primary-textHightLight hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/ngamlenmang_touthang/?hl=en"
              target="__blank"
              className="transition ease-linear hover:text-primary-textHightLight hover:-translate-y-1"
              title="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="https://x.com/ngtouthang"
              target="_blank"
              className="transition ease-linear hover:text-primary-textHightLight hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/ngamlenmangtouthang/"
              target="_blank"
              title="LinkedIN"
              className="transition ease-linear hover:text-primary-textHightLight hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="https://hashnode.com/@ngtouthang"
              target="_blank"
              title="hashnode"
              className="transition ease-linear hover:text-primary-textHightLight hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </a>
          </div>
          <div className="w-[0.5px] bg-primary-textHightLight h-32"></div>
        </div>

        {/* <!-- hero main right --> */}
        <div className="flex-col items-center justify-end hidden gap-40 md:fixed md:bottom-0 md:flex md:-right-1">
          <a
            href="mailto:johndoe@gmail.com"
            className="w-40 transition ease-linear rotate-90 text-primary-default hover:text-primary-textHightLight hover:-translate-y-2"
          >
            ngtouthang96@gmail.com
          </a>
          <div className="w-[0.5px] h-32 bg-primary-textHightLight"></div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
