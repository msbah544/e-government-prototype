import React from "react";
import { Link } from "react-router-dom";
import Top from "../components/Top";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
import Workflow from "../components/Workflow";

const Login = () => {
  return (
    <div>
      <Top />
      <Workflow />
      <main className="px-52 py-20">
        <div>
          <h3 class="pb-4 font-bold text-2xl py-5 font-body">
            E-Government Portal
          </h3>
          <span className="text-gray-400 text-xl">Please Login To Proceed</span>
          <div className="w-1/2">
            <div className="block pt-20">
              <div className="text-xl text-gray-700">Email</div>
              <input
                type="email"
                class="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
                placeholder="user@gov.gm"
              />
            </div>
            <div className="block pt-20">
              <div className="text-xl text-gray-700">Password</div>
              <input
                type="password"
                class="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0"
                placeholder="password"
              />
            </div>
            <div className="flex justify-between pt-10">
              <div className="flex justify-start items-center">
                <input
                  className="rounded p-3 border-2 border-gray-400 text-primary focus:ring-0"
                  type="checkbox"
                  //checked={true}
                />
                <div className="text-xl text-gray-700 pl-2">Remember me</div>
              </div>
              <div className="text-xl text-gray-700 hover:underline hover:text-blue-800">
                <Link>forgot password ?</Link>
              </div>
            </div>
            <div className="block pt-10">
              <div className="">
                <Link
                  to={`/questionaire`}
                  className="p-5 bg-primary text-white hover:bg-dark transition ease-out font-bold"
                >
                  Login Now
                </Link>
              </div>
              <div className="pt-5">
                <Link className="text-primary  hover:text-blue-800 font-bold underline">
                  Do not have an account? Signup Now!
                </Link>
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

export default Login;
