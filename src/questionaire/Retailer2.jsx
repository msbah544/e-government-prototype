import React, { useState } from "react";
import Workflow from "../components/Workflow";

const Retailer2 = ({
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
  const [radio1IsChecked, setRadio1IsChecked] = useState(false);
  const [radio2IsChecked, setRadio2IsChecked] = useState(false);

  return (
    <div>
      <h3 className="pb-5 font-bold text-2xl py-5 font-body">
        Licence for New Location or Existing Location
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
        <div className="pt-20 pb-10">
          <div className="py-5 text-xl ">
            Are you applying for a new location or an existing location?
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center ">
              <input
                onClick={() => {
                  setRadio1IsChecked(true);
                  setRadio2IsChecked(false);
                }}
                className=" p-3 border-2 border-gray-400 text-primary focus:ring-primary"
                type="radio"
                checked={radio1IsChecked}
              />
              <div className="text-xl text-gray-700 pl-2">New Location</div>
            </div>
            <div className="flex justify-start items-center ">
              <input
                onClick={() => {
                  setRadio2IsChecked(true);
                  setRadio1IsChecked(false);
                }}
                className=" p-3 border-2 border-gray-400 text-primary focus:ring-primary"
                type="radio"
                checked={radio2IsChecked}
              />
              <div className="text-xl text-gray-700 pl-2">
                Existing Location
              </div>
            </div>
          </div>
          <div className="block pt-20">
            <div className="text-xl ">Location Name</div>
            <input
              type="text"
              className="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
              placeholder="location name"
            />
          </div>
          <div className="py-10">
            <div className="text-xl">Attach Photo of Entrance to Facility</div>
            <input
              type="file"
              className="pt-5 block w-full text-sm file:mr-4 file:bg-primary file:py-2.5 file:px-4 file:text-sm file:font-bold file:text-white  "
            />
          </div>
        </div>
        <div className="pt-10">
          <button className="cursor-pointer py-3 px-10 bg-primary text-white hover:bg-dark transition ease-out duration-500 font-bold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Retailer2;
