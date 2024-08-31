import me from "../assets/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 pl-5 pr-5 mx-auto animated md:pr-0 md:pl-0 md:w-2/3"
    >
      <div className="flex items-center justify-start gap-10 pb-10">
        <h2 className="w-full text-2xl font-semibold text-primary-textHightLight">
          01. About Me
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-primary-textHightLight"></div>
      </div>

      <div className="flex flex-wrap justify-between gap-16 lg:flex-nowrap">
        <div className="w-full text-primary-light md:w-3/4">
          <p className="md:text-md">
            I am deeply passionate about full-stack web development, with a
            particular enthusiasm for crafting immersive and user-centric web
            experiences. While I am committed to the entire spectrum of web
            development, my true passion shines through in the design and
            creation of captivating frontend interfaces that enhance user
            engagement and satisfaction.
          </p>

          <p className="mt-5 text-md">
            Here a few technologies I&apos;ve been working with recently:
          </p>
          <div className="flex justify-around mt-2 text-md">
            <ul className="list-image-triangle">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Typescript</li>
            </ul>
            <ul className="list-image-triangle">
              <li>Tailwind</li>
              <li>Mongoose</li>
              <li>Express</li>
              <li>MongoDB</li>
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
            <div className="absolute top-0 left-0 z-20 w-full h-full transition ease-in-out rounded-md opacity-50 bg-primary-textHightLight group-hover:opacity-0"></div>
            <div className="absolute z-0 w-full h-full transition ease-in-out translate-x-1 border-2 rounded-md top-6 -right-6 border-primary-textHightLight group-hover:translate-x-4 group-hover:translate-y-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
