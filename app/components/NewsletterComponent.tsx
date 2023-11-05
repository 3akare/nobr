"use client";

//Components
import { InputForm } from ".";

//shadcn UI components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const NewsletterComponent = () => {
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
        <InputForm />
      </CardContent>
    </Card>
  );
};

export default NewsletterComponent;
