export default function CtcSection() {
  return (
    <div className="grid grid-cols-2 gap-1 lg:gap-4 lg:w-[60%]">
      <button className="bg-light-black text-white rounded-full px-2 h-12 lg:h-[53.5px] text-sm lg:text-lg font-medium border border-transparent hover:border-light-black hover:bg-transparent hover:text-[#000000BF] transition-all duration-300">
        Join Now
      </button>
      <button className="border border-cta-border rounded-full px-2 text-[#000000BF] text-sm lg:text-lg font-medium hover:bg-light-black hover:text-white transition-all duration-300">
        Browse Books
      </button>
    </div>
  );
}
