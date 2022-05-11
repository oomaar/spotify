import styled from "styled-components";
import { mdScreen } from "../../../global/GlobalStyle";

export const LoginFormOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  @media screen and (max-width: ${mdScreen}) {
    button {
      width: 100%;
    }
  }
`;
