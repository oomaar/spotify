import styled from "styled-components";

export const LoginPageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.mdFont};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: #fff;
  box-shadow: 0px 5px 9px rgba(255, 255, 255, 0.2);
`;
