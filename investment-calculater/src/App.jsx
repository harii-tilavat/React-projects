import Header from "./components/Header";
import Calculater from "./components/Calculater";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

const initialValue = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialValue);
  const isInputValid = userInput.duration > 0;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <main>
      <Header />
      <Calculater userInput={userInput} onInputChange={handleChange} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero!</p>
      )}
      {isInputValid && <ResultTable input={userInput} />}
    </main>
  );
}

export default App;
