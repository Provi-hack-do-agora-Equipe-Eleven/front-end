import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Form, Select, Input, Button, Toggler, Projects } from "./styles";
import mockup from "../../assets/images/photo-hero.jpg";
import ProjectCard from "../ProjectCard";

const ProjectsContainer = () => {
  const { t } = useTranslation();
  const [city, setCity] = useState("");
  const [moreProjects, setMoreProjects] = useState(false);
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
        title: "title2",
        description: "description",
      },
      {
        id: 3,
        img: mockup,
        title: "title",
        description: "description",
      },
      {
        id: 4,
        img: mockup,
        title: "title",
        description: "description",
      },
      {
        id: 5,
        img: mockup,
        title: "title",
        description: "description",
      },
      {
        id: 6,
        img: mockup,
        title: "title",
        description: "description",
      },
    ]);
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    const currentProjects = [...projects];
    const newProjects = currentProjects.filter((item) => item.title === city);
    setProjects(newProjects);
  };
  const handleToggle = () => {
    setMoreProjects(!moreProjects);
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Input
          placeholder="Cidade"
          onChange={({ target }) => setCity(target.value)}
        />
        <Select>
          <option value="">{"Estado"}</option>
          <option value="1">{t("option1")}</option>
        </Select>
        <Button>{t("filter")}</Button>
      </Form>
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
        {moreProjects &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              source={project.img}
              description={project.description}
            />
          ))}
      </Projects>
      <Toggler>
        <Button onClick={handleToggle}>
          {!moreProjects ? t("moreProjects") : t("lessProjects")}
        </Button>
      </Toggler>
    </Container>
  );
};

export default ProjectsContainer;
