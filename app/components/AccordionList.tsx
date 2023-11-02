import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

function AccordionList() {
  return (
    <Accordion type="single" collapsible className="container mx-auto max-w-5xl p-4 sm:px-16 m-4 h-fit">
      <h1 className="text-2xl my-2 py-2 font-semibold">Frequently Asked Questions</h1>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-lg">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl">Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-lg">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl">Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-lg">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionList;
