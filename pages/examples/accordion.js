import Container from "../../components/ui/Container";
import Page from "../../components/layout/Page";
import Accordion, {
  AccordionBody,
  AccordionContent,
  AccordionHeading,
} from "../../components/ui/Accordion";

function accordion() {
  return (
    <Page>
      <div className="flex flex-wrap flex-row">
        <div className="flex-shrink max-w-full px-4 w-full">
          <p className="text-xl font-bold mt-3 mb-5">Accordions</p>
          <Container>
            <Accordion>
              <AccordionContent active="true">
                <AccordionHeading>
                  How is the SEO services system at Taidash?
                </AccordionHeading>
                <AccordionBody>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here making it look like readable English.
                </AccordionBody>
              </AccordionContent>
              <AccordionContent>
                <AccordionHeading>
                  How is the SEO services system at Taidash?
                </AccordionHeading>
                <AccordionBody>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here making it look like readable English.
                </AccordionBody>
              </AccordionContent>
            </Accordion>
          </Container>
        </div>
      </div>
    </Page>
  );
}

export default accordion;
