import me from "../../src/assets/image.png";
const Project = () => {
  return (
    // <!-- Projects -->
    <section id="project" className="w-3/4 py-5 mx-auto md:py-5 ">
      <div className="flex items-center justify-between gap-10 pb-10">
        <h2 className="w-full pl-3 text-2xl font-semibold text-primary-textHightLight">
          03. Projects
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-primary-textHightLight mr-4"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <div className="rounded h-80 w-56 bg-[#262626] hover:bg-[#2c2c2c]">
          <div className="w-full h-40 border-red-400">
            <img
              src={me}
              alt="me"
              className="object-cover w-full h-full rounded-t-sm"
            />
          </div>
          <div className="p-1 text-[#D0D0D0]">
            <h3 className="py-1 font-semibold"> The title </h3>
            <p className="py-1 text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus animi culpa corporis
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>

        <div className="rounded h-80 w-56 bg-[#262626] hover:bg-[#2c2c2c]">
          <div className="w-full h-40 overflow-hidden rounded">
            <img
              src="https://camo.githubusercontent.com/769fba34ffe5b2bff31b215523b9fe432bb749cef90834494f248a4b8acf00a7/68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f61364b6e66304c67734c31724649437371552f67697068792e6769663f6369643d373930623736313137613835303066313033653331333966306566613432376162313636313564363162633837343338267269643d67697068792e6769662663743d67"
              alt="me"
              className="object-cover w-full h-full transition rounded-t-sm hover:scale-125"
            />
          </div>
          <div className="p-1 text-[#D0D0D0]">
            <h3 className="py-1 font-semibold"> Note keeping App </h3>
            <p className="py-1 text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus animi culpa corporis
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>

        <div className="rounded h-80 w-56 bg-[#262626] hover:bg-[#2c2c2c]">
          <div className="w-full h-40 ">
            <img
              src={me}
              alt="me"
              className="object-cover w-full h-full rounded-t-sm"
            />
          </div>
          <div className="p-1 text-[#D0D0D0]">
            <h3 className="py-1 font-semibold"> The title </h3>
            <p className="py-1 text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus animi culpa corporis
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>
        <div className="rounded h-80 w-56 bg-[#262626] hover:bg-[#2c2c2c]">
          <div className="w-full h-40 ">
            <img
              src={me}
              alt="me"
              className="object-cover w-full h-full rounded-t-sm"
            />
          </div>
          <div className="p-1 text-[#D0D0D0]">
            <h3 className="py-1 font-semibold"> The title </h3>
            <p className="py-1 text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus animi culpa corporis
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>

        <div className="rounded h-80 w-56 bg-[#262626] hover:bg-[#2c2c2c]">
          <div className="w-full h-40 ">
            <img
              src={me}
              alt="me"
              className="object-cover w-full h-full rounded-t-sm"
            />
          </div>
          <div className="p-1 text-[#D0D0D0]">
            <h3 className="py-1 font-semibold"> The title </h3>
            <p className="py-1 text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus animi culpa corporis
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>
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
