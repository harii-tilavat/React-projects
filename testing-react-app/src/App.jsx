import "./App.css";
import Async from "./components/Async";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div className="App">
      <Greetings />
      <Async/>
    </div>
  );
}

export default App;
