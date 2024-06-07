import CartSection from "./CartSection";
import ExtraDetail from "./ExtraDetail";

export default function BookDetail() {
  return (
    <div className="col-start-1 col-end-3 row-start-3 row-end-4 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:place-self-center">
      <ExtraDetail />
      <CartSection />
    </div>
  );
}
