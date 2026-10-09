import Breadcrumb from "@/Components/ProductDetailsPageCompo/Breadcrumb";
import { iProductsType } from "@/Components/Types/ProductsTypes";
import { toBengaliNumber, toBengaliUnit } from "@/Components/utils";
import { AiOutlineMinus } from "react-icons/ai";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";


const ProductsDetailPage = async ({ params }: { params: { ProductID: string } }) => {
    const { ProductID } = await params


    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${ProductID}`, { cache: 'no-store' });
    const data = await res.json()

    const Product: iProductsType = data;

    const diff = Math.abs(Product.today - Product.yesterday)

    let summaryText = "";

    if (Product.today > Product.yesterday) {
        summaryText = `গতকালের তুলনায় আজ দাম বেড়েছে • ${toBengaliNumber(diff)} টাকা`;
    } else if (Product.today < Product.yesterday) {
        summaryText = `গতকালের তুলনায় আজ দাম কমেছে • ${toBengaliNumber(diff)} টাকা`;
    } else {
        summaryText = `গতকালের তুলনায় আজ দাম অপরিবর্তিত রয়েছে`;
    }

    const allhighestNum = Product.markets.map(m => m.max)
    const allLowestNum = Product.markets.map(m => m.min)

    const highestNum = Math.max(...allhighestNum)
    const lowestNum = Math.min(...allLowestNum)



    return (
        <div className="container mx-auto">
            <Breadcrumb category={data.category} categoryNameBn={data.categoryNameBn} nameBn={data.nameBn} />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2.5 bg-[#FAFCFA] border-2 border-[#E1E8E1] mx-3 xl:mx-0 px-3 md:px-6 py-7 mt-5 rounded-2xl">
                <div className='flex items-start gap-2 md:gap-3 w-full md:w-auto '>
                    <span className='text-[34px] flex items-center bg-[#F0F5F0] px-5 py-4 rounded-2xl justify-center shrink-0 emoji-icon leading-tight'>{Product.image}</span>
                    <div className='flex flex-col gap-0.5'>
                        <div>
                            <h4 className='text-[#1D271F] text-2xl md:text-3xl font-bold md:font-semibold'>{Product.nameBn}</h4>
                            <span className='text-[#1D271F]/70 text-[12px] md:text-[14px] font-noto'>প্রতি {toBengaliUnit(Product.unit)} · {Product.categoryNameBn}</span>
                        </div>

                        <span className='text-[#1D271F] text-[13px] md:text-[16px] font-noto '>{summaryText}</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center bg-[#F0F5F0] w-full md:w-auto px-6 py-4 shrink-0 rounded-2xl md:rounded-3xl">
                    <span className="text-[#1D271F]/60 text-[14px] md:text-[15px]">আজকের দাম</span>
                    <div className="text-3xl font-noto font-bold">{toBengaliNumber(Product.today)}</div>
                    <span className='text-[#1D271F]/60 text-[14px] md:text-[15px]'>টাকা/{toBengaliUnit(Product.unit)}</span>
                    {/* Price up or down */}
                    <span className={`${Product.change.dir === 'up' ? ' text-[#DC2626]' : Product.change.dir === 'down' ? ' text-[#1A9951]' : 'text-[#1D271F]'} flex items-center text-[14px] md:text-[15px] px-3 py-1.5 rounded-4xl font-medium`}>
                        {Product.change.dir === 'up' ? <IoCaretUpSharp /> : Product.change.dir === 'down' ? <IoCaretDownSharp /> : <span className='font-noto text-[#1D271F] font-bold flex gap-0.5 items-center'><AiOutlineMinus className='text-[14px] text-2xl md:text-2xl font-black' /> ০.</span>}
                        <span className='font-noto font-bold'>{toBengaliNumber(Math.abs(Product.change.pct))}%</span>
                    </span>
                </div>
            </div>

            <div className="bg-[#FAFCFA] border-2 border-[#E1E8E1] mx-3 xl:mx-0 px-3 md:px-6 py-7 mt-5 rounded-2xl">
                <h2 className="text-[#1D271F] text-[16px] md:text-[18px] font-bold">দামের সারসংক্ষেপ</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mt-4">

                    {/* lowest Value */}

                    <div className="bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl gap-5 px-3 md:px-6 py-6">
                        <p>সর্বনিম্ন দাম</p>
                        <p className="text-[#1A9951] font-noto text-3xl font-bold">{toBengaliNumber(lowestNum)} <span className="font-hind font-medium text-[16px]">টাকা</span></p>
                        <p>সবচেয়ে কম দামের বাজার</p>
                    </div>

                    {/* highest Value */}

                    <div className="bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl px-3 md:px-6 py-6 ">
                        <p>সর্বাধিক দাম</p>
                        <p className="text-[#D03739] font-noto text-2xl font-bold">{toBengaliNumber(highestNum)} <span>টাকা</span></p>
                        <p>সবচেয়ে বেশি দামের বাজার</p>
                    </div>

                    {/* avg Value */}

                    <div className="bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl px-3 md:px-6 py-6">
                        <p>গড় দাম</p>
                        <p className="text-[#1A9951] font-noto text-2xl font-bold">{toBengaliNumber(Product.today)} <span>টাকা</span></p>
                        <p>প্রতি কেজি-এর হিসাবে</p>
                    </div>

                </div>

                <h2 className="text-[#1D271F] text-[16px] md:text-[18px] font-bold mt-6">বাজারভিত্তিক আজকের দাম</h2>



                <div className="bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl mt-5 overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 items-center bg-[#F0F5F0] border-b-2 border-[#E1E8E1] text-[#1D271F]/70 text-[12px] md:text-[15px] font-bold py-3 px-2 md:px-6">
                        <p className="col-span-3 md:col-span-3">বাজার</p>
                        <p className="col-span-2 md:col-span-2 text-center md:text-left">বিভাগ</p>
                        <p className="col-span-2 md:col-span-2 text-right">সর্বনিম্ন</p>
                        <p className="col-span-2 md:col-span-2 text-right">সর্বাধিক</p>
                        <p className="col-span-3 md:col-span-3 text-right ">গড়</p>
                    </div>

                    {/* Table Rows Container */}
                    <div className="divide-y divide-[#E1E8E1]">
                        {Product.markets.map((Market, indx) => {
                            const avg = (Market.min + Market.max) / 2;
                            const formattedAvg = avg % 1 === 0 ? avg : avg.toFixed(1);

                            return (
                                <div
                                    key={indx}
                                    className="grid grid-cols-12 items-center py-3.5 px-2 md:px-6 text-[11px] sm:text-[13px] md:text-[15px] text-[#1D271F] font-noto hover:bg-[#F0F5F0]/50 transition-colors"
                                >
                                    {/* Market Name */}
                                    <div className="col-span-3 md:col-span-3 font-medium leading-tight wrap-break-word pr-1">
                                        {Market.market}
                                    </div>

                                    {/* Division */}
                                    <div className="col-span-2 md:col-span-2 font-medium text-[#1D271F]/80 text-center md:text-left truncate pr-1">
                                        {Market.division}
                                    </div>

                                    {/* Minimum Price */}
                                    <div className="col-span-2 md:col-span-2 font-medium text-right whitespace-nowrap">
                                        {toBengaliNumber(Market.min)} <span className="font-hind">টাকা</span>
                                    </div>

                                    {/* Max Price */}
                                    <div className="col-span-2 md:col-span-2 font-medium text-right whitespace-nowrap">
                                        {toBengaliNumber(Market.max)} <span className="font-hind">টাকা</span>
                                    </div>

                                    {/* Avg Price */}
                                    <div className="col-span-3 md:col-span-3 text-right  font-bold whitespace-nowrap">
                                        {toBengaliNumber(formattedAvg)} <span className="font-hind font-bold">টাকা</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductsDetailPage;