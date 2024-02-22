import React from "react";

import BgImg from "@/public/images/logo/bg.png";

export default function Soon(props) {
  return (
    <div >
      <div className="w-full flex justify-center py-60 text-blueColor flex-col text-center">
        <div className="text-8xl">{props.name}</div>
        <h1 className="text-2xl text-bgGrayColor my-3">Soon ... </h1>
      </div>
    </div>
  );
}
