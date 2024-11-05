import React from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";
const AccordionContent = ({ children, className }) => {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();
  const isOpen = id === openItemId;
  return <div className={`${className ?? ""} ${isOpen ? "open" : "close"}`}>{children}</div>;
};

export default AccordionContent;
