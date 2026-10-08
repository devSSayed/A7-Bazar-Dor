'use client';
import React from 'react';

const HomePageButton = () => {

    const handleScrollToLibrary = () => {
        const librarySection = document.getElementById('#সব-পণ্য');
        librarySection?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='flex justify-center items-center md:w-fit'>
            <button onClick={handleScrollToLibrary} className='btn md:w-fit rounded-[10px] py-6 px-20 md:py-6 md:px-8 md:text-[17px] bg-[#05893E] active:bg-[#047F39] border border-[#047F39] text-[#F3FBF4] shadow-[0_5px_7px_-1px_rgba(0,138,61,0.9)]'>সব পণ্য দেখুন</button>
        </div>
    );
};

export default HomePageButton;