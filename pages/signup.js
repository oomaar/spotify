import { SignupHeader, SignupOptions } from "../components/SignupPage";
import styled from 'styled-components';
import { NextHead } from "../global/NextHead";
import { lgScreen } from "../global/GlobalStyle";

const PageContainer = styled.main`
  border: 1px solid red;
  width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
  }
`;

const Signup = () => {
    return (
        <PageContainer>
            <NextHead title="Sign up - Spotify" />

            <SignupHeader />
            <SignupOptions />
        </PageContainer>
    )
}

export default Signup;