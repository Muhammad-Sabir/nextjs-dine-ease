import Image from "next/image";
import Link from "next/link";

import logo from "$/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4">
      <Image src={logo} alt="Img" width={140} height={70} />

      <Link
        href="/login"
        className="border-primary text-primary hover:bg-primary hover:text-tertiary rounded-lg border-2 border-solid px-2 py-1 font-medium"
      >
        Login
      </Link>
    </nav>
  );
}
