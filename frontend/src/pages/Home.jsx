import React from "react";
import "../styles/Home.css";
export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] bg-black text-white pt-20">
      <section className="w-[100vw] pt-20 px-14 ">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="my-4 text-2xl font-bold">
              <h1> Hi, I'm Jiban Pandey</h1>
            </div>
            <div className="text-6xl font-bold mb-6 text-green-400">
              {/* <h2>Webside developer</h2> */}
              <h2>Mobile App developer</h2>
            </div>
            <div
              className="lg:w-[800px] text-base"
              style={{ fontFamily: "arial, sans-serif" }}
            >
              <p>
                I am a passionate full-stack developer with a specialization in
                JavaScript technologies. My expertise includes building robust
                web applications and mobile apps using modern frameworks such as
                React, Next.js, and React Native. Additionally, I am expanding
                my skill set into data analysis and machine learning using
                Python frameworks. With a strong focus on both frontend and
                backend development, I deliver high-quality, user-friendly, and
                scalable solutions tailored to meet diverse client needs.
              </p>
            </div>
            <div className="flex mt-10 gap-10">
              <div>
                <button
                  className="text-white font-bold py-2 px-4 rounded border border-white  "
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Hire Me
                </button>
              </div>
              <div>
                <button
                  className="text-white bg-green-700 font-bold py-2 px-4 rounded border border-white  "
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div>
          <div className="h-[400px] w-[400px] bg-[#009900] profilepictureshawow rounded-full ">
              
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
