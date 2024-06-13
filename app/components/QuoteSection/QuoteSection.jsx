import Content from "./Content";
import Header from "./Header";

export default function QuoteSection() {
  return (
    <div className="lg:px-20 px-4 py-24 lg:pt-32 text-center flex flex-col gap-8 lg:gap-12">
      <Header />
      <Content />
    </div>
  );
}
