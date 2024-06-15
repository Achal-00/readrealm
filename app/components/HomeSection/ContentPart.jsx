import CtcSection from "./CtcSection";
import MainHeading from "./MainHeading";
import SearchSection from "./SearchSection";
import SubHeading from "./SubHeading";

export default function ContentPart() {
  return (
    <div className="lg:pl-20 px-4 self-center flex flex-col gap-2 lg:bottom-24 relative pt-12 lg:pt-0">
      <MainHeading />
      <SubHeading />
      <div className="flex flex-col gap-2 lg:gap-6 mt-8 md:w-[75%] lg:w-full other-content">
        <SearchSection />
        <CtcSection />
      </div>
    </div>
  );
}
