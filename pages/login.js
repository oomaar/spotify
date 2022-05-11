import { LoginForm, LoginPageHeader } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";
import styled from "styled-components";

const PageContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const Login = () => {
  return (
    <div>
      <NextHead title="Login - Spotify" />
      <LoginPageHeader />

      <PageContainer>
        <LoginForm />
      </PageContainer>
    </div>
  );
};

export default Login;
