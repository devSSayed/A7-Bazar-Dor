import Link from "next/link";

const notFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">

            <h1
                className="text-7xl sm:text-8xl font-black tracking-tight"
                style={{ color: '#D03739' }}
            >
                ৪০৪
            </h1>

            <h2
                className="mt-4 text-xl sm:text-2xl font-semibold"
                style={{ color: '#1D271F' }}
            >
                এই পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-md">
                আপনি যে পৃষ্ঠাটি খুঁজছেন তা মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।
            </p>

            <Link
                href="/"
                className="mt-6 px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-opacity hover:opacity-90 shadow-sm"
                style={{ backgroundColor: '#1D271F' }}
            >
                হোম পেজে ফিরে যান
            </Link>
        </div>
    );
};

export default notFound;