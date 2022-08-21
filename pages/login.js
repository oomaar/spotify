import { LoginPageHeader, LoginPageMain } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";
import { getProviders } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div>
      <NextHead title="Login - Spotify" />
      <LoginPageHeader />
      <LoginPageMain providers={providers} />
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
