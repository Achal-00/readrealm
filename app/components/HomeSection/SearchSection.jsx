export default function SearchSection() {
  return (
    <div className="flex border border-light-gray p-1 rounded-full h-12 lg:w-[80%]">
      <div className="flex gap-4 pl-4 w-full">
        <img src="search-icon.svg" alt="search" className="self-center" />
        <input
          type="text"
          placeholder="Search Book.."
          className="bg-main-bg border-none outline-none rounded-full border w-full h-full"
        />
      </div>
      <button className="bg-light-black text-white text-sm font-light rounded-full px-6">
        Search
      </button>
    </div>
  );
}
