import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './../components/Nav'
import Button from './../components/Button'
import Timeline from './../components/Timeline'
import Patience from '../assets/Patience.png'
import innoconnect from '../assets/innoconnect.png'
import cozyhome from '../assets/cozyhome.png'
import Shopingcart from '../assets/Shopingcart.png'
import smartchurch from '../assets/smartchurch.png'
import piggvest from '../assets/piggvest.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './../components/Footer'
import SocialLinks from './../components/SocialLinks'
import 'animate.css';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Spinner } from '@material-tailwind/react';



const Home = () => {
  useEffect(() => {
    AOS.init();
    emailjs.init("NLlphCjzwTs_BIfJi");
  }, []);

  const MySwal = withReactContent(Swal)

  const serviceID = 'service_uc2yv1i';
  const templateID = 'template_fyr2pkg'
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const templateParams = {
    fullname,
    email,
    message
  };

  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!fullname || !email || !message){
      setIsLoading(false);
    Swal.fire({ icon: 'error', text: 'Please kindly fill the form', showConfirmButton: true });
    return;
    }
    setIsLoading(true)
    emailjs.send(serviceID, templateID, templateParams, 'NLlphCjzwTs_BIfJi')
    .then((response) => {
      setIsLoading(true)
        Swal.fire({icon: 'success', text: 'Thank You!, Your message has been sent', showConfirmButton: true,})
        setFullname('')
        setEmail('')
        setMessage('')
        setIsLoading(false)
        console.log(response)
      })
      .catch((err) => {
        setIsLoading(false)
        Swal.fire({icon: 'error', text: 'Please kindly fill the form', showConfirmButton: true,})
        console.log(err)
      })

  }

  const timelineData = [
    { number: 1, context: { title: 'Frontend Developer at Daveshoope Inc.', description: 'Led a team in the development of a church management software' } },
    { number: 2, context: { title: 'Frontend Developer at TIIDELab Initiative', description: 'Collaborated with a team to build a mentorship and job placement application' } },
    { number: 3, context: { title: 'Frontend Developer intern at Zuri x I4g Initiative', description: 'Learnt frontend development and collaborated with other interns' } },
    { number: 4, context: { title: 'Frontend Developer intern at Zuri x I4g Initiative', description: 'Learnt frontend development and collaborated with other interns' } },
    
  ];

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

  const project = [
    {
      name: 'Innoconnect',
      src: innoconnect,
      description: 'A career placement and mentorship support app',
      icon: <svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
      , skills: ['React', 'Tailwind'],
      link: 'https://innoconnect-one.vercel.app/'
    },
    {
      name: 'Smartchurch',
      src: smartchurch,
      description: 'An accounting software for churches',
      icon: <svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>,
      skills: ['Vue', 'Vuetify', 'Vuex'],
      link: 'https://smartchurch.ng/'
    },
    {
      name: 'Shoppingcart',
      src: Shopingcart,
      description: 'A simple shopping cart',
      icon: <svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>,
      skills: ['Vue', 'Vuetify', 'Vuex'],
      link: 'https://simple-shopping-cart-seven.vercel.app/',
      repo: 'https://github.com/philpat/simple-shopping-cart',
      git: <i class="fa-brands fa-2x fa-github"></i>
    },
    {
      name: 'Cozyhome',
      src: cozyhome,
      description: 'A Repair and maintenance site',
      icon: <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>,
      skills: ['HTML', 'Bootstrap'],
      link: 'https://github.com/philpat/cozy_home/',
      repo: 'https://github.com/philpat/cozy_home',
      git: <i class="fa-brands fa-2x fa-github"></i>
    },
    {
      name: 'Piggyvest',
      src: piggvest,
      description: 'A Piggyvest site clone',
      icon: <svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>,
      skills: ['HTML', 'Bootstrap'],
      link: 'https://philpat.github.io/piggy/',
      repo: 'https://github.com/philpat/piggy',
      git: <i class="fa-brands fa-2x fa-github"></i>
    },
  ]

  
  return (
    <div className='bg-[#171A2B] '>
      <Nav />
      <div className='w-full md:w-[950px] mx-auto px-5 md:px-0' name='home' id='home'>
        <div className='py-24  h-screen flex items-center justify-center text-center'>
          <div>

            <span className='text-[#F8830A] text-base animate__animated animate__fadeIn animate__delay-1s'>Hi, My name is </span>
            <h1 className='text-4xl font-bold text-[#F3F3F4] animate__animated  animate__fadeInDown animate__delay-1s '>Patience Bassey.</h1>
            <h2 className='text-2xl font-semibold py-2 text-[#cecfd3] animate__animated animate__flipInX animate__delay-1s'>I use Technology to solve problems</h2>
            <p className='text-lg text-[#cecfd3] animate__animated animate__fadeInUp animate__delay-1s'>
              I'm a frontend developer . I use HTML, CSS and Javascript to bring design to life.
              I'm driven by a passion for crafting visually stunning and responsive web designs that is accessible to all.
            </p>
            <SocialLinks  />
              <Link to='https://docs.google.com/document/d/1tywq0hs-i1l9rmFLHe0irnerinFQONZU_LxHXwFcXag/edit' target='_blank' className='outline outline-1 outline-[#f8830a]  py-3 px-8 mt-5 text-[#f8830a] inline-block text-lg rounded-sm '>
                Resume
              </Link>
          </div>
        </div>
        <div name='about'>

          <Button number='01' title='About Me' />
          {/* <About name='about' /> */}
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
        <div name='experience'>
          <Button number='02' title='Experience' />
          <Timeline data={timelineData} />
        </div>

        <div name='project'>
          <Button number='03' title='Projects' />
          <div >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
              {project.map((project) => (
                <div className="shadow-md shadow-gray-600 rounded-lg bg-[#0F1223] overflow-hidden">
                  <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className='text-white py-3 flex justify-between px-2'>
                      <Link to={project.link}>
                        {project.icon}
                      </Link>
                      <Link to={project.repo}>
                        {project.git}
                      </Link>
                    </div>
                    <div class=" hover:transition-all hover:translate-1  ">
                      <img
                        src={project.src}
                        alt="projects"
                        className="rounded-md  hover:scale-110 duration-300 w-full"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm p-2">{project.name}</div>
                    <div className="text-center text-gray-400 text-sm p-2">{project.description}</div>
                    <div
                      className='text-white text-center py-3'>
                      {project.skills.map((skill) =>
                        <span className='mx-1 text-[##F3F3F4] outline outline-1 outline-[##F3F3F4] px-5 py-1 bg-[#0F1223] rounded'
                          key={skill}>{skill},
                        </span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div name='contact'>
          <Button number='04' title='Contact' />
          <div className='flex flex-col md:flex-row justify-center py-5'>
            <div className='w-full md:w-1/2 '>
              <div className='py-5'>
                <p className='text-white py-5 text-md'>
                  Have any idea you want to bring to life? <br />
                  <span className='text-[#f8830a]'>
                    Let's Discuss</span>
                </p>
                <div data-aos="fade-up">
                  <div className='flex text-white my-5 '>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 outline outline-white outline-1 ">
                      <path strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <a href='tel:+2348167344065' className='px-2'>+2348167344065</a>
                  </div>
                </div>
                <div data-aos="fade-up-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  <div className='flex text-white my-5'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 outline outline-white outline-1">
                      <path strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <a href='mailto:patlyn2020@gmail.com' className='px-2'>patlyn2020@gmail.com</a>
                  </div>
                </div>
                <div data-aos="fade-up-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  <div className='flex text-white my-5'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 outline outline-white outline-1 ">
                      <path strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    <p className='px-2'>Uyo, Akwa Ibom State Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 '>
              <div data-aos="fade-up-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <form
                  action
                  className=' p-5 rounded-2xl text-white'
                  id='contact-form'
                  onSubmit={handleSubmit}
                >
                  <div className='my-4 flex flex-col'>
                    <label htmlFor='name' >Full Name</label>
                    <input type='text'
                      onChange={(event) => setFullname(event.target.value)}
                      value={fullname}
                      placeholder='Your Name'
                      className='p-2  bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-[#f8830a]' />
                  </div>
                  <div className='my-4 flex flex-col'>
                    <label htmlFor='email' >Email</label>
                    <input type='email'
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                      placeholder='Your Email'
                      className='p-2  bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-[#f8830a]' />
                  </div>
                  <div className='my-4 flex flex-col'>
                    <label htmlFor='message' > Message</label>
                    <textarea type='text'
                      onChange={(event) => setMessage(event.target.value)}
                      value={message}
                      placeholder='Your Message'
                      className='p-2  bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-[#f8830a]' />
                  </div>
                  
                  <button className='p-2 border-none rounded-md text-white bg-[#f8830a] px-5 py-3' type='submit'>
                     {isLoading? <Spinner className='block mx-auto' />: 'Send Message'}
                     </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home