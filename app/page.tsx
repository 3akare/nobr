import AccordionList from "./components/AccordionList";
import HeroComponent from "./components/HeroComponent";
import NewsletterComponents from "./components/NewsletterComponents";

export default function Home() {
  return (
    <main className="my-8 space-y-20 w-full">
      <HeroComponent />
      <AccordionList />
      <NewsletterComponents />
    </main>
  );
}
