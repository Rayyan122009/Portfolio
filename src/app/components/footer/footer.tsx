import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () =>{
return (
  <div>
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl text-white"><b>PortFolio</b></span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">
      Made by 
   
     <span className="text-white text-2xl"> Rayyan Amir</span>
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      href={"https://www.youtube.com/channel/UCf10QI1RQ0Jfh5jrb--D_Nw"}
      target="Blank"
      className=""
      >
      <FaYoutube className="text-5xl hover:text-[#ff0000] mr-6"/>
      </Link>
      <Link
      href={"https://www.linkedin.com/in/rayyan-amir-970520296/"}
      target="Blank"
      className="text-gray-600"
      >
      <FaLinkedin className="text-5xl hover:text-[#00d9ff]"/>
      </Link>
      
    </span>
  </div>
</footer>

  </div>
)


}
export default Footer