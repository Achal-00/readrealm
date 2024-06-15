import Link from "next/link";

export default function SecTwo() {
  return (
    <div className="flex flex-col gap-4 text-center lg:text-left">
      <h3 className="font-medium text-lg">Company</h3>
      <div className="flex flex-col gap-2 text-[#0000008F] lg:self-start">
        <Link href="#" className="hover:text-black inline duration-300">
          About Us
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          Blogs
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          Contact Us
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          Feedback
        </Link>
      </div>
    </div>
  );
}
