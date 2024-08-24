import { useState } from "react";
import { experiences } from "../data/experience";

const Experience = () => {
  const [data, setData] = useState(experiences[0]);
  const [active, setActive] = useState(0);
  console.log(active);

  const handleFirstCompany = () => {
    setActive(0);
    setData(experiences[0]);
  };

  const handleSecondCompany = () => {
    setActive(1);
    setData(experiences[1]);
  };

  return (
    <section
      id="experience"
      className="pl-5 pr-5 mx-auto md:w-2/3 md:py-20 md:pr-0 md:pl-0"
    >
      <div className="flex items-center justify-between gap-10 pb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#ccd6f6] font-mono">
          02. Where I&apos;ve Worked
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-[#8892b0]"></div>
      </div>

      <div className="text-[#8892B0] flex flex-col md:flex-row justify-between gap-5">
        <div className="flex md:flex-col flex-row items-center w-[300px] justify-start  border-l-[0.1px] border-gray-800 text-center">
          <p
            className={`w-full text-xl cursor-pointer h-16 py-auto ${active === 0 ? "bg-[#64ffdb13] border-l-[0.5px]" : ""}`}
            onClick={handleFirstCompany}
          >
            Ineuron.ai
          </p>
          <p
            className={`w-[100%] text-xl cursor-pointer h-16 py-auto ${active === 1 ? "bg-[#64ffdb13] border-l-[0.5px]" : ""}`}
            onClick={handleSecondCompany}
          >
            Physics Wallah
          </p>
        </div>

        <div>
          <div className="pb-10">
            <h3 className="text-2xl">
              {data?.role}
              <span className="text-[#64FFDA]">@{data?.company}</span>
            </h3>
            <p>
              {data?.start} - {data?.end}
            </p>
          </div>

          <ul className="list-image-[url(./listIcon.png)] md:text-xl">
            {data?.description.map((item, index) => {
              return (
                <li className="pb-4 pl-1" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
