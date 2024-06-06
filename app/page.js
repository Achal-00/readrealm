import BrowseSection from "./components/BrowseSection/BrowseSection";
import HomeSection from "./components/HomeSection/HomeSection";
import MarqueeSection from "./components/MarqueeSection/MarqueeSection";
import PopularSection from "./components/PopularSection/PopularSection";

export default function Home() {
  return (
    <div className="">
      <HomeSection />
      <MarqueeSection />
      <BrowseSection />
      <PopularSection />
      <section className="min-h-screen">Next Section</section>
    </div>
  );
}
