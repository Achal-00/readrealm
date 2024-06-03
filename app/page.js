import HomeSection from "./components/HomeSection/HomeSection";
import MarqueeSection from "./components/MarqueeSection/MarqueeSection";

export default function Home() {
  return (
    <div className="">
      <HomeSection />
      <MarqueeSection />
      <section className="min-h-screen">Next Section</section>
    </div>
  );
}
