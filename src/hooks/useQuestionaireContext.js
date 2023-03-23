import { useContext } from "react";
import { QuestionaireContext } from "../context/RetailerQuestionaireContext";

export const useQuestionaireContext = () => {
  const context = useContext(QuestionaireContext);
  if (!context) {
    console.log("an error occured, check RetailerQuestionaireContext");
  }
  return context;
};
