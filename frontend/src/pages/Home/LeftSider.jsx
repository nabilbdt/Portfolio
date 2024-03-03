import React from 'react'

function LeftSider() {
    return (
        <div className="fixed left-0 bottom-0 px-10 sm:static">
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href=''> <i class="ri-mail-line text-gray-600 "></i></a>
                    <a href='https://github.com/nabilbdt'><i class="ri-github-line text-gray-600 "></i></a>
                    <a href='https://www.linkedin.com/in/nabilbayad/'><i class="ri-linkedin-box-line text-gray-600 "></i></a>
                    <a href=''><i class="ri-instagram-line text-gray-600 "></i></a>
                    
                </div>
                <div className='w-[1px] h-32 bg-[gray] sm:hidden'></div>
            </div>
        </div>
    )
}

export default LeftSider