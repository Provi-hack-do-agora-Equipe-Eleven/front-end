import { useEffect, useState } from "react";
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
import api from "../../services/api";
import { states } from "../../utils/utils.js";

const ProjectsContainer = () => {
  const { t } = useTranslation();
  const [city, setCity] = useState("");
  const [moreProjects, setMoreProjects] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((res) => {
      setProjects(res.data.projects);
    });
  }, []);

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
          placeholder="Cidade"
          onChange={({ target }) => setCity(target.value)}
        />
        <Select>
          <option value="">{"Estado"}</option>
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
                )
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
