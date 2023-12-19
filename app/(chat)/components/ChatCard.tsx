// Import necessary modules
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { CreateGroupChatDialog, JoinGroupChatDialog } from "./GroupChatDialogs";

// Define the props for the ChatCard component
interface ChatCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

// Define the ChatCard component
const ChatCard: React.FC<ChatCardProps> = ({
  title,
  description,
  buttonText,
  link,
}) => {
  // Render a Card component with a header, content, and footer
  return (
    <Card className="w-[350px] shadow-sm min-h-[16rem]">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>{/* an image will go here */}</CardContent>
      <CardFooter>
        {title !== "Group Chat" ? (
          <Link href={""}>
            <Button
              className="bg-pOrange text-md hover:bg-background hover:text-pOrange hover:outline"
              disabled={true}
            >
              Coming Soon!
              {/* {buttonText} */}
            </Button>
          </Link>
        ) : (
          <div className="flex gap-4">
            <CreateGroupChatDialog />
            {/* <JoinGroupChatDialog /> */}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

// Export the ChatCard component as default
export default ChatCard;
