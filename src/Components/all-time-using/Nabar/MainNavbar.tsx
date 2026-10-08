import Image from 'next/image';
import CartImage from '@/assetes/Cart-logo.png';
import NavbarDate from './NavbarDate';
import Link from 'next/link';



const Navbar = () => {
  

    return (
        <nav className="bg-[#FAFCFA] border-b border-[#E1E8E1] w-full">
            <div className="w-full container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={CartImage} alt="logo" width={50} height={50} className="w-10 h-10 md:w-12.5 md:h-12.5"/>
                    <div className="flex flex-col">
                        <h3 className='text-[#1D271F] text-2xl md:text-3xl font-bold'>বাজার দর</h3>
                        <NavbarDate />
                    </div>

                </Link>
                <div className="flex items-center gap-1 md:gap-3 shrink-0">
                    <button className='btn hover:bg-gray-200 active:bg-gray-300 rounded-[10px] md:py-6 md:text-[17px] bg-[#FAFCFA] border-none '>সাইন ইন</button>
                    <button className='btn rounded-[10px] md:py-6 md:text-[17px] bg-[#05893E] active:bg-[#047F39] border border-[#047F39] text-[#F3FBF4] shadow-[0_5px_7px_-1px_rgba(0,138,61,0.9)]'>সাইন আপ</button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;