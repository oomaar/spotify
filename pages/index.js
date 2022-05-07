import { Footer, Hero, Navbar } from "../components/LandingPage";
import { NextHead } from "../global/NextHead";

export default function Home() {
  return (
    <div>
      <NextHead title="Listening is everything - Spotify" />

      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
