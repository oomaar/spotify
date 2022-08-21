import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #000;
  position: fixed;
  inset: 0;
  right: unset;
  width: 250px;

  hr {
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.textColor};
  }
`;

export const SidebarSubContainer = styled.div``;

export const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover {
    color: #fff;
  }
`;
