import React, { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Splinescene from "./Splinescene";

const Hero = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const letters = textRef.current.children;
    gsap.to(letters, {
      color: "#C4EC1D",
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 0.3,
      delay: 0.5,
    });
  }, []);

  const text = "Designer".split("").map((char, i) => (
    <span key={i} className="inline-block">{char}</span>
  ));

  return (
    <section className="w-full relative overflow-hidden bg-[#0a0a0a] oveflow-hidden">
         

      <div className="px-5 md:px-10 flex flex-col md:flex-row overflow-hidden items-center justify-between min-h-screen">
        {/* Left Side Content */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-white">
          {/* Availability Text */}
          <p className="text-[5vw] md:text-[2.5vw] flex items-center gap-2 hover:text-[#C4EC1D] transition-all">
            Currently Available For Freelance <br /> Worldwide 
          </p>

          {/* Hero Title */}
          <h1 ref={textRef} className="text-[8vw] md:text-[5vw] font-bold leading-[0.9]">
            Creative Visual <br /> {text}
          </h1>

          {/* Work Process Section */}
          <div className="flex ml-10 items-center gap-6 mt-6">
            <div className="loader "></div>
            <p className="text-lg md:text-2xl leading-none ml-5">Work <br /> Process</p>
          </div>
        </div>

        {/* Right Side Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="HeroManProfile.png" 
            height={50}
            className="max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            alt="Hero Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
