import Image from "next/image";
import Link from "next/link";
import lightLogo from "../../public/light-nobr-logo.svg";
import darkLogo from "../../public/dark-nobr-logo.svg";

import { ModeToggle } from "./ModeToggle";
import { ChatIcon } from "./logos/ChatIcon";
// import MenuBar from "./MenuBar";
import { VideoIcon } from "./logos/VideoIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function NavBar() {
  return (
    <header className="sticky p-2 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="p-2 container mx-auto flex justify-between items-center font-medium text-sm">
        <div className="flex items-center space-x-8">
          <div className="flex gap-2 items-center justify-center">
            {/* <MenuBar /> */}
            <Link href="/" prefetch={true}>
              <Image
                src={lightLogo}
                alt="nobr logo"
                className="ml-2 dark:hidden"
                quality={100}
                loading="eager"
              />
              <Image
                src={darkLogo}
                alt="nobr logo"
                className="ml-2 hidden dark:block"
              />
            </Link>
          </div>
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
        <nav className="flex items-center gap-4">
          <div className="gap-4 items-center justify-center hidden sm:flex">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="/">
                    <ChatIcon className="w-5 h-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Text Chat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="/">
                    <VideoIcon className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Video Chat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <ModeToggle variant={"ghost"} classname="focus-visible:hidden" />
        </nav>
      </nav>
    </header>
  );
}

export default NavBar;
