import React from "react";
import { Link } from "react-router-dom";
import Top from "../components/Top";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
import lions from "../img/lions.png";

const Home = () => {
  return (
    <div>
      <Top />
      <main class="px-52">
        <div class="pb-28">
          <h3 class="pb-4 font-bold text-2xl py-5 font-body">Topics</h3>
          {/*row*/}
          <div class="py-5 grid grid-cols-3 gap-6">
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Births, Deaths</h3>
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
              <div class="text-gray-700">Parenting,Inheritance</div>
            </div>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Education</h3>
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
              <div class="text-gray-700">Scholarships,Grants, e.t.c..</div>
            </div>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Employment</h3>
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
                Vocational Skills,Services, e.t.c..
              </div>
            </div>
          </div>
          {/*row*/}
          <div class="py-5 grid grid-cols-3 gap-6">
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">Citizenship</h3>
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
              <div class="text-gray-700">ID Card Application,Tax, e.t.c..</div>
            </div>
            {/*item*/}
            <div class="border-t-2 border-t-gray-200 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-primary font-bold text-xl">
                  Crime, Justice and the Law
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
                Court Affairs, The Police, e.t.c..
              </div>
            </div>
            {/*item*/}
            <Link to={`/licenses`}>
              <div class="border-t-2 border-t-gray-200 cursor-pointer">
                <div class="flex justify-between items-center">
                  <h3 class="text-primary font-bold text-xl">Licenses</h3>
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
                  Business, Driving Licenses, e.t.c..
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <section className="bg-dark">
        <div className="px-52 pb-20">
          <h3 class=" font-bold text-2xl py-5 font-body text-white">
            Ministries,Departments and Agencies
          </h3>
          {/**row */}
          <div className="grid grid-cols-3 gap-6 py-10 ">
            {/**item */}
            <div className="border-r-2 border-gray-600 cursor-pointer shadow-sm shadow-black hover:shadow-lg hover:shadow-primary transition ease-out duration-500">
              <div className="flex justify-center items-center">
                <img src={lions} alt="coat of arm" className="w-20 h-20" />
              </div>
              <div className="flex justify-center">
                <span className="text-primary font-bold text-8xl">15+</span>
              </div>
              <div className="flex justify-center">
                <h3 className="text-white font-body text-xl">Ministries</h3>
              </div>
            </div>
            {/**item */}
            <div className="border-r-2 border-gray-600 cursor-pointer shadow-sm shadow-black hover:shadow-lg hover:shadow-primary transition ease-out duration-500">
              <div className="flex justify-center items-center">
                <img src={lions} alt="coat of arm" className="w-20 h-20" />
              </div>
              <div className="flex justify-center">
                <span className="text-primary font-bold text-8xl">10+</span>
              </div>
              <div className="flex justify-center">
                <h3 className="text-white font-body text-xl">Departments</h3>
              </div>
            </div>
            {/**item */}
            <div className="border-r-2 border-gray-600 cursor-pointer shadow-sm shadow-black hover:shadow-lg hover:shadow-primary transition ease-out duration-500">
              <div className="flex justify-center items-center">
                <img src={lions} alt="coat of arm" className="w-20 h-20" />
              </div>
              <div className="flex justify-center">
                <span className="text-primary font-bold text-8xl">10+</span>
              </div>
              <div className="flex justify-center">
                <h3 className="text-white font-body text-xl">Agencies</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accessibility />

      <Footer />
    </div>
  );
};

export default Home;
