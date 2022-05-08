import { SignupHeader } from "../components/SignupPage";
import styled from 'styled-components';
import { NextHead } from "../global/NextHead";

const PageContainer = styled.main`
  border: 1px solid red;
  width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Signup = () => {
    return (
        <PageContainer>
            <NextHead title="Sign up - Spotify" />

            <SignupHeader />
        </PageContainer>
    )
}

export default Signup;