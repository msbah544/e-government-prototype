import React from "react";
import access from "../img/access.png";
import headset from "../img/headset.png";

const Accessibility = () => {
  return (
    <div className="px-52 pb-28 flex justify-between items-center pt-28">
      <div className="rounded-full p-3 cursor-pointer shadow-lg">
        <img src={access} alt="accessibility logo" />
      </div>
      <div className="rounded-full p-2 cursor-pointer shadow-lg">
        <img src={headset} alt="headset logo" />
      </div>
    </div>
  );
};

export default Accessibility;
