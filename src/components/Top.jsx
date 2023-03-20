import React from "react";
import lions from "../img/lions.png";

const Top = () => {
  return (
    <div>
      <nav className="bg-dark">
        <div className="px-52 py-3 flex justify-between items-center">
          <div className="flex cursor-pointer">
            <img src={lions} alt="coat of arm" className="w-10 h-10" />
            <h2 className="font-body text-3xl text-white pl-2">GOV.GM</h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              <h2 className="font-body text-3xl text-white pl-2">Menu</h2>
            </div>
            <div className="p-3 mx-3 bg-primary cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-5 h-5 bg-white text-red-500 flex justify-center items-center rounded-full p-3">
                <a href="#">A</a>
              </div>
              <div className="w-5 h-5 bg-black text-yellow-500 border-2 border-yellow-500 flex justify-center items-center rounded-full p-3 mx-2">
                <a href="#">A</a>
              </div>
              <div className="w-5 h-5 bg-yellow-500 flex justify-center items-center rounded-full p-3">
                <a href="#">A</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-primary">
        <div className="px-52 py-20">
          <h1 className="font-body text-4xl text-white pb-10">
            NATIONAL E-GOVERNMENT
          </h1>
          <div className="text-white text-2xl">
            The best place to find government services and information
            <br />
            <b> Simpler,clearer,faster</b>
          </div>
        </div>
      </header>
      <section className="bg-gray-300">
        <div className="px-52 py-20 flex justify-between items-start">
          <div>
            <h3 className="pb-4 font-bold text-2xl font-body">
              Popular on GOV.GM
            </h3>
            <ul className="text-primary text-xl underline">
              <li>
                <a href="#">Check Benefits and Financial Support You Can Get</a>
              </li>
              <li>
                <a href="#">Applying for Licenses</a>
              </li>
              <li>
                <a href="#">Registering a Business or a Company</a>
              </li>
              <li>
                <a href="#">MoHERST Scholarships</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pb-4 font-bold text-2xl font-body">Search</h3>
            <input placeholder="type here..." className="w-96 h-8 p-3" />
            <div className="flex justify-start">
              <div className="bg-primary py-2 px-3 cursor-pointer mt-3 font-bold text-white">
                search
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top;
