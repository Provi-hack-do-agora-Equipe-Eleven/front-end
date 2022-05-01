import "./style.css";
import { useTranslation } from "react-i18next";
import planet from '../../assets/icons/planet.svg'

const Mission = () => {
    const { t } = useTranslation();
    const mission = [
        {
            number: 1, title: t("titleOne"), description: t("descriptionOne")
        },
        {
            number: 2, title: t("titleTwo"), description: t("descriptionTwo")
        },
        {
            number: 3, title: t("titleThree"), description: t("descriptionThree")
        },
        {
            number: 4, title: t("titleFour"), description: t("descriptionFour")
        },
        {
            number: 5, title: t("titleFive"), description: t("descriptionFive")
        }
    ]

    return (
        <div className="card-mission">
            <div className="about our-mission">
                <div>
                    <h1>{t("our")}</h1>
                    <h1>{t("mission")}</h1>
                </div>
                <p>{t("ourMission")}</p>
            </div>
            <div className='card-description'>
                <img src={planet} alt='planeta' />
                <div>
                    {mission.map((item, index) => (
                        <div key={index} className='description'>
                            <h1 className='number'>{item.number}</h1>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Mission;