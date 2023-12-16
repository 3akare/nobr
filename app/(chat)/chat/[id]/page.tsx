// Import necessary components
import { ChatBody } from "../../components";

// Define a constant array for messages
const messages = ["This", "Space", "Isn't", "ready", "yet"];

// Define the Page component
// It renders a ChatBody component with a messages prop
const Page = () => {
  return (
    <ChatBody
      messages={messages}
      onMessageSubmit={() => {
        console.log("Hello world");
      }}
    />
  );
};

// Export the Page component as default
export default Page;
