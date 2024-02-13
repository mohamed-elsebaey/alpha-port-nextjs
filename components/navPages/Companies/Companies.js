import React from "react";
import Image from "next/image";
import Namaa from "../../../public/images/logo/namaa.png";
import AlphaDates from "../../../public/images/logo/alphaDates.png";
import Basiqat from "../../../public/images/logo/basiqat.png";
import AlphaHerbs from "../../../public/images/logo/alphaHerbs.png";

const CompaniesData = [
  {
    id: 1,
    img: Namaa,
    name: "Namaa",
    description: "شركة نماء للاستثمار واستصلاح الأراضى – 1033 فدان (434 هكتار)",
    aosDelay: "100",
  },
  {
    id: 2,
    img: AlphaHerbs,
    name: "Alpha Herb",
    description:
      "شركة الفا هيرب للنباتات الطبية والعطرية – 1800 فدان (756 هكتار)",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Basiqat,
    name: "Basiqat",
    description:
      "باسقات لإقامة وإدارة وبيع مزارع النخيل للغير - 750 فدان (294 هكتار)",
    aosDelay: "200",
  },
  {
    id: 4,
    img: AlphaDates,
    name: "Alpha Dates",
    description: "إنتاج وتصدير التمور – 350 فدان",
    aosDelay: "100",
  },
];
const Companies = () => {
  return (
    <>
      <span id="companies"></span>
      <div className="py-10">
        <div className="container text-bgGrayColor">
          {/* Heading section  */}
          <div className="text-center my-16">
            <h1 className="text-4xl font-bold font-cursive ">Our Companies</h1>
          </div>

          {/* Company Card section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 md:gap-5 cursor-pointer">
            {CompaniesData.map((Company) => (
              <div
                key={Company.id}
                data-aos="fade-up"
                // data-aos-once="true"
                data-aos-delay={Company.aosDelay}
                className="rounded-2xl bg-white hover:bg-blueColor/10 shadow-xl duration-300 max-w-[300px] min-h-full min-w-full flex-auto justify-center content-between"
              >
                <Image
                  src={Company.img}
                  alt=""
                  className="h-72 mx-auto duration-300 "
                />
                <div className="p-4 text-center">
                  <h1 className="text-2xl font-bold  ">{Company.name}</h1>
                  <p className="text-md font-cairo ">{Company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
