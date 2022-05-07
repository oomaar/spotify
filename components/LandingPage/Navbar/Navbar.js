import { useState } from "react";
import {
  NavbarContainer,
  NavLogo,
  NavList,
  NavLink,
  NavButtons,
  NavRightContainer,
  NavButton,
  NavResponsive,
  NavResponsiveLine,
  NavResponsiveLogo,
  CloseIcon,
  NavbarBackDrop,
} from "./styledNavbar";

export const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <NavbarContainer>
      <NavLogo>
        <i className="bx bxl-spotify" />
        <p>Spotify</p>
      </NavLogo>
      <NavbarBackDrop
        toggleNavbar={toggleNavbar}
        onClick={() => setToggleNavbar(false)}
      />
      <NavResponsive onClick={() => setToggleNavbar(true)}>
        <NavResponsiveLine></NavResponsiveLine>
        <NavResponsiveLine></NavResponsiveLine>
        <NavResponsiveLine></NavResponsiveLine>
      </NavResponsive>
      <NavRightContainer toggleNavbar={toggleNavbar}>
        <CloseIcon onClick={() => setToggleNavbar(false)}>
          <i className="bx bx-x" />
        </CloseIcon>
        <NavList>
          <li>
            <NavLink>Premium</NavLink>
          </li>
          <li>
            <NavLink>Support</NavLink>
          </li>
          <li>
            <NavLink>Download</NavLink>
          </li>
        </NavList>
        <NavButtons>
          <NavButton>Sign up</NavButton>
          <NavButton>Log in</NavButton>
        </NavButtons>
        <NavResponsiveLogo>
          <NavLogo>
            <i className="bx bxl-spotify" />
            <p>Spotify</p>
          </NavLogo>
        </NavResponsiveLogo>
      </NavRightContainer>
    </NavbarContainer>
  );
};
