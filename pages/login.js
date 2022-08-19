import { LoginForm, LoginPageHeader } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";
import styled from "styled-components";
import { getProviders, signIn } from "next-auth/react";

const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  background: #333333df;
  position: fixed;
  inset: 0;
  color: #fff;
`;

const Login = ({ providers }) => {
  console.log("🚀 ~ file: login.js ~ line 12 ~ Login ~ providers", providers);

  return (
    <div>
      <NextHead title="Login - Spotify" />
      <LoginPageHeader />

      <PageContainer>Login Screen</PageContainer>
    </div>
  );
};

export default Login;
