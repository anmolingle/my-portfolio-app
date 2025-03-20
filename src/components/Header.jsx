import React from 'react'
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
    const [state, openSiteBar] = useState(false)

    function openClick() {
        let weight = '768px';
        if (weight < window.innerWidth) {
            openSiteBar(false)
        }

        openSiteBar(true)

    }
    function CloseClick() {

        openSiteBar(false)
    }
    const Side_bar = () => {

        return (
            <div className='w-screen h-screen absolute' >
                <div className='md:w-0 sm:w-[25%] h-[100vh] w-[100%] bg-black text-white absolute -right-0'>
                    <RxCross2 onClick={CloseClick} className='absolute top-10 right-10' />
                    <nav className="navBar md:invisible visible flex justify-center items-center w-full h-full">
                        <ul className='space-y-14'>
                            <li className='list-none'><a href='About'>About</a></li>
                            <li className='list-none'><a href='Charters'>Charters</a></li>
                            <li className='list-none'><a href='Fishing Reports'>Fishing Report</a></li>
                            <li className='list-none'><a href='Gallery'>Gallery</a></li>
                            <li className='list-none'><a href='Contact'>Contact</a></li>
                            <button className=''>Log In</button>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }

    // const Close_Bar = () => {
    //     return <button className="absolute right-10 top-10">hello this is a close bar</button>
    // }



    return (
        <> 
        
        <div className='flex justify-end w-[100%]'>
            <FiMenu onClick={openClick} className="md:invisible visible absolute right-10 top-10" />
            {state ? <Side_bar className='flex justify-end' /> : <FiMenu onClick={openClick} className="md:invisible visible absolute right-10 top-10" />}
        </div>

            {/* <FiMenu onClick={handleClick} className="absolute right-10 top-10" />
             */}

            <div className='sec_div w-[100%] h-[150px] flex items-center justify-between  pt-9 pb-15'>
                <div className="logo flex gap-2 md:w-[25%] w-[50%]">
                    <div className="icon">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="23 23 154 154" viewBox="23 23 154 154" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage">
                            <g>
                                <path d="M58.087 154.215c-1.199-1.665-2.275-3.449-3.097-5.43-4.133-9.982-1.952-20.932 5.687-28.57l74.765-74.765c-3.293-2.502-7.352-3.944-11.784-3.944-11.797 0-21.897 7.41-25.887 17.817l3.682-3.682a3.341 3.341 0 0 1 4.727 0 3.341 3.341 0 0 1 0 4.727L94.964 71.583a3.356 3.356 0 0 1-3.643.725 3.345 3.345 0 0 1-2.063-3.088c0-18.966 15.434-34.4 34.4-34.4 6.28 0 12.008 2.148 16.547 5.866L157.891 23H23v154h12.301l22.786-22.785z" fill="#0C1439" data-color="1"></path>
                                <path d="M65.403 124.941c-6.803 6.803-6.646 15.454-4.231 21.284.473 1.143 1.064 2.193 1.708 3.196l74.58-74.579c6.803-6.803 6.646-15.454 4.231-21.284-.473-1.143-1.064-2.193-1.708-3.196l-74.58 74.579z" fill="#0C1439" data-color="1"></path>
                                <path d="M144.777 45.567c1.199 1.665 2.274 3.45 3.096 5.431 4.133 9.982 1.952 20.932-5.687 28.57l-74.765 74.765c3.293 2.502 7.352 3.944 11.784 3.944 11.797 0 21.898-7.41 25.887-17.817l-3.682 3.682a3.341 3.341 0 0 1-4.727 0 3.341 3.341 0 0 1 0-4.727l11.216-11.217a3.356 3.356 0 0 1 3.643-.725 3.345 3.345 0 0 1 2.063 3.088c0 18.966-15.434 34.4-34.4 34.4-6.28 0-12.008-2.148-16.547-5.866L44.755 177H177V23h-9.656l-22.567 22.567z" fill="#0C1439" data-color="1"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="headin w-[21rem]">
                        <h1 className='text-[1.3rem] font-semibold'>TIDE</h1>
                        <p className='text-[2vmin]'>Fishing Charters</p>
                    </div>
                </div>
                <div className='invisible md:visible md:w-[75%] md:left-[25%]  font-serif  md:flex md:items-center md:justify-between'>
                    <nav className="navBar pr-3 w-[80%]">
                        <ul className='flex items-center justify-evenly'>
                            <li className='list-none'><a href='About'>About</a></li>
                            <li className='list-none'><a href='Charters'>Charters</a></li>
                            <li className='list-none'><a href='Fishing Reports'>Fishing Report</a></li>
                            <li className='list-none'><a href='Gallery'>Gallery</a></li>
                            <li className='list-none'><a href='Contact'>Contact</a></li>
                        </ul>
                    </nav>

                    <div className="loginArea flex justify-end space-x-3 h-full">
                        <img width="25px" height="20px" src='/images/account.png' alt='profile' />
                        <button className=''>Log In</button>
                    </div>
                </div>
            </div>
            

        </>
    )
}


export default Header
