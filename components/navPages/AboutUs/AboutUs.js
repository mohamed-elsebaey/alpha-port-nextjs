import React, { useState } from "react";
import Title from "../layouts/Title";
import StrengthPoint from "./StrengthPoint";
import OurStory from "./OurStory";
import OurProjects from "./OurProjects";
import OurProducts from "./OurProducts";

const AboutUs = () => {
  const [OurStoryData, setOurStoryData] = useState(true);
  const [OurProjectsData, setOurProjectsData] = useState(false);
  const [StrengthPointData, setStrengthPointData] = useState(false);
  const [OurProductsata, setOurProductsata] = useState(false);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="500"
      id="about-us"
      className=" w-4/5 py-20 mx-auto my-28 border-b-[2px] border-t-[2px] border-blueColor "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="6+ YEARS OF EXPERIENCE" des="About Us" />
      </div>
      <div className="mb-10">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-center ">
          <li
            onClick={() =>
              setOurStoryData(true) &
              setOurProductsata(false) &
              setOurProjectsData(false) &
              setStrengthPointData(false)
            }
            className={`${
              OurStoryData ? "bg-blueColor/50 rounded-lg" : "border-transparent"
            } mx-10 py-3 cursor-pointer `}
          >
            Our Story
          </li>
          <li
            onClick={() =>
              setOurStoryData(false) &
              setOurProductsata(false) &
              setOurProjectsData(true) &
              setStrengthPointData(false)
            }
            className={`${
              OurProjectsData
                ? "bg-blueColor/50 rounded-lg"
                : "border-transparent"
            } mx-10 py-3 cursor-pointer`}
          >
            Our Projects
          </li>
          <li
            onClick={() =>
              setOurStoryData(false) &
              setOurProductsata(false) &
              setOurProjectsData(false) &
              setStrengthPointData(true)
            }
            className={`${
              StrengthPointData
                ? "bg-blueColor/50 rounded-lg"
                : "border-transparent"
            } mx-10 py-3 cursor-pointer`}
          >
            Strength Point
          </li>
          <li
            onClick={() =>
              setOurStoryData(false) &
              setOurProductsata(true) &
              setOurProjectsData(false) &
              setStrengthPointData(false)
            }
            className={`${
              OurProductsata
                ? "bg-blueColor/50 rounded-lg"
                : "border-transparent"
            } mx-10 py-3 cursor-pointer`}
          >
            Our Products
          </li>
        </ul>
      </div>
      {OurStoryData && <OurStory />}
      {OurProjectsData && <OurProjects />}
      {StrengthPointData && <StrengthPoint />}
      {OurProductsata && <OurProducts />}
    </section>
  );
};

export default AboutUs;
