import { LoginForm, LoginPageHeader } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";
import styled from "styled-components";
import { getProviders, signIn } from "next-auth/react";

const PageContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const Login = ({ providers }) => {
  console.log("🚀 ~ file: login.js ~ line 12 ~ Login ~ providers", providers);

  return (
    <div>
      <NextHead title="Login - Spotify" />
      <LoginPageHeader />

      <PageContainer>
        {/* {Object.values(providers).map((provider) => (
          <div>
            <button>Login with {provider.name}</button>
          </div>
        ))} */}
      </PageContainer>
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
