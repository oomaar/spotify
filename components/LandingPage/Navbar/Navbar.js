import Link from "next/link";
import { useState } from "react";
import {
  NavbarContainer,
  NavLogo,
  NavbarBackDrop,
  NavResponsive,
  NavResponsiveLine,
  NavRightContainer,
  CloseIcon,
  NavList,
  NavLink,
  NavButtons,
  NavButton,
  NavResponsiveLogo,
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
          <Link href="/signup">
            <NavButton>Sign up</NavButton>
          </Link>
          <Link href="/login">
            <NavButton>Log in</NavButton>
          </Link>
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
