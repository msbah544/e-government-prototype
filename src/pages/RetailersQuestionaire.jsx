import React, { useEffect, useState } from "react";
import Top from "../components/Top";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
import Workflow from "../components/Workflow";
import Retailer1 from "../questionaire/Retailer1";
import Retailer2 from "../questionaire/Retailer2";
import Retailer3 from "../questionaire/Retailer3";
import RetailerNextBtn from "../questionaire/RetailerNextBtn";

const RetailersQuestionaire = () => {
  const [progress, setProgress] = useState(14.29);
  const [workflow1Pressed, setWorkflow1Pressed] = useState(true);
  const [workflow2Pressed, setWorkflow2Pressed] = useState(false);
  const [workflow3Pressed, setWorkflow3Pressed] = useState(false);
  const [workflow4Pressed, setWorkflow4Pressed] = useState(false);
  const [workflow5Pressed, setWorkflow5Pressed] = useState(false);
  const [workflow6Pressed, setWorkflow6Pressed] = useState(false);
  const [workflow7Pressed, setWorkflow7Pressed] = useState(false);

  //dispatch({ type: "SHOW1", payload: status });

  return (
    <div>
      <Top />
      <main className="px-52 py-10">
        {workflow1Pressed && (
          <div>
            <Retailer1
              progress={progress}
              setProgress={setProgress}
              workflow1Pressed={workflow1Pressed}
              setWorkflow1Pressed={setWorkflow1Pressed}
              workflow2Pressed={workflow2Pressed}
              setWorkflow2Pressed={setWorkflow2Pressed}
              workflow3Pressed={workflow3Pressed}
              setWorkflow3Pressed={setWorkflow3Pressed}
              workflow4Pressed={workflow4Pressed}
              setWorkflow4Pressed={setWorkflow4Pressed}
              workflow5Pressed={workflow5Pressed}
              setWorkflow5Pressed={setWorkflow5Pressed}
              workflow6Pressed={workflow6Pressed}
              setWorkflow6Pressed={setWorkflow6Pressed}
              workflow7Pressed={workflow7Pressed}
              setWorkflow7Pressed={setWorkflow7Pressed}
            />
          </div>
        )}
        {workflow2Pressed && (
          <Retailer2
            progress={progress}
            setProgress={setProgress}
            workflow1Pressed={workflow1Pressed}
            setWorkflow1Pressed={setWorkflow1Pressed}
            workflow2Pressed={workflow2Pressed}
            setWorkflow2Pressed={setWorkflow2Pressed}
            workflow3Pressed={workflow3Pressed}
            setWorkflow3Pressed={setWorkflow3Pressed}
            workflow4Pressed={workflow4Pressed}
            setWorkflow4Pressed={setWorkflow4Pressed}
            workflow5Pressed={workflow5Pressed}
            setWorkflow5Pressed={setWorkflow5Pressed}
            workflow6Pressed={workflow6Pressed}
            setWorkflow6Pressed={setWorkflow6Pressed}
            workflow7Pressed={workflow7Pressed}
            setWorkflow7Pressed={setWorkflow7Pressed}
          />
        )}
        {workflow3Pressed && (
          <Retailer3
            progress={progress}
            setProgress={setProgress}
            workflow1Pressed={workflow1Pressed}
            setWorkflow1Pressed={setWorkflow1Pressed}
            workflow2Pressed={workflow2Pressed}
            setWorkflow2Pressed={setWorkflow2Pressed}
            workflow3Pressed={workflow3Pressed}
            setWorkflow3Pressed={setWorkflow3Pressed}
            workflow4Pressed={workflow4Pressed}
            setWorkflow4Pressed={setWorkflow4Pressed}
            workflow5Pressed={workflow5Pressed}
            setWorkflow5Pressed={setWorkflow5Pressed}
            workflow6Pressed={workflow6Pressed}
            setWorkflow6Pressed={setWorkflow6Pressed}
            workflow7Pressed={workflow7Pressed}
            setWorkflow7Pressed={setWorkflow7Pressed}
          />
        )}
      </main>
      <Accessibility />
      <Footer />
    </div>
  );
};

export default RetailersQuestionaire;
