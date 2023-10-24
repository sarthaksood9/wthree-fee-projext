import React from 'react'
import logo from '../assets/logo.png'
import { BsSearch } from "react-icons/bs"
import { ImContrast } from "react-icons/im"
import { BiCodeAlt } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const eventHandler = () => {
        navigate("/login")
    }
    return (
        <>
            <div className='h-[8vh] w-full flex px-[0.9rem] py-[0.6rem] justify-between fixed bg-white'>
                <div className='flex gap-[2rem]'>
                    <div>
                        <img src={logo} alt='logo' className=' w-[50px] relative top-0'></img>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='flex justify-center h-[8vh] items-center px-4 w-full hover:bg-[#04aa6d] hover:text-white cursor-pointer' >Tutorials</div>
                        <div className='flex justify-center h-[8vh] items-center px-4 w-full hover:bg-[#04aa6d] hover:text-white cursor-pointer' >Excercises</div>
                        <div className='flex justify-center h-[8vh] items-center px-4 w-full hover:bg-[#04aa6d] hover:text-white cursor-pointer' >GetCertified</div>
                        <div className='flex justify-center h-[8vh] items-center px-4 w-full hover:bg-[#04aa6d] hover:text-white cursor-pointer' >Services</div>
                    </div>
                    <div className='flex gap-[1rem] justify-center item-center'>
                        <div className='flex relative justify-center items-center mt-2'>
                            <input className='w-[11.5rem] px-4 py-1 rounded-2xl bg-transparent border-[0.5px] border-[black]' placeholder='Search'></input>
                            <BsSearch className='absolute left-[10rem]' />
                        </div>
                        <button><ImContrast className='h-[3vh] w-[3vw] mt-2' /></button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex'>
                        <button className='rounded-full px-4 py-2 hover:bg-[rgba(0,0,0,0.1)] flex justify-center items-center gap-[0.3rem] '>
                            <BiCodeAlt className='text-[#a77bf7] text-[22px] mt-[0.17rem]' />
                            <span>Space</span>
                        </button>
                        <button className='rounded-full px-4 py-2 hover:bg-[rgba(0,0,0,0.1)] flex justify-center items-center gap-[0.3rem] '>
                            <AiOutlineShoppingCart className='text-[#a77bf7] text-[22px] mt-[0.17rem]' />
                            <span>Certificates</span>
                        </button>
                    </div>
                    <div className='flex'>
                        <button className='rounded-full bg-[#04aa6d] text-white px-4 p-2 hover:bg-[#4a8a73] flex items-center justify-center gap-[0.3rem] z-[1] ' onClick={eventHandler}>
                            <span>Sign up</span>
                        </button>
                        <button className='rounded-full bg-[#d9eee1]  px-4 p-2 hover:bg-[#4a8a73] hover:text-white flex items-center justify-center gap-[0.3rem] ml-[-1.6rem] pl-[1.7rem]' onClick={eventHandler}>
                            <span>Log in</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex h-8 bg-[#282a35] text-white w-full fixed mt-[8vh] overflow-x-scroll hide-scrollbar '>
                <div className='px-8 flex justify-center hover:bg-black'><button>HTML</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>CSS</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>JAVASCRIPT</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>SQL</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>PYTHON</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>JAVA</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>C</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>C++</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>BOOTSTRAP</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>REACT</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>W3.CSS</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>JQUERY</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>C#</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>XML</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>PHP</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>NODEJS</button></div>
                <div className='px-8 flex justify-center hover:bg-black'><button>TYPESCRIPT</button></div>
            </div>
        </>
    )
}

export default Navbar