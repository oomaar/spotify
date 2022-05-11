import { LoginFormOptions } from "../";
import { LoginFormContaier, LoginFormOrText } from "./styledLoginForm";

export const LoginForm = () => {
  return (
    <LoginFormContaier>
      <p>To continue, log in to Spotify.</p>
      <LoginFormOptions />
      <LoginFormOrText>
        <hr />
        <p>OR</p>
        <hr />
      </LoginFormOrText>
    </LoginFormContaier>
  );
};
