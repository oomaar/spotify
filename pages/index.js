import { LandingContainer } from "../containers";
import { NextHead } from "../global/NextHead";

export default function Home() {
  return (
    <div>
      <NextHead title="Listening is everything - Spotify" />
      <LandingContainer />
    </div>
  );
}
