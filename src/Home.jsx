import About from "./Component/About";
import Experience from "./Component/Experience";
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
      </Layout>
    </div>
  );
};

export default Home;
