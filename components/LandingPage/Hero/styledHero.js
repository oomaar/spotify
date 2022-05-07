import styled from "styled-components";
import {
  lgScreen,
  mdScreen,
  smScreen,
  transitionFast,
  xlScreen,
} from "../../../global/GlobalStyle";

export const HeroContainer = styled.div`
  background: url("/hero.svg"), ${({ theme }) => theme.colors.secondary};
  background-size: 175%;
  background-position: 46% 4%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${xlScreen}) {
    background-size: 250%;
  }

  @media screen and (max-width: ${lgScreen}) {
    background-size: 350%;
  }

  @media screen and (max-width: ${mdScreen}) {
    background-size: 500%;
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.xlFont};
  margin: 0;

  div {
    transform: translateX(100px);

    @media screen and (max-width: ${lgScreen}) {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: ${xlScreen}) {
    font-size: calc(${({ theme }) => theme.font.xlFont} - 2.5rem);
  }

  @media screen and (max-width: ${lgScreen}) {
    font-size: calc(${({ theme }) => theme.font.xlFont} - 4.5rem);
  }

  @media screen and (max-width: ${mdScreen}) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: ${smScreen}) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.smFont};

  @media screen and (max-width: ${lgScreen}) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: ${mdScreen}) {
    text-align: center;
  }

  @media screen and (max-width: ${smScreen}) {
    font-size: 0.9rem;
  }
`;

export const HeroButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.smFont};
  border-radius: 31.5rem;
  border: 1px solid transparent;
  outline: 0;
  padding: 0.875rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 1rem;
  transition: ${transitionFast};

  :hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }

  @media screen and (max-width: ${smScreen}) {
    padding: 0.7rem 1rem;
    font-size: ${({ theme }) => theme.font.xsFont};
  }
`;
