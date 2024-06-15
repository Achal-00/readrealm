import BestSellingSection from "./components/BestSellingSection/BestSellingSection";
import BrowseSection from "./components/BrowseSection/BrowseSection";
import HomeSection from "./components/HomeSection/HomeSection";
import MarqueeSection from "./components/MarqueeSection/MarqueeSection";
import OfferSection from "./components/OfferSection/OfferSection";
import PopularSection from "./components/PopularSection/PopularSection";
import QuoteSection from "./components/QuoteSection/QuoteSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <MarqueeSection />
      <BrowseSection />
      <PopularSection />
      <BestSellingSection />
      <OfferSection />
      <QuoteSection />
    </div>
  );
}
