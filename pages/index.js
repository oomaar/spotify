import { Sidebar } from "../components/HomePage";
import { NextHead } from "../global/NextHead";

export default function Home() {
  return (
    <div>
      <NextHead title="Listening is everything - Spotify" />

      <div>
        <main>
          <Sidebar />
          {/* Center browse component */}
        </main>
        <div>{/* Player at the bottom */}</div>
      </div>
    </div>
  );
}
