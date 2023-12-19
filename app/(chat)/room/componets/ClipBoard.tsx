// Import necessary modules and components
import { Button } from "@/app/components/ui/button";
import { toast } from "@/app/components/ui/use-toast";
import Image from "next/image";
import clipboardWhite from "@/app/(chat)/room/[id]/public/clipboard-white.svg";
import clipboardBlack from "@/app/(chat)/room/[id]/public/clipboard-dark.svg";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

const ClipBoard = () => {
  // Get the current pathname
  const pathname = usePathname();

  // Function to handle click on the button
  const handleClick = () => {
    // Show a toast notification
    toast({
      description: "Copied!",
      duration: 500,
    });
    // Copy the current URL to the clipboard
    navigator.clipboard.writeText(`https://nobr-delta.vercel.app${pathname}`);
  };

  // Render the button and tooltip if the pathname starts with "/room"
  return (
    <>
      {pathname.startsWith("/room") && (
        <div className="flex justify-center w-fit items-center gap-2">
          <Button
            variant={"secondary"}
            size={"sm"}
            onClick={handleClick}
            className="flex flex-row gap-2 self-end"
          >
            {/* Group the button content with a fragment */}
            <>
              <p>Copy Link</p>
              {/* Provide more descriptive alt text for the images */}
              <Image
                src={clipboardWhite}
                alt="Clipboard icon for light theme"
                className="dark:hidden w-auto h-auto"
              />
              <Image
                src={clipboardBlack}
                alt="Clipboard icon for dark theme"
                className="hidden dark:block  w-auto h-auto"
              />
            </>
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="w-2 h-2 bg-green-500 rounded-full"></TooltipTrigger>
              <TooltipContent>
                <p>Connected</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </>
  );
};

export default ClipBoard;
