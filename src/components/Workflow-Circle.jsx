import React from "react";

const WorkflowCircle = ({ color }) => {
  const workflowItems = [
    { name: "Company Information", bgcolor: color === 1 ? "bg-primary" : "" },
    { name: "Location", bgcolor: color === 2 ? "bg-primary" : "" },
    { name: "License Type", bgcolor: color === 3 ? "bg-primary" : "" },
    { name: "Products", bgcolor: color === 4 ? "bg-primary" : "" },
    { name: "Facilities Available", bgcolor: color === 5 ? "bg-primary" : "" },
    { name: "Attach Documents", bgcolor: color === 6 ? "bg-primary" : "" },
    { name: "Referee Details", bgcolor: color === 7 ? "bg-primary" : "" },
  ];
  return (
    <div className=" flex">
      {workflowItems.map((item, index) => (
        <div className="block" key={index}>
          <div className="flex justify-start items-center">
            <div
              className={`w-10 h-10 rounded-full border-2 border-gray-400 ${item.bgcolor}`}
            ></div>
            <div className="w-32 h-0.5 bg-gray-400"></div>
          </div>
          <div className="text-gray-400 text-md w-40">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default WorkflowCircle;
