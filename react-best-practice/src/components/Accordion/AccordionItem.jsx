import React, { createContext, useContext } from "react";
const AccordionItemContext = createContext();
export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("This component must be wrapped by <Accordion.Item>.");
  }
  return context;
}
const AccordionItem = ({ id, children, className }) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
