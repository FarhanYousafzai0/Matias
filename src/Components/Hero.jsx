import React, { useEffect, useRef } from 'react'
import { FaArrowLeftLong, FaLocationArrow } from 'react-icons/fa6'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {

    const textRef = useRef()

    useEffect(() => {
        const letters = textRef.current.children;
        gsap.to(letters, {
            color: ["#C4EC1D"],
            stagger: 0.2, // Each letter changes one by one
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 0.5
        });
    }, []);

    const text = "Designer".split("").map((char, i) => (
        <span key={i} className="inline-block">{char}</span>
    ));

  return (
    <div className=' w-full  h-full overflow-hidden '>
      <div className=' h-full     common common-padding'>
<div className="flex flex-col gap-4 ">
      <div className=' '>
        <p className='text-[5vw] md:text-[2.5vw] flex items-center gap-2 text-white hover:text-[#C4EC1D] transition-all   '>Currently Availabe   For Freelance <br /> WorldWide </p>
       
        </div>
        {/* Hero-Title */}
    <h1 ref={textRef} className='text-[8vw] text-white  font-bold leading-none'>Creative Visual <br /> {text}
    </h1>


</div>


      </div>
    </div>
  )
}

export default Hero
