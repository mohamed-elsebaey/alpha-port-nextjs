import React from "react";
import Head from "next/head";
import HomePage from "../components/navPages/HomePage";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Alpha Port</title>
        <meta
          name="alpha port "
          content="Discover nature's products with Alpha Port"
        />
        <link
          rel="icon"
          href="/icon.png"
        />
      </Head>
      <HomePage />
    </>
  );
}
export default Home;
