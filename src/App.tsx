import { useState } from 'react'
import logo from './assets/images/logo.svg'
import interactive from './assets/images/desktop/image-interactive.jpg'

import earthDesk from './assets/images/desktop/image-deep-earth.jpg'
import earthMobile from './assets/images/mobile/image-deep-earth.jpg'
import nightDesk from './assets/images/desktop/image-night-arcade.jpg'
import nightMobile from './assets/images/mobile/image-night-arcade.jpg'
import soccerDesk from './assets/images/desktop/image-soccer-team.jpg'
import soccerMobile from './assets/images/mobile/image-soccer-team.jpg'
import gridDesk from './assets/images/desktop/image-grid.jpg'
import gridMobile from './assets/images/mobile/image-grid.jpg'

import fromDesk from './assets/images/desktop/image-from-above.jpg'
import fromMobile from './assets/images/mobile/image-from-above.jpg'
import curiosityDesk from './assets/images/desktop/image-curiosity.jpg'
import curiosityMobile from './assets/images/mobile/image-curiosity.jpg'
import pocketDesk from './assets/images/desktop/image-pocket-borealis.jpg'
import pocketMobile from './assets/images/mobile/image-pocket-borealis.jpg'
import fishDesk from './assets/images/desktop/image-fisheye.jpg'
import fishMobile from './assets/images/mobile/image-fisheye.jpg'

import facebook from './assets/images/icon-facebook.svg'
import twitter from './assets/images/icon-twitter.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import instagram from './assets/images/icon-instagram.svg'

const App = () => {
  const pages = ['About', 'Carreers', 'Events', 'Products', 'Support']
  const items1 = [
    { name: 'Deep Earth', desk: earthDesk, mobile: earthMobile },
    { name: 'Night Arcade', desk: nightDesk, mobile: nightMobile },
    { name: 'Soccer Team VR', desk: soccerDesk, mobile: soccerMobile },
    { name: 'The Grid', desk: gridDesk, mobile: gridMobile },
  ]
  const items2 = [
    { name: 'From Up Above VR', desk: fromDesk, mobile: fromMobile },
    { name: 'Pocket Borealis', desk: pocketDesk, mobile: pocketMobile },
    { name: 'The Curiosity', desk: curiosityDesk, mobile: curiosityMobile },
    { name: 'Make It Fisheye', desk: fishDesk, mobile: fishMobile },
  ]

  return (
    <>
      <section id='hero'>
        <div className='container max-w-6xl mx-auto px-6 py-12'>
          <nav className='flex items-center justify-between font-bold text-white'>
            <img src={logo} alt="2" />
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              {pages.map(page => (
                <div className="group">
                  <a href="#">{page}</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              ))}
            </div>
          </nav>

          <div 
            className="max-w-lg my-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl"
          >
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>
      <section id='feature'>
        <div 
          className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0"
        >
          <img src={interactive} alt="" /> 

          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 
              className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
            >
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed business through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      <section id='creations'>
        <div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
          <div className='flex justify-center mb-20 md:justify-between'>
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button 
              className='hidden btn md:block'
            >
              See All
            </button>
          </div>
          
          <div className='item-container'>
            {items1.map(item => (
              <div className="group item">
                <img src={item.desk} alt="" 
                  className="hidden w-full duration-200 md:block group-hover:scale-110" 
                />
                <img src={item.mobile} alt="" 
                  className="md:hidden w-full duration-200 group-hover:scale-110" 
                />
                <div className="absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                  {item.name}
                </h5>
              </div>
          ))}
          </div>
          <div className='item-container mt-8'>
            {items2.map(item => (
              <div className="group item">
                <img src={item.desk} alt="" 
                  className="hidden w-full duration-200 md:block group-hover:scale-110" 
                />
                <img src={item.mobile} alt="" 
                  className="md:hidden w-full duration-200 group-hover:scale-110" 
                />
                <div className="absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                  {item.name}
                </h5>
              </div>
          ))}
          </div>

          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>

        </div>
      </section>
      <footer className='bg-black'>
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            <div className="flex flex-col space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
                <img src={logo} alt="" className="w-44 md:ml-3" />
              </div>
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {pages.map(page => (
                  <div className="group h-10">
                    <a href="#">{page}</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
              ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                <div className="h-8 group">
                  <a href="#">
                    <img src={facebook} alt="" className='h-6' />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={twitter} alt="" className='h-6' />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={pinterest} alt="" className='h-6' />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={instagram} alt="" className='h-6' />
                  </a>
                </div>
              </div>

              <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
