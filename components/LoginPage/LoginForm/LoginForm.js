import Link from "next/link";
import { LoginFormOptions } from "../";
import {
  LoginFormContaier,
  LoginFormOrText,
  LoginFormForm,
  LoginFormInputContainer,
  LoginFormLabel,
  LoginFormInput,
  LoginFormRemeberMeContainer,
  FormButton,
  LoginFormRouteToSignUpContainer,
} from "./styledLoginForm";

export const LoginForm = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <LoginFormContaier>
      <p>To continue, log in to Spotify.</p>
      <LoginFormOptions />
      <LoginFormOrText>
        <hr />
        <p>OR</p>
        <hr />
      </LoginFormOrText>
      <LoginFormForm onSubmit={handleSubmit}>
        <LoginFormInputContainer>
          <LoginFormLabel>Email address or username</LoginFormLabel>
          <LoginFormInput type="text" placeholder="Email address or username" />
        </LoginFormInputContainer>
        <LoginFormInputContainer>
          <LoginFormLabel>Password</LoginFormLabel>
          <LoginFormInput type="password" placeholder="Password" />
        </LoginFormInputContainer>
        <LoginFormRemeberMeContainer>
          <div>
            <input type="checkbox" />
            <LoginFormLabel>Remeber Me</LoginFormLabel>
          </div>
          <FormButton type="submit">Log in</FormButton>
        </LoginFormRemeberMeContainer>
      </LoginFormForm>
      <hr />
      <LoginFormRouteToSignUpContainer>
        <p>Don't have an account?</p>
        <Link href="/signup">
          <a>Sign up for spotify</a>
        </Link>
      </LoginFormRouteToSignUpContainer>
    </LoginFormContaier>
  );
};
