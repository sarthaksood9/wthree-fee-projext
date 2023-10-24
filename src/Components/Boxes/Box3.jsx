import React from 'react'

const Box3 = () => {
    return (
        <>
            <div className='flex h-[70vh] w-full bg-[#FFC0C7] justify-center items-center gap-6'>
                <div className='flex flex-col justify-center items-center gap-4' >
                    <h1 className='font-extrabold font-mono text-7xl'>JavaScript</h1>
                    <p>The language for programming web pages</p>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#04aa6d]'>Learn Javascript</button>
                    <button className='rounded-full text-[black] h-10 w-56 bg-white'>Javascript Reference</button>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#282a35]'>Get Certified</button>
                </div>
                <div className='w-[30%] bg-[#e7e9eb] shadow-2xl m-10 pt-8 pb-5 px-4 flex flex-col gap-5 items-start'>
                    <h1 className='text-[1.7rem] font-[500]'>JavaScript Example:</h1>
                    <div className='flex flex-col w-full px-3 py-4 border-l-4 border-[#04aa6d] bg-white items-start'>

                        <p>{"<"}button onclick="myFunction{"()"}"{">"}Click Me!{"</"}button{">"}</p>
                        <p> {"<"}script{">"} </p>
                        <p> function myFunction{"()"} {"{"} </p>
                        <p> let x = document.getElementById{"("}"demo"{")"};</p>
                        <p>x.style.fontSize = "25px";</p>
                        <p>x.style.color = "red";</p>
                        <p>{"}"}</p>
                        <p>{"</"}script{">"}</p>

                    </div>
                    <button className='bg-[#04aa6d] px-8 py-2 rounded-3xl w-fit font-[600] text-[white] '>Try Your self</button>
                </div>
            </div >
        </>
    )
}

export default Box3