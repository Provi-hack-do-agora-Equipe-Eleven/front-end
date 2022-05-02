import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard";
import { Container, ContentContainer, Title, Button, Projects } from "./styles";
import { useNavigate } from "react-router-dom";
import mockup from "../../assets/images/photo-hero.jpg";
import tampinha from "../../assets/images/tampinhaLegal.svg";
import ecoFaxina from "../../assets/images/ecoFaxina.svg";
import tampados from "../../assets/images/tampados.svg";

const HomeProjects = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        img: tampinha,
        title: "Tampinha Legal",
        description: t("project1Description"),
      },
      {
        id: 2,
        img: ecoFaxina,
        title: "Eco Faxina",
        description: t("project2Description"),
      },
      {
        id: 3,
        img: tampados,
        title: "Tampadas",
        description: t("project3Description"),
      },
    ]);
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Title>
          <h1>{t("projectTitle")}</h1>
          <Button onClick={() => navigate("/projects")}>
            {t("discoverProjects")}
          </Button>
        </Title>
        <Projects>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              source={project.img}
              description={project.description}
            />
          ))}
        </Projects>
      </ContentContainer>
    </Container>
  );
};

export default HomeProjects;
