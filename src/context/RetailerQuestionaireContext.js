import { createContext, useReducer } from "react";

export const questionaireContext = createContext();

const retailerReducer = (state, action) => {
  switch (action.type) {
    case "showQ2":
      return { questionaireState: true };
  }
};

const RetailerContext = ({ children }) => {
  const [state, dispatch] = useReducer(retailerReducer, {
    questionaireState: null,
  });

  return (
    <questionaireContext.Provider>{children}</questionaireContext.Provider>
  );
};
