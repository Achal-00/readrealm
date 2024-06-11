import Content from "./Content";
import Header from "./Header";

export default function OfferSection() {
  return (
    <div className="lg:px-20 px-4 pb-4 flex flex-col gap-8 lg:gap-12">
      <Header />
      <Content />
    </div>
  );
}
