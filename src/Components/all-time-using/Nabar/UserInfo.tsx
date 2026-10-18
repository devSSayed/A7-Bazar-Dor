"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const UserInfo = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

    const getFirstInitial = (name?: string | null) => {
        return name?.trim() ? name.trim().charAt(0).toUpperCase() : "?";
    };

    const getFirstName = (name?: string | null) => {
        if (!name?.trim()) return "User";
        return name.trim().split(" ")[0];
    };

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (

        user ?
            <div className="dropdown dropdown-end">
                {/* Trigger Button */}
                <div tabIndex={0} role="button" className="btn btn-ghost bg-none border-none py-7 rounded-field flex items-center gap-2">
                    {/* First Letter from the name */}
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#05893E] text-[#F3FBF4] font-bold font-inter flex items-center justify-center text-[17px] md:text-2xl shrink-0">
                        {getFirstInitial(user?.name)}
                    </div>

                    {/* Name */}
                    <span className="font-semibold font-inter md:text-[15px] max-w-20 md:max-w-30 truncate">
                        {getFirstName(user?.name)}
                    </span>

                    
                   <RiArrowDropDownLine className="text-xl md:text-2xl text-gray-500/70"/>
                </div>

                
                <ul
                    tabIndex={-1}
                    className="menu dropdown-content bg-base-100 rounded-box z-10 mt-4 w-64 p-3 shadow-lg border border-base-200"
                >
                    {/* User Info Header inside menu */}
                    <li className="px-3 py-2 border-b border-base-200 mb-2 pointer-events-none">
                        <div className="flex flex-col p-0 items-start">
                            <span className="font-semibold font-inter text-base leading-snug">{user?.name || "User"}</span>
                            <span className="text-xs font-inter opacity-60 truncate">{user?.email}</span>
                        </div>
                    </li>

                    {/* Menu Items */}
                    <li>
                        <Link href="/profile" className="flex items-center font-hind gap-2 py-2">
                            <FaUser className="w-4 h-4" />
                            আমার প্রোফাইল
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleSignOut} className="flex items-center gap-2 py-2 font-hind text-error hover:bg-error/10">
                            <BiLogOut className="w-4 h-4" />
                            সাইন আউট
                        </button>
                    </li>
                </ul>
            </div>

            :

            <div className="flex items-center gap-1 md:gap-3 shrink-0">

                <Link href={'/signin'}><button className='btn hover:bg-gray-200 active:bg-gray-300 rounded-[10px] md:py-6 md:text-[17px] bg-[#FAFCFA] border-none '>সাইন ইন</button></Link>
                <Link href={'/signup'}><button className='btn rounded-[10px] md:py-6 md:text-[17px] bg-[#05893E] active:bg-[#047F39] border border-[#047F39] text-[#F3FBF4] shadow-[0_5px_7px_-1px_rgba(0,138,61,0.9)]'>সাইন আপ</button></Link>
            </div>
    );
};

export default UserInfo;