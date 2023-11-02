import Image from "next/image";
import Link from "next/link";
import lightLogo from "../../public/light-nobr-logo.svg";
import darkLogo from "../../public/dark-nobr-logo.svg";

import { ModeToggle } from "./ModeToggle";
import MenuBar from "./MenuBar";
import ToolTipLinks from "./ToolTipLinks";

function NavBar() {
  return (
    <header className="sticky p-2 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="p-2 container mx-auto flex justify-between items-center font-medium">
        <div className="flex items-center space-x-8">
          <div className="flex gap-2 items-center justify-center">
            <MenuBar />
            <Link href="/" prefetch={true} className="m-2">
              <Image
                src={lightLogo}
                alt="nobr logo"
                className="dark:hidden"
                quality={100}
                loading="eager"
                priority
              />
              <Image
                src={darkLogo}
                alt="nobr logo"
                quality={100}
                loading="eager"
                className="hidden dark:block"
                priority
              />
            </Link>
          </div>
          {/* <div className="gap-4 items-center justify-center flex-1 hidden sm:flex text-foreground">
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
          </div> */}
        </div>
        <div className="flex items-center gap-4">
          <div className="gap-4 items-center justify-center hidden sm:flex">
            <ToolTipLinks />
          </div>
          <ModeToggle variant={"ghost"} classname="focus-visible:hidden w-10 h-10" />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
