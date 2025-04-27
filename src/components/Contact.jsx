import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"

const Contact = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>),
            href: " https://www.linkedin.com/in/meghapuram/",
            style: "rounded"
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} />
                </>),
            href: "https://github.com/MeghaPuram",
            style: "rounded"
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={30} />
                </>),
            href: "mailto:meghapuram23@gmail.com",
            style: "rounded"

        }
    ]
    return (
        <div name="contact"
            className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact
                    </p>
                    <p className=' text-lg py-4'>
                        Thanks for cheking out my work!
                    </p>

                    <p className='text-lg py-1'>

                        Feel free to reach out!
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/aqokjdea"
                          method="POST"
                        className='flex flex-col w-full md:w-1/2'>
                        <input type="text"
                            name='name'
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <input type="text"
                            name='email'
                            placeholder='Enter yor Email'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <textarea name="message"
                            placeholder='Enter your message'
                            rows="10"
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>                   
                </div>
                <div className=' flex justify-center items-center mt-4'>
                        <ul className='flex space-x-4'>
                            {links.map(({ id, child, href, style }) => (
                                <li key={id} className='flex justify-between items-center  rounded-full  w-10 h-10  hover:scale-105 duration-300 bg-gray-500 ' >
                                    <a href={href} className='flex justify-center items-center  w-full text-white' >
                                        {child}
                                    </a>
                                </li>
                            ))}

                        </ul>

                    </div>
            </div>
        </div>
    )
}

export default Contact