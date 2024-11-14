import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";
const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];
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
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item 2"]} itemKeyFn={(item) => item}>
          {(item) => item} 
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
