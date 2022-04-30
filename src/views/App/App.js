import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import HomeMain from "../../components/HomeMain";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomeMain />
      <AboutUs />
    </div>
  );
};

export default App;
