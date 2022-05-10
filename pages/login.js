import { LoginPageHeader } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";
import styled from 'styled-components';
import { lgScreen } from "../global/GlobalStyle";
import { SignupOptions } from "../components/SignupPage";
import { SignupFormForm, SignupFormInput, SignupFormInputContainer, SignupFormLabel } from "../components/SignupPage/SignupForm/styledSignupForm";

const PageContainer = styled.main`
  width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
  }

  span {
    margin-top: 1rem;
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

const Login = () => {
    const handleSubmit = e => e.preventDefault();

    return (
        <div>
            <NextHead title="Login - Spotify" />
            <LoginPageHeader />

            <PageContainer>
                <span>To continue, log in to Spotify.</span>
                <SignupOptions />
                <SignupFormForm onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <SignupFormInputContainer>
                        <SignupFormLabel>Email address or username</SignupFormLabel>
                        <SignupFormInput type="text" placeholder="Enter your email or username." />
                    </SignupFormInputContainer>
                    <SignupFormInputContainer>
                        <SignupFormLabel>Password</SignupFormLabel>
                        <SignupFormInput type="password" placeholder="Password" />
                    </SignupFormInputContainer>
                </SignupFormForm>
            </PageContainer>
        </div>
    )
}

export default Login;