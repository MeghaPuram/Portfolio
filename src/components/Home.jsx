import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
      
          <h2 className='text-4xl sm:text-7xl font-bold text-white py-7'>
            I'm a Java full Stack Developer
          </h2>
          <p className='text-gray-500 text-3xl py-3 max-w-md'>
              I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  
            My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
          </p>
          <div>
            <Link
              to="project"
              smooth
              duration={500} className='group text-white text-xl w-fit px-6 py-3 my-2 mt-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Project
              <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={30} className='ml-1' /></span>

            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my Profile" className='rounded-2xl lg:h-[20rem] lg:w-[30rem] h-[200px] w-[200px]' />
        </div>
      </div>
    </div>
  )
}

export default Home