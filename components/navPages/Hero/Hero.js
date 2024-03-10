import React from "react";
import Image from "next/image";
import Img from "../../../public/images/logo/png.png";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-1 bg-bgGrayColor">
        <div className="container flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 ">
            <Image
              data-aos="fade-up"
              data-aos-duration="700"
              src={Img}
              alt="Hero"
              className="hidden lg:flex"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="space-y-6 max-w-xl text-white font-cairo text-center sm:text-end "
            >
              {/* text section */}
              <h1 className="text-3xl sm:text-4xl font-bold  pl-3 py-8  ">
                الفا بورت - مجموعة شركات مصرية
              </h1>
              <h2>
                تعمل فى زراعة وتصنيع وتصدير منتجات عضوية خالية من المبيدات
                والمتبقيات, لذلك تتناغم منتجاتنا مع الطبيعة الكونية لتليق
                بالانسان
              </h2>
              <h2>
                نعمل على المشاركة الفعالة فى تلبية احتياجات العالم الغذائية
                والدوائية النظيفة من خلال الممارسات الزراعية الآ منة والمستدامة
              </h2>
              <h2>
                نسعى إلى أن نكون الخيار الاستثمارى الأمثل لشركائنا , و الأرقى
                لكل من يعمل فى مجال استيراد وتصنيع النباتات الطبية والعطرية
                والتمور والزراعات العضوية
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
