"use client";

import React, { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionContext = createContext({
  expanded: null,
  setExpanded: () => {},
});

export const Accordion = ({
  children,
  type = "single",
  collapsible = false,
  className = "",
}) => {
  const [expanded, setExpanded] = useState(null);

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ children, value, className = "" }) => {
  const { expanded, setExpanded } = useContext(AccordionContext);
  const isExpanded = expanded === value;

  const toggleExpanded = () => {
    setExpanded(isExpanded ? null : value);
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isExpanded, toggleExpanded });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionTrigger = ({
  children,
  isExpanded,
  toggleExpanded,
  className = "",
}) => (
  <button
    className={`flex w-full items-center justify-between py-4 text-left font-medium transition-all ${className}`}
    onClick={toggleExpanded}
  >
    {children}
    <ChevronDown
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
        isExpanded ? "rotate-180" : ""
      }`}
    />
  </button>
);

export const AccordionContent = ({ children, isExpanded, className = "" }) => (
  <div
    className={`overflow-hidden transition-all duration-300 ${
      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    } ${className}`}
  >
    {children}
  </div>
);
