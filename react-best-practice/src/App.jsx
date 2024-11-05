import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/Accordion/AccordionContent";
import AccordionItem from "./components/Accordion/AccordionItem";
import AccordionTitle from "./components/Accordion/AccordionTitle";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item" id="a1">
            <Accordion.Title id="a1" className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content id="a1" className="accordion-item-content">
              <article>
                <p>You can &apos;t go wrong with us. </p>
                <p>We are committed to protecting cultural heritage and supporting local businesses, helping to create positive impacts in the destinations we serve. </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="accordion-item" id="a2">
            <Accordion.Title className="accordion-item-title">Expert Guidance Every Step of the Way</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Our team of experienced travel specialists has been handpicked to provide you with expert guidance on every aspect of your trip.</p>
                <p>We understand that planning a trip can be overwhelming, so we handle all the details for you, from booking accommodations to arranging guided tours.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
