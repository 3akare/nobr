//next imports
import Link from "next/link";

//shadcn UI components
import { Button } from "./ui/button";

const HeroComponent = () => {
  return (
    <section className="p-2 w-full bg-background">
      <div className="container mx-auto p-4 w-full flex flex-col justify-center items-center space-y-10 text-center">
        <Link
          href="https://twitter.com/nobr_hq"
          target="_blank"
          className="px-4 py-2 rounded-3xl font-medium bg-pOrange w-fit shadow-md dark:text-background"
        >
          Follow along on Twitter
        </Link>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl max-w-2xl">
          Anonymous <span className="text-pOrange">Chat</span> for Everyone
        </h1>
        <h2 className="text-lg p-2">
          Discover a safe and fun way to connect with people from around the
          world
        </h2>
        <div className="flex gap-4">
          <Link href={"/chat/ss"} prefetch={false}>
            <Button
              className="w-36 sm:w-48 h-14 rounded-xl text-lg ring-2 ring-primary hover:ring-primary/90 shadow-md
          "
            >
              Chat
            </Button>
          </Link>
          <Link href={"/chat/ss"} prefetch={false}>
            <Button className="w-36 sm:w-48 h-14 rounded-xl text-lg ring-2 ring-pOrange bg-transparent text-pOrange hover:bg-pOrange hover:text-white shadow-md">
              Video
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
