import React from 'react'
import reactweather from "../assets/reactweather.png";
import chatapp from "../assets/chatapp.png";
import dockeditor from "../assets/dockeditor.png";
import timetracker from "../assets/timetracker.png";
const Project = () => {
    
        const portfolios = [
          {
            id: 1,
            pro_name: "Weather app",
            src: reactweather,
            href:'https://github.com/MeghaPuram/API_INTEGRATION',
          },
          {
            id: 2,
            pro_name: "Chat App",
            src: chatapp,
            href:'https://github.com/MeghaPuram/CHAT-APPLICATION',
          },
          {
            id: 3,
            pro_name: "Collaborative Document Editor",
            src: dockeditor,
            href:'https://github.com/MeghaPuram/REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR',
          },
          {
            id: 4,
            pro_name: "Time tracker spend on diffrent website",
            src: timetracker,
            href:'https://github.com/MeghaPuram/CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS',
          },
          
        ];
  return (
    <div
    name="project"
    className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
  >

<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Project
        </p>
        <p className="py-6 text-lg ">Check out some of my work right here</p>
      
      </div>  

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id,pro_name, src, href }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
           <p className='mb-4 flex items-center justify-center'>{pro_name}</p>
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
           
            <div className="flex items-center justify-center ">
             
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
              <a href={href}> Code</a>
               
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Project