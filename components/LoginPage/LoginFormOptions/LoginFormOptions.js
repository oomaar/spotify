import { SignupOptionsButton } from "../../SignupPage/SignupOptions/styledSignupOptions";
import { LoginFormOptionsContainer } from "./styledLoginFormOptions";

export const LoginFormOptions = () => {
  return (
    <LoginFormOptionsContainer>
      <SignupOptionsButton facebook>
        <i className="bx bxl-facebook-circle" />
        Log in with Facebook
      </SignupOptionsButton>
      <SignupOptionsButton>
        <i className="bx bxl-google" />
        Log in with Google
      </SignupOptionsButton>
    </LoginFormOptionsContainer>
  );
};
