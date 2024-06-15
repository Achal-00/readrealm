import Link from "next/link";

export default function SecFour() {
  return (
    <div className="flex flex-col gap-4 text-center lg:text-left">
      <h3 className="font-medium text-lg">Help</h3>
      <div className="flex flex-col gap-2 text-[#0000008F] lg:self-start">
        <Link href="#" className="hover:text-black inline duration-300">
          Help Center
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          FAQs
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          Report a Problem
        </Link>
      </div>
    </div>
  );
}
