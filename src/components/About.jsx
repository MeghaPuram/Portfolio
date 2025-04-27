import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h4 className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </h4>
                    <p className="text-2xl mt-40">
                        I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
                        I have honed my skills in front-end technologies like React and tailwind css,
                        as well as back-end technologies like Java, Spring Boot and database like MySQL.               
                    </p>
                    <br />
                    <p className="text-2xl mt-5 mb-10">
                        My journey in software development began with a deep curiosity for how things work, and it has evolved into a career where
                        I continuously strive to learn and adapt to new challenges.
                        I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
                        Outside of coding, I enjoy staying active, exploring new technologies.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About