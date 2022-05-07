import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
} from "./styledHero";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        Listening is <div>everything</div>
      </HeroTitle>
      <HeroSubtitle>
        Millions of songs and podcasts. No credit card needed.
      </HeroSubtitle>
      <HeroButton>Get Spotify Free</HeroButton>
    </HeroContainer>
  );
};
