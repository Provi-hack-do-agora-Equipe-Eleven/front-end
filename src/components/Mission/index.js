import "./style.css";
import { useTranslation } from "react-i18next";
import planet from '../../assets/icons/planet.svg'

const Mission = () => {
    const { t } = useTranslation();

    return (
        <div className="card-mission">
            <div className="about">
                <h1>{t("mission")}</h1>
                <p>{t("ourMission")}</p>
            </div>
            <div>
                <img src={planet} alt='planeta'/>
                <div>
                    <div>
                        <h1>1</h1>
                        <div>
                            <h3>Cooperação</h3>
                            <p>Procura envolver a sociedade civil, o setor privado e governo na solução sustentável para um problema global.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Mission;