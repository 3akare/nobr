// import FeaturesCard from "./FeaturesCard";

function Features() {
  // const list = [
  //   {
  //     cardHeading: "Hello world",
  //     cardText:
  //       "Commodi assumenda, quibusdam omnis quae aliquam cupiditate dignissimos in optio blanditiis officiis!",
  //     cardImg: "../../public/menu.svg",
  //   },
  //   {
  //     cardHeading: "Hello world",
  //     cardText:
  //       "Commodi assumenda, quibusdam omnis quae aliquam cupiditate dignissimos in optio blanditiis officiis!",
  //     cardImg: "../../public/menu.svg",
  //   },
  //   {
  //     cardHeading: "Hello world",
  //     cardText:
  //       "Commodi assumenda, quibusdam omnis quae aliquam cupiditate dignissimos in optio blanditiis officiis!",
  //     cardImg: "../../public/menu.svg",
  //   },
  // ];
  return (
    <section
      className="p-8 h-fit w-full flex flex-col items-center text-center space-y-6"
      id="features"
    >
      <h2 className="font-semibold text-[2.5rem] leading-[1.1] md:text-6xl">
        Features
      </h2>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg text-base sm:leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        voluptatem. Commodi assumenda, quibusdam omnis quae aliquam cupiditate
        dignissimos in optio blanditiis officiis!
      </p>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {/* {list.map((item, index) => {
          return <FeaturesCard key={index} {...item} />;
        })} */}
      </div>
    </section>
  );
}

export default Features;
