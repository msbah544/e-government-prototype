import React from "react";
import Workflow from "../components/Workflow";

const Retailer1 = () => {
  return (
    <div>
      <Workflow color={1} />
      <div className="w-1/2">
        <div className="block pt-20">
          <div className="text-xl text-gray-700">Company Name</div>
          <input
            type="text"
            class="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
            placeholder="company name"
          />
        </div>
        <div className="block pt-20">
          <div className="text-xl text-gray-700">Primary Phone Number</div>
          <input
            type="text"
            class="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
            placeholder="primary phone"
          />
        </div>
        <div className="block pt-20">
          <div className="text-xl text-gray-700">Alternate Phone Number</div>
          <input
            type="text"
            class="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
            placeholder="alternate phone"
          />
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

export default Retailer1;
