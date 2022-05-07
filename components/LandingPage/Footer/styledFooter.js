import styled from "styled-components";
import {
  lgScreen,
  transitionFast,
  xlScreen,
} from "../../../global/GlobalStyle";

export const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 2rem 10rem 0.5rem;

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
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;

  i {
    transition: ${transitionFast};
  }

  :hover i {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
