import { useTranslation } from "react-i18next";
import { Container, Div } from "./styles";

const CreateProjectMain = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Div>
        <h1>{t("registerProject")}</h1>
      </Div>
    </Container>
  );
};

export default CreateProjectMain;
