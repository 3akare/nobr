"use client";
// import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const InputBar = () => {
  return (
    <section className="fixed bottom-0 w-full h-fit p-5 flex items-center z-10  bg-background justify-center">
      <label htmlFor="messages" className="sr-only">
        Enter your messages
      </label>
      <Input
        id="messages"
        className="w-full max-w-2xl text-base h-14 min-h-12 relative hover:ring-0 focus-visible:ring-0 focus-within:ring-0 ring-0 ring-offset-0 focus:ring-0 focus-visible:ring-offset-0 rounded-xl"
        placeholder="Message..."
      ></Input>
      {/* a button will be here */}
    </section>
  );
};

export default InputBar;
