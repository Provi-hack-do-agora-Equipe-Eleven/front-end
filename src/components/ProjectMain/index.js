import { useTranslation } from "react-i18next";
import { Container } from "./styles";

const ProjectMain = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t("projectTitle")}</h1>
    </Container>
  );
};

export default ProjectMain;
