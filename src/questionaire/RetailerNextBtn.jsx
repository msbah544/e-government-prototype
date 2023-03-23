import React from "react";

const RetailerNextBtn = ({
  setProgress,
  setWorkflow1Pressed,
  setWorkflow2Pressed,
}) => {
  const handleNext = () => {
    setWorkflow1Pressed(false);
    setWorkflow2Pressed(true);
    setProgress(14.29 * 2);
  };
  return (
    <div className="pt-10">
      <button
        onClick={handleNext}
        className="cursor-pointer py-3 px-10 bg-primary text-white hover:bg-dark transition ease-out duration-500 font-bold"
      >
        Next
      </button>
    </div>
  );
};

export default RetailerNextBtn;
