import { useTranslation } from "react-i18next";
import { Container, Title, Form, Input, Button } from "./styles";

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>
        <p>{t("noHaveAccount")}</p>
        <h1>{t("signUp")}</h1>
      </Title>
      <Form>
        <Input placeholder={t("namePlaceholder")} />
        <Input placeholder="E-mail" />
        <Input placeholder={t("passwordPlaceholder")} />
        <Button>{t("send")}</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
