import styled from "styled-components";
import { transitionFast } from "../../../global/GlobalStyle";

export const SignupOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem 0;
  margin-top: 3rem;
`;

export const SignupOptionsButton = styled.button`
  background: ${({ facebook }) => (facebook ? "#405a93" : "transparent")};
  color: ${({ facebook }) => (facebook ? "#fff" : "#55555a")};
  font-size: ${({ theme }) => theme.font.smFont};
  border: ${({ facebook }) => (facebook ? "0" : "1px solid #000")};
  outline: 0;
  border-radius: 31.5rem;
  padding: 0.875rem 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ${transitionFast};

  i {
    margin-right: 1rem;
  }
  
  :hover {
    background: ${({ facebook }) => (facebook ? "#384f81" : "transparent")};
    transform: scale(1.1);
  }
`;

export const SignupOptionsFooter = styled.div`
  text-align: center;
  position: relative;
  color: #8a857f;
  font-size: 1.2rem;

  span {
    padding: 0 1rem;
  }

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    background-color: #8a857f;
    width: 100px;
    height: 2px;
  }

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 30px;
    background-color: #8a857f;
    width: 100px;
    height: 2px;
  }
`;
