import React from "react";
import Workflow from "../components/Workflow";

const Retailer3 = ({
  progress,
  setProgress,
  workflow1Pressed,
  setWorkflow1Pressed,
  workflow2Pressed,
  setWorkflow2Pressed,
  workflow3Pressed,
  setWorkflow3Pressed,
  workflow4Pressed,
  setWorkflow4Pressed,
  workflow5Pressed,
  setWorkflow5Pressed,
  workflow6Pressed,
  setWorkflow6Pressed,
  workflow7Pressed,
  setWorkflow7Pressed,
}) => {
  return (
    <div>
      <Workflow
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
      <div>
        <div>
          Retailer3 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit a libero consequuntur ipsum unde incidunt quisquam quam
          necessitatibus, cum eaque.
        </div>
      </div>
    </div>
  );
};

export default Retailer3;
