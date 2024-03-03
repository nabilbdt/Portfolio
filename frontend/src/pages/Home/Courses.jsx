import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { courses } from '../../data/courses.data';
import { useSelector } from 'react-redux';


function Courses() {
    const { portfolioData } = useSelector((state) => state.root);
    const {courses} = portfolioData;
    const {title,image,description,link} = courses;
 const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div className='bg-quaternary p-10  rounded-xl mb-28'>
        <SectionTitle title="Courses" />
        <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {courses.map((course, index) => {
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
                                    {course.title}
                                </h1>
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-2xl'>{courses[selectedItemIndex].title}</h1>
                    <p className='text-white '>
                        lorem23svfghdhthdhdhhfhkytkyukykllyluulyuluyuouyuouluoluu
                        ulyuloiomoibdlgiggfgheoirugpfhgpieurhpgihupirehiuhgipuhrg
                        gdpiufghesiughdiuhiehiehgiodfhipiupifsripgpihfdihihfduigi
                    </p>
                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <img src={courses[selectedItemIndex].image} alt='project image' className='h-52 w-80'/>
                </div>
            </div>
    </div>
  )
}

export default Courses