import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import HomeMain from "../../components/HomeMain";
import MainCarousel from "../../components/MainCarousel";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomeMain />
      <AboutUs />
      <MainCarousel />
    </div>
  );
};

export default App;
