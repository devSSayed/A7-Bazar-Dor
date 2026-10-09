import CategoryCards from '@/Components/CategoryPageCompo/CategoryCards';
import SortingBox from '@/Components/CategoryPageCompo/SortingBox';
import { toBengaliNumber } from '@/Components/utils';
import Link from 'next/link';
import React from 'react';



interface iCardsProps {
    id: number;
    nameBn: string;
    categoryNameBn: string;
    unit: string;
    image: string;
    categoryIcon: string;
    today: number;
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    }
}

const CategoryDetailsPage = async ({ params }: { params: { CategoryID: string } }) => {
    const { CategoryID } = await params
    console.log(CategoryID);

    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${CategoryID}`, { cache: 'no-store' });
    const data = await res.json()

    const Products:iCardsProps[] = data;
    const categoryInfo = data?.[0];



    return (
        <div className='container mx-auto'>

            {
                !data || data.length === 0 ?
                    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                        <h1
                            className="text-7xl sm:text-8xl font-black tracking-tight"
                            style={{ color: '#D03739' }}
                        >
                            খালি
                        </h1>

                        <h2
                            className="mt-4 text-xl sm:text-2xl font-semibold"
                            style={{ color: '#1D271F' }}
                        >
                            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি
                        </h2>

                        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-md">
                            এই মূহুর্তে এই ক্যাটাগরিতে কোনো পণ্য এভেলেবল নেই। অনুগ্রহ করে অন্য কোনো ক্যাটাগরি চেক করুন অথবা হোম পেজে ফিরে যান।
                        </p>

                        <Link
                            href="/"
                            className="mt-6 px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-opacity hover:opacity-90 shadow-sm"
                            style={{ backgroundColor: '#1D271F' }}
                        >
                            হোম পেজে ফিরে যান
                        </Link>
                    </div>
                    :
                    
                    // main Icon + name part of the page
                    <div>
                        <div className='flex items-center gap-0.5 md:gap-3 bg-[#FAFCFA] border-2 border-[#E1E8E1] mx-3 xl:mx-0 px-3 md:px-6 py-9 mt-12 rounded-2xl'>
                            <span className='text-5xl flex items-center justify-center shrink-0 emoji-icon'>{categoryInfo.categoryIcon}</span>
                            <div className='flex flex-col gap-0.5'>
                                <h4 className='text-[#1D271F] text-[20px] md:text-2xl font-bold md:font-semibold'>{categoryInfo.categoryNameBn}</h4>
                                <span className='text-[#1D271F] text-[14px] md:text-[16px] font-noto font-medium'>{toBengaliNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</span>
                            </div>
                        </div>

                        {/* Sorting SEC */}
                        <div className='flex justify-between items-center mt-8 xl:mt-7 mx-4 xl:mx-0'>
                            <p className='text-[#1D271F] text-[14px] md:text-[16px]'>মোট {toBengaliNumber(data.length)}টি পণ্য দেখানো হচ্ছে</p>
                            <SortingBox />
                        </div>

                        <CategoryCards Products={Products} />

                    </div>
            }




        </div>
    );
};

export default CategoryDetailsPage;