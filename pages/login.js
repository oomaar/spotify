import { LoginForm, LoginPageHeader } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";
import { getSession, useSession } from "next-auth/react";
import styled from "styled-components";

const PageContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const Login = () => {
  const { data: session } = useSession();

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

export async function getServerSideProps(context) {
  const { req, res } = context;
  const providers = await getProviders();
  const session = await getSession({ req });

  if (session) {
    res.statusCode = 302;
    res.setHeader("Location", "/browse");

    return {
      props: {
        session,
        providers,
      },
    };
  }

  return {
    props: {
      providers,
    },
  };
}
