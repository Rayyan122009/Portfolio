"use client"
import React from "react";
import Typewriter from "typewriter-effect";
import Profile from "../../../public/assets/Pictures/Rayyan1.jpg"
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
return(
<div id="Hero">
<section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-7xl text-4xl mb-4 font-medium text-red-900">
        <b><i>Here is</i></b> 
        <br className="hidden lg:inline-block" />
        
      <Typewriter 
      options={{
        strings :['Rayyan Amir',"Quarter 2 Student","Web Developer" ,"UI/UX Designer"],
        autoStart:true,
        loop:true
      }}
      />

      </h1>
      <p className="mb-8 leading-relaxed text">
     <span className="text-blue-500 text-3xl"> I Am <b className="text-yellow-500"> Rayyan Amir </b>  
       I studied in CIPS Chiniot Islamia Public School . I am in Seven Class. I like coding very much but it is difficult 
       There are lots of languages in codiing . Languages that I know so here is my Portfolio</span>
      </p>
  
    </div>
    <div className="">
   
      <Image
        className="object-cover object-center rounded mx auto h-90 w-80"
        alt='Rayyan1'
        src={require('../../../../public/assets/Pictures/IMG_20230527_124448.jpg')}
        height={200}
  
        
      />
    </div>
  </div>
</section>

</div>

)

}
export default Hero