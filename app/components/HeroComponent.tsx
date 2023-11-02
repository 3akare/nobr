import Link from "next/link";
import { Button } from "./ui/button";

const HeroComponent = () => {
  return (
    <section className="p-2 w-full bg-background">
      <div className="container mx-auto p-4 w-full flex flex-col justify-center items-center space-y-10 text-center">
        <Link
          href="/"
          className="px-4 py-2 rounded-3xl font-medium bg-pOrange w-fit"
        >
          Follow along on Twitter
        </Link>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl max-w-2xl">
          Anonymous <span className="text-pOrange">Chat</span> for Everyone
        </h1>
        <h2 className="text-lg p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          aspernatur quam soluta.
        </h2>
        <div className="flex gap-4">
          <Button className="w-36 sm:w-48 h-14 rounded-xl text-lg hover:text-pOrange hover:bg-secondary">
            Chat
          </Button>
          <Button className="w-36 sm:w-48 h-14 rounded-xl text-lg bg-secondary text-pOrange hover:bg-foreground hover:text-background">
            Chat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
