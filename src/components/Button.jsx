import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button =(props)=>{
  useEffect(() => {
    AOS.init();
  }, []);
  const {title, number}= props
  return(
    <div className='flex pt-24'>
      <div data-aos="fade-up">
      <h1 className='outline outline-[#f8830a] outline-1 py-3 px-6 bg-[#0F1223] text-[#F3F3F4] text-3xl'>{number}. <span className='text-[#f8830a]'>{title}</span></h1>
      </div>
    </div>
  )
}
export default Button