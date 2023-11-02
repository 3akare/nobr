"use client";
import InputWithButton from "./InputWithButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const NewsletterComponents = () => {
  return (
    <Card className="container w-[90%] max-w-3xl text-center">
      <CardContent className="flex flex-col items-center gap-4 px-0">
        <CardHeader className="px-0">
          <CardTitle className="text-3xl">
            Get notified when we are launching
          </CardTitle>
          <CardDescription className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quibusdam repudiandae quod unde velit quidem in culpa?
          </CardDescription>
        </CardHeader>
        <InputWithButton />
      </CardContent>
    </Card>
  );
};

export default NewsletterComponents;
