import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socialLinks=()=>{
  const socials=[
    {id: 1, src: 'https://github.com/philpat', icon:<FontAwesomeIcon icon={faGithub} /> },
    {id: 2, src: 'https://medium.com/@patlyn2020', icon:<FontAwesomeIcon icon={faMedium} /> },
    {id: 3, src: 'https://www.linkedin.com/in/patience-bassey-a84871138/', icon:<FontAwesomeIcon icon={faLinkedin} /> },
    {id: 4, src: 'https://twitter.com/Patience_Back', icon:<FontAwesomeIcon icon={faTwitter} /> },

]
  return(
    <div className='text-white my-5'>
      {socials.map((item)=>(
      <Link key={item.id} to={item.src} className='p-2 m-2 text-xl rounded-full outline outline-white outline-1'>{item.icon}</Link>
      ))}
    </div>
  )
}
export default socialLinks