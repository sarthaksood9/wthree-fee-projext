import React from 'react'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { BsDiscord, BsLinkedin } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='h-80vh w-full bg-[url("./assets/bg.gif")] px-12 py-20'>
            <div className='mx-40 w-[70%]'>
                <div>
                    <img></img>
                </div>
                <div className='flex  h-max text-lg justify-between text-[#efdb95] font-semibold'>
                    <div><a className='cursor-pointer hover:underline'>SPACES</a></div>
                    <div><a className='cursor-pointer hover:underline'>UPGRADE</a></div>
                    <div><a className='cursor-pointer hover:underline'>GET CERTIFIED</a></div>
                    <div><a className='cursor-pointer hover:underline'>NEWSLETTER</a></div>
                    <div><a className='cursor-pointer hover:underline'>REPORT ERROR</a></div>
                </div>
                <div className='mt-12 flex w-[110%] justify-between '>
                    <div className='flex flex-col gap-4 text-white items-start'>
                        <h1 className='text-lg font-semibold'>Top Tutorials</h1>
                        <div className='flex flex-col items-start'>
                            <p>CSS Tutorial</p>
                            <p>JavaScript Tutorial</p>
                            <p>How To Tutorial</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 text-white items-start'>
                        <h1 className='text-lg font-semibold bg'>Top References</h1>
                        <div className='flex flex-col items-start'>
                            <p>CSS Reference</p>
                            <p>JavaScript Reference</p>
                            <p>SQL Reference</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 text-white items-start'>
                        <h1 className='text-lg font-semibold'>Top Exemples</h1>
                        <div className='flex flex-col items-start'>
                            <p>CSS Examples</p>
                            <p>JavaScript Examples</p>
                            <p>How to Examples</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 text-white items-start'>
                        <h1 className='text-lg font-semibold'>Get Certified</h1>
                        <div className='flex flex-col items-start'>
                            <p>CSS Certificate</p>
                            <p>JavaScript Certificate</p>
                            <p>Front End Certificate</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='mt-6 flex w-full gap-4 text-lg text-white'>
                        <BiLogoFacebookSquare className='hover:text-[#efdb95] text-3xl' />
                        <BsDiscord className='hover:text-[#efdb95] text-3xl' />
                        <BsLinkedin className='hover:text-[#efdb95] text-3xl' />
                        <AiOutlineInstagram className='hover:text-[#efdb95] text-3xl' />
                        <div className='text-sm font-medium hover:text-[#efdb95] '>FORUM</div>
                        <div className='text-sm font-medium hover:text-[#efdb95] '>ABOUT</div>
                    </div>
                    <div className='text-white text-start flex flex-col gap-4'>
                        <p>
                            W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                            Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                            of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
                        </p>
                        <div>
                            <p>Copyright 1999-2023 by Refsnes Data. All Rights Reserved. W3Schools is Powered by W3.CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer