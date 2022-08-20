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
  console.log("🚀 ~ file: login.js ~ line 16 ~ Login ~ providers", providers);

  const test = (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );

  return (
    <div>
      <NextHead title="Login - Spotify" />
      <LoginPageHeader />

      <PageContainer>Login Screen</PageContainer>
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
