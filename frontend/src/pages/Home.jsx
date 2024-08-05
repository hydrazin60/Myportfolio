import React from "react";
import FrontPage from "./FrontPage";
import About from "./About";
import Experience from "./Experience";
import Services from "./Services";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <FrontPage />
      <About />
      <Experience />
      <Services />
      <Projects />
    </>
  );
}
