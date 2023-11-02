//next imports
import Image from "next/image";
import Link from "next/link";

//shadcn UI components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";


//images
import twitterLogo from "@images/twitter.svg";
import linkedInLogo from "@images/linkedIn.svg";
import light from "@logos/light-nobr-logo.svg";
import dark from "@logos/dark-nobr-logo.svg";
import menu from "@images/menu.svg";

//functions
import { cn } from "@/lib/utils";

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
        <section className="space-y-10 pl-2">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" prefetch={true}>
                <Image
                  src={light}
                  alt="nobr logo"
                  className="dark:hidden"
                  quality={100}
                  loading="eager"
                />
                <Image
                  src={dark}
                  alt="nobr logo"
                  className="hidden dark:block"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <aside>
            <ul className="space-y-10 text-foreground font-semibold text-3xl">
              <li className="w-fit">
                <Link href="/" prefetch={true}>
                  Terms of Services
                </Link>
              </li>
              <li className="w-fit">
                <Link href="/" prefetch={true}>
                  Privacy Policy
                </Link>
              </li>
              <li className="w-fit">
                <Link href="/" prefetch={true}>
                  Community Guidelines
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-8 absolute bottom-16">
              <Link href="/">
                <Image src={twitterLogo} alt="twitter" className="w-9 h-9" />
              </Link>
              <Link href="/">
                <Image src={linkedInLogo} alt="LinkedIn" className="w-9 h-9" />
              </Link>
            </div>
          </aside>
        </section>
      </SheetContent>
    </Sheet>
  );
}

export default MenuBar;
