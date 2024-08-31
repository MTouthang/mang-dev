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
        <h2 className="w-full text-2xl font-semibold text-primary-textHightLight">
          02. Where I&apos;ve Worked
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-primary-textHightLight"></div>
      </div>

      <div className="flex flex-col justify-between gap-5 text-primary-light md:flex-row ">
        <div className="flex md:flex-col flex-row items-center w-[300px] justify-start  border-l-[0.1px] border-primary-textHightLight text-center text-md">
          <p
            className={`w-full text-primary-textLight  cursor-pointer h-16 flex justify-center items-center ${active === 0 ? "bg-primary-textHightLight border-l-[0.5px]" : ""}`}
            onClick={handleFirstCompany}
          >
            Ineuron.ai
          </p>
          <p
            className={`w-[100%] text-md flex items-center justify-center cursor-pointer h-16 py-auto ${active === 1 ? "bg-primary-textHightLight border-l-[0.5px] text-primary-textLight" : ""}`}
            onClick={handleSecondCompany}
          >
            Physics Wallah
          </p>
        </div>

        <div>
          <div className="pb-10">
            <h3 className="text-md">
              {data?.role}
              <span className="text-primary-textHightLight">
                @{data?.company}
              </span>
            </h3>
            <p>
              {data?.start} - {data?.end}
            </p>
          </div>

          <ul className="list-image-triangle">
            {data?.description.map((item, index) => {
              return (
                <li className="pl-4 mb-5 ml-3 " key={index}>
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
