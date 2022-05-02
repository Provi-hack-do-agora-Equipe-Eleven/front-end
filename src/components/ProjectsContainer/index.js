import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Form,
  Select,
  Input,
  Button,
  Toggler,
  Projects,
} from "./styles";
import ProjectCard from "../ProjectCard";
import { states } from "../../utils/utils.js";
import mockup from "../../assets/images/bg-createprojects.png";
import mockup2 from "../../assets/images/bg-plastico-bolha.png";
import mockup3 from "../../assets/images/bg-projects-page.png";
import mockup4 from "../../assets/images/photo-hero.jpg";
import mockup5 from "../../assets/images/bg-createprojects.png";

const ProjectsContainer = () => {
  const { t } = useTranslation();
  const [city, setCity] = useState("");
  const [moreProjects, setMoreProjects] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Projeto",
      project_image: mockup,
      description: "Projeto sobre plástico",
    },
    {
      id: 2,
      name: "Projeto 2",
      project_image: mockup2,
      description: "Projeto sobre plástico",
    },
    {
      id: 3,
      name: "Projeto 3 ",
      project_image: mockup3,
      description: "Projeto sobre plástico",
    },
    {
      id: 4,
      name: "Projeto 4",
      project_image: mockup4,
      description: "Projeto sobre plástico",
    },
    {
      id: 5,
      name: "Projeto 5",
      project_image: mockup5,
      description: "Projeto sobre plástico",
    },
  ]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    const currentProjects = [...projects];
    const newProjects = currentProjects.filter((item) => item.city === city);
    setProjects(newProjects);
  };
  const handleToggle = () => {
    setMoreProjects(!moreProjects);
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Input
          placeholder={t("city")}
          onChange={({ target }) => setCity(target.value)}
        />
        <Select>
          <option value="">{t("state")}</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Select>
        <Button>{t("filter")}</Button>
      </Form>
      <Projects>
        {!moreProjects
          ? projects.map(
              (project, i) =>
                i < 6 && (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.name}
                    source={project.project_image}
                    description={project.description}
                  />
                ),
            )
          : projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.name}
                source={project.project_image}
                description={project.description}
              />
            ))}
      </Projects>
      {projects.length > 5 && (
        <Toggler>
          <Button onClick={handleToggle}>
            {!moreProjects ? t("moreProjects") : t("lessProjects")}
          </Button>
        </Toggler>
      )}
    </Container>
  );
};

export default ProjectsContainer;
