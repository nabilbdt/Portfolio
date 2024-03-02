import React from 'react'
import { useSelector } from 'react-redux';

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {intro} = portfolioData;
  const {firstName,lastName,welcomeText,description,caption} = intro;
  return (
    <div className='h-[80vh] bg-quaternary p-10  rounded-xl mb-28 pl-20 flex flex-col items-start justify-center gap-8 '>
        <h1 className='text-white '>{welcomeText || ''}</h1>
        <h1 className='text-secondary text-7xl sm:text-3xl font-semibold '>{firstName || ''} {lastName || ''}</h1>
        <h2 className='text-tertiary text-4xl sm:text-3xl font-semibold '>{caption || ''}</h2>
        <p className='text-white w-2/3'>{description || ''}</p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Contact me</button>
    </div>
  )
}

export default Intro;