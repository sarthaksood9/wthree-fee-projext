import React from 'react'

const Boxgrid = () => {
    return (
        <>
            <div className="grid grid-cols-2 w-full 100vh bg-[#282a35]">
                <div className='flex flex-col justify-center m-16 bg-[#fff4a3] h-54 items-center rounded-xl w-78 p-12 gap-6'>
                    <h1 className='text-4xl font-bold'>jQuery</h1>

                    <p>A JS library for developing web pages</p>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#282a35]'>Learn jQuery</button>

                </div>
                <div className='flex flex-col items-center justify-center m-16 bg-[#D9EEE1] text-[black] h-54 rounded-xl w-78 p-12 gap-6'>
                    <h1 className='text-4xl font-bold'>Python</h1>
                    <p>A popular programming language</p>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#282a35]'>Learn Python</button>

                </div>
                <div className='flex flex-col items-center justify-center m-16 bg-[#96D4D4] text-[black] h-54 rounded-xl w-78 p-12 gap-6'>
                    <h1 className='text-4xl font-bold'>C</h1>
                    <p>A popular programming language</p>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#282a35]'>Learn C</button>

                </div>
                <div className='flex flex-col items-center justify-center m-16 text-white bg-[#04aa6d] h-54 rounded-xl w-78 p-12 gap-6'>
                    <h1 className='text-4xl font-bold'>C++</h1>
                    <p>A popular programming language</p>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#282a35]'>Learn C++</button>

                </div>
                <div className='flex flex-col items-center justify-center m-16 bg-[#D9EEE1] text-[black] h-54 rounded-xl w-78 p-12 gap-6'>
                    <h1 className='text-4xl font-bold'>React</h1>
                    <p>A JS library for better UI/UX</p>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#282a35]'>Learn React</button>

                </div>
                <div className='flex flex-col items-center justify-center m-16 bg-[#FFC0C7] text-[black] h-54 rounded-xl w-78 p-12 gap-6'>
                    <h1 className='text-4xl font-bold'>PHP</h1>
                    <p>A web server programming language</p>
                    <button className='rounded-full text-[white] h-10 w-56 bg-[#282a35]'>Learn PHP</button>
                </div>
            </div>
            <div className='grid grid-cols-4 w-full h-full bg-[#282a35]'>
                <button className='m-auto rounded-xl font-bold p-8 h-24 w-48 bg-[#fff4a3]'>JAVA</button>
                <button className='m-auto rounded-xl font-bold p-8 h-24 w-48 bg-[#96D4D4]'>C#</button>
                <button className='m-auto rounded-xl font-bold p-8 h-24 w-48 bg-[#FFC0C7]'>TYPESCRIPT</button>
                <button className='m-auto rounded-xl font-bold p-8 h-24 w-48 bg-slate-300'>NODE JS</button>
            </div>
            <div className='grid grid-cols-4 w-full h-full bg-[#282a35] py-12'>
                <button className='m-auto rounded-xl font-bold p-8 h-24 w-48 bg-white'>XML</button>
                <button className='m-auto rounded-xl font-bold p-8 h-24 w-48 bg-[#04aa6d] text-white'>JSON</button>
                <button className='m-auto rounded-xl font-bold p-8 h-24 w-48 bg-[#D9EEE1]'>VUE</button>
                <button className='m-auto rounded-xl font-bold p-8 h-24 w-48 bg-[#fff4a3]'>KOTLIN</button>
            </div>
        </>
    )
}

export default Boxgrid