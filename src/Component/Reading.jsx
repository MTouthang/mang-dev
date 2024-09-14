import { readings } from "../data/data";
const Reading = () => {
  return (
    // <!-- Projects -->
    <section id="readings" className="w-3/4 py-5 mx-auto md:py-5 ">
      <div className="flex items-center justify-between gap-10 pb-10">
        <h2 className="w-full pl-3 text-2xl font-semibold text-primary-textHightLight">
          04. Readings
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-primary-textHightLight mr-4"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {readings.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded h-80 w-56 bg-[#262626] hover:bg-[#2c2c2c] group"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt="me"
                  className="object-cover w-full h-full transition rounded-t-sm group-hover:scale-125"
                />
              </div>
              <div className="p-1 text-[rgb(208,208,208)] group-hover:text-primary-textHightLight">
                <h3 className="py-1 mt-2 font-semibold line-clamp-1">
                  {item.name}
                </h3>
                <p className="h-20 py-1 text-xs">
                  {item?.description?.slice(0, 100)}...
                </p>
                <p className="text-sm line-clamp-1"> Author:{item?.author}</p>
              </div>
            </div>
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

export default Reading;
