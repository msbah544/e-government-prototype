import React from "react";
import Top from "../components/Top";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
import Retailer1 from "../questionaire/Retailer1";

const RetailersQuestionaire = () => {
  return (
    <div>
      <Top />
      <main className="px-52 py-10">
        <Retailer1 />
      </main>
      <Accessibility />
      <Footer />
    </div>
  );
};

export default RetailersQuestionaire;
