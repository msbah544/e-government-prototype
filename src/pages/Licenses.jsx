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
          <h3 class="pb-4 font-bold text-2xl py-5 font-body">Licenses</h3>
          {/*row*/}
          <div class="py-5 grid grid-cols-3 gap-6">
            {/*item*/}
            <Link to={`/licenses/petroleum_licenses`}>
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Petroleum</h3>
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
              <div class="text-gray-700">Retailers, Re-exporters, e.t.c..</div>
            </div>
            </Link>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Business</h3>
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
              <div class="text-gray-700">Business,Companies, e.t.c..</div>
            </div>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Fisheries</h3>
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
              <div class="text-gray-700">
                Vessel Licenses,Inspection, e.t.c..
              </div>
            </div>
          </div>
          {/*row*/}
          <div class="py-5 grid grid-cols-3 gap-6">
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Trade</h3>
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
              <div class="text-gray-700">Import,Export,MSME'S, e.t.c..</div>
            </div>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">
                  Driving
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
              <div class="text-gray-700">
                Driving License, e.t.c..
              </div>
            </div>
            {/*item*/}
              <div class="border-t-2 border-t-gray-200 cursor-pointer">
                <div class="flex justify-between items-center">
                  <h3 class="text-primary font-bold text-xl">Medical & Health</h3>
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
                <div class="text-gray-700">
                  Pharmacy, e.t.c..
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
