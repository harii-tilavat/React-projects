import React, { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [textChanged, setTextChanged] = useState(false);
  function changeHandler() {
    setTextChanged(true);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!textChanged && <Output>It's good to see you.</Output>}
      {textChanged && <Output>Changed!</Output>}

      <button onClick={changeHandler}>Change text!</button>
    </div>
  );
};

export default Greetings;
