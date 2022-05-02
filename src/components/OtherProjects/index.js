import "./style.css";
import { useTranslation } from "react-i18next";
import rectangle from "../../assets/icons/Rectangle.svg";
import tampinhaLegal from "../../assets/images/tampinhaLegal.svg";
import ecoFaxina from "../../assets/images/ecoFaxina.svg";
import tampados from "../../assets/images/tampados.svg";
import plasticoColeta from "../../assets/images/coletaPlastico.svg";

const OtherProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: plasticoColeta,
      title: "Coleta de plástico",
      description:
        "Um projeto tripartite pela recuperação do estuário de Santos e São Vicente.",
    },
    {
      image: ecoFaxina,
      title: "Eco Faxina",
      description: t("project2Description"),
    },
    {
      image: tampados,
      title: "Tampados",
      description: t("project3Description"),
    },
  ];

  return (
    <div className="new-projects">
      <h1>/Outros projetos</h1>
      <div className="flex other-projects">
        {projects.map((project) => (
          <div className="flex project-wrapper" style={{ gap: "12px" }}>
            <img src={project.image} />
            <div>
              <p className="project-title-info">{project.title}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
