import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function FeaturesCard() {
  return (
    <Card className="w-[20rem] sm:w-[18rem] md:w-[15.25rem] text-center">
      <CardHeader>
        <CardTitle>Hello world</CardTitle>
        <CardContent className="px-0 md:h-[16rem]">
          <CardDescription>Hello world it is me again</CardDescription>
        </CardContent>
        <CardFooter className="text-foreground-accent px-0">Coming Soon!</CardFooter>
      </CardHeader>
    </Card>
  );
}

export default FeaturesCard;
