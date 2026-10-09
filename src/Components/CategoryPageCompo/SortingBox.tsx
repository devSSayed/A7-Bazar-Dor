"use client";

import { categoryContext } from "@/CategoryContext/CategoryContext";
import { useContext } from "react";

const SortingBox = () => {

    const {sortBy, setSortBy} = useContext(categoryContext)

    return (
         <div className='flex items-center gap-2.5'>
            <p className='font-inter text-[15px] text-[#1D271F]/80'>সাজান</p>
            <div>
                <fieldset className="fieldset">
                    <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'ডিফল্ট' | 'দাম: বেশি থেকে কম' | 'দাম: কম থেকে বেশি')}
                    className="select font-inter bg-[#FAFCFA] text-[#1D271F] rounded-xl mr-2.5">
                        <option value={'ডিফল্ট'} disabled={true}>ডিফল্ট</option>
                        <option value={'দাম: বেশি থেকে কম'}>দাম: বেশি থেকে কম</option>
                        <option value={'দাম: কম থেকে বেশি'}>দাম: কম থেকে বেশি</option>
                    </select>
                </fieldset>
            </div>
        </div>
    );
};

export default SortingBox;