import {
  AccordionList,
  HeroComponent,
  NewsletterComponent,
} from "@/app/components/index";
export default function Home() {
  return (
    <main className="my-8 space-y-20 w-full">
      <HeroComponent />
      <AccordionList />
      <NewsletterComponent />
    </main>
  );
}
