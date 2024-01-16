import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white '>Hi , I am</h1>
        <h1 className='text-secondary text-7xl sm:text-3xl font-semibold '>Nabil Elbayad</h1>
        <h1 className='text-tertiary text-5xl sm:text-3xl font-semibold '>Full-Stack Web Developer</h1>
        <p className='text-white w-2/3'>this is a description this is a description this is a description this is a description</p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro;