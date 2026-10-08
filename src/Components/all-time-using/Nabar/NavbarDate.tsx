"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => { };

const NavbarDate = () => {
    const date = useSyncExternalStore(
        emptySubscribe,
        () => new Date().toLocaleDateString("bn-BD", { dateStyle: "full" }),
        () => ""
    );

    return (
        <p className='text-[#1D271F] text-[11px]  md:text-[15px] font-medium'>{date}</p>
    );
};

export default NavbarDate;