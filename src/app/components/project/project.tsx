import React from "react";
import Link from "next/link";
import Image from "next/image";

  
  const Project = () => {
    return (
      <div id="project">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-7xl text-2xl font-medium title-font mb-4 text-red-500">
                My Projects
              </h1>
            </div>
            <div className="flex flex-wrap -m-5 -mt-[5rem]">
              {/* Project */}
              <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={require("../../../../public/assets/Pictures/project1.jpg")}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 border:thick bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Calculator
                    </h2>
                    <p className="leading-relaxed line-clamp-2">
                      My first Project that is very easy you can try by running command 
                      it has all fucntions like + , - , * etc . 
                    </p>
                    <Link
                      target="_blank"
                      href={"https://github.com/Rayyan122009/calculator360"}
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Code..
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Project */}
              <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={require("../../../../public/assets/Pictures/project1.jpg")}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Adventure Game
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      It is vey difficult project for me .
                       but i made it
                    </p>
                    <Link
                      target="_blank"
                      href={"https://github.com/Rayyan122009/Adventure-game-"}
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Code..
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Project */}
              <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={require("../../../../public/assets/Pictures/project1.jpg")}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Number Guessing Game
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                    Sir give task to make a console interactive project of NGG Number Guessing Game.
                    I compelete this project This project is basically guessing game you can run command 
                    and guess the number and you will see your answer . 
                    </p>
                    <Link
                      target="_blank"
                      href={"https://github.com/Rayyan122009/NumberGuesGame"}
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Code..
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Project;
  
        

