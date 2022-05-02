import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Form, Button, Div, Flex } from "./styles";
import { states } from "../../utils/utils";

const CreateProjectForm = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    state: "",
    city: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
    pix: "",
    project_image: "",
  });
  const { t } = useTranslation();
  const handleOnChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  return (
    <Container>
      <Form>
        <Div>
          <h1>{t("projectInformation")}</h1>
          <input
            placeholder={t("projectTitle")}
            onChange={handleOnChange}
            value={form.name}
            name="name"
          />
          <textarea
            placeholder={t("description")}
            onChange={handleOnChange}
            value={form.description}
            name="description"
          />
          <Flex>
            <input
              placeholder={t("city")}
              onChange={handleOnChange}
              value={form.city}
              name="city"
            />
            <select onChange={handleOnChange} value={form} name="state">
              <option value="">{t("state")}</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </Flex>
          <input
            placeholder="Url Image"
            onChange={handleOnChange}
            value={form.project_image}
            name="project_image"
          />
          <input
            placeholder="Pix"
            onChange={handleOnChange}
            value={form.pix}
            name="pix"
          />
        </Div>
        <hr />
        <Div>
          <h1>{t("projectContact")}</h1>
          <Flex>
            <input
              placeholder="E-mail"
              onChange={handleOnChange}
              value={form.email}
              name="email"
            />
            <input
              placeholder={t("phonePlaceholder")}
              onChange={handleOnChange}
              value={form.phone}
              name="phone"
            />
          </Flex>
          <input
            placeholder="Site"
            onChange={handleOnChange}
            value={form.website}
            name="website"
          />
          <input
            placeholder="Instagram"
            onChange={handleOnChange}
            value={form.instagram}
            name="instagram"
          />
        </Div>
        <Button>Salvar</Button>
      </Form>
    </Container>
  );
};

export default CreateProjectForm;
