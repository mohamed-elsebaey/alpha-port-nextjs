import React from "react";

const AboutUsCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-blueColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-bgGrayColor bg-opacity-20 hover:bg-opacity-90 duration-700  rounded-lg p-4 lg:px-10 flex flex-col gap-6 lg:gap-10 shadow-shadowOne ">
        <div className="flex flex-col justify-between gap-4  group-hover:text-white">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold duration-300">
              {title}
            </h3>
            <p className="text-md mt-2 text-gray duration-300">{subTitle}</p>
          </div>
          {result !== "" && (
            <div>
              <p className="w-full lg:w-[20%] px-4 py-2 bg-blueColor/70 hover:bg-blueColor  rounded-lg flex justify-center items-center shadow-shadowOne text-md font-bold ">
                {result}
              </p>
            </div>
          )}
        </div>
        <div className="text-lg font-medium group-hover:text-white duration-300">
          {des.map((item) => (
            <div className="flex flex-row justify-end mb-4 lg:mb-2">
              <p> {item} </p>
              <span className="ml-3"> - </span> {/* space between words  */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
