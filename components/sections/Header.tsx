import { ArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-start py-3  bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block px-1">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p> Get started for free</p>
          <ArrowRight className="h-4  inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5 px-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src='/logosaas.png' alt="logo" height={40} width={40}  />
            <MenuIcon className="h-5 w-5 md:hidden"/>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Customers</Link>
            <Link href={"#"}>Updates</Link>
            <Link href={"#"}>Help</Link>

            <button className="bg-black text-white rounded-lg px-4 py-2 font-medium justify-center inline-flex tracking-tight">Get For Free</button>

            </nav>
          </div>

        </div>

      </div>

    </header>
  )
};
