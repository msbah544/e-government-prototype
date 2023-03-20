import React, { useState } from "react";

const Tabs = () => {
  const [procedurePressed, setProcedurePressed] = useState(true);
  const [documentPressed, setDocumentPressed] = useState(false);

  const updateProcedurePressed = () => {
    setProcedurePressed(true);
    setDocumentPressed(false);
  };
  const updateDocumentPressed = () => {
    setDocumentPressed(true);
    setProcedurePressed(false);
  };

  return (
    <div className="px-52">
      <div className="flex justify-start  font-bold py-10 items-center">
        <span
          onClick={updateProcedurePressed}
          className={`p-5 cursor-pointer border-b-4 border-primary hover:bg-blue-200 hover:text-white transition ease-out duration-300 ${
            procedurePressed && "bg-primary text-white"
          }`}
        >
          Application Procedure
        </span>
        <span
          onClick={updateDocumentPressed}
          className={`p-5 cursor-pointer border-b-4 border-primary hover:bg-blue-200 hover:text-white transition ease-out duration-300 ${
            documentPressed && "bg-primary text-white"
          }`}
        >
          Key Submission Documents
        </span>
      </div>
    </div>
  );
};
export default Tabs;
