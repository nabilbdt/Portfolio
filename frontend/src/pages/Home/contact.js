import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    const user = {
        name: "Nabil ELBAYAD",
        age: 20,
        email: "nabilbayad969@gmail.com",
        phone: "+212694879080",
    };
    return (
        <div>
            <SectionTitle title="Let's work together" />
            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-tertiary'>{"{"}</p>
                    {Object.keys(user).map((key) => {
                        return (
                            <p key={key} className='ml-5'>
                                <span className='text-tertiary'>{key} : </span>
                                <span className='text-tertiary'>{user[key]}</span>
                            </p>
                        );
                    })}
                    <p className='text-tertiary'>{"}"}</p>
                </div>
                <div className='h-[400px]'>
                    <dotlottie-player 
                    src="https://lottie.host/6b0ca490-83bb-4807-a4d1-8f4e4791dff7/yRaEB9KGVj.json" 
                    background="transparent" 
                    speed="1" 
                    autoplay>
                    </dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact