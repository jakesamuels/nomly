import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center">
      <Link href="/">
        <Image src="/logo.png" width={50} height={50} alt="Nomly logo" />
      </Link>
    </nav>
  );
};

export default Nav;
