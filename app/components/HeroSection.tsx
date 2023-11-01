import Link from "next/link";
import { Button } from "./ui/button";
import { ExampleComponent } from "./AnimatedHeading";
// import DropDownMenu from "./DropDownMenu";

function HeroSection() {
  return (
    <section className="container mx-auto p-8 h-fit w-full text-center flex items-center flex-col space-y-12">
      <Link
        className="rounded-2xl bg-orange-500 text-background px-4 py-1.5 text-sm sm:text-base"
        target="_blank"
        href="/"
      >
        Follow along on Twitter
      </Link>
      <ExampleComponent />
      {/* <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl"> */}
      {/* Anonymous <span className="text-orange-500">Chat</span> For Everyone */}
      {/* </h1> */}
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl text-lg sm:leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        voluptatem. Commodi assumenda, quibusdam omnis quae aliquam cupiditate
        dignissimos in optio blanditiis officiis!
      </p>
      <div
        className="flex
       gap-4 items-center"
      >
        <Button className="w-36 h-14 sm:w-44 sm:h-18 text-base">Chat</Button>
        <Button
          variant="ghost"
          className="w-32 h-12 sm:w-44 sm:h-18 text-orange-500 hover:text-background outline hover:outline-orange-500 hover:bg-orange-500 transition-colors"
        >
          Video
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
