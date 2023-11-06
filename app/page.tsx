import {
  AccordionList,
  HeroComponent,
  NewsletterComponent,
  Blob,
} from "@/app/components/index";
export default function Home() {
  return (
    <main className="my-8 space-y-20 w-full">
      <HeroComponent />
      <Blob />
      <AccordionList />
      <NewsletterComponent />
    </main>
  );
}
