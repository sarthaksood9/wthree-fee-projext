import React from 'react'

const Box2 = () => {
    return (
        <>
            <div className='flex h-[70vh] w-full bg-[#fff4a3] justify-center items-center '>
                <div className='flex flex-col justify-center items-center gap-4' >
                    <h1 className='font-extrabold font-mono text-9xl'>CSS</h1>
                    <p>The language for styling web pages</p>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#04aa6d]'>Learn CSS</button>
                    <button className='rounded-full text-[white] h-10 w-56 bg-black'>CSS Reference</button>
                    <button className='rounded-full text-[black] h-10 w-56 bg-[#ffc0c7]'>Get Certified</button>
                </div>
                <div className='w-[30%] bg-[#e7e9eb] shadow-2xl m-10 pt-8 pb-5 px-4 ml-48 flex flex-col gap-5 items-start'>
                    <h1 className='text-[1.7rem] font-[500] '>CSS Example:</h1>
                    <div className='flex flex-col w-full px-3 py-4 border-l-4 border-[#04aa6d] bg-white items-start'>
                        <p>body {"{"}</p>
                        <p>  background-color: lightblue;</p>
                        <p>{"}"}</p>
                        <br></br>
                        <p>h1 {"{"}</p>
                        <p>color: white;</p>
                        <p>text-align: center;</p>
                        <p>{"}"}</p>
                        <p>p1 {"{"}</p>
                        <p>font-family: verdana;</p>
                        <p>{"}"}</p>
                    </div>
                    <button className='bg-[#04aa6d] px-8 py-2 rounded-3xl w-fit font-[600] text-[white] '>Try Your self</button>
                </div>
            </div>
        </>
    )
}

export default Box2