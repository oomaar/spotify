import { NavLogo } from "../Navbar/styledNavbar";
import {
  FooterContainer,
  FooterLinksContaier,
  FooterLinksList,
  FooterLink,
  FooterTop,
  FooterSocialContaier,
  FooterSocialIcon,
  FooterButtom,
} from "./styledFooter";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <NavLogo>
          <i className="bx bxl-spotify" />
          <p>Spotify</p>
        </NavLogo>
        <FooterLinksContaier>
          <FooterLinksList>
            <p>Company</p>
            <li>
              <FooterLink>About</FooterLink>
            </li>
            <li>
              <FooterLink>Jobs</FooterLink>
            </li>
            <li>
              <FooterLink>For the Record</FooterLink>
            </li>
          </FooterLinksList>
          <FooterLinksList>
            <p>Communities</p>
            <li>
              <FooterLink>For Artists</FooterLink>
            </li>
            <li>
              <FooterLink>Developers</FooterLink>
            </li>
            <li>
              <FooterLink>Advertising</FooterLink>
            </li>
            <li>
              <FooterLink>Investors</FooterLink>
            </li>
            <li>
              <FooterLink>Vendors</FooterLink>
            </li>
          </FooterLinksList>
          <FooterLinksList>
            <p>Useful Links</p>
            <li>
              <FooterLink>Support</FooterLink>
            </li>
            <li>
              <FooterLink>Web Player</FooterLink>
            </li>
            <li>
              <FooterLink>Free Mobile App</FooterLink>
            </li>
          </FooterLinksList>
        </FooterLinksContaier>
        <FooterSocialContaier>
          <FooterSocialIcon>
            <i className="bx bxl-instagram" />
          </FooterSocialIcon>
          <FooterSocialIcon>
            <i className="bx bxl-twitter" />
          </FooterSocialIcon>
          <FooterSocialIcon>
            <i className="bx bxl-facebook" />
          </FooterSocialIcon>
        </FooterSocialContaier>
      </FooterTop>
      <FooterButtom>bottom</FooterButtom>
    </FooterContainer>
  );
};
