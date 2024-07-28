import React, { useEffect } from "react";
import "../styles/3Dcube.css";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
export default function D3cube() {
  useEffect(() => {
    const box = document.querySelector(".box");
    let currentRotationX = 0,
      currentRotationY = 0;
    let animationPlaying = true;

    function updateRotation(deltaX, deltaY) {
      currentRotationX += deltaY * 0.5; // Adjust sensitivity
      currentRotationY += deltaX * 0.5; // Adjust sensitivity
      box.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
      // Disable animation while interacting
      if (animationPlaying) {
        box.style.animation = "none";
      }
    }

    // Handle mouse wheel events
    const handleWheel = (e) => {
      const deltaX = e.deltaX;
      const deltaY = e.deltaY;

      updateRotation(deltaX, deltaY);

      // Prevent default scrolling behavior
      e.preventDefault();
    };

    // Handle mouse move events to re-enable animation if the mouse is not over the box
    const handleMouseMove = () => {
      if (!animationPlaying) {
        animationPlaying = true;
        box.style.animation = "rotate 15s infinite linear";
      }
    };

    // Re-enable animation after a short delay when not interacting
    let interactionTimeout;
    const handleInteractionTimeout = () => {
      if (animationPlaying) {
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
          animationPlaying = false;
          box.style.animation = "rotate 15s infinite linear";
        }, 1000); // 1 second delay before resuming animation
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleInteractionTimeout);

    return () => {
      // Clean up event listeners on component unmount
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleInteractionTimeout);
    };
  }, []);

  return (
    <div className="container ">
      <div className="box ">
        <div className="card flex justify-center items-center" id="front">
          <span className="bg-red-600 rounded-lg font-bold">
            <IoLogoHtml5 />
          </span>
        </div>
        <div className="card flex justify-center items-center" id="back">
          <span className="text-green-600 font-bold bg-white rounded-lg ">
            <FaReact />
          </span>
        </div>
        <div className="card flex justify-center items-center" id="left">
          <span className="text-yellow-300 bg-black rounded-lg font-bold">
            <TbBrandJavascript />
          </span>
        </div>
        <div className="card flex justify-center items-center" id="right">
          <span className="bg-blackw-500 m-2 text-green-400 rounded-lg font-bold">
            <TbBrandReactNative />
          </span>
        </div>
        <div className="card flex justify-center items-center " id="top">
          <span className=" bg-black text-white rounded-lg font-bold">
            <SiNextdotjs />
          </span>
        </div>
        <div className="card flex justify-center items-center " id="bottom">
          <span className="text-white bg-green-500 rounded-lg font-bold">
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  );
}
