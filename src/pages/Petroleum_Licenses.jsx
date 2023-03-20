import React from "react";
import { Link } from "react-router-dom";
import Top from "../components/Top";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";

const Licenses = () => {
  return (
    <div>
      <Top />
      <main class="px-52">
        <div class="">
          <h3 class="pb-4 font-bold text-2xl py-5 font-body">Petroleum Licenses</h3>
          {/*row*/}
          <div class="py-5 grid grid-cols-3 gap-6">
            {/*item*/}
            <Link to={`/licenses/petroleum_licenses/retailer`}>
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Retailers</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-primary font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            </Link>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Re-exporters</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-primary font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Importers</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-primary font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/*row*/}
          <div class="py-5 grid grid-cols-3 gap-6">
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Bulk Storage</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-primary font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">
                  Transporters
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-primary font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            {/*item*/}
              <div class="border-t-2 border-t-gray-200 cursor-pointer">
                <div class="flex justify-between items-center">
                  <h3 class="text-primary font-bold text-xl">Lubricant Importation</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-primary font-bold"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
          </div>
        </div>
      </main>
      <Accessibility />
      <Footer />
    </div>
  );
};

export default Licenses;
