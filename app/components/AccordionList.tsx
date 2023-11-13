//shadcn UI components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

function AccordionList() {
  return (
    <Accordion
      type="single"
      collapsible
      className="container mx-auto max-w-5xl p-4 sm:px-16 m-4 h-fit"
    >
      <p className="text-2xl my-2 py-2 font-semibold text-left">
        Frequently Asked Questions
      </p>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">
          <p>
            What is <span className="text-pOrange">nobr</span>?
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          <span className="text-pOrange">nobr</span> is an anonymous chat
          platform designed to connect people with shared interests, ideas, and
          thoughts
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl">
          <p>
            What does <span className="text-pOrange">nobr</span> mean?
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          <span className="text-pOrange">nobr</span> is an abbreviation of
          &apos;nobber,&apos; which in turn is derived from
          &apos;hobbnobber.&apos; That&apos;s a fun play on the word
          &apos;hobnob,&apos; which means to socialize in a relaxed and informal
          way
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl text-left">
          <p>
            Is the <span className="text-pOrange">nobr</span> app available yet?
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          We&apos;re not there quite yet! We&apos;re still in the process of
          developing the app, but we expect it to be available for download
          soon. In the meantime, you can use our fully functional web
          application to chat anonymously with people from all over the world.
          Be sure to subscribe to our newsletters to get the latest news from{" "}
          <span className="text-pOrange">nobr</span>.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionList;
