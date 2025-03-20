import React from 'react'
import Header from './components/Header'
import Hero_s from './components/Hero_s'
import './App.css'
import Sec_hero from './components/Sec_hero';
import Hero_third from './components/Hero_third';


const App = () => {
  const divStyle = {
    backgroundImage: 'url(/images/backG.jpeg)',
    marginTop: "-10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition:'center'


  };


  return (
    <div className=' w-screen h-screen'>

      <Header />
      <div  className="container0  flext items-center justify-center md:w-[100%]  md:h-[100vh] ">
        <div className='pl-30 pt-30 w-screen h-screen' style={divStyle}>
          <div className=''>
            <h1 className='noto-sans text-[40px] md:text-[66px]'>Welcome Aboard!</h1>

            <p className='barlow-light font-mono text-[20px]'>Book your spot today and set sail on a <br /> local fishing adventure.</p>


            <div className='huqIcon'>
              <svg className='w-5 h-15 -rotate-90 ml-5' preserveAspectRatio="none" data-bbox="75.501 16.5 48.999 166.999" viewBox="75.501 16.5 48.999 166.999" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                <g>
                  <path d="M117.464 139.877a2.013 2.013 0 0 0-1.914-.519 1.986 1.986 0 0 0-1.431 1.359l-3.282 10.935a1.976 1.976 0 0 0 1.357 2.462c1.063.306 2.18-.286 2.494-1.339l2.235-7.443c3.772 5.113 5.227 11.666.988 15.851l-15.755 15.553V36.964c4.745-.985 8.321-5.146 8.321-10.117 0-5.705-4.701-10.347-10.477-10.347-5.78 0-10.481 4.641-10.481 10.347 0 4.972 3.577 9.133 8.325 10.118v139.769l-15.755-15.553c-4.239-4.184-2.784-10.737.988-15.851l2.235 7.447c.314 1.045 1.419 1.641 2.498 1.335a1.983 1.983 0 0 0 1.353-2.466l-3.286-10.935a1.99 1.99 0 0 0-1.431-1.355 2.02 2.02 0 0 0-1.914.519c-6.713 6.631-10.144 17.333-3.282 24.107l19.182 18.936c.384.379.898.581 1.419.581.05 0 .099-.025.149-.029.05.004.099.029.149.029.522 0 1.035-.201 1.419-.581l19.182-18.936c6.866-6.772 3.431-17.475-3.286-24.105zM93.533 26.847c0-3.519 2.902-6.383 6.466-6.383s6.462 2.864 6.462 6.383-2.898 6.379-6.462 6.379-6.466-2.861-6.466-6.379z" fill="#31333A" data-color="1"></path>
                </g>
              </svg>
            </div>
            <div>
              <button className=' outline-none bg-[#09080A] text-white hover:bg-white hover:text-black text-sm w-40 h-10 '> Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-screen scale-100'>
        <Hero_s />
        <Sec_hero />
      </div>

      <div className=" relative left-24 flex justify-center mt-40 w-[90%] bg-gray-300 h-0.5"></div>
      <div className='h-screen bg-[url(/images/img5.jpg)'>
        <Hero_third />
        third is the image
      </div>
    </div>
  )
};

export default App