import AccordionList from "./components/AccordionList";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
    <main className="space-y-20">
      <HeroSection />
      <div className="w-72 h-72 -z-10 bg-secondary-pOrange dark:hidden opacity-20 absolute top-56 rounded-full blur-3xl backdrop-blur-3xl hidden md:block"></div>
      <section className="space-y-8">
        <Features />
        <div className="space-y-24">
          <AccordionList />
          <NewsLetter />
        </div>
      </section>
    </main>
  );
}
