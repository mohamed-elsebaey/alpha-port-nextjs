import React from "react";
import { motion } from "framer-motion";
import AboutUsCard from "./AboutUsCard";

const des1 = [
  ".مشروع باسقات وهو مشروع لانشاء مزارع النخيل بانواعها وتسويقها وبيعها للغير وادارة عملياتها الزراعية لاصحابها ",
];
const des2 = [
  ".مشروع الاستزراع السمكي والهدف منه توفير الازوت اللازم للزراعة وبداية التعامل مع انتاج الاسماك كمشروع منفصل ",
];
const des3 = [
  ".مشروع الانتاج الحيواني ويتخصص في  تربية الاغنام البرقي وتسمين صغار الابقار لانتاج اللحوم ",
];
const des4 = [
  ".مشروع الزراعات التقليدية لانتاج الحاصلات الزراعية من القمح والبرسيم الحجازي بغرض انتاج الاعلاف والتصدير وكذلك زراعة الكمون بهدف التصدير",
];
const des5 = [
  ".مشروع النباتات الطبية والعطرية  وينقسم الى قسمين الانتاج الزراعي والتجهيز ثم مرحلة التصدير ونعمل عليها حاليا ",
];
const des6 = [".مشروع النخيل : زراعة النخيل بانواعه بهدف التصنيع والتصدير "];
const des7 = [
  ".مشروع الفا العقاري وقد تم الانتهاء بالفعل من انشاء برج سكني وتسويقه وبيعه ",
];
const des8 = [
  ".مشروع المقاولات الزراعية العامة :  وفيه نقوم بتجهيز بعض الاراضي والمزارع لصغار المزارعين وتجهيزها وبيعها  لهم بهامش ربح ",
];

const OurProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lg:gap-15 text-end"
    >
      {/* part one */}
      <div>
        <div className="py-6 font-cairo flex flex-col gap-4">
          <p className="text-sm text-blueColor tracking-[4px]">2024 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">مشارعنا</h2>
        </div>
        <div className="mt-6 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <AboutUsCard title={des1} subTitle="" result="(1)" des={[]} />
          <AboutUsCard title={des2} subTitle="" result="(2)" des={[]} />
          <AboutUsCard title={des3} subTitle="" result="(3)" des={[]} />
          <AboutUsCard title={des4} subTitle="" result="(4)" des={[]} />
          <AboutUsCard title={des5} subTitle="" result="(5)" des={[]} />
          <AboutUsCard title={des6} subTitle="" result="(6)" des={[]} />
          <AboutUsCard title={des7} subTitle="" result="(7)" des={[]} />
          <AboutUsCard title={des8} subTitle="" result="(8)" des={[]} />
        </div>
      </div>
    </motion.div>
  );
};

export default OurProjects;
