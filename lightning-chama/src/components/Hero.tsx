import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="pt-32 pb-12 px-5 text-center bg-[linear-gradient(to_top_right,_#FFF7ED,_#058869)] rounded-b-3xl shadow-sm mb-8">
            <div className="max-w-4xl mx-auto mt-4">
                <div className="mb-3">
                    <div className="text-[22px] md:text-[40px] font-bold text-black mb-2 leading-tight">
                        <div>Empowering chamas to save,</div>
                        <div>grow & thrive</div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="text-[16px] text-[#6B7280] leading-relaxed">
                        Manage contributions, track savings,
                    </div>
                    <div className="text-[16px] text-[#6B7280] leading-relaxed">
                        and build financial growth together
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <div className="flex gap-4 flex-wrap justify-center items-center">
                        {/* Sign Up Button */}
                        <button className="px-8 py-3 bg-[#058869] text-white border-0 rounded-lg text-[16px] font-bold cursor-pointer hover:bg-[#047857] transition-colors">
                            Sign Up
                        </button>

                        {/* Login Button */}
                        <button className="px-8 py-3 bg-white text-[#058869] border border-[#058869] rounded-lg text-[16px] font-bold cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
                            Login
                        </button>
                    </div>

                    {/* Learn About Bitcoin Button */}
                    <button className="px-8 py-2.5 bg-[#FFF7ED] border-[1.5px] border-[#F7931A] text-[#F7931A] rounded-2xl text-[16px] font-medium cursor-pointer transition-colors hover:bg-white shadow-sm">
                        Learn About Bitcoin
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
