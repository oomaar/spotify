import { LoginPageHeader } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";
import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div>
      <NextHead title="Login - Spotify" />
      <LoginPageHeader />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Login with {provider.name}
            </button>
          </div>
        ))}
      </div>
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
