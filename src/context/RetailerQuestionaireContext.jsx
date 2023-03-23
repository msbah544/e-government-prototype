import { createContext, useReducer, useEffect } from "react";

export const QuestionaireContext = createContext();

//payload will be an array of items of type boolean

export const retailerReducer = (state, action) => {
  switch (action.type) {
    case "SHOW1":
      return {
        questionaireState: action.payload,
      };
    case "SHOW2":
      return {
        questionaireState: action.payload,
      };
    case "SHOW3":
      return {
        questionaireState: action.payload,
      };
    case "SHOW4":
      return {
        questionaireState: action.payload,
      };
    case "SHOW5":
      return {
        questionaireState: action.payload,
      };
    case "SHOW6":
      return {
        questionaireState: action.payload,
      };
    case "SHOW7":
      return {
        questionaireState: action.payload,
      };
  }
};

export const RetailerContext = ({ children }) => {
  const [state, dispatch] = useReducer(retailerReducer, {
    questionaireState: null,
  });

  //console.log(state);
  console.log(
    state && state.questionaireState && state.questionaireState.q1,
    "ok"
  );

  return (
    <QuestionaireContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuestionaireContext.Provider>
  );
};
