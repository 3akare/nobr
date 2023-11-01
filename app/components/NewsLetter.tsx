
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export default function NewsLetter() {
  return (
    <Card className="container mx-auto max-w-5xl text-center space-y-4 rounded-none border-x-0 sm:border-x-[1px] sm:rounded-md">
      <CardHeader>
        <CardTitle className="text-3xl">
          Get notified when we are launching
        </CardTitle>
        <CardDescription className="text-lg">
          Reprehe enderit ad esse et non officia in nulla. Id proident tempo
          incididunt nostrud nulla et culoa
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex w-full items-center justify-center gap-4">
            <div className="flex flex-col flex-1 max-w-3xl">
              <Label htmlFor="name" className="sr-only">
                Name
              </Label>
              <Input
                id="name"
                type="email"
                placeholder="Name of your project"
                className="text-base"
              />
            </div>
            <Button className="self-end text-base">Deploy</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
