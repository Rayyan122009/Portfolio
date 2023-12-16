import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";

const Skill = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font bg-yellow-500">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-2xl font-medium title-font text-red-500">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[22%]"></div>
                  </div>
                  <p className="font-bold text-black text-right text-bold">22%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[17%]"></div>
                  </div>
                  <p className="font-bold text-black text-right">17%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JavaScript/TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[20%]"></div>
                  </div>
                  <p className="font-bold text-black text-right">20%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NEXT JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[12%]"></div>
                  </div>
                  <p className="font-bold text-black text-right">12%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   Python
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[23%]"></div>
                  </div>
                  <p className="font-bold text-black text-right">23%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;

      