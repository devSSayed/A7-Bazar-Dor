import BannerImgae from '@/assetes/bazar-hero.png';
import BannerDate from '@/Components/BannerDate';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="mx-3.5">

      <div className='container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center 
      md:gap-0 px-4 md:px-0 py-5 md:py-5 bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl mt-7'>

        <div className="px-6 flex flex-col gap-3 md:gap-8 w-full md:w-1/2">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-3 md:gap-5">
            <BannerDate />
            <h2 className='font-bold text-4xl text-center md:text-start md:text-5xl'>আজকের বাজারের <br className="md:hidden" /> দাম এক নজরে</h2>
          </div>
          <p className="text-[#1D271F] text-center md:text-start text-[14px] md:text-[17px]">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, <br className='hidden xl:block'/> সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
          <button className='btn md:w-fit rounded-[10px] md:py-6 md:px-8 md:text-[17px] bg-[#05893E] active:bg-[#047F39] border border-[#047F39] text-[#F3FBF4] shadow-[0_5px_7px_-1px_rgba(0,138,61,0.9)]'>সব পণ্য দেখুন</button>
        </div>
        <Image src={BannerImgae} alt="banner" width={380} height={380} />
      </div>

    </div>
  );
}
