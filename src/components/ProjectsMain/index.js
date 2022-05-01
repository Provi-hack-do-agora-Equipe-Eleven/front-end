import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard";
import { Container, Title, Button, Projects } from "./styles";
import mockup from "../../assets/images/photo-hero.jpg";

const ProjectsMain = () => {
  const { t } = useTranslation();
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
      <Title>
        <h1>{t("projectTitle")}</h1>
        <Button>{t("discoverProjects")}</Button>
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
    </Container>
  );
};

export default ProjectsMain;
