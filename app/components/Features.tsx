// import FeaturesCard from "./FeaturesCard";

import FeaturesCard from "./FeaturesCard";

function Features() {
  return (
    <section
      className="p-8 h-fit w-full flex flex-col items-center text-center space-y-6"
      id="features"
    >
      <h2 className="font-semibold text-[2.5rem] leading-[1.1] md:text-6xl">
        Features
      </h2>
      <p className="max-w-[42rem] leading-normal text-foreground sm:text-xl text-lg sm:leading-8 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        voluptatem. Commodi assumenda, quibusdam omnis quae aliquam cupiditate
        dignissimos in optio blanditiis officiis!
      </p>
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </div>
    </section>
  );
}

export default Features;
