import styled from "styled-components";
import {
  lgScreen,
  mdScreen,
  NavHeight,
  smScreen,
  transitionFast,
  xlScreen,
} from "../../../global/GlobalStyle";

export const NavbarContainer = styled.nav`
  background-color: #000;
  color: ${({ theme }) => theme.colors.titleColor};
  height: ${NavHeight};
  padding: 0.5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    padding: 0.5rem 8rem;
  }

  @media screen and (max-width: ${lgScreen}) {
    padding: 0.5rem 1rem;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.mdFont};
  cursor: pointer;

  p {
    margin: 0 1rem;

    @media screen and (max-width: ${mdScreen}) {
      margin: 0.5rem;
    }
  }

  @media screen and (max-width: ${xlScreen}) {
    font-size: calc(${({ theme }) => theme.font.mdFont} - 1rem);
  }

  @media screen and (max-width: ${mdScreen}) {
    font-size: calc(${({ theme }) => theme.font.mdFont} - 1.5rem);
  }
`;

export const NavbarBackDrop = styled.div`
  transform: translateX(-500vw);
  transition: ${transitionFast};

  @media screen and (max-width: ${xlScreen}) {
    transform: ${({ toggleNavbar }) =>
      toggleNavbar ? "translateX(0)" : "translateX(-500vw)"};
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    inset: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
  }
`;

export const NavResponsive = styled.div`
  display: none;

  @media screen and (max-width: ${xlScreen}) {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem 0;
    cursor: pointer;
  }
`;

export const NavResponsiveLine = styled.div`
  width: 1.8rem;
  height: 0.15rem;
  background-color: #fff;
  border-radius: 2rem;
`;

export const NavRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1.5rem;
  transform: translateX(0);
  transition: ${transitionFast};

  @media screen and (max-width: ${xlScreen}) {
    transform: ${({ toggleNavbar }) =>
      toggleNavbar ? "translateX(0)" : "translateX(500vw)"};
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    position: fixed;
    width: 50%;
    background-color: #000;
    inset: 0;
    left: unset;
    height: 100vh;
    z-index: ${({ theme }) => theme.zIndex.modal};
  }

  @media screen and (max-width: 630px) {
    width: 100%;
  }
`;

export const CloseIcon = styled.div`
  display: none;

  @media screen and (max-width: ${xlScreen}) {
    display: block;
    position: absolute;
    right: 2rem;
    font-size: ${({ theme }) => theme.font.mdFont};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  gap: 0 1rem;
  border-right: 2px solid #fff;
  padding-right: 2rem;

  @media screen and (max-width: ${xlScreen}) {
    flex-direction: column;
    border: 0;
    border-bottom: 2px solid #fff;
    width: 2rem;
    padding: 0 0 2rem 0;
    gap: 1rem 0;
  }
`;

export const NavLink = styled.a`
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.smFont};
  color: #fff;
  font-weight: ${({ theme }) => theme.weight.bold};
  transition: ${transitionFast};

  :hover {
    color: ${({ theme }) => theme.colors.textHover};
  }

  @media screen and (max-width: ${xlScreen}) {
    font-size: ${({ theme }) => theme.font.mdFont};
  }

  @media screen and (max-width: ${smScreen}) {
    font-size: calc(${({ theme }) => theme.font.smFont} + 0.5rem);
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;

  @media screen and (max-width: ${xlScreen}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;
    gap: 1rem 0;
  }
`;

export const NavButton = styled.button`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.font.smFont};
  font-weight: ${({ theme }) => theme.weight.bold};
  background: 0;
  outline: 0;
  border: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: ${transitionFast};

  :hover {
    color: ${({ theme }) => theme.colors.textHover};
  }

  @media screen and (max-width: ${xlScreen}) {
    font-size: calc(${({ theme }) => theme.font.mdFont} - 1.5rem);
  }

  @media screen and (max-width: ${smScreen}) {
    font-size: calc(${({ theme }) => theme.font.smFont} + 0.5rem);
  }
`;

export const NavResponsiveLogo = styled.div`
  display: none;

  @media screen and (max-width: ${xlScreen}) {
    display: block;
    margin-top: auto;
  }
`;
