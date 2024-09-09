import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  console.log("APP COMPONENT CALLED !");
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log("SELECTED BUTTON :  ", selectedTopic);
    console.log("SELECTED PART :  ", EXAMPLES[selectedButton]);
  }
  return (
    <>
      <Header />
      <div>
        <main>
          <section id="core-concepts">
            <h2>Core concepts</h2>
            <ul>
              <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
              />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleClick("components")}>
                Components
              </TabButton>
              <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
              <TabButton onSelect={() => handleClick("state")}>State</TabButton>
            </menu>
          </section>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
