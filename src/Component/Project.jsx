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
  };

  return (
    // <!-- Projects -->
    <section id="project" className="w-11/12 py-5 mx-auto md:w-3/4 md:py-5">
      <div className="flex items-center justify-between gap-10 pb-10">
        <h2 className="w-full pl-3 text-2xl font-semibold text-primary-textHightLight">
          03. Projects
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-primary-textHightLight mr-4"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded h-80 w-60 md:w-56 bg-[#262626] hover:bg-[#2c2c2c] group cursor-pointer text-left border hover:border-primary-textHightLight overflow-hidden"
            onClick={() => itemOnClick(item)}
          >
            {/* Image Section */}
            <div className="w-full overflow-hidden h-1/2">
              <img
                src={item.image || projectImage}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Description Section */}
            <div className="flex flex-col justify-between p-2 text-[#D0D0D0] group-hover:text-primary-textHightLight h-1/2">
              <h3 className="text-sm font-semibold line-clamp-1">
                {item.title}
              </h3>
              <p className="hidden text-xs md:block">
                {item?.description?.slice(0, 95)}
                {item.description ? "..." : ""}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                {item.live && (
                  <a
                    className="text-sm transition hover:underline"
                    href={item.live}
                    target="__blank"
                    onClick={(e) => e.stopPropagation()} // prevent onClick bubbling
                  >
                    Live
                  </a>
                )}
                {item.source && (
                  <a
                    className="text-sm transition hover:underline"
                    href={item.source}
                    target="__blank"
                    onClick={(e) => e.stopPropagation()} // prevent onClick bubbling
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal data={selectedItem} />
      {visibleCount < projects.length && (
        <p className="py-4 text-center cursor-pointer" onClick={showMore}>
          Show more...
        </p>
      )}
    </section>
  );
};

export default Project;
