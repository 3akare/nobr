import menu from "../../public/menu.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import twitterLogo from "@/public/Twitter.svg";
import linkedInLogo from "@/public/LinkedIn.svg";

function MenuBar() {
  return (
    <Sheet>
      <SheetTrigger className={cn("sm:hidden")}>
        <Image
          src={menu}
          alt="menu"
          className="sm:hidden dark:filter dark:invert"
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className={cn("flex items-center justify-center sm:hidden")}
      >
        <aside className="space-y-20">
          <ul className="space-y-20 text-xl text-foreground flex flex-col items-center">
            <Link href="#features" className="">
              Features
            </Link>
            {/* <Link href="/" className="" aria-disabled>
              Pricing
            </Link> */}
            <Link href="#about" className="">
              About
            </Link>
            <Link href="/" className="">
              Terms & Conditions
            </Link>
          </ul>
          <div className="gap-8 items-center justify-center flex">
            <Link href="">
              <Image src={twitterLogo} alt="twitter" className="w-6 h-6" />
            </Link>
            <Link href="">
              <Image src={linkedInLogo} alt="LinkedIn" className="w-6 h-6" />
            </Link>
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
}

export default MenuBar;
