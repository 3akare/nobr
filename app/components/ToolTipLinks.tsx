import { VideoIcon } from "./logos/VideoIcon";
import { ChatIcon } from "./logos/ChatIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import Link from "next/link";
function ToolTipLinks() {
  return (
    <>
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
    </>
  );
}

export default ToolTipLinks;
