import { createGlobalStyle } from "styled-components";

// Screens
export const xsScreen = `235px`;
export const smScreen = `320px`;
export const mdScreen = `425px`;
export const lgScreen = `768px`;
export const xlScreen = `1024px`;

// Constants
export const NavHeight = `5rem`;

// transitions
export const transitionFast = `all 0.3s ease-in`;
export const transitionSlow = `all 0.5s ease-in`;

export const theme = {
  colors: {
    primary: `#1ed760`,
    secondary: `#2941ab`,
    bodyColor: `#000`,
    textColor: `#8c9496`,
    textColorAlt: `#b7d5db`,
    textHover: `#1dd760`,
    titleColor: `#fff`,
    containerColor: `#222326`,
  },
  font: {
    xlFont: `9.75rem`,
    lgFont: `4.25rem`,
    mdFont: `3rem`,
    smFont: `1.125rem`,
    xsFont: `1rem`,
  },
  weight: {
    light: `400`,
    medium: `500`,
    bold: `700`,
  },
  zIndex: {
    base: `1`,
    level: `10`,
    nav: `100`,
    modal: `1000`,
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }
`;
