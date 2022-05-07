import styled from "styled-components";
import {
  lgScreen,
  smScreen,
  transitionFast,
  xlScreen,
} from "../../../global/GlobalStyle";

export const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 2rem 10rem 8rem;

  @media screen and (max-width: 1100px) {
    padding: 2rem 8rem 0.5rem;
  }

  @media screen and (max-width: ${lgScreen}) {
    padding: 2rem 1rem 0.5rem;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${xlScreen}) {
    flex-direction: column;
  }
`;

export const FooterLinksContaier = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: ${xlScreen}) {
    margin: 2rem 0;
  }

  @media screen and (max-width: ${lgScreen}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 2rem;

  p {
    color: ${({ theme }) => theme.colors.textColor};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.weight.medium};
  }

  li {
    margin: 1rem 0;
  }

  @media screen and (max-width: ${xlScreen}) {
    :first-child {
      margin-left: 0;
    }
  }

  @media screen and (max-width: ${lgScreen}) {
    margin-left: 0;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterSocialContaier = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: ${xlScreen}) {
    margin-top: 10rem;
  }
`;

export const FooterSocialIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  border-radius: 100%;
  padding: 0.9rem;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    transition: ${transitionFast};
  }

  :hover i {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterButtom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${smScreen}) {
    flex-direction: column;
  }
`;

export const FooterButtomLinks = styled.div`
  display: flex;
  gap: 0 1rem;
  flex-wrap: wrap;
`;

export const FooterButtomLink = styled.a`
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  transition: ${transitionFast};
  margin: 0.5rem 0;

  :hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const FooterCopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FooterLanguageButton = styled.button`
  margin: 2rem 0 1.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.1rem;
  transition: ${transitionFast};
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
  border: 0;
  outline: 0;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  :hover i {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const FooterCopy = styled.h6`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0;
  transition: ${transitionFast};

  span {
    font-size: 0.85rem;
  }

  @media screen and (max-width: ${smScreen}) {
    text-align: center;
    width: 100%;
  }

  :hover {
    transform: scale(1.2);
  }
`;
