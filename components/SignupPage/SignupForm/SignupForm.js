import {
    SignupFormContainer,
    SignupFormForm,
    SignupFormInputContainer,
    SignupFormLabel,
    SignupFormInput,
    SignupFormButton,
    LoginRouter,
} from "./styledSignupForm"

export const SignupForm = () => {
    const handleSubmit = e => e.preventDefault();

    return (
        <SignupFormContainer>
            <SignupFormForm onSubmit={handleSubmit}>
                <SignupFormInputContainer>
                    <SignupFormLabel>What's your email?</SignupFormLabel>
                    <SignupFormInput type="text" placeholder="Enter your email." />
                </SignupFormInputContainer>
                <SignupFormInputContainer>
                    <SignupFormLabel>Confirm your email</SignupFormLabel>
                    <SignupFormInput type="text" placeholder="Enter your email again." />
                </SignupFormInputContainer>
                <SignupFormInputContainer>
                    <SignupFormLabel>Create a password</SignupFormLabel>
                    <SignupFormInput type="password" placeholder="Create a password." />
                </SignupFormInputContainer>
                <SignupFormInputContainer>
                    <SignupFormLabel>What should we call you?</SignupFormLabel>
                    <SignupFormInput type="password" placeholder="Enter a profile name." />
                    <span>This appears on your profile.</span>
                </SignupFormInputContainer>
                <SignupFormButton type="submit">Sign up</SignupFormButton>
                <LoginRouter>Have an account? <a href="/login">Login</a>.</LoginRouter>
            </SignupFormForm>
        </SignupFormContainer>
    )
}
