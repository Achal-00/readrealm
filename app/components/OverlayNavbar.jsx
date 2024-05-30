import Link from "next/link";

export default function OverlayNavbar() {
  return (
    <div className="md:hidden hidden overlay-navbar absolute top-0 left-0 bg-light-black w-full h-full z-40 p-4">
      <div className="min-h-screen relative flex flex-col items-center justify-center gap-8">
        <Link href={"#"} className="text-light-white text-4xl">
          HOME
        </Link>
        <Link href={"#"} className="text-light-white text-4xl">
          BOOKS
        </Link>
        <Link href={"#"} className="text-light-white text-4xl">
          RENT
        </Link>
        <Link href={"#"} className="text-light-white text-4xl">
          COMMUNITY
        </Link>
        <button className="text-white text-4xl border border-white w-full rounded-full py-2">
          LOGIN
        </button>
      </div>
    </div>
  );
}
