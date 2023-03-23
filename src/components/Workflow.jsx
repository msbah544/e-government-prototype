import React from "react";

const Workflow = ({
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
  const handleWorkflow1 = () => {
    setProgress(14.29);
    setWorkflow1Pressed(true);
    setWorkflow2Pressed(false);
    setWorkflow3Pressed(false);
    setWorkflow4Pressed(false);
    setWorkflow5Pressed(false);
    setWorkflow6Pressed(false);
    setWorkflow7Pressed(false);
  };
  const handleWorkflow2 = () => {
    setProgress(14.29 * 2);
    setWorkflow1Pressed(false);
    setWorkflow2Pressed(true);
    setWorkflow3Pressed(false);
    setWorkflow4Pressed(false);
    setWorkflow5Pressed(false);
    setWorkflow6Pressed(false);
    setWorkflow7Pressed(false);
  };
  const handleWorkflow3 = () => {
    setProgress(14.29 * 3);
    setWorkflow1Pressed(false);
    setWorkflow2Pressed(false);
    setWorkflow3Pressed(true);
    setWorkflow4Pressed(false);
    setWorkflow5Pressed(false);
    setWorkflow6Pressed(false);
    setWorkflow7Pressed(false);
  };
  const handleWorkflow4 = () => {
    setProgress(14.29 * 4);
    setWorkflow1Pressed(false);
    setWorkflow2Pressed(false);
    setWorkflow3Pressed(false);
    setWorkflow4Pressed(true);
    setWorkflow5Pressed(false);
    setWorkflow6Pressed(false);
    setWorkflow7Pressed(false);
  };
  const handleWorkflow5 = () => {
    setProgress(14.29 * 5);
    setWorkflow1Pressed(false);
    setWorkflow2Pressed(false);
    setWorkflow3Pressed(false);
    setWorkflow4Pressed(false);
    setWorkflow5Pressed(true);
    setWorkflow6Pressed(false);
    setWorkflow7Pressed(false);
  };
  const handleWorkflow6 = () => {
    setProgress(14.29 * 6);
    setWorkflow1Pressed(false);
    setWorkflow2Pressed(false);
    setWorkflow3Pressed(false);
    setWorkflow4Pressed(false);
    setWorkflow5Pressed(false);
    setWorkflow6Pressed(true);
    setWorkflow7Pressed(false);
  };
  const handleWorkflow7 = () => {
    setProgress(14.29 * 7);
    setWorkflow1Pressed(false);
    setWorkflow2Pressed(false);
    setWorkflow3Pressed(false);
    setWorkflow4Pressed(false);
    setWorkflow5Pressed(false);
    setWorkflow6Pressed(false);
    setWorkflow7Pressed(true);
  };
  return (
    <div>
      <div className="flex justify-between p-5 font-bold">
        <span
          onClick={handleWorkflow1}
          className={` rounded-full border-2 p-5 cursor-pointer border-primary hover:bg-dark hover:text-white  transition ease-out duration-300 ${
            workflow1Pressed && "bg-dark text-white"
          }`}
        >
          Company Information
        </span>
        <span
          onClick={handleWorkflow2}
          className={`rounded-full border-2 p-5 cursor-pointer border-primary hover:bg-dark hover:text-white transition ease-out duration-300 ${
            workflow2Pressed && "bg-dark text-white"
          }`}
        >
          Location
        </span>
        <span
          onClick={handleWorkflow3}
          className={`rounded-full border-2 p-5 cursor-pointer border-primary hover:bg-dark hover:text-white transition ease-out duration-300 ${
            workflow3Pressed && "bg-dark text-white"
          }`}
        >
          License Type
        </span>
        <span
          onClick={handleWorkflow4}
          className={`rounded-full border-2 p-5 cursor-pointer border-primary hover:bg-dark hover:text-white transition ease-out duration-300 ${
            workflow4Pressed && "bg-dark text-white"
          }`}
        >
          Products
        </span>
        <span
          onClick={handleWorkflow5}
          className={`rounded-full border-2 p-5 cursor-pointer border-primary hover:bg-dark hover:text-white transition ease-out duration-300 ${
            workflow5Pressed && "bg-dark text-white"
          }`}
        >
          Facilities Available
        </span>
        <span
          onClick={handleWorkflow6}
          className={`rounded-full border-2 p-5 cursor-pointer border-primary hover:bg-dark hover:text-white transition ease-out duration-300 ${
            workflow6Pressed && "bg-dark text-white"
          }`}
        >
          Attach Documents
        </span>
        <span
          onClick={handleWorkflow7}
          className={`rounded-full border-2 p-5 cursor-pointer border-primary hover:bg-dark hover:text-white transition ease-out duration-300 ${
            workflow7Pressed && "bg-dark text-white"
          }`}
        >
          Referee Details
        </span>
      </div>

      <div className="relative flex h-2 w-full mx-6 overflow-hidden rounded-full bg-dark transition ease-linear duration-500">
        <div
          role="progressbar"
          aria-valuenow={`${progress}`}
          aria-valuemin={`0`}
          aria-valuemax={`100`}
          style={{ width: `${progress}%` }}
          className="flex h-full bg-primary"
        ></div>
      </div>
    </div>
  );
};

export default Workflow;
