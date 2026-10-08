import { toBengaliNumber, toBengaliUnit } from '../utils';
import { IoCaretUpSharp } from 'react-icons/io5';

const MoneyRaisedCards = async () => {

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

    const raisedMoneyCards = data.filter((product: iCardsProps) => product.change.dir === 'up');

    const CardsPctHighToLow = raisedMoneyCards.sort((a: iCardsProps, b: iCardsProps) => b.change.pct - a.change.pct);


    return (
        <div className=' my-12 container mx-auto space-y-5'>
            <span className='flex items-center justify-center xl:justify-start xl:items-start'>
                <h3 className='flex items-center gap-2 text-[#1D271F] text-[19px] md:text-2xl font-bold'><IoCaretUpSharp className='text-[#D03739]' /> আজ দাম বেড়েছে</h3>
            </span>


            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 px-3.5 xl:px-0 py-2 md:py-0'>
                {
                    CardsPctHighToLow.slice(0, 6).map((product: iCardsProps) => {
                        return (
                            <div key={product.id} className='px-3 py-5 border-2 bg-[#FAFCFA] border-[#E1E8E1] rounded-2xl cursor-pointer  active:border-[#05893E]/60 transition-all will-change-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg'>

                                <div className='flex flex-col justify-between gap-3.5'>
                                    {/* image & product name & unit */}
                                    <div className='flex items-center gap-2 md:gap-3'>
                                        <span className='text-[28px] md:text-xl bg-[#F0F5F0] rounded-2xl w-12 h-12 flex items-center justify-center shrink-0 emoji-icon'>{product.image}</span>
                                        <div className='flex flex-col gap-0.5'>
                                            <span className='text-[#1D271F] text-[16px] md:text-[18px] font-bold md:font-semibold'>{product.nameBn}</span>
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
                                        <span className={`flex items-center text-[14px] md:text-[15px] px-3 py-1.5 rounded-4xl bg-red-500/10 font-medium text-[#D03739]`}>
                                            <IoCaretUpSharp />
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

export default MoneyRaisedCards;