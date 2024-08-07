import me from "../assets/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 pl-5 pr-5 mx-auto md:pr-0 md:pl-0 md:w-2/3"
    >
      <div className="flex items-center justify-start gap-10 pb-10">
        <h2 className="text-2xl font-extrabold text-[#ccd6f6] font-mono w-full">
          01. About Me
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-[#8892b0]"></div>
      </div>

      <div className="flex flex-wrap justify-between gap-16 lg:flex-nowrap">
        <div className="text-[#8892B0] md:w-3/4 w-full">
          <p className="md:text-xl">
            I'm a passionate frontend developer, dedicated to crafting engaging
            and user-centric web experiences. While I have a good understanding
            of backend development, my true passion lies in creating captivating
            frontend interfaces. My journey in the world of web development has
            equipped me with a robust skill set in JavaScript, React.js,
            Next.js, and TypeScriptJS.
          </p>

          <p className="mt-5 text-xl">
            Here a few technologies I've been working with recently:
          </p>
          <div className="flex justify-around mt-2">
            <ul className="list-image-[url(./listIcon.png)]">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul className="list-image-[url(./listIcon.png)]">
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Nextjs</li>
            </ul>
          </div>
        </div>

        <div className="pr-10 mx-auto md:pr-0">
          <div className="relative w-48 mx-auto md:w-60 group">
            <img
              className="relative z-20 transition ease-linear rounded-md group-hover:-translate-y-3 group-hover:-translate-x-2"
              src={me}
              alt="profile image"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#60E8CD] opacity-40 group-hover:opacity-0 transition ease-in-out rounded-md z-20"></div>
            <div className="absolute top-6 -right-6 border-2 border-[#64FFDA] rounded-md h-full w-full translate-x-1 group-hover:translate-x-4 group-hover:translate-y-1 transition ease-in-out z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
