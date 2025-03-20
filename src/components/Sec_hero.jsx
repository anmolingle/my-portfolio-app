import React from 'react'
import '../App.css'
const Sec_hero = () => {
    return (
       
            <div className='md:h-full md:w-full md:row-span-full flex items-center justify-center p-5 gap-5 flex-wrap md:row-start-auto'>
                <div className='md:w-[22%] h-[480px] w-[100%] pb-20 '>
                    <div className='overflow-hidden w-full h-full'>
                        <img className='filter contrast-75 transition-transform duration-700 transform hover:opacity-70 ease-in-out hover:scale-110  peer' src="/images/img1.jpg" alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h1 className='noto-sans  text-2xl text-center w-full p-5'>Fishing Destyinations</h1>
                </div>
                <div className='md:w-[22%] h-[480px] w-[100%] pb-20'>
                    <div className='overflow-hidden w-full h-full'>
                        <img className='filter contrast-75 transition-transform duration-700 transform hover:opacity-70 ease-in-out hover:scale-110  peer' src="/images/img2.jpg" alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h1 className='noto-sans  text-2xl text-center w-full p-5'>Fishing Charters</h1>
                </div>    
                <div className='md:w-[22%] h-[480px] w-[100%] pb-20'>
                    <div className='overflow-hidden w-full h-full'>
                        <img className='filter contrast-75 transition-transform duration-700 transform hover:opacity-70 ease-in-out hover:scale-110  peer' src="/images/img3.jpg" alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h1 className='noto-sans  text-2xl text-center w-full p-5'>Meet the Crew</h1>
                </div>
                <div className='md:w-[22%] h-[480px] w-[100%] pb-20'>
                    <div className='overflow-hidden w-full h-full'>
                        <img className='filter contrast-75 transition-transform duration-700 transform hover:opacity-70 ease-in-out hover:scale-110  peer ' src="/images/img4.jpg" alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h1 className='noto-sans  text-2xl text-center w-full p-5'>Meet the Fleet</h1>
                </div>

            </div>

      
    )
}

export default Sec_hero
