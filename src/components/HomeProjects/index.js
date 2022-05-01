import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard";
import { Container, ContentContainer, Title, Button, Projects } from "./styles";
import mockup from "../../assets/images/photo-hero.jpg";
import { useNavigate } from "react-router-dom";

const HomeProjects = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        img: mockup,
        title: "title",
        description: "description",
      },
      {
        id: 2,
        img: mockup,
        title: "title",
        description: "description",
      },
      {
        id: 3,
        img: mockup,
        title: "title",
        description: "description",
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
