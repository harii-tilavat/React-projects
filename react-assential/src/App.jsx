import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  console.log("APP COMPONENT CALLED !");

  return (
    <>
      <Header />
      <div>
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </div>
    </>
  );
}

export default App;
