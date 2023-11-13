"use client";
//Zod imports
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

//Shadcn imports
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { toast } from "@/app/components/ui/use-toast";

//Firebase imports
import { addDoc } from "firebase/firestore";
import { collectionRef } from "../../firebase";

const FormSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().email(),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const docRef = await addDoc(collectionRef, { ...data });
      if (docRef) {
        toast({
          title: "Contact Saved!",
          description: <p>Your email has been saved successfully!</p>,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: <p>Unable to save your contact. Please try again!</p>,
      });
    }
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 text-left"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 h-11 text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 h-11 text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
