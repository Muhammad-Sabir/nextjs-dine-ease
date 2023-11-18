import Image from "next/image";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

import logo from "$/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-tertiary sticky top-0 flex items-center justify-between px-7">
      <Image src={logo} alt="Img" width={140} height={70} />

      <div className="flex gap-4">
        <Link
          href="/signup"
          className="border-primary text-primary hover:bg-primary hover:text-tertiary hidden rounded-sm border-2 border-solid px-2 py-1 md:flex"
        >
          Sign Up
        </Link>

        <Link
          href="/login"
          className="bg-primary text-tertiary border-primary hover:bg-tertiary hover:text-primary hidden rounded-sm border-2 border-solid px-2 py-1 md:flex"
        >
          <FaCircleUser className="mr-2" /> Login
        </Link>

        <Link href="/login">
          <FaCircleUser className="text-primary text-2xl md:hidden" />
        </Link>
      </div>
    </nav>
  );
}
