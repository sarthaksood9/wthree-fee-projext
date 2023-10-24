import React from 'react'
import template from '../../assets/w3css_templates.jpg'
const Box4 = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full bg-slate-200 py-12 gap-8'>
            <h1 className='font-bold text-[50px] mt-12'>Web Templates</h1>
            <p className='text-[30px]'>Browse our selection of free responsive HTML Templates</p>
            <img src={template} alt='logo' className='h-96 w-[70%]'></img>
            <button className='rounded-full text-white h-12 w-96 font-bold bg-black'>Browse Templates</button>
        </div>
    )
}

export default Box4