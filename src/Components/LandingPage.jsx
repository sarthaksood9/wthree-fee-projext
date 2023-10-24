import React from 'react'
import Navbar from './Navbar'
import { BsSearch } from 'react-icons/bs'
import lynx_in_space from '../assets/lynx_in_space.png'
import Box1 from './Boxes/Box1'
import Box2 from './Boxes/Box2'
import Box3 from './Boxes/Box3'
import Boxgrid from './Boxes/Boxgrid'
import Footer from './Footer'
import Box4 from './Boxes/Box4'
const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center h-[80vh] items-center bg-[url("./assets/bg.gif")] pt-[16vh]'>
                <div className='flex h-96 justify-center items-center flex-col w-[40vw] gap-4 ml-[15vw]'>
                    <h1 className='text-7xl text-white font-mono font-extrabold'>Learn to Code</h1>
                    <h3 className='text-3xl text-[#fff4a3]'>With the world's largest web developer site.</h3>
                    <div className='flex justify-center mt-4'>
                        <input className='rounded-l-3xl h-[5vh] w-[20vw] px-4' placeholder='Search our tutorials'></input>
                        <button className='px-8 h-[5vh] bg-[#04aa6d] rounded-r-3xl text-[white]'><BsSearch /></button>
                    </div>
                    <a className='text-2xl text-[white] underline hover:text-[#fff4a3] font-semibold w-max cursor-pointer mt-5' >Not Sure Where To Begin With?</a>
                </div>
                <div className='ml-[10vw] float-right'>
                    <img src={lynx_in_space} alt='logo'></img>
                </div>
            </div>
            <svg style={{ backgroundColor: "#D9EEE1" }} width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path></svg>
            <Box1 />
            <Box2 />
            <Box3 />
            <Boxgrid />
            <Box4 />
            <Footer />
        </>
    )
}

export default LandingPage