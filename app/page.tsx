import AccordionList from "./components/AccordionList";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
    <main className="space-y-20">
      <HeroSection />
      <Features />
      <section>
        <AccordionList />
        <NewsLetter />
      </section>
    </main>
  );
}
