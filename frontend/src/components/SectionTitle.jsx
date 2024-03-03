import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex gap-10 items-center'>
        <h1 className='text-3xl text-secondary py-10'>{title}</h1>
        <div className='w-60 h-[1px] bg-tertiary'>

        </div>
    </div>
  )
}

export default SectionTitle