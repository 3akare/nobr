import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 gap-2">
      <Input
        type="email"
        placeholder="Email"
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button type="submit">Subscribe</Button>
    </div>
  );
}

export default InputWithButton;
