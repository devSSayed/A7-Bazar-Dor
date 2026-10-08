import { IoCaretDownSharp, IoCaretUpSharp } from 'react-icons/io5';
import { toBengaliNumber, toBengaliUnit } from '@/Components/utils';

import Marquee from "react-fast-marquee";

const NavbarMarquee = async () => {

    interface iNavbarMarqueeProps {
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


    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', { cache: 'force-cache' });
    const data = await res.json()


    const changingProducts = data.filter((product: iNavbarMarqueeProps) => product.change.dir !== 'flat');

    return (
        <div>
            <Marquee direction="left" speed={150} className='bg-[#FAFCFA] border-b border-[#F0F5F0]'>


                {
                    changingProducts.map((product: iNavbarMarqueeProps) => {
                        const isUp = product.change.dir === 'up';

                        return (
                            <div key={product.id} className='flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 border-r border-[#D9D9D9]'>
                                {/* image */}
                                <span className='text-[15px] md:text-xl rounded-2xl'>{product.image}</span>
                                {/* product name */}
                                <span className='text-[#1D271F] text-[14px] md:text-[16px] font-semibold'>{product.nameBn}</span>
                                {/* price and unit */}
                                <span className='text-[#1D271F] text-[14px] md:text-[16px] font-noto font-semibold'>{toBengaliNumber(product.today)} টাকা/{toBengaliUnit(product.unit)}</span>
                                {/* Price up or down */}
                                <span className={`flex items-center text-[14px] md:text-[16px] font-medium ${isUp ? 'text-[#D03739]' : 'text-[#1A9951]'}`}>
                                    {isUp ? <IoCaretUpSharp className='text-[#D03739' /> : <IoCaretDownSharp className='text-[#1A9951]' />}
                                    <span className='font-noto font-bold'>{toBengaliNumber(Math.abs(product.change.pct))}%</span>
                                </span>
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    );
};

export default NavbarMarquee;