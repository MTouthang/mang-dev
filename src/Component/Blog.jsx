import me from "../../src/assets/image.png";
const Blog = () => {
  return (
    <section id="blog" className="w-3/4 py-10 mx-auto md:py-20 ">
      <div className="flex items-center justify-between gap-10 pb-10">
        <h2 className="text-2xl font-extrabold text-[#ccd6f6] font-mono w-full">
          05. Blogs
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-[#8892b0]"></div>
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
              Temporibus animi culpa corporis quisquam nulla nemo minima
              deserunt aspernatur perferendis officia.
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>

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
              Temporibus animi culpa corporis quisquam nulla nemo minima
              deserunt aspernatur perferendis officia.
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>

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
              Temporibus animi culpa corporis quisquam nulla nemo minima
              deserunt aspernatur perferendis officia.
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>

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
              Temporibus animi culpa corporis quisquam nulla nemo minima
              deserunt aspernatur perferendis officia.
            </p>
            <p className="text-sm"> link1 </p>
            <p className="text-sm"> link2</p>
          </div>
        </div>

        <div className="rounded h-80 w-56  bg-[#262626] hover:bg-[#2c2c2c] ">
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
              Temporibus animi culpa corporis quisquam nulla nemo minima
              deserunt aspernatur perferendis officia.
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

export default Blog;