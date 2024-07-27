import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "../styles/Header.css";

export default function Header() {
  const [menuopen, setmenuOpen] = useState(false);
  const [rightsideiconContainerOpen, setrightsideiconContainerOpen] =
    useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black sm-custom:bg-zinc-900">
      <div className="headercontainer h-20 shadow-sm">
        <div className="p-2 flex text-white justify-between">
          <div className="ml-12">
            <img
              src="logo.png"
              alt="logo"
              className="headerlogo h-[65px] rounded-full"
            />
          </div>

          <div className="headerlistcontainerdiv mt-4 hidden sm-custom:flex">
            <ul className="headerUlpagenamecontainer flex text-center gap-11">
              <li className="text-md uppercase headerinpagelistname hover:text-green-500">
                ABOUT
              </li>
              <li className="text-md headerinpagelistname hover:text-green-500">
                SERVICES
              </li>
              <li className="hover:text-green-500 uppercase text-md headerinpagelistname">
                Project
              </li>
              <li className="hover:text-green-500 text-md headerinpagelistname">
                CONTACT
              </li>
              <li className="hover:text-green-500 text-md headerinpagelistname mr-4">
                BLOG
              </li>
            </ul>
          </div>

          <div className="NavigationBarIconContainner hidden lg:flex justify-between items-center mb-2">
            <ul className="headericonsUL flex text-center gap-7 text-xl">
              <li className="relative group">
                <span className="block relative transition-transform transform group-hover:scale-150 hover:bg-LinkdenColor">
                  <FaLinkedin />
                </span>
              </li>
              <li className="relative group">
                <span className="block relative transition-transform transform group-hover:scale-150   hover:bg-GitHubColor">
                  <FaGithubSquare />
                </span>
              </li>
              <li className="relative group">
                <span className="block relative transition-transform transform group-hover:scale-150  hover:bg-FacebookColor">
                  <FaFacebookF />
                </span>
              </li>
              <li className="relative group">
                <span className="block relative transition-transform transform group-hover:scale-150   hover:bg-TwiterColor">
                  <FaXTwitter />
                </span>
              </li>
              <li className="relative group">
                <span className="block relative transition-transform transform group-hover:scale-150  group-hover:text-white  ">
                  <FaInstagramSquare className="hover:bg-[linear-gradient(to_right,_#0000ff,_#ff0000,_#ffff00)]" />
                </span>
              </li>
            </ul>
          </div>

          <div
            className="  flex sm-custom:hidden "
            onClick={() => setmenuOpen(!menuopen)}
          >
            {menuopen ? (
              <span className="w-16 h-9 px-4 bg-yellow-200 text-black flex items-center justify-center rounded-md cursor-pointer shadow-lg">
                <ImCross className="text-2xl" />
              </span>
            ) : (
              <span className="w-16 h-9 px-4 bg-yellow-200 text-black flex items-center justify-center rounded-md cursor-pointer shadow-lg">
                <GiHamburgerMenu className="text-3xl" />
              </span>
            )}
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 h-[100vh] w-40 text-white bg-zinc-900 flex flex-col items-center md:hiddenout duration-300 rounded-b-2xl transition-transform transform ease-in-out ${
            menuopen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src="logo.png"
            alt="logo"
            className="headerlogo h-[90px] rounded-full mt-3 mb-10"
          />

          <div className="headerlistcontainerdiv mt-4">
            <ul className="headerUlpagenamecontainer flex flex-col text-center gap-16">
              <li className="text-md uppercase headerinpagelistname hover:text-green-500">
                ABOUT
              </li>
              <li className="text-md headerinpagelistname hover:text-green-500">
                SERVICES
              </li>
              <li className="hover:text-green-500 uppercase text-md headerinpagelistname">
                Project
              </li>
              <li className="hover:text-green-500 text-md headerinpagelistname">
                CONTACT
              </li>
              <li className="hover:text-green-500 text-md headerinpagelistname">
                BLOG
              </li>
            </ul>
          </div>
        </div>

        <div className=" lg:hidden flex ">
          <div
            onClick={() =>
              setrightsideiconContainerOpen(!rightsideiconContainerOpen)
            }
          >
            {rightsideiconContainerOpen ? (
              <span className="text-green-500 absolute right-10 top-96 text-2xl py-2 px-2 hover:bg-slate-900 w-12 hover:rounded-l-xl">
                <FaAngleDoubleRight className="animate-to-and-fro group-hover:animate-to-and-fro-fast transition-all duration-500" />
              </span>
            ) : (
              <span className=" absolute right-0 opacity-45 top-96 text-2xl py-1 px-4 hover:bg-slate-900 text-green-500 w-14 hover:rounded-l-xl">
                <FaAngleDoubleLeft className="animate-to-and-fro group-hover:animate-to-and-fro-fast transition-all duration-500" />
              </span>
            )}
          </div>

          <div
            className={`smallScreenHeaderIconContainer absolute right-1 ${
              rightsideiconContainerOpen ? "open" : ""
            }`}
          >
            <ul className="flex flex-col justify-between my-5 items-center gap-7 text-xl">
              <li className="relative group">
                <span className="block transition-transform transform group-hover:scale-150 hover:bg-LinkdenColor ">
                  <FaLinkedin />
                </span>
              </li>
              <li className="relative group">
                <span className="block  transition-transform  group-hover:scale-150  hover:bg-GitHubColor ">
                  <FaGithubSquare />
                </span>
              </li>
              <li className="relative group">
                <span className="block transition-transform transform group-hover:scale-150 hover:bg-FacebookColor">
                  <FaFacebookF />
                </span>
              </li>
              <li className="relative group">
                <span className="block transition-transform transform group-hover:scale-150 hover:bg-TwiterColor">
                  <FaXTwitter />
                </span>
              </li>
              <li className="relative group">
                <span className="block transition-transform transform group-hover:scale-150 group-hover:text-white hover:bg-[linear-gradient(to_right,_#0000ff,_#ff0000,_#ffff00)] ">
                  <FaInstagramSquare />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// bg-[linear-gradient(to_right,_#0000ff,_#ff0000,_#ffff00)]
// import React, { useState } from "react";
// import {
//   FaLinkedin,
//   FaGithubSquare,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagramSquare,
//   FaAngleDoubleLeft,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
// import { FaAngleDoubleRight } from "react-icons/fa";
// import "../styles/Header.css";

// export default function Header() {
//   const [menuopen, setmenuOpen] = useState(false);
//   const [rightsideiconContainerOpen, setrightsideiconContainerOpen] =
//     useState(true);
//   return (
//     <nav className="fixed w-full top-0 z-50 bg-black sm-custom:bg-zinc-900">
//       <div className="headercontainer h-20 shadow-sm">
//         <div className="p-2 flex text-white justify-between">
//           <div className="ml-4">
//             <img
//               src="logo.png"
//               alt="logo"
//               className="headerlogo h-[65px] rounded-full"
//             />
//           </div>

//           <div className="headerlistcontainerdiv mt-4 hidden sm-custom:flex">
//             <ul className="headerUlpagenamecontainer flex text-center gap-11">
//               <li className="text-md uppercase headerinpagelistname hover:text-green-500">
//                 ABOUT
//               </li>
//               <li className="text-md headerinpagelistname hover:text-green-500">
//                 SERVICES
//               </li>
//               <li className="hover:text-green-500 uppercase text-md headerinpagelistname">
//                 Project
//               </li>
//               <li className="hover:text-green-500 text-md headerinpagelistname">
//                 CONTACT
//               </li>
//               <li className="hover:text-green-500 text-md headerinpagelistname mr-4">
//                 BLOG
//               </li>
//             </ul>
//           </div>

//           <div className="NavigationBarIconContainner hidden lg:flex justify-between items-center mb-2">
//             <ul className="headericonsUL flex text-center gap-7 text-xl">
//               <li className="relative group">
//                 <span className="block relative transition-transform transform group-hover:scale-150">
//                   <FaLinkedin />
//                 </span>
//               </li>
//               <li className="relative group">
//                 <span className="block relative transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                   <FaGithubSquare />
//                 </span>
//               </li>
//               <li className="relative group">
//                 <span className="block relative transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                   <FaFacebookF />
//                 </span>
//               </li>
//               <li className="relative group">
//                 <span className="block relative transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                   <FaTwitter />
//                 </span>
//               </li>
//               <li className="relative group">
//                 <span className="block relative transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                   <FaInstagramSquare />
//                 </span>
//               </li>
//             </ul>
//           </div>

//           <div onClick={() => setmenuOpen(!menuopen)}>
//             {menuopen ? (
//               <span className="w-16 h-9 px-4 bg-yellow-200 text-black flex items-center justify-center rounded-md cursor-pointer shadow-lg">
//                 <ImCross className="text-2xl" />
//               </span>
//             ) : (
//               <span className="w-16 h-9 px-4 bg-yellow-200 text-black flex items-center justify-center rounded-md cursor-pointer shadow-lg">
//                 <GiHamburgerMenu className="text-3xl" />
//               </span>
//             )}
//           </div>
//         </div>

//         <div
//           className={`absolute top-0 left-0 h-[100vh] w-40 text-white bg-zinc-900 flex flex-col items-center md:hiddenout duration-300 rounded-b-2xl transition-transform transform ease-in- ${
//             menuopen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <img
//             src="logo.png"
//             alt="logo"
//             className="headerlogo h-[90px] rounded-full mt-3 mb-10"
//           />
//           <div className="headerlistcontainerdiv mt-4">
//             <ul className="headerUlpagenamecontainer flex flex-col text-center gap-16">
//               <li className="text-md uppercase headerinpagelistname hover:text-green-500">
//                 ABOUT
//               </li>
//               <li className="text-md headerinpagelistname hover:text-green-500">
//                 SERVICES
//               </li>
//               <li className="hover:text-green-500 uppercase text-md headerinpagelistname">
//                 Project
//               </li>
//               <li className="hover:text-green-500 text-md headerinpagelistname">
//                 CONTACT
//               </li>
//               <li className="hover:text-green-500 text-md headerinpagelistname">
//                 BLOG
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="">
//           <div
//             onClick={() =>
//               setrightsideiconContainerOpen(!rightsideiconContainerOpen)
//             }
//           >
//             {rightsideiconContainerOpen ? (
//               <span className="text-white absolute right-10 top-96 text-2xl group py-2 px-2 hover:bg-slate-900 w-12 hover:rounded-l-xl ">
//                 <FaAngleDoubleRight className="animate-to-and-fro group-hover:animate-to-and-fro-fast transition-all duration-500 group-hover:text-green-500" />
//               </span>
//             ) : (
//               <span className="text-white absolute right-0 opacity-45 top-96 text-2xl group py-1 px-4 hover:bg-slate-900 w-14 hover:rounded-l-xl ">
//                 <FaAngleDoubleLeft className="animate-to-and-fro group-hover:animate-to-and-fro-fast transition-all duration-500 group-hover:text-green-500" />
//               </span>
//             )}
//           </div>

//           {rightsideiconContainerOpen && (
//             <div
//               className={`smallScreenHeaderIconContainer w-9 bg-black absolute right-0 top-64 text-white transition-transform transform ease-in-out duration-300 ${
//                 rightsideiconContainerOpen
//                   ? "translate-x-0"
//                   : "-translate-x-full"
//               }`}
//             >
//               <div>
//                 <ul className="flex flex-col justify-between my-5 items-center gap-7 text-xl">
//                   <li className="relative group">
//                     <span className="block transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                       <FaLinkedin />
//                     </span>
//                   </li>
//                   <li className="relative group">
//                     <span className="block transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                       <FaGithubSquare />
//                     </span>
//                   </li>
//                   <li className="relative group">
//                     <span className="block transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                       <FaFacebookF />
//                     </span>
//                   </li>
//                   <li className="relative group">
//                     <span className="block transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                       <FaTwitter />
//                     </span>
//                   </li>
//                   <li className="relative group">
//                     <span className="block transition-transform transform group-hover:scale-150 group-hover:text-green-500">
//                       <FaInstagramSquare />
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
