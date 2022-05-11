import {
  SignupOptionsButton,
  SignupOptionsContainer,
  SignupOptionsFooter,
} from "./styledSignupOptions";

export const SignupOptions = () => {
  return (
    <SignupOptionsContainer>
      <SignupOptionsButton facebook>
        <i className="bx bxl-facebook-circle" />
        Sign up with Facebook
      </SignupOptionsButton>
      <SignupOptionsButton>
        <i className="bx bxl-google" />
        Sign up with Google
      </SignupOptionsButton>
      <SignupOptionsFooter>
        <span>or</span>
      </SignupOptionsFooter>
    </SignupOptionsContainer>
  );
};
