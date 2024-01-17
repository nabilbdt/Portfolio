import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary '>
        <div className='loader'></div>
    </div>
  )
}

export default Loader