import Header from "../../components/Header";
import "./App.css";
import HomePage from "../../pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsPage from "../../pages/ProjectsPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
