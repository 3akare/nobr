"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import send from "@images/send.svg";
import Image from "next/image";
import { useState } from "react";

const InputBar = () => {
  const [message, setMessage] = useState("");
  function handlesubmit(event: any) {
    event.preventDefault();
    setMessage("");
    console.log(message);
  }
  return (
    <form
      className="fixed bottom-0 w-full h-fit p-5 z-10  bg-background flex items-center justify-center "
      onSubmit={handlesubmit}
    >
      <section className="w-full max-w-2xl relative">
        <label htmlFor="messages" className="sr-only">
          Enter your messages
        </label>
        <div className="w-full max-w-2xl text-base h-14 min-h-12 relative border border-muted-foreground dark:border-muted rounded-xl flex p-1">
          <Input
            id="messages"
            placeholder="Message..."
            autoComplete="off"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            className="text-base w-[83%] sm:w-[90%] md:w-[99%]indent-2 h-full border-none hover:ring-0 focus-visible:ring-0 focus-within:ring-0 ring-0 ring-offset-0 focus:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <Button
          disabled={message === "" ? true : false}
          className="absolute right-1 p-2 m-1 top-1 h-10 w-10 rounded-lg bg-pOrange hover:bg-pOrange/80"
        >
          <Image
            src={send}
            alt="send"
            width={20}
            height={20}
            className="text-background"
          ></Image>
        </Button>
      </section>
    </form>
  );
};

export default InputBar;
