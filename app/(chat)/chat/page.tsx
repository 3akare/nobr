// Import necessary modules
import * as React from "react";
import { ChatCard } from "@/app/(chat)/components/index";

// Define the content for the chat cards
const CardTextContent: Array<{
  title: string;
  description: string;
  link: string;
  buttonText: string;
}> = [
  {
    title: "Individual Chat",
    description:
      "Engage in one-on-one conversations with random strangers, all while maintaining your anonymity.",
    link: "/chat/asdsd",
    buttonText: "Chat",
  },
  {
    title: "Group Chat",
    description:
      "Engage in Group conversations with random strangers, all while maintaining your anonymity.",
    link: "/room",
    buttonText: "Group",
  },
];

// Define the Page component
const Page = () => {
  // Render a main element with a loading message
  return (
    <main className="min-h-[calc(100vh-224px)] md:min-h-[calc(100vh-192px)] flex items-center justify-center flex-col lg:flex-row lg:justify-center gap-8">
      {CardTextContent.map((item, index) => (
        <ChatCard
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
          buttonText={item.buttonText}
        />
      ))}
    </main>
  );
};

// Export the Page component as default
export default Page;
