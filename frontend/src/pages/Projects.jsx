import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPlaceOfWorship } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoDesignernews } from "react-icons/io";
import { RiRobot2Fill } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="w-full h-[100vh] bg-slate-950 text-white flex flex-col justify-evenly overflow-hidden ">
      <section className=" ">
        <span className="relative left-[43%]  text-4xl font-bold ]">
          <p className="text-green-600">My Projects</p>
        </span>
        <div className="relative flex flex-col items-center ">
          <motion.div
            initial={{ opacity: 0.5, width: "7rem" }}
            whileInView={{ opacity: 1, width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-32 overflow-visible w-[20rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0  bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-32 h-[100%] left-0   bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          {/* Second Animated Div */}
          <motion.div
            initial={{ opacity: 0.5, width: "1rem" }}
            whileInView={{ opacity: 0.8, width: "14rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-32  w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-32 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0  bg-slate-950  h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>
      </section>
      <section className="flex gap-20 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-hidden pl-12">
        <div className="relative flex-none h-96 w-96 z-10 group">
          <img
            src="work-1.png"
            alt="Project 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gray-800 bg-opacity-50 text-center text-black p-4 transition-opacity duration-300">
            hjdhshdfgdgdhhb vbc
          </div>
        </div>

        <div className="flex-none h-96 w-96 z-10">
          <img
            src="work-2.png"
            alt="Project 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-none h-96 w-96 z-10">
          <img
            src="work-3.png"
            alt="Project 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-none h-96 w-96 z-10">
          <img
            src="work-1.png"
            alt="Project 4"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-none h-96 w-96 z-10">
          <img
            src="work-2.png"
            alt="Project 5"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-none h-96 w-96 z-10">
          <img
            src="work-3.png"
            alt="Project 6"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
