import React from "react";
import Workflow from "../components/Workflow";
import RetailerNextBtn from "./RetailerNextBtn";

const Retailer1 = ({
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
      <h3 className="pb-5 font-bold text-2xl py-5 font-body">
        Company Information
      </h3>
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
      <div className="w-1/2">
        <div className="block pt-20">
          <div className="text-xl text-gray-700">Company Name</div>
          <input
            type="text"
            className="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
            placeholder="company name"
          />
        </div>
        <div className="block pt-20">
          <div className="text-xl text-gray-700">Primary Phone Number</div>
          <input
            type="text"
            className="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
            placeholder="primary phone"
          />
        </div>
        <div className="block pt-20">
          <div className="text-xl text-gray-700">Alternate Phone Number</div>
          <input
            type="text"
            className="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
            placeholder="alternate phone"
          />
        </div>
        <RetailerNextBtn
          setProgress={setProgress}
          setWorkflow1Pressed={setWorkflow1Pressed}
          setWorkflow2Pressed={setWorkflow2Pressed}
        />
      </div>
    </div>
  );
};

export default Retailer1;
