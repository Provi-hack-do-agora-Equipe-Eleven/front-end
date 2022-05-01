import "./style.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const HomeMain = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="main-content">
      <div className="cta-div-main">
        <h1>{t("mainTitle")}</h1>
        <button onClick={()=> navigate('/projects')}>{t("meetProjects")}</button>
      </div>
    </div>
  );
};

export default HomeMain;
