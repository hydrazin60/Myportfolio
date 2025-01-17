import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";

export default function Services() {
  return (
    <div className="w-full h-[80vh] text-white flex flex-col gap-52 overflow-hidden bg-black relative">
      <section>
        <span className="relative left-[47%] ssiz-450:left-[35%] text-4xl font-bold">
          <p className="text-green-600">Services</p>
        </span>
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0.5, width: "1rem" }}
            whileInView={{ opacity: 1, width: "10rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-32 overflow-visible w-[20rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] z-10"
          >
            <div className="absolute w-[100%] left-0 bg-black h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-32 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "5rem" }}
            whileInView={{ opacity: 1, width: "13rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-32 w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top] z-10"
          >
            <div className="absolute w-32 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-black h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>
      </section>

      <section className="w-full h-[40%] flex flex-col justify-center  px-20">
        <div className="flex justify-center gap-4 text-3xl ssiz-450:flex-wrap">
          <div className="w-80  h-40 bg-gray-900 flex flex-col items-center justify-around z-10 border border-white">
            <span className="text-6xl text-yellow-400">
              <FaLaptopCode />
            </span>
            <p>Web Developer</p>
          </div>
          <div className="w-80 h-40 bg-gray-900 flex flex-col items-center justify-around z-10 border border-white">
            <span className="flex gap-2 text-5xl text-yellow-400">
              <FaAppStoreIos /> & <FaGooglePlay />
            </span>
            <p>App Developer</p>
          </div>
          <div className="w-80 h-40 bg-slate-900 flex flex-col items-center justify-around z-10 border border-white">
            <span className="text-6xl text-yellow-400 ">
              <IoLogoDesignernews />
            </span>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
// import React from "react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaPlaceOfWorship } from "react-icons/fa";
// import { FaAppStoreIos } from "react-icons/fa";
// import { FaGooglePlay } from "react-icons/fa6";
// import { IoLogoDesignernews } from "react-icons/io";
// import { RiRobot2Fill } from "react-icons/ri";

// export default function Services() {
//   return (
//     <div className="w-full h-[100vh]  text-white flex flex-col  gap-52 overflow-hidden   bg-slate-900 z-10   ">
//       <section className="">
//         <span className="relative left-[47%]  text-4xl font-bold ]">
//           <p className="text-green-600">Services</p>
//         </span>
//         <div className="relative flex flex-col items-center ">
//           <motion.div
//             initial={{ opacity: 0.5, width: "5rem" }}
//             whileInView={{ opacity: 1, width: "10rem" }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             style={{
//               backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//             }}
//             className="absolute inset-auto right-1/2 h-32 overflow-visible w-[20rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
//           >
//             <div className="absolute w-[100%] left-0 bg-slate-900 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//             <div className="absolute w-32 h-[100%] left-0 bg-slate-900 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
//           </motion.div>

//           {/* Second Animated Div */}
//           <motion.div
//             initial={{ opacity: 0.5, width: "1rem" }}
//             whileInView={{ opacity: 1, width: "14rem" }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             style={{
//               backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//             }}
//             className="absolute inset-auto left-1/2 h-32  w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
//           >
//             <div className="absolute w-32 h-[100%] right-0 bg-slate-900 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
//             <div className="absolute w-[100%] right-0 bg-slate-900 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//           </motion.div>
//         </div>
//       </section>
//       <section className="w-full h-[60%] flex flex-col justify-center  gap-10 bg-slate-900   px-20   ">
//         <div div className="flex justify-between  text-3xl">
//           <div className=" w-80 h-40 bg-zinc-600  flex flex-col items-center justify-around ">
//             <span className="text-6xl text-yellow-400">
//               <FaLaptopCode />
//             </span>
//             <p>Web Developer</p>
//           </div>
//           <div className="w-80 h-40 bg-zinc-600  flex flex-col items-center justify-around">
//             <span className="flex gap-2 text-5xl  text-yellow-400">
//               <FaAppStoreIos /> & <FaGooglePlay />
//             </span>
//             <p>App Developer</p>
//           </div>
//           <div className="w-80 h-40 bg-zinc-600  flex flex-col items-center justify-around z-10 ">
//             <span className="text-6xl text-yellow-400">
//               <IoLogoDesignernews />
//             </span>
//             <p> UI/UX Designer</p>
//           </div>
//           {/* <div className="w-72 h-40 bg-zinc-600 flex flex-col items-center justify-around">
//             <span className="text-6xl text-yellow-400">
//               <RiRobot2Fill />
//             </span>
//             <p> Data analysis ML/AI</p>
//           </div> */}
//         </div>
//       </section>
//     </div>
//   );
// }
