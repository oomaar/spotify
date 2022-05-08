import { SignupHeaderContainer, SignupHeaderLogo, SignupHeaderText } from "./styledSignupHeader"

export const SignupHeader = () => {
    return (
        <SignupHeaderContainer>
            <SignupHeaderLogo>
                <i className="bx bxl-spotify" />
                <p>Spotify</p>
            </SignupHeaderLogo>
            <SignupHeaderText>Sign up for free to start listening.</SignupHeaderText>
        </SignupHeaderContainer>
    )
}
