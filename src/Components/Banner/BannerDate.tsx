"use client";

import { useSyncExternalStore } from "react";

const BannerDate = () => {

    const emptySubscribe = () => () => { };

    const date = useSyncExternalStore(
        emptySubscribe,
        () => new Date().toLocaleDateString("bn-BD", { dateStyle: "full" }),
        () => ""
    );

    return (
        <p className='text-[#05893E] bg-[#05893E]/10 text-[14px] text-center w-fit px-5 py-2 md:py-3 rounded-4xl md:text-[17px] font-medium'>{date}</p>
    );
};

export default BannerDate;