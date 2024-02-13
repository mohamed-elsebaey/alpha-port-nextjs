import React from "react";
import Hero from "./Hero/Hero";
import Companies from "./Companies/Companies";
import Page1 from "./slides/page";
import Page from "./controlled/page";

function HomePage() {
  return (
    <>
      <Hero />
      <Companies />
      <main className="w-3/4 mx-auto">
        <Page1 />
        <Page/>
        <Page/>
      </main>
    </>
  );
}

export default HomePage;
