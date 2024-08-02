import About from "./Component/About";
import Contact from "./Component/Contact";
import Experience from "./Component/Experience";
import Project from "./Component/Project";
import Works from "./Component/Works";
import Layout from "./Layout/Layout";
import HeroSection from "./Page/HeroSection";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <About />
        <Experience />
        <Works />
        <Project />
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;
