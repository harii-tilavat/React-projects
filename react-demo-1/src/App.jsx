import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} Fundamental React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}
// eslint-disable-next-line react/prop-types
function CoreConcept({ title, image, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <div id="core-concepts">
            <h2>Core concepts</h2>
            <ul>
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
