import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            blanditiis sapiente modi, iste sed excepturi, totam dolor earum
            dolorem sit hic beatae tenetur eum nemo minima! Et nihil distinctio
            vel.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col bap-1 text-gray-600">
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col bap-1 text-gray-600">
            <li>+91 9342407556</li>
            <li>info@glamaura@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2025@ glamaura.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
