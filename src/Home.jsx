import About from "./Component/About";
// import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Experience from "./Component/Experience";
import Project from "./Component/Project";
import Reading from "./Component/Reading";
// import Reading from "./Component/Reading";
// import Works from "./Component/Works";
import Layout from "./Layout/Layout";
import HeroSection from "./Pages/HeroSection";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <About />
        <Experience />
        {/* <Works /> */}

        <Project />
        <Reading />
        {/* <Blog /> */}
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;
