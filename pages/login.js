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
      {!session ? (
        <>
          <LoginPageHeader />

          <PageContainer>
            <div>
              <LoginForm />
            </div>
          </PageContainer>
        </>
      ) : (
        <p>Logged In</p>
      )}
    </div>
  );
};

export default Login;
