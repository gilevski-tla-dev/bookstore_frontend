import React, { createContext, useState, useContext, ReactNode } from "react";

interface PriceRange {
  from: string;
  to: string;
}

interface FilterContextProps {
  priceRange: PriceRange;
  setPriceRange: React.Dispatch<React.SetStateAction<PriceRange>>;
  selectedAuthor: string;
  setSelectedAuthor: React.Dispatch<React.SetStateAction<string>>;
}

// Create a context
export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);

// Create a context provider
interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [priceRange, setPriceRange] = useState<PriceRange>({
    from: "",
    to: "",
  });
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");

  return (
    <FilterContext.Provider
      value={{ priceRange, setPriceRange, selectedAuthor, setSelectedAuthor }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Create a hook for easy use of context
export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
