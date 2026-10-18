"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { BiLogOut } from "react-icons/bi";


const ProfilePage = () => {

    const { data: session, } = authClient.useSession()
    const user = session?.user



    const getFirstInitial = (name?: string | null) => {
        return name?.trim() ? name.trim().charAt(0).toUpperCase() : "?";
    };


    const handleSignOut = async () => {
        await authClient.signOut();

        redirect("/");
    };

    const handleUpdateName = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const { name } = Object.fromEntries(formData.entries()) as { name: string, image: string }


        if (!name.trim()) {
            toast.error("অনুগ্রহ করে একটি নাম লিখুন");
            return;
        }

        try {
            await authClient.updateUser({
                name: name.trim(),
            });
            toast.success("নাম সফলভাবে আপডেট হয়েছে!");
        } catch {
            toast.error("আপডেট করতে সমস্যা হয়েছে, আবার চেষ্টা করুন!");
        }

    };



    return (
        <div className='container mx-auto mt-12'>
            <div className='mx-5 md:mx-32 flex flex-col gap-10'>


                <div>
                    <h1 className='text-[#1D271F] text-2xl font-bold'>আমার প্রোফাইল</h1>
                    <p className='text-[#1D271F]/60 text-[15px] font-medium'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                </div>

                <div className='bg-[#FAFCFA] border border-[#E1E8E1] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <div className='flex items-center gap-4'>

                        <div className='w-14 h-14 rounded-xl bg-[#05893E] text-white text-2xl font-bold flex items-center justify-center shrink-0 shadow-sm'>
                            {getFirstInitial(user?.name)}
                        </div>


                        <div className='flex flex-col justify-center'>
                            <h2 className='text-[#1D271F] text-xl font-bold leading-tight'>
                                {user?.name}
                            </h2>
                            <p className='text-[#1D271F]/60 text-sm font-medium mt-0.5'>
                                {user?.email}
                            </p>
                        </div>
                    </div>


                    <button
                        onClick={handleSignOut}
                        className='flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#D03739] text-[#D03739] cursor-pointer hover:bg-red-50 active:bg-[#D03739]/50 transition-colors text-sm font-semibold shrink-0'
                    >
                        <BiLogOut className="w-4 h-4" />
                        <span>সাইন আউট</span>
                    </button>
                </div>


                <div className="bg-[#FAFCFA] border border-[#E1E8E1] rounded-2xl p-6 sm:p-8">
                    <h2 className="text-[#1D271F] text-xl font-bold mb-6">তথ্য</h2>

                    <form onSubmit={handleUpdateName} className="flex flex-col gap-4">
                        {/* Email Field */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#1D271F] font-bold text-sm">
                                নাম
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="আপনার নাম লিখুন"
                                className="w-full px-4 py-2.5 rounded-lg border border-[#E1E8E1] bg-[#FAFCFA] text-[#1D271F] placeholder:text-[#1D271F]/40 focus:outline-none focus:border-[#05893E] text-sm"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-2 py-3 px-4 rounded-xl bg-[#05893E] border border-[#047F39] text-white font-bold text-base hover:bg-[#047736] transition-colors shadow-sm cursor-pointer"
                        >
                            আপডেট
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;