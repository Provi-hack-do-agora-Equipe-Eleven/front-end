import "./style.css";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className="card-about">
            <div className="about">
                <h1>{t("about")}</h1>
                <h1>{t("we")}</h1>
                <p>{t("information")}</p>
            </div>
        </div>
    )
};

export default AboutUs;