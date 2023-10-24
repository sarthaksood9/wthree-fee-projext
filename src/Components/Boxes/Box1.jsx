import React from 'react'

const Box1 = () => {
  return (
    <>
      <div className='flex h-[70vh] w-full bg-[#D9EEE1] justify-center items-center gap-6'>
        <div className='flex flex-col justify-center items-center gap-4' >
          <h1 className='font-extrabold font-mono text-9xl'>HTML</h1>
          <p>The language for building web pages</p>
          <button className='rounded-full text-[white] h-10 w-56 bg-[#04aa6d]'>Learn HTML</button>
          <button className='rounded-full text-[black] h-10 w-56 bg-[#fff4a3]'>Video Tutorial</button>
          <button className='rounded-full text-[white] h-10 w-56 bg-black'>HTML Reference</button>
          <button className='rounded-full text-[black] h-10 w-56 bg-[#ffc0c7]'>Get Certified</button>
        </div>
        <div className='w-[30%] bg-[#e7e9eb] shadow-2xl m-10 pt-8 pb-5 px-4 flex flex-col gap-5 items-start ml-40'>
          <h1 className='text-[1.7rem] font-[500]'>HTML Example:</h1>
          <div className='flex flex-col w-full px-3 py-4 border-l-4 border-[#04aa6d] bg-white items-start'>
            <p>{"<"}!DOCTYPE html{">"}</p>
            <p>{"<"}html{">"}</p>
            <p>{"<"}head{">"}</p>
            <p>{"<"}title{">"}HTML Tutorial{"<"}title{">"}</p>
            <p>{"<"}/head{">"}</p>
            <p>{"<"}body{">"}</p>
            <br></br>
            <p>{"<"}h1{">"}This is a heading{"<"}/h1{">"}</p>
            <p>{"<"}p{">"}This is a paragraph{"<"}/h1{">"}</p>
            <br></br>
            <p>{"<"}/body{">"}</p>
            <p>{"<"}/html{">"}</p>
          </div>
          <button className='bg-[#04aa6d] px-8 py-2 rounded-3xl w-fit font-[600] text-[white] '>Try Your self</button>

        </div>
      </div>
    </>
  )
}

export default Box1