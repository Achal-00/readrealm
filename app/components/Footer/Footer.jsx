import SecFive from "./SecFive";
import SecFour from "./SecFour";
import SecOne from "./SecOne";
import SecThree from "./SecThree";
import SecTwo from "./SecTwo";

export default function Footer() {
  return (
    <div className="bg-footer-bg px-4 lg:px-56 py-12 lg:pt-20 grid justify-center gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr]">
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />
    </div>
  );
}
