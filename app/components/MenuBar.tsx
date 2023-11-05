"use client";
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
import twitter from "@logos/twitter.svg";
import linkedIn from "@logos/linkedIn.svg";

import light from "@logos/light-nobr-logo.svg";
import dark from "@logos/dark-nobr-logo.svg";
import menu from "@images/menu.svg";

//functions
import { cn } from "@/lib/utils";
import { useState } from "react";

function MenuBar() {
  const [open, setOpen] = useState(false);
  const handleOpenClose = () => {
    setOpen((state) => !state);
  };
  return (
    <Sheet onOpenChange={setOpen} open={open}>
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
              <Link href="/" onClick={handleOpenClose}>
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
                <Link
                  href="/legal#terms"
                  prefetch={true}
                  onClick={handleOpenClose}
                >
                  Terms of Services
                </Link>
              </li>
              <li className="w-fit">
                <Link
                  href="/legal#privacy"
                  onClick={handleOpenClose}
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="w-fit">
                <Link
                  href="/legal#community"
                  onClick={handleOpenClose}
                >
                  Community Guidelines
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-8 absolute bottom-16">
              <Link href="/https://twitter.com/nobr_hq" target="_blank">
                <Image src={twitter} alt="twitter" className="w-9 h-9" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/nobr/"
                target="_blank"
              >
                <Image src={linkedIn} alt="linkedIn" className="w-9 h-9" />
              </Link>
            </div>
          </aside>
        </section>
      </SheetContent>
    </Sheet>
  );
}

export default MenuBar;
