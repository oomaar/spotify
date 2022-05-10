import styled from 'styled-components';
import { mdScreen } from '../../../global/GlobalStyle';

export const SignupFormContainer = styled.div`
  width: 80%;

  @media screen and (max-width: ${mdScreen}) {
    width: 90%;
  }
`;

export const SignupFormForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem 0;
  padding-bottom: 10rem;
`;

export const SignupFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignupFormLabel = styled.label`
  font-weight: ${({ theme }) => theme.weight.medium};
`;

export const SignupFormInput = styled.input`
  padding: 1rem 0.5rem;
  font-size: ${({ theme }) => theme.font.smFont};
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
`;

export const SignupFormButton = styled.button`
  color: #000;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 31.5rem;
  outline: 0;
  border: 0;
  width: 100px;
  align-self: center;
  font-size: ${({ theme }) => theme.font.smFont};

  :hover {
    background-color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const LoginRouter = styled.div`
  align-self: center;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
