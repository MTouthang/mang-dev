import projectImage from "../assets/projects-default.jpg";
import { projects } from "../data/data";
import Modal from "./Modal";
const Project = () => {
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
        {projects.map((item, index) => {
          return (
            <>
              <div
                className="btn rounded h-80 w-56 bg-[#262626] hover:bg-[#2c2c2c] group cursor-pointer"
                key={index}
                onClick={() => document.getElementById("my_modal").showModal()}
              >
                <div className="w-full h-40 overflow-hidden border-red-400">
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
              <Modal />
            </>
          );
        })}
      </div>
      {/* <div className="hover:bg-[#64FFDA] w-44 rounded mx-auto my-10">
        <button className="px-10 py-3 border-2 rounded text-[#64FFDA] border-[#64FFDA] hover:-translate-y-1 hover:-translate-x-1 bg-[#0A192F] transition ease-in-out w-44 font-mono">
          Show more
        </button>
      </div> */}
    </section>
  );
};

export default Project;
