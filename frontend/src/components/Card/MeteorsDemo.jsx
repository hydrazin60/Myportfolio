import React from "react";
import { Meteors } from "../ui/meteros";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="w-full relative max-w-lg ">
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-1 pt-1  overflow-hidden rounded-2xl flex flex-col justify-between gap-6 p-6">
          <div className=" flex justify-between  mt-1 w-full ">
            <span className="w-32 rounded-full  h-32 overflow-hidden flex items-center justify-center  relative left-1 top-14 ">
              <img
                src="jibanphoto.jpg"
                alt="profile picture"
                className="object-cover h-44 w-full rounded-2xl"
              />
            </span>
            <span className=" w-[72%] h-[30%] overflow-hidden opacity-100 z-50 ">
              <img src="githubrepo.png" alt="githubrepo" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-black px-2 py-4">
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                deserunt assumenda repellendus magnam sit, iusto excepturi
                perspiciatis obcaecati esse quae nemo porro eveniet, a,
                voluptates voluptatum libero ut neque delectus?
              </p>
            </div>
            <div className="bg-black text-sm  px-2 py-4">
              <p>
                <h1>About</h1>I am a passionate full-stack developer with a
                specialization in JavaScript technologies. My expertise includes
                building robust web applications and mobile apps using modern
                frameworks such as React, Next.js, and React Native.
                Additionally, I am expanding my skill set into data analysis and
                machine learning using Python frameworks. client needs.
              </p>
            </div>
          </div>
          <Meteors number={90} />
        </div>
      </div>
    </div>
  );
}
