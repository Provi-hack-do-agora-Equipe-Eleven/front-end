import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import { Container, ContainerContent } from "./styles";
const RegisterPage = () => {
  return (
    <Container>
      <ContainerContent>
        <SignIn />
        <SignUp />
      </ContainerContent>
    </Container>
  );
};

export default RegisterPage;
