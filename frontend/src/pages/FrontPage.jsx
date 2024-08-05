import React from "react";
import "../styles/FrontPage.css";
import D3cube from "../components/3Dcube";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { FaAppStoreIos } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import About from "./About";
import CustemButton from "../components/ui/CustemButton";

export default function FrontPage() {
  return (
    <>
      <section className="h-[70vh] w-full bg-black text-white relative top-[5rem] flex justify-between pl-10 overflow-hidden mb-10 ">
        <div className="flex flex-col gap-6 w-[60%] lg:mt-16">
          <span className="text-2xl font-bold">
            <h2>Hi, I'm Jiban Pandey</h2>
          </span>
          <span className="text-6xl font-bold text-green-500 ">
            <h2>App Developer</h2>
            {/* <h1>Website Developer</h1> */}
          </span>
          <span className="w-[80%] z-20">
            <p className="text-sm ">
              I am a passionate full-stack developer with a specialization in
              JavaScript technologies. My expertise includes building robust web
              applications and mobile apps using modern frameworks such as
              React, Next.js, and React Native. Additionally, I am expanding my
              skill set into data analysis and machine learning using Python
              frameworks. With a strong focus on both frontend and backend
              development, I deliver high-quality, user-friendly, and scalable
              solutions tailored to meet diverse client needs.
            </p>
          </span>
          <span className=" ">
            <p className="font-semibold ">
              Need a skilled freelancer for website and app development?
            </p>
            <p className="text-sm ">
              I create high-quality, responsive sites and apps tailored to your
              needs at an affordable price. <br /> Contact me for reliable and
              professional services to bring your vision to life!
            </p>
          </span>
          <span className="flex gap-10">
            <CustemButton name="Hire Me" />
            <CustemButton name="download my resume" />
          </span>
        </div>
        <div className="w-[40%] flex items-center justify-end  fixed -right-12 top-52 ">
          <div className="icon-wrapper">
            <div className="icon-container">
              <span className="text-white bg-green-500 rounded-lg  text-3xl">
                <FaNodeJs />
              </span>
              <span className="bg-black text-white rounded-lg font-bold text-5xl">
                <SiNextdotjs />
              </span>
              <span className="bg-blackw-500 m-2 text-green-400 rounded-lg font-bold text-5xl">
                <TbBrandReactNative />
              </span>
              <span className="text-yellow-300 bg-black rounded-lg font-bold text-5xl">
                <TbBrandJavascript />
              </span>
              <span className="text-green-600 font-bold bg-white rounded-lg text-3xl">
                <FaReact />
              </span>
              <span className="bg-red-700 rounded-lg font-bold text-3xl">
                <IoLogoHtml5 />
              </span>
              <span className="rounded-lg font-bold text-3xl">
                <FaPython />
              </span>
              <span className="rounded-lg font-bold text-6xl">
                <FcAndroidOs />
              </span>
              <span className="rounded-lg font-bold text-3xl">
                <FaAppStoreIos />
              </span>
              <span className="rounded-lg font-bold text-3xl">
                <SiMongodb />
              </span>
              <span className="rounded-lg font-bold text-3xl">
                <FaGithubSquare />
              </span>
              <span className="text-green-600 font-bold bg-white rounded-lg text-5xl">
                <RiFirebaseFill />
              </span>
            </div>
            <div className="h-[300px] w-[300px] bg-green-600 rounded-full FrontpageCircleShadow overflow-hidden flex items-center justify-end absolute top-0 right-0">
              <span className="opacity-15">
                <D3cube />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// import React from "react";
// import "../styles/FrontPage.css";
// import D3cube from "../components/3Dcube";
// import { IoLogoHtml5 } from "react-icons/io5";
// import { FaReact } from "react-icons/fa";
// import { TbBrandJavascript } from "react-icons/tb";
// import { TbBrandReactNative } from "react-icons/tb";
// import { SiNextdotjs } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// import { FcAndroidOs } from "react-icons/fc";
// import { FaAppStoreIos } from "react-icons/fa6";
// import { SiMongodb } from "react-icons/si";
// import { FaGithubSquare } from "react-icons/fa";
// import { RiFirebaseFill } from "react-icons/ri";
// import About from "./About";

// export default function FrontPage() {
//   return (
//     <>
//       <section className="h-[80vh] w-full bg-black text-white relative top-[5rem] flex justify-between pl-10 overflow-hidden mb-10">
//         <div className="flex flex-col gap-12 w-[60%] lg:mt-16">
//           <span>
//             <h2>Hi, I'm Jiban Pandey</h2>
//           </span>
//           <div>
//             <h2>App Developer</h2>
//             <h1>Website Developer</h1>
//           </div>
//           <span className="w-[80%]">
//             <p>
//               I am a passionate full-stack developer with a specialization in
//               JavaScript technologies. My expertise includes building robust web
//               applications and mobile apps using modern frameworks such as
//               React, Next.js, and React Native. Additionally, I am expanding my
//               skill set into data analysis and machine learning using Python
//               frameworks. With a strong focus on both frontend and backend
//               development, I deliver high-quality, user-friendly, and scalable
//               solutions tailored to meet diverse client needs.
//             </p>
//           </span>
//         </div>
//         <div className="w-[40%] flex items-center justify-end fixed right-0 bottom-44 z-20">
//           <div className="icon-wrapper">
//             <div className="icon-container">
//               <span className="text-white bg-green-500 rounded-lg font-bold text-3xl">
//                 <FaNodeJs />
//               </span>
//               <span className="bg-black text-white rounded-lg font-bold text-3xl">
//                 <SiNextdotjs />
//               </span>
//               <span className="bg-blackw-500 m-2 text-green-400 rounded-lg font-bold text-3xl">
//                 <TbBrandReactNative />
//               </span>
//               <span className="text-yellow-300 bg-black rounded-lg font-bold text-3xl">
//                 <TbBrandJavascript />
//               </span>
//               <span className="text-green-600 font-bold bg-white rounded-lg text-3xl">
//                 <FaReact />
//               </span>
//               <span className="bg-red-700 rounded-lg font-bold text-3xl">
//                 <IoLogoHtml5 />
//               </span>
//               <span className="rounded-lg font-bold text-3xl">
//                 <FaPython />
//               </span>
//               <span className="rounded-lg font-bold text-3xl">
//                 <FcAndroidOs />
//               </span>
//               <span className="rounded-lg font-bold text-3xl">
//                 <FaAppStoreIos />
//               </span>
//               <span className="rounded-lg font-bold text-3xl">
//                 <SiMongodb />
//               </span>
//               <span className="rounded-lg font-bold text-3xl">
//                 <FaGithubSquare />
//               </span>
//               <span className="text-green-600 font-bold bg-white rounded-lg text-3xl">
//                 <RiFirebaseFill />
//               </span>
//             </div>
//             <div className="h-[300px] w-[300px] bg-green-600 rounded-full FrontpageCircleShadow overflow-hidden flex items-center justify-end absolute top-0 right-0 z-10">
//               <span className="opacity-15">
//                 <D3cube />
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
