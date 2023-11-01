import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

function AccordionList() {
  return (
    <Accordion type="single" collapsible className="container mx-auto max-w-5xl p-4 m-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg">Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-base">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg">Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-base">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionList;
