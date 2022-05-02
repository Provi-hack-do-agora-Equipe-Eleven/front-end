import Header from "../../components/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "../../pages/ProjectPage";
import HomePage from "../../pages/HomePage";
import ProjectsPage from "../../pages/ProjectsPage";
import RegisterPage from "../../pages/RegisterPage";
import CreateProjectPage from "../../pages/CreateProjectPage";
import Footer from "../../components/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="createproject" element={<CreateProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
