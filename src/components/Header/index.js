import "./style.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import logo from "../../assets/icons/logo.svg";
import magnifyingGlass from "../../assets/icons/magnifyingGlass.svg";
import person from "../../assets/icons/person.svg";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="plástico bolha logo" onClick={()=> navigate('/')} />
        <nav>
          <button onClick={()=> navigate('/projects')}>{t("getInvolved")}</button>
          <button onClick={()=> navigate('/projects')}>{t("beInspired")}</button>
          <button onClick={()=> navigate('/projects')}>{t("getInformed")}</button>
          <button onClick={()=> navigate('/')}>{t("contact")}</button>
        </nav>
        <div className="cta-div">
          <div className="icons-div">
            <button onClick={() => navigate("/register")}>
              <img src={person} alt="person icon" />
            </button>

            <button>
              <img src={magnifyingGlass} alt="magnifying glass icon" />
            </button>
            <LanguageSelector />
          </div>
          <button 
            onClick={()=> navigate('/createproject')}
            className="header-CTA">
            {t("createProject")}
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
