import React from "react";
import "../styles/AboutMe.css";
import { MeteorsDemo } from "../components/Card/MeteorsDemo";
import { LampDemo } from "../components/Card/LampDemo";

export default function About() {
  return (
    <div className="relative">
      <div className="h-[90vh] ssiz-450:h-auto px-auto mt-20 about-section  bg-slate-950  text-white px-1  overflow-hidden  ">
        <section className="w-full h-36">
          <span className="relative left-[59.5%]  ssiz-450:left-[32%] top-20 text-4xl font-bold ]">
            <p className="text-green-600">About Me</p>
          </span>
        </section>
        <section className="w-full  flex  justify-between ssiz-450:flex-col gap-2 ssiz-450:gap-10">
          <div className="w-[40%] ssiz-450:w-[100%]  ">
            <MeteorsDemo />
          </div>
          <div className=" text-black w-full   ">
            <LampDemo />
          </div>
        </section>
      </div>
    </div>
  );
}

{
  /* <section className="w-full  flex  justify-between">
          <div className="w-[40%] bg-red-700">
            <MeteorsDemo />
          </div>
          <div className="w-[6 text-black w-full bg-green-600">
            <LampDemo />
          </div>
        </section> */
}
