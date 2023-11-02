import menu from "../../public/menu.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import twitterLogo from "@/public/Twitter.svg";
import linkedInLogo from "@/public/LinkedIn.svg";

import lightLogo from "../../public/light-nobr-logo.svg";
import darkLogo from "../../public/dark-nobr-logo.svg";

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
      <SheetContent side={"left"} className={cn("sm:hidden")}>
        <SheetHeader>
          <SheetTitle className="text-2xl text-left mb-12">
            <div className="flex gap-2 items-center">
              <Link href="/" prefetch={true}>
                <Image
                  src={lightLogo}
                  alt="nobr logo"
                  className="dark:hidden"
                  quality={100}
                  loading="eager"
                />
                <Image
                  src={darkLogo}
                  alt="nobr logo"
                  className="hidden dark:block"
                />
              </Link>
              <h1>nobr</h1>
            </div>
          </SheetTitle>
        </SheetHeader>
        <aside>
          <ul className="space-y-10 text-foreground font-bold text-3xl">
            <Link href="/" className="block">
              Terms & Conditions
            </Link>
            <Link href="/" className="block">
              Privacy Policy
            </Link>
            <Link href="/" className="block">
              Community Guidelines
            </Link>
          </ul>
          <div className="gap-8 flex absolute bottom-8">
            <Link href="">
              <Image src={twitterLogo} alt="twitter" className="w-10 h-10" />
            </Link>
            <Link href="">
              <Image src={linkedInLogo} alt="LinkedIn" className="w-10 h-10" />
            </Link>
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
}

export default MenuBar;
