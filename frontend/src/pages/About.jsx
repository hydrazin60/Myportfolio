import React from "react";
import "../styles/AboutMe.css";
import { MeteorsDemo } from "../components/Card/MeteorsDemo";
import { LampDemo } from "../components/Card/LampDemo";

export default function About() {
  return (
    <div className="relative">
      <div className="h-[90vh] px-auto mt-20 about-section  bg-slate-950  text-white px-10  overflow-hidden  ">
        <section className="w-full h-36">
          <span className="relative left-[59.5%] top-20 text-4xl font-bold ]">
            <p className="text-green-600">About Me</p>
          </span>
        </section>
        <section className="w-full  flex justify-between">
          <div className="w-[40%]">
            <MeteorsDemo />
          </div>
          <div className="bg-white text-black w-full">
            <LampDemo />
          </div>
        </section>
      </div>
    </div>
  );
}
