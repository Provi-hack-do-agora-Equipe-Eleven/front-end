import Header from "../../components/Header";
import HomePage from "../../pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
