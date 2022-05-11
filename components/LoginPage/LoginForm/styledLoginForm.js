import styled from "styled-components";
import { smScreen, transitionFast } from "../../../global/GlobalStyle";

export const LoginFormContaier = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;

  p {
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.font.smFont};

    @media screen and (max-width: ${smScreen}) {
      text-align: center;
    }
  }

  hr {
    margin: 2rem 12px 0px;
    border: 0;
    border-top: 1px solid rgb(217, 218, 220);
    background-color: rgb(217, 218, 220);
    width: 100%;
  }
`;

export const LoginFormOrText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  hr {
    margin: 0px 12px;
    border: 0;
    border-top: 1px solid rgb(217, 218, 220);
    background-color: rgb(217, 218, 220);
    width: 100%;
  }
`;

export const LoginFormForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const LoginFormLabel = styled.label`
  margin-bottom: 0.4rem;
`;

export const LoginFormInput = styled.input`
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(217, 218, 180);
  outline: 0;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const LoginFormRemeberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormButton = styled.button`
  padding: 0.875rem 2rem;
  border-radius: 31.25rem;
  outline: 0;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.weight.bold};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: ${transitionFast};

  :hover {
    background-color: ${({ theme }) => theme.colors.textHover};
    transform: scale(1.1);
  }
`;

export const LoginFormRouteToSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;

  p {
    font-size: calc(${({ theme }) => theme.font.mdFont} - 1.5rem);

    @media screen and (max-width: ${smScreen}) {
      font-size: ${({ theme }) => theme.font.smFont};
    }
  }

  a {
    padding: 0.875rem 2rem;
    border-radius: 31.25rem;
    border: 1px solid rgb(217, 218, 180);
    width: 100%;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: #000;
    font-weight: ${({ theme }) => theme.weight.medium};
    transition: ${transitionFast};

    :hover {
      border: 1px solid #000;
    }
  }
`;
