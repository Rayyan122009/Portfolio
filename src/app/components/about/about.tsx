import React from "react";
import Image from "next/image";


const About =()=>{
return(
    <div id="about">
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     <Image 
     src={require("../../../../public//assets/Pictures/IMG_20230602_171141.jpg")}
     alt="main image"
    
     />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-500">
      About Me
        <br className="hidden lg:inline-block" />
       
      </h1>
      <p className="mb-8 leading-relaxed text-blue-500 text-2xl">
      <b>Welcome to my digital space! I'm Rayyan, a passionate seventh-grader hailing from the bustling city of Karachi, Pakistan. In this vibrant metropolis, where the sea meets the skyline, I've discovered a profound love for coding that sets my imagination ablaze. At the tender age of thirteen, the world of coding opened its doors to me, and since then, I've been on an exhilarating journey of discovery. The language of algorithms, the thrill of problem-solving, and the joy of seeing lines of code transform into digital wonders have become my daily companions.</b>
      </p>
    </div>
  </div>
</section>
    </div>
)

}
export default About