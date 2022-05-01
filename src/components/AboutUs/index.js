import "./style.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="card-about">
      <div className="about">
        <div>
          <h1>{t("about")}</h1>
          <h1>{t("us")}</h1>
        </div>
        <p>{t("aboutUsDescription")}</p>
      </div>
    </div>
  );
};

export default AboutUs;
