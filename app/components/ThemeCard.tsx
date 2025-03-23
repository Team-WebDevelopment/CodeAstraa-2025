
import { GoArrowUpRight } from "react-icons/go";

import React from 'react'

interface DataProps {
    title: string;
    image: string;
    link: any;
}

export default function ThemeCard(data: DataProps) {
    return (
        <div className='main bg-white/20 border border-white rounded-4xl p-1 md:p-3'>
            <div className='Display bg-linear-to-r from-[#382B4C]/80  to-[#8365B2]/80 rounded-t-4xl p-2'>
                <div className='title text-xl md:text-2xl text-center harryp'><h1 className='bg-gradient-to-r from-[#EBC94B] to-[#FFFFFF] inline-block text-transparent bg-clip-text'>
                    {data.title.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                            {' '}
                            {index == 1 ? <br /> : null}
                            {word}
                        </React.Fragment>
                    ))}
                </h1></div>
                <div className="img flex justify-center">
                    <img className='w-32 h-22 md:w-52 md:h-36' src={data.image} alt="img not availlable" />
                </div></div>
            <div className='data flex flex-row bg-white/67 mt-1 rounded-b-4xl items-center p-0.5 justify-between '>
                <div className='font-sans font-bold text-xs p-1 md:text-md pl-3 md:px-4'>Know More</div>
                <div className=' md:px-4 m-0.5 flex flex-row bg-linear-to-r from-[#8365B2]/80 to-[#382B4C]/80 font-sans text-white font-bold text-xs p-2 rounded-br-4xl content-center items-center'><button className='md:text-md'>Rules </button><GoArrowUpRight className="text-xl"></GoArrowUpRight></div>
            </div>
        </div>
    )
}
