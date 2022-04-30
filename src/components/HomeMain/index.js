import "./style.css";
import { useTranslation } from "react-i18next";

const HomeMain = () => {
  const { t } = useTranslation();

  return (
    <div className="main-content">
      <div className="cta-div-main">
        <h1>{t("mainTitle")}</h1>
        <button>{t("meetProjects")}</button>
      </div>
    </div>
  );
};

export default HomeMain;
