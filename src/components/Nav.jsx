import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Patiencewhite from './../assets/Patiencewhite.png'

const Nav = () => {
  const navigation = [
    { id: 'home', name: 'Home', current: true },
    { id: 'about', name: 'About', current: false },
    { id: 'experience', name: 'Experience', current: false },
    { id: 'project', name: 'Projects', current: false },
    { id: 'contact', name: 'Contact', current: false },
  ];

  const [bar, setBar] = useState(false);

  const toggleMenu = () => {
    setBar(!bar);
  };

  const handleLinkClick = () => {
    setBar(false);
  };

  return (
    <div className='relative'>
      <div className={`bg-[#171A2B] text-[#F3F3F4] flex justify-between items-center  shadow-xl fixed z-10 top-0 w-full gap-x-4`}>
        {!bar && 
        <div className='text-xs '>
        <img src={Patiencewhite} className=' w-28 h-20 flex justify-center items-center' alt='logo'/>
        </div>
        }
        <div>
          <div className={`relative top-0 md:hidden py-3 ${bar ? 'translate-x-80' : 'translate-x-[-40px]'}`}>
            {bar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 translate-1 duration-300"
                onClick={toggleMenu}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 translate-1 duration-300"
                onClick={toggleMenu}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            )}
          </div>

          {bar && (
            <div className='md:hidden  h-screen '>
              {navigation.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  aria-current={item.current ? 'page' : undefined}
                  className='block px-3 py-2 font-medium text-lg hover:text-[#cecfd3] hover:-translate-1 hover:scale-110 duration-300 cursor-pointer'
                  onClick={handleLinkClick}

                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          )}
        </div>

        <div className='hidden md:flex'>
          {navigation.map((item) => (
            <ScrollLink key={item.id} to={item.id}
              aria-current={item.current ? 'page' : undefined}
              className='px-3 py-2 font-medium text-lg hover:text-[#cecfd3]  hover:-translate-1 hover:scale-110 duration-300 cursor-pointer'
            >{item.name}</ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
