import { SignupOptionsButton } from "../../SignupPage/SignupOptions/styledSignupOptions";
import { LoginFormOptionsContainer } from "./styledLoginFormOptions";
import { signIn } from "next-auth/react";

export const LoginFormOptions = () => {
  return (
    <LoginFormOptionsContainer>
      <SignupOptionsButton facebook>
        <i className="bx bxl-facebook-circle" />
        Log in with Facebook
      </SignupOptionsButton>
      <SignupOptionsButton onClick={() => signIn()}>
        <i className="bx bxl-google" />
        Log in with Google
      </SignupOptionsButton>
    </LoginFormOptionsContainer>
  );
};
