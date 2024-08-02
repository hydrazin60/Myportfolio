import React from "react";
import "../styles/AboutMe.css";
import { MeteorsDemo } from "../components/Card/MeteorsDemo";

export default function About() {
  return (
    <div className="w-full h-[90vh] px-auto mt-20 about-section bg-black text-white px-12  ">
      <section className="w-full h-36"></section>
      <section>
        <div>
          <MeteorsDemo />
        </div>
        <div></div>
      </section>
    </div>
  );
}
