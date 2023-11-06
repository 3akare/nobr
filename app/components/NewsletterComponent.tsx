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
            <p>Get notified when new things happen on </p>
            <span className="text-pOrange">nobr</span>
          </CardTitle>
          <CardDescription className="text-lg">
            Get your <span className="text-pOrange">nobr</span> updates
            delivered fresh to your inbox. Subscribe today!
          </CardDescription>
        </CardHeader>
        <InputForm />
      </CardContent>
    </Card>
  );
};

export default NewsletterComponent;
