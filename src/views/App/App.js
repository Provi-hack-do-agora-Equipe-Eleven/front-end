import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import HomeMain from "../../components/HomeMain";
import Mission from "../../components/Mission";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomeMain />
      <AboutUs />
      <Mission />
    </div>
  );
};

export default App;
