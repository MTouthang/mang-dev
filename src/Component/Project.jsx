import { useState } from "react";
import projectImage from "../assets/projects-default.jpg";
import { projects } from "../data/data";
import Modal from "./ProjectModal";
const Project = () => {
  const [selectedItem, setSelectedItem] = useState();

  const [visibleCount, setVisibleCount] = useState(4);
  const [projectData, setProjectData] = useState(
    projects.slice(0, visibleCount)
  );

  const itemOnClick = (item) => {
    document.getElementById("my_modal").showModal();
    setSelectedItem(item);
  };

  const showMore = () => {
    const newEnd = visibleCount + 4;
    setVisibleCount(newEnd);
    setProjectData(projects.slice(0, newEnd));

    console.log(projectData);
  };

  return (
    // <!-- Projects -->
    <section id="project" className="w-3/4 py-5 mx-auto md:py-5">
      <div className="flex items-center justify-between gap-10 pb-10">
        <h2 className="w-full pl-3 text-2xl font-semibold text-primary-textHightLight">
          03. Projects
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-primary-textHightLight mr-4"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {projectData.map((item, index) => {
          return (
            <>
              <div
                className="btn rounded h-80 w-56 bg-[#262626] hover:bg-[#2c2c2c] group cursor-pointer text-left"
                key={index}
                onClick={() => itemOnClick(item)}
              >
                <div className="w-full h-40 overflow-hidden text-left border-red-400">
                  <img
                    src={item.image ? item.image : projectImage}
                    alt={item.title}
                    className="object-cover w-full h-full transition rounded-t-sm group-hover:scale-125"
                  />
                </div>
                <div className="p-1 text-[#D0D0D0] group-hover:text-primary-textHightLight">
                  <h3 className="py-2 font-semibold line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="py-1 text-xs">
                    {item?.description?.slice(0, 95)}
                    {item.description ? "..." : ""}
                  </p>
                  {item.live ? (
                    <a
                      className="mr-5 text-sm transition hover:underline"
                      href={item.live}
                      target="__blank"
                    >
                      Live
                    </a>
                  ) : (
                    ""
                  )}

                  {item.source ? (
                    <a
                      className="text-sm transition hover:underline"
                      href={item.source}
                      target="__blank"
                    >
                      Code
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Modal data={selectedItem} />
      {visibleCount < projects.length && (
        <p className="py-4 text-center" onClick={showMore}>
          Show more...
        </p>
      )}
    </section>
  );
};

export default Project;
