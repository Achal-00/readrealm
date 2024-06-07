import Content from "./Content";
import Header from "./Header";

export default function PopularSection() {
  return (
    <div className="lg:px-20 px-4 py-4 flex flex-col gap-8 lg:gap-12">
      <Header />
      <Content />
    </div>
  );
}
