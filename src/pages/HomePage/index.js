import HomeMain from "../../components/HomeMain";
import AboutUs from "../../components/AboutUs";
import Mission from "../../components/Mission";
import HomeProjects from "../../components/HomeProjects";
import MainCarousel from "../../components/MainCarousel";

const HomePage = () => {
  return (
    <>
      <HomeMain />
      <AboutUs />
      <MainCarousel />
      <Mission />
      <HomeProjects />
    </>
  );
};

export default HomePage;
