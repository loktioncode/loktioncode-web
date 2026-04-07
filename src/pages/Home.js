import React from "react";
import Banner from "../components/Home/Banner";
import Hip from "../components/Home/Hip";
import About from "../components/Home/About";
import Who from "../components/OurBrand/Who";

function Home() {
  return (
    <main id="top">
      <Banner />
      <Hip />
      <About />
      <Who />
    </main>
  );
}

export default Home;
