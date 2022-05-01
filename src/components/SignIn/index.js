import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Container, Title, Form, Input, Button } from "./styles";

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleOnChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    if (!email || !password) return;
    if (password.length < 8) return;
    try {
      const response = await api.post("/users/login", form);
      const { user, token } = response.data;
      login(token, user.id);
      navigate('/');
      setForm({ email: "", password: "" });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <Container>
      <Title>
        <p>{t("alreadyHaveAccount")}</p>
        <h1>{t("signIn")}</h1>
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          onChange={handleOnChange}
          value={form.email}
          type="email"
          placeholder="E-mail"
        />
        <Input
          name="password"
          onChange={handleOnChange}
          value={form.password}
          type="password"
          placeholder={t("passwordPlaceholder")}
        />
        <Button>{t("login")}</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
