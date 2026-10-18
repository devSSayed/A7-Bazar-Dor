"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";



const SignInPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

        // 1. Check if email is empty
        if (!email.trim()) {
            setErrorMessage("অনুগ্রহ করে আপনার ইমেইল দিন।");
            return;
        }

        // 2. Is password at least 8 characters long
        if (password.length < 8) {
            setErrorMessage("পাসওয়ার্ড অন্তত ৮ অক্ষরের হতে হবে।");
            return;
        }

        // NO errors if validation passes
        setErrorMessage("");


        const formData = new FormData(e.target)

        Object.fromEntries(formData.entries()) as { email: string, password: string }

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
        })

        if (data) {
            toast.success("সাইন ইন সফল হয়েছে!")
        }

        if (error) {
            toast.error("একটি সমস্যা হয়েছে, আবার চেষ্টা করুন!");
        }

    };


    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github"
        });
    };

    return (
        <div className="flex flex-col justify-center font-hind items-center px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1D271F] mb-2">
                    সাইন ইন
                </h1>
                <p className="text-[#1D271F]/70 text-sm md:text-base">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>

            {/* Main Card */}
            <div className="bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl w-full max-w-md p-6 md:p-8 shadow-sm">

                {/* Error Alert Box */}
                {errorMessage && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Email Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#1D271F] font-bold text-sm">
                            ইমেইল
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-[#E1E8E1] bg-[#FAFCFA] text-[#1D271F] placeholder:text-[#1D271F]/40 focus:outline-none focus:border-[#05893E] text-sm"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#1D271F] font-bold text-sm">
                            পাসওয়ার্ড
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            className="w-full px-4 py-2.5 rounded-lg border border-[#E1E8E1] bg-[#FAFCFA] text-[#1D271F] placeholder:text-[#1D271F]/40 focus:outline-none focus:border-[#05893E] text-sm font-noto"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 py-3 px-4 rounded-xl bg-[#05893E] border border-[#047F39] text-white font-bold text-base hover:bg-[#047736] transition-colors shadow-sm cursor-pointer"
                    >
                        সাইন ইন
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-6 flex items-center justify-center">
                    <div className="border-t border-[#E1E8E1] w-full"></div>
                    <span className="bg-[#FAFCFA] px-3 text-[#1D271F]/60 text-xs font-medium absolute">
                        অথবা
                    </span>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E1E8E1] bg-white text-[#1D271F] text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <FcGoogle className="text-lg shrink-0" />
                        <span>Google দিয়ে চালিয়ে যান</span>
                    </button>

                    <button
                        onClick={handleGithubSignIn}
                        type="button"
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E1E8E1] bg-white text-[#1D271F] text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <FaGithub className="text-lg shrink-0 text-[#1D271F]" />
                        <span>GitHub দিয়ে চালিয়ে যান</span>
                    </button>
                </div>

                {/* go to Sign Up */}
                <div className="text-center mt-6 text-sm text-[#1D271F]">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link
                        href="/signup"
                        className="text-[#05893E] font-bold hover:underline"
                    >
                        সাইন আপ করুন
                    </Link>
                </div>
            </div>

            {/* go to Home Link */}
            <Link
                href="/"
                className="mt-6 text-[#1D271F]/60 text-sm hover:text-[#1D271F] transition-colors flex items-center gap-1"
            >
                ← হোম পেজে ফিরে যান
            </Link>
        </div>
    );
};

export default SignInPage;