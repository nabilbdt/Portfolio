import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../data/experiences'
import { projects } from '../../data/projects.data';


function Projects() {
 const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
        <SectionTitle title="Prejects" />
        <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => {
                        return (
                            <div onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                                className='cursor-pointer'
                            >
                                <h1 className={`text-xl px-5 ${selectedItemIndex === index
                                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#15ffef10] py-3'
                                    : 'text-white'}`}
                                >
                                    {project.title}
                                </h1>
                            </div>
                        )
                    })}
                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <img src={projects[selectedItemIndex].image} alt='project image' className='h-60 w-72'/>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-2xl'>{projects[selectedItemIndex].title}</h1>
                    <p className='text-white'>{projects[selectedItemIndex].description}</p>
                    <p className='text-white '>
                        lorem23svfghdhthdhdhhfhkytkyukykllyluulyuluyuouyuouluoluu
                        ulyuloiomoibdlgiggfgheoirugpfhgpieurhpgihupirehiuhgipuhrg
                        gdpiufghesiughdiuhiehiehgiodfhipiupifsripgpihfdihihfduigi
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Projects