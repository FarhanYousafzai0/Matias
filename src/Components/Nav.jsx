import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';



const navItems = ['Home','About','Work','Services','Testimonials','Blog','Contact'];

const Nav = () => {
    const [hover,setHover] = useState(false)
  return (
    <header  className='h-25  border-b-2 border-[#161616] relative bg-black '>
      <nav className='flex w-full h-full px-5   items-center justify-between  '>
     {/* Logo-section */}
<div className='border-r-2 border-[#161616] pr-5  h-full flex items-center w-max'>
<img width={150} src="data:image/png;base64,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" alt="" />
</div>


{/* Nav-items */}

<div className=" items-center  hidden lg:flex mr-20">

{navItems.map((item,index)=>(
    <a className='text-white text-lg uppercase ml-10 transition-colors  hover:text-[#C4EC1D]' href="">{item}</a>
))}

</div>



{/* Menu-Bar */}
<div className='border-l-2 border-[#161616] pl-5  h-full flex items-center '>
<button 
    onMouseEnter={() => setHover(true)} 
    onMouseLeave={() => setHover(false)}
    className='md:px-7 md:py-[15px] px-5 py-[10px]  relative flex items-center gap-1 font-normla overflow-hidden text-black bg-[#C4EC1D] text-lg rounded-lg cursor-pointer whitespace-nowrap'
  >
    Let's Talk <FaArrowRightLong />
    
    {/* Overlay effect */}
    <span className={`absolute left-0 top-0 w-full ${hover ? 'h-full bg-black/20' : 'h-0'} transition-all duration-400 ease-in-out`}></span>
  </button>
 
</div>

      </nav>
    </header>
  )
}

export default Nav
