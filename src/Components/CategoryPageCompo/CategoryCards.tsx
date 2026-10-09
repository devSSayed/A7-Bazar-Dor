"use client";

import { categoryContext } from "@/CategoryContext/CategoryContext";
import { useContext } from "react";
import { iProductsType } from "../Types/ProductsTypes";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
import { toBengaliNumber, toBengaliUnit } from "../utils";
import Link from "next/link";

const CategoryCards = ({ Products }: { Products: iProductsType[] }) => {

    const { sortBy } = useContext(categoryContext)


    const sortedCategories = [...Products].sort((a, b) => {
        if (sortBy === 'দাম: বেশি থেকে কম') return b.today - a.today
        if (sortBy === 'দাম: কম থেকে বেশি') return a.today - b.today

        return 0;
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 px-3.5 xl:px-0 py-2 md:py-0 mt-6 xl:mt-8'>
            {
                sortedCategories.map((product: iProductsType) => {
                    return (
                        <Link href={`/Products/${product.id}`} key={product.id} className='px-3 py-5 border-2 bg-[#FAFCFA] border-[#E1E8E1] rounded-2xl cursor-pointer active:border-[#05893E]/60 transition-all will-change-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg'>

                            <div className='flex flex-col justify-between gap-3.5'>
                                {/* image & product name & unit */}
                                <div className='flex items-center gap-2 md:gap-3'>
                                    <span className='text-[28px] md:text-xl bg-[#F0F5F0] rounded-2xl w-12 h-12 flex items-center justify-center shrink-0 emoji-icon'>{product.image}</span>
                                    <div className='flex flex-col gap-0.5'>
                                        <h4 className='text-[#1D271F] text-[16px] md:text-[18px] font-bold md:font-semibold'>{product.nameBn}</h4>
                                        <span className='text-[#1D271F] text-[13px] md:text-[14px] font-noto font-medium'>প্রতি {toBengaliUnit(product.unit)}</span>
                                    </div>
                                </div>



                                <div className='flex items-end justify-between mt-2 md:mt-3'>
                                    {/* price */}
                                    <div>
                                        <p className='text-[#1D271F] text-[14px] font-medium'>আজকের দাম</p>
                                        <p className='text-[#1D271F] text-[20px] font-noto font-bold'>{toBengaliNumber(product.today)} <span className='text-[#1D271F] text-[14px] md:text-[16px] font-semibold'>টাকা</span></p>
                                    </div>
                                    {/* how much raised  */}
                                    <span className={`${product.change.dir === 'up' ? 'bg-red-500/10 text-[#DC2626]' : product.change.dir === 'down' ? 'bg-green-500/10 text-[#1A9951]' : 'bg-[#F0F5F0] text-[#1D271F]'} flex items-center text-[14px] md:text-[15px] px-3 py-1.5 rounded-4xl font-medium`}>
                                        {product.change.dir === 'up' ? <IoCaretUpSharp /> : product.change.dir === 'down' ? <IoCaretDownSharp /> : <span className='font-noto text-[#1D271F] font-bold flex gap-0.5 items-center'><AiOutlineMinus className='text-[14px] text-2xl md:text-2xl font-black' /> ০.</span>}
                                        <span className='font-noto font-bold'>{toBengaliNumber(Math.abs(product.change.pct))}%</span>
                                    </span>
                                </div>



                            </div>


                        </Link>
                    )
                })
            }
        </div>
    );
};

export default CategoryCards;