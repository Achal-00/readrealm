import Navbar from "./components/Misc/Navbar";
import OverlayNavbar from "./components/Misc/OverlayNavbar";

export default function Home() {
  return (
    <div className="min-h-[200dvh] relative">
      <Navbar />
      <p>Home</p>
      <OverlayNavbar />
    </div>
  );
}
