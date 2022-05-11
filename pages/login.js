import { LoginForm, LoginPageHeader } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";
import styled from "styled-components";

const PageContainer = styled.main``;

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
