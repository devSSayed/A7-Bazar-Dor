import Image from 'next/image';
import CartImage from '@/assetes/Cart-logo.png';
import NavbarDate from './NavbarDate';
import Link from 'next/link';
import UserInfo from './UserInfo';



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
                
                <UserInfo />
            </div>

        </nav>
    );
};

export default Navbar;