import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeMain from "../../components/HomeMain";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomeMain />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
