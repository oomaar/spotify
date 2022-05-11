import {
  LoginPageHeaderContainer,
  LoginPageHeaderLogo,
} from "./styledLoginPageHeader";

export const LoginPageHeader = () => {
  return (
    <LoginPageHeaderContainer>
      <LoginPageHeaderLogo>
        <i className="bx bxl-spotify" />
        <p>Spotify</p>
      </LoginPageHeaderLogo>
    </LoginPageHeaderContainer>
  );
};
