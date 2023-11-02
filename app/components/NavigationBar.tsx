// next imports
import Link from "next/link";
import Image from "next/image";

//components
import { MenuBar, ModeToggle } from ".";

//images
import light from "@logos/light-nobr-logo.svg";
import dark from "@logos/dark-nobr-logo.svg";

const NavigationBar = () => {
  return (
    <header className="sticky p-2 top-0 z-10 w-full bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="p-2 container mx-auto flex justify-between items-center">
        <div className="flex gap-4 items-center justify-center">
          <MenuBar />
          <Link href="/" prefetch={true}>
            <Image
              src={light}
              alt="nobr logo (light mode)"
              className="dark:hidden"
              quality={80}
              loading="eager"
              priority={true}
            />
            <Image
              src={dark}
              alt="nobr logo (light mode)"
              className="hidden dark:block"
              quality={80}
              loading="eager"
              priority={true}
            />
          </Link>
        </div>
        <div>
          <ModeToggle variant={"ghost"} classname="focus-visible:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
