import Image from "next/image";
import Link from "next/link";
import lightLogo from "../../public/light-nobr-logo.svg";
import darkLogo from "../../public/dark-nobr-logo.svg";
import menu from "../../public/menu.svg"
import { ModeToggle } from "./ModeToggle";
import { Linkedin } from "./logos/Linkedin";
import { Twitter } from "./logos/Twitter";

function NavBar() {
  return (
    <header className="sticky p-2 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="p-2 container mx-auto flex justify-between items-center font-medium text-sm">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <Image
              src={lightLogo}
              alt="nobr logo"
              className="ml-2 dark:hidden"
            />
            <Image
              src={darkLogo}
              alt="nobr logo"
              className="ml-2 hidden dark:block"
            />
          </Link>
          <ul className="gap-4 items-center justify-center flex-1 hidden sm:flex text-foreground">
            <Link
              href="/"
              className="transition-colors hover:text-foreground text-foreground/80"
            >
              Features
            </Link>
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/50"
            >
              Pricing
            </Link>
          </ul>
        </div>
        <nav className="flex items-center">
          <div className="flex gap-4 items-center justify-center">
            <Link href="">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="">
              <Linkedin className="w-6 h-6" />
            </Link>
            <ModeToggle variant={"ghost"} classname="focus-visible:hidden" />
            {/* <Link href="/">
              <Image src={menu} alt="menu" className="sm:hidden" />
            </Link> */}
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default NavBar;
