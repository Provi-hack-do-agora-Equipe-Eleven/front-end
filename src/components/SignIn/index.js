import { useTranslation } from "react-i18next";
import { Container, Title, Form, Input, Button } from "./styles";

const SignIn = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>
        <p>{t("alreadyHaveAccount")}</p>
        <h1>{t("signIn")}</h1>
      </Title>
      <Form>
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />
        <Button>{t("login")}</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
