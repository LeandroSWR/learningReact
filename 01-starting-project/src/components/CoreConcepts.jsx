import {CORE_CONCEPTS} from "../data.js";
import CoreConcept from "./CoreConcept/CoreConcept.jsx";
import Section from "./Section";

export default function CoreConcepts() {
  return (
      <Section title="Core concepts" id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept {...conceptItem} key={index} />
          ))}
        </ul>
      </Section>
  );
}