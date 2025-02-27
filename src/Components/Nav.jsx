import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const navItems = ['Home', 'About', 'Work', 'Services', 'Testimonials', 'Blog', 'Contact'];

const Nav = () => {
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className='h-20 border-b-2 relative border-[#161616] bg-black '>
                <nav className='flex w-full h-full px-5 items-center justify-between'>
                    {/* Logo Section */}
                    <div className='border-r-2 border-[#161616] pr-5 h-full flex items-center w-max'>
                        <img width={150} src="Logo.png" alt="Logo" />
                    </div>

                    {/* Nav Items (Visible on Large Screens) */}
                    <div className="items-center hidden lg:flex mr-20">
                        {navItems.map((item, index) => (
                            <a key={index} className='text-white text-lg uppercase ml-10 transition-colors hover:text-[#C4EC1D]' href="#">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Menu Bar */}
                    <div className='border-l-2 border-[#161616] pl-5 gap-3 h-full flex items-center'>
                        <button 
                            onMouseEnter={() => setHover(true)} 
                            onMouseLeave={() => setHover(false)}
                            className='md:px-7 md:py-[15px] px-5 py-[10px] relative flex items-center gap-1 font-normal overflow-hidden text-black bg-[#C4EC1D] text-lg rounded-lg cursor-pointer whitespace-nowrap'
                        >
                            Let's Talk <FaArrowRightLong />
                            <span className={`absolute left-0 top-0 w-full ${hover ? 'h-full bg-black/20' : 'h-0'} transition-all duration-400 ease-in-out`}></span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setOpen(!open)}
                            className="w-14 h-12 md:h-14 px-2 relative flex lg:hidden flex-col  items-center justify-center gap-2 font-normal overflow-hidden text-black bg-blue-50 text-lg rounded-lg cursor-pointer"
                        >
                            <span className={`w-[70%] h-[3px] bg-black rounded-full transition-all duration-500 ${open ? 'rotate-45 absolute -translate-y-[50%]' : ''}`}></span>
                            <span className={`w-[70%] h-[3px] bg-black rounded-full transition-all duration-300 ${open ? 'opacity-0 ' : ''}`}></span>
                            <span className={`w-[70%] h-[3px] bg-black rounded-full transition-all duration-500 ${open ? '-rotate-45 absolute -translate-y-[50%]' : ''}`}></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Sidebar Menu (Expanding from 0 width) */}
            <div className={`absolute border-[#C4EC1D] rounded-lg left-0  lg:hidden  z-50   flex  w-0 bg-black overflow-hidden transition-all duration-500 ${open ? 'w-screen border-1  ' : 'p-0'}`}>
                <div className="flex flex-col items-start py-10 gap-6 w-full">
                    {navItems.map((item, index) => (
                        <a 
                            key={index} 
                            className='text-white text-lg uppercase  w-full ml-5 transition-colors hover:text-[#C4EC1D]' 
                            href="#"
                            onClick={() => setOpen(false)} // Close menu on item click
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Nav;
