"use client";

// Import necessary components
import { InputForm } from ".";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// Define the NewsletterComponent
const NewsletterComponent = () => {
  return (
    <Card className="container w-[90%] max-w-3xl text-center mx-auto">
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
