import React from "react";
import { Edu_Data } from "../../config";
import EducationCard from "../Sub_Componets/educationCard";

const Education = () => {
  console.log(Edu_Data);
  return (
    <section className="pb-[25px] education-section">
      <div className="mx-auto max-w-[450px] text-center">
        <h2 className="h2-heading">What I Have Qualification</h2>
        <h1 className="h1-heading education">My Education</h1>
      </div>
      <div className="education-page">
        {Edu_Data.map((item, index) => {
          return (
            <EducationCard
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              date={item.date}
              branch={item.branch}
              standard={item.standard}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Education;

// <ol className="relative border-s border-gray-200 dark:border-gray-700">
//
//   <li className="mb-10 ms-4">
//     {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
//     <span className="absolute mt-[0.15rem] -ml-[1.6rem] flex w-1 h-1 border-solid border-2 p-2 rounded-full my-[11.5px] bg-transparent "></span>

//     <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//       March 2022
//     </time>
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//       Marketing UI design in Figma
//     </h3>
//     <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//       All of the pages and components are first designed in Figma and we keep
//       a parity between the two versions even as we update the project.
//     </p>
//   </li>

//   <li className="ms-4">
//     {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
//     <span className="absolute mt-[0.15rem] -ml-[1.6rem] flex w-1 h-1 border-solid border-2 p-2 rounded-full my-[11.5px] bg-transparent "></span>

//     <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//       April 2022
//     </time>
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//       E-Commerce UI code in Tailwind CSS
//     </h3>
//     <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//       Get started with dozens of web components and interactive elements built
//       on top of Tailwind CSS.
//     </p>
//   </li>
// </ol>;
