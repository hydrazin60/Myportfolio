"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { MeteorsDemo } from "../Card/MeteorsDemo";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "overflow-hidden    flex   justify-center   w-full h-full ",
        className
      )}
    >
      <div className="text-white flex flex-col items-center ssiz-450:gap-10 justify-between">
        <div className="relative flex flex-col items-center">
          {/* First Animated Div */}
          <motion.div
            initial={{ opacity: 0.5, width: "4rem" }}
            whileInView={{ opacity: 1, width: "13rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-32 ssiz-450:h-28 overflow-visible w-[20rem]  bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-32 ssiz-450:w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          {/* Second Animated Div */}
          <motion.div
            initial={{ opacity: 0.5, width: "1rem" }}
            whileInView={{ opacity: 1, width: "14rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-32 ssiz-450:h-28 w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-32 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>
        <section className="text-white text-sm ssiz-450:text-center z-50">
          Expert Javascript Node.Js Full Stack Developer | React-Native Mobile
          App Developer | Next js
        </section>
        <section className="flex flex-col gap-3 items-center mt-8">
          <div className="flex gap-8">
            <div className="ssiz-450:w-36 w-60 h-10 flex items-center justify-center bg-slate-800">
              Name
            </div>
            <div className="ssiz-450:w-52 w-60  h-10 flex items-center justify-center bg-slate-800">
              Jiban Pandey
            </div>
          </div>
          <div className="flex gap-8">
            <div className="ssiz-450:w-36 w-60 h-10 flex items-center justify-center bg-slate-800">
              Email
            </div>
            <div className="ssiz-450:w-52 w-60 text-sm  h-10 flex items-center justify-center bg-slate-800">
              pandeyjiban2060@gmail.com
            </div>
          </div>
          <div className="flex gap-8">
            <div className="ssiz-450:w-36 w-60 h-10 flex items-center justify-center bg-slate-800">
              Phone
            </div>
            <div className="ssiz-450:w-52 w-60  h-10 flex items-center justify-center bg-slate-800">
              +977 9861967354
            </div>
          </div>
          <div className="flex gap-8">
            <div className="ssiz-450:w-36 w-60 h-10 flex items-center justify-center bg-slate-800">
              Address
            </div>
            <div className="ssiz-450:w-52 w-60  h-10 flex items-center justify-center bg-slate-800">
              Balkot, Bhaktapur
            </div>
          </div>
          <div className="flex gap-8">
            <div className="ssiz-450:w-36 w-60 h-10 flex items-center justify-center bg-slate-800">
              Experience
            </div>
            <div className="ssiz-450:w-52 w-60  h-10 flex items-center justify-center bg-slate-800">
              2 year
            </div>
          </div>
          <button className="w-44 h-10 bg-slate-800 text-white rounded transition-colors duration-300 ease-linear hover:bg-green-600">
            More!
          </button>
        </section>
      </div>
    </div>
  );
};
