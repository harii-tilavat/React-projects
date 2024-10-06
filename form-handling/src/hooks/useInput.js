import { useState } from "react";

export function useInput(defaultValue, validateFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const isValid = validateFn(enteredValue);
  
  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }
  return {
    value: enteredValue,
    didEdit,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !isValid,
  };
}
