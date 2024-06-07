import BookCover from "./BookCover";
import BookDetail from "./BookDetail";
import Header from "./Header";

export default function BestSellingSection() {
  return (
    <div className=" px-4 my-8 py-8 lg:py-12 lg:my-24 gap-8 lg:gap-12 bg-best-selling-bg grid grid-cols-[1fr_2fr] lg:px-[18%]">
      <Header />
      <BookCover />
      <BookDetail />
    </div>
  );
}
