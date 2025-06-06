import About from "../Component/About";
// import Blog from "./Component/Blog";
import Contact from "../Component/Contact";
import Experience from "../Component/Experience";
import HeroSection from "../Component/HeroSection";
import Project from "../Component/Project";
import Reading from "../Component/Reading";
import Layout from "../Layout/Layout";

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
