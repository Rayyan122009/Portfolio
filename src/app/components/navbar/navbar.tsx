import React from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return (
<div>
<header className="text-yellow-600 body-font bg-orangered-500">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
 
      <span className=" Size-50 text-5xl text-red-50 shadow-black">Portfolio</span>
    </a>
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">
      <Link  href = {"/"} className="mr-12 text-white text-xl hover:text- hover:font-bold"><b>Home</b></Link>
      <Link href ={"#about"}className="mr-12 text-white text-xl hover:text- hover:font-bold"><b>About</b> </Link>
      <Link href ={"#skills"}className="mr-12 text-white text-xl hover:text- hover:font-bold"> <b>Skills</b></Link>
      <Link href ={"#project"}className="mr-12 text-white text-xl hover:text- hover:font-bold"><b> Projects</b></Link>
    </nav>
  </div>
</header>
</div>

    )
}
export default Navbar