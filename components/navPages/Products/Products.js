import React from "react";
import AutoSlides from "../slides/AutoSlides";

function Products() {
  return (
    <>
      <span id="companies"></span>
      <div className="py-10">
        <div className="container text-bgGrayColor">
          {/* Heading section  */}
          <div className="text-center my-16">
            <h1 className="text-4xl font-bold ">Our Products</h1>
          </div>

          {/* Company Card section  */}
          <AutoSlides/>
        </div>
      </div>
    </>
  );
}

export default Products;
