import { SignupHeader } from "../components/SignupPage";
import styled from 'styled-components';

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
            <SignupHeader />
        </PageContainer>
    )
}

export default Signup;