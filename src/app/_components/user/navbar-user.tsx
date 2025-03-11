import Link from "next/link";

export const NavbarUser = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-white/10">
      <Link href="/">
        <a className="text-white">Home</a>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="">
          <a className="text-white">Sign out</a>
        </Link>
      </div>
    </nav>
  );
}