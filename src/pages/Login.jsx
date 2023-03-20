import React from "react";
import Top from "../components/Top";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Top />
      <main className="px-52 py-20">
        <div>
          <h3 class="pb-4 font-bold text-2xl py-5 font-body">
            E-Government Portal
          </h3>
          <span className="text-gray-400 text-xl">Please Login To Proceed</span>
          <div className="block pt-10">
            <div className="text-xl text-gray-700">Email</div>
            <input
              type="email"
              class="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0 disabled:cursor-not-allowed disabled:text-gray-500"
              placeholder="msbah@gmail.com"
            />
          </div>
          <div className="block pt-10">
            <div className="text-xl text-gray-700">Password</div>
            <input
              type="password"
              class="block w-full border-0 border-b-2 border-primary focus:border-primary focus:ring-0 disabled:cursor-not-allowed disabled:text-gray-500"
              placeholder="password"
            />
          </div>
        </div>
      </main>
      <Accessibility />
      <Footer />
    </div>
  );
};

export default Login;
