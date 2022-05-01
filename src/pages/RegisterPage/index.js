import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import { Container } from "./styles";
const RegisterPage = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default RegisterPage;
