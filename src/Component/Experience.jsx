const Experience = () => {
  return (
    <section className="pl-5 pr-5 mx-auto md:w-2/3 md:py-20 md:pr-0 md:pl-0">
      <div className="flex items-center justify-start gap-10 pb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#ccd6f6] font-mono">
          02. Where I've Worked
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-[#8892b0]"></div>
      </div>

      <div className="text-[#8892B0] flex justify-between gap-5">
        <div className="hidden md:flex flex-col items-center w-[40%] justify-start gap-5 border-l-[0.1px] border-gray-800 text-center">
          <p className="bg-[#64ffdb13] w-[100%] text-xl border-l-[0.5px]">
            Ineuron.ai (PW Skills)
          </p>
        </div>

        <div>
          <div className="pb-10">
            <h3 className="text-2xl">
              Associate Developer
              <span className="text-[#64FFDA]">@inueron</span>
            </h3>
            <p>May 2021 - Present</p>
          </div>

          <ul className="list-image-[url(./listIcon.png)] md:text-xl">
            <li className="pb-4 pl-1">
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more
            </li>
            <li className="pb-4 pl-1">
              Work alongside creative directors to lead the research,
              development, and architecture of technical solutions to fulfill
              business requirements
            </li>
            <li className="pb-4 pl-1">
              Collaborate with designers, project managers, and other engineers
              to transform creative concepts into production realities for
              clients and stakeholders
            </li>
            <li className="pb-4 pl-1">
              Provide leadership within engineering department through close
              collaboration, knowledge shares, and mentorship
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
