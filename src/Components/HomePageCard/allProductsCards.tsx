import { AiOutlineMinus } from 'react-icons/ai';
import { toBengaliNumber, toBengaliUnit } from '../utils';
import { IoCaretDownSharp, IoCaretUpSharp } from 'react-icons/io5';

const AllProductsCards = async () => {

    interface iCardsProps {
        id: number;
        nameBn: string;
        unit: string;
        image: string;
        today: number;
        change: {
            dir: 'up' | 'down' | 'flat';
            pct: number;
        }
    }


    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', { next: { revalidate: 7200 } });
    const data = await res.json()

    const Products = data;

    return (
        <div className=' my-12 container mx-auto'>

            <div className='flex flex-col gap-1.5 ml-4'>
                <h3 className='text-[#1D271F] text-[18px] md:text-2xl font-bold'>সব পণ্য</h3>
                <p className='text-[#1D271F] text-[13px] md:text-[16px]'>মোট {toBengaliNumber(Products.length)}টি পণ্য দেখানো হচ্ছে</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 px-2 md:px-3 py-2 md:py-3'>
                {
                    Products.map((product: iCardsProps) => {
                        return (
                            <div key={product.id} className='px-3 py-2 border-2 bg-[#FAFCFA] border-[#E1E8E1] rounded-2xl cursor-pointer'>

                                <div>
                                    {/* image & product name & unit */}
                                    <div className='flex items-center gap-2 md:gap-3'>
                                        <span className='text-[28px] md:text-xl bg-[#F0F5F0] rounded-2xl w-12 h-12 flex items-center justify-center shrink-0'>{product.image}</span>
                                        <div className='flex flex-col gap-0.5'>
                                            <span className='text-[#1D271F] text-[14px] md:text-[16px] font-semibold'>{product.nameBn}</span>
                                            <span className='text-[#1D271F] text-[14px] md:text-[16px] font-noto font-semibold'>প্রতি {toBengaliUnit(product.unit)}</span>
                                        </div>
                                    </div>



                                    <div className='flex items-center justify-between mt-2 md:mt-3'>
                                        {/* price */}
                                        <div>
                                            <p className='text-[#1D271F] text-[14px] font-medium'>আজকের দাম</p>
                                            <p className='text-[#1D271F] text-[20px] font-noto font-bold'>{toBengaliNumber(product.today)} <span className='text-[#1D271F] text-[14px] md:text-[16px] font-semibold'>টাকা</span></p>
                                        </div>
                                        {/* how much raised  */}
                                        <span className={`${product.change.dir === 'up' ? 'bg-green-500/10 text-[#1A9951]' : product.change.dir === 'down' ? 'bg-red-500/10 text-[#DC2626]' : 'bg-[#F0F5F0] text-[#1D271F]'} flex items-center text-[14px] md:text-[15px] px-3 py-1.5 rounded-4xl font-medium`}>
                                            {product.change.dir === 'up' ? <IoCaretUpSharp /> : product.change.dir === 'down' ? <IoCaretDownSharp /> : <span className='font-noto text-[#1D271F] font-bold flex gap-0.5 items-center'><AiOutlineMinus  className='text-[14px] text-2xl md:text-2xl font-black' /> ০.</span>}
                                            <span className='font-noto font-bold'>{toBengaliNumber(Math.abs(product.change.pct))}%</span>
                                        </span>
                                    </div>



                                </div>


                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllProductsCards;