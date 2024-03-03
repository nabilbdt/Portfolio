import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const {contact} = portfolioData;
    return  (
        <div className='bg-quaternary p-10  rounded-xl mb-28'>
            <SectionTitle title="Let's work together" />
            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col '>
                    <p className='text-tertiary'>{"{"}</p>
                   {Object.keys(contact).map((key) => {
                        return (
                           key !== '_id' && <p key={key} className='ml-5'>
                                <span className='text-tertiary'>{key} : </span>
                                <span className='text-tertiary'>{contact[key]}</span>
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