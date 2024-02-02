import React from 'react'
import Patience from '../assets/Patience.png'

const About = () => {
  const skills = {
    html: 'HTML',
    css: 'CSS',
    javascript: 'Javascript',
    react: 'React',
    nextjs: 'Nextjs',
    tailwind: 'Tailwind',
    bootstrap: 'Bootstrap',
    firebase: 'Firebase',
    git: 'Git',
    github: 'Github',
    figma: 'Figma',
  }
  return (
    <div>
      <div className='flex justify-center  flex-wrap-reverse md:flex-row  flex-1 py-5'>
        <div className=' md:w-1/2  text-[#F3F3F4] text-lg'>
          <div data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div>
              <p>
                My name is Patience Bassey, a frontend web developer with a nuanced understanding of Product Management.
                Fueled by  passion for crafting visually stunning and responsive web
                applications that are accessible to all.
                With an acute attention to details, I consistently deliver
                work of the highest quality. My commitment to optimizing performance and code efficiency
                reflects my pursuit of excellence.
                I'm proficient in HTML, CSS, JavaScript, and React.js. I bring a wealth of expertise to any team,
                contributing significantly to enhanced performance and collective success.
                <br />

                When I'm not coding, I love reading books, watching movies and recently added chess and table tennis.
              </p>
            </div>
            <div>
              <p className='py-5 text-[#f8830a]'>I am familiar with the following tools and technologies</p>
              <div className='flex flex-wrap gap-3'>
                {Object.entries(skills).map(([key, value]) => (
                  <div key={key}>
                    <span
                      className='text-[#F3F3F4] outline outline-1 outline-[#F3F3F4] px-5 py-1 bg-[#0F1223] rounded'>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12 md:py-0 items-center md:w-1/2'>
          <div data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <img src={Patience} alt="Patience" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About