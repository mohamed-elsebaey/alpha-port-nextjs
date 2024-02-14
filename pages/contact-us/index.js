import ContactForm from "@/components/navPages/ContactForm/ContactForm";
import Example from "@/components/navPages/Example";
import React from "react";

import BgImg from "@/public/images/logo/bg.png";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function ContactUs() {
  return (
    <div className="bg-blueColor/20">
      <div className="w-3/4 mx-auto border-2">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
