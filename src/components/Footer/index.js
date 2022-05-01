import "./style.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/icons/logo.svg";

const Footer = () => {
  const { t } = useTranslation();
  return(
    <footer>
      <div className="footer-content">
        <img src={logo} alt="plástico bolha logo" />
        <div className="rigths">
          <p>
            © 2022 Plástico Bolha - {t("allRightsReserved")}
          </p>  
        </div>
        <button className="footer-contact">{t("contact")}</button>
      </div>
    </footer>
  );
};

export default Footer;