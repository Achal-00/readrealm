import Link from "next/link";

export default function SecThree() {
  return (
    <div className="flex flex-col gap-4 text-center lg:text-left">
      <h3 className="font-medium text-lg">My Account</h3>
      <div className="flex flex-col gap-2 text-[#0000008F] lg:self-start">
        <Link href="#" className="hover:text-black inline duration-300">
          Sign In
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          View Cart
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          Profile
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          View Order
        </Link>
        <Link href="#" className="hover:text-black inline duration-300">
          Track Order
        </Link>
      </div>
    </div>
  );
}
