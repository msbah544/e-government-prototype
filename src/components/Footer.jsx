import React from "react";
import lions from "../img/lions.png";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";

const Footer = () => {
  return (
    <footer class="bg-dark">
      <div class="px-52 py-10 block">
        <div>
          <ul class="flex justify-between items-center text-xl font-bold text-white">
            <li class="cursor-pointer">
              <img src={facebook} alt="facebook" class="w-6 h-6 font-bold" />
            </li>
            <li class="cursor-pointer">
              <img src={twitter} alt="twitter" class="w-6 h-6 font-bold" />
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="flex justify-start items-center pt-5">
          <img src={lions} alt="coat of arm" class="w-10 h-10" />
          <span class="pl-2 text-xl font-bold text-white font-body">
            ©2023-Government of The Gambia
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
