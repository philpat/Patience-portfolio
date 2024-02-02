import React from 'react'

const Footer =()=>{
  const currentYear = new Date().getFullYear();
  return(
    <div className='py-5 text-lg text-white text-center bg-gray-800'>
      <p>&copy; Patience Bassey || {currentYear} All rights reserved.</p>
    </div>
  )
}
export default Footer