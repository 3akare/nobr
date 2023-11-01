import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export default function NewsLetter() {
  return (
    <Card className="container mx-auto max-w-5xl text-center space-y-8 rounded-none border-x-0 sm:border-x-[1px] sm:rounded-md backdrop-blur-md">
      <CardHeader>
        <CardTitle className="font-semibold text-[2rem] leading-[1.1] md:text-4xl">
          Get notified when we are launching
        </CardTitle>
        <CardDescription className="text-lg">
          Reprehe enderit ad esse et non officia in nulla. Id proident tempo
          incididunt nostrud nulla et culoa
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <form>
          <div className="flex w-full items-center justify-center gap-4 mb-8">
            <div className="flex flex-col flex-1 max-w-3xl ">
              <Label htmlFor="name" className="sr-only">
                Name
              </Label>
              <Input
                id="name"
                type="email"
                placeholder="Enter your email"
                className="text-lg focus:ring-0 focus-visible:ring-0 focus-within:ring-0 focus-visible:outline-none h-12 focus-visible:ring-offset-0"
              />
            </div>
            <Button className="self-end text-lg bg-secondary-pOrange hover:bg-background hover:text-foreground hover:ring-2 ring-secondary-pOrange hover:text-secondary-pOrange h-12">
              Deploy
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
