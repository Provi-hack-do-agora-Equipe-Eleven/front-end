import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Title, Form, Input, Button } from "./styles";
import api from "../../services/api";

const SignUp = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleOnChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = form;
    if (!name || !email || !phone || !password) return;
    if (password.length < 8) return;
    try {
      await api.post("/users/signup", form);
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <Container>
      <Title>
        <p>{t("noHaveAccount")}</p>
        <h1>{t("signUp")}</h1>
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          onChange={handleOnChange}
          value={form.name}
          placeholder={t("namePlaceholder")}
        />
        <Input
          name="email"
          type="email"
          onChange={handleOnChange}
          value={form.email}
          placeholder="E-mail"
        />
        <Input
          name="phone"
          onChange={handleOnChange}
          value={form.phone}
          placeholder={t("phonePlaceholder")}
        />
        <Input
          name="password"
          onChange={handleOnChange}
          value={form.password}
          type="password"
          placeholder={t("passwordPlaceholder")}
        />
        <Button>{t("send")}</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
