import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept/CoreConcept";
import Section from "./Section";
export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title={"Core concepts"}>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept {...conceptItem} key={index} />
        ))}
      </ul>
    </Section>
  );
}
