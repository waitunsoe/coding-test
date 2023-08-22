// eslint-disable-next-line no-unused-vars
import React from "react";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tripo from "./components/Tripo";
import OurChallenges from "./components/OurChallenges";
import OldWebsiteProblems from "./components/OldWebsiteProblems";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  return (
    <div className="positon-relative">
      <Head />
      <Nav />
      <Hero />
      <Tripo />
      <OurChallenges />
      <OldWebsiteProblems />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default App;
