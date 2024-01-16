import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills =[
        "Javascript",
        "React",
        "Node",
        "Express",
        "MongoDB"
    ]
    return (
        <div>
            <SectionTitle title="About me" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[50vh] w-1/2 sm:w-full'>
                    <dotlottie-player
                        src="https://lottie.host/ff542d22-4136-4319-8296-5010d12dbb22/vqA9F64Kuz.json"
                        speed="1"
                        autoplay
                    ></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white'>
                        jnfjigidibgebgiebibiesbirjnfjigidibgebgiebibiesbirll,o
                        "bfibfiebfibnfirbgeibhfbebferhrberiugbeirfberibgizbrib
                        fierbfrebeifirefiebirfberifberifbizhhhhtyhtytyyytjjtjt
                        etgthethtrhrthrthrhrhrttrhtrhrthrthryhrhrhrthtrhrthrth
                    </p>
                    <p className='text-white'>
                        jnfjigidibgebgiebibiesbirjnfjigidibgebgiebibiesbirll,o
                        "bfibfiebfibnfirbgeibhfbebferhrberiugbeirfberibgizbrib
                        fierbfrebeifirefiebirfberifberifbizthrtryrhrhtrhtrhrth
                        yjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjyjjjjjjjjjjjyyyyyyy
                    </p>
                </div>
            </div>

            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>Here are a few technologies I've been working with recently</h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skill,index) => {
                       return( 
                        <div className='border border-tertiary py-3 px-10'>
                        <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                        )
                    })}
                </div>
                    
                
            </div>
        </div>
    )
}

export default About