import { signIn } from "next-auth/react";
import { LoginPageContainer, LoginPageButton } from "./styledLoginPageMain";

export const LoginPageMain = ({ providers }) => {
  return (
    <LoginPageContainer>
      {Object.values(providers).map((provider) => (
        <LoginPageButton
          key={provider.name}
          onClick={() => signIn(provider.id, { callbackUrl: "/browse" })}
        >
          {provider.name === "Spotify" && <i className="bx bxl-spotify" />}{" "}
          Login with {provider.name}
        </LoginPageButton>
      ))}
    </LoginPageContainer>
  );
};
