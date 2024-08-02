import React from "react";
import { Meteors } from "../ui/meteros";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="w-full relative max-w-[30rem]">
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-1 pt-1  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="w-40 rounded-full  h-40 overflow-hidden">
            
            <img
              src="jibanphoto.jpg"
              alt="profile picture"
              className="object-cover h-44 w-full rounded-2xl"
            />
          </div>
          <div>
            <span>
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
            </span>
          </div>
          <Meteors number={90} />
        </div>
      </div>
    </div>
  );
}
