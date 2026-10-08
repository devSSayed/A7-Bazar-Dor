import BannerImgae from '@/assetes/bazar-hero 1.png';
import BannerDate from '@/Components/Banner/BannerDate';
import Image from 'next/image';
import BannerButton from './BannerButton';


const Banner = () => {
    return (
        <div className="mx-3.5">

            <div className='container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center 
             md:gap-0 px-4 md:px-0 py-5 md:py-5 bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl mt-7'>

                <div className="px-6 flex flex-col gap-3 md:gap-8 w-full md:w-1/2">
                    <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-3 md:gap-5">
                        <BannerDate />
                        <h2 className='font-bold text-4xl text-center md:text-start md:text-5xl'>আজকের বাজারের <br className="md:hidden" /> দাম এক নজরে</h2>
                    </div>
                    <p className="text-[#1D271F] text-center md:text-start text-[14px] md:text-[17px]">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, <br className='hidden xl:block' /> সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <BannerButton />
                </div>
                <Image src={BannerImgae} alt="banner" width={380} height={380} />
            </div>

        </div>
    );
};

export default Banner;
