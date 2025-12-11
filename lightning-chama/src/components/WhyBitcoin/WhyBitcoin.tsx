import React from 'react';

const WhyBitcoin = () => {
    const benefits = [
        "No hidden fees or charges",
        "Complete transaction transparency",
        "Instant global settlements",
    ];

    return (
        <section id="why-bitcoin" className="py-16 bg-[#F9FAFB]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">

                    {/* Centered Bitcoin Icon */}
                    <div className="flex justify-center mb-3">
                        <div className="w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center">
                            <img
                                src="/currency-bitcoin.svg"
                                alt="Bitcoin"
                                className="w-8 h-8"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Why Bitcoin for Chamas?
                    </h2>

                    <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
                        Bitcoin isn't just digital money. It's a transparent, secure way to manage group finances.
                    </p>

                    {/* Bullet Points List */}
                    <div className="flex flex-col gap-1 max-w-2xl mx-auto text-left">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    {/* Bitcoin Icon as Bullet */}
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FFF7ED] shadow-sm">
                                        <img
                                            src="/Icon.svg"
                                            alt="Tick"
                                            className="w-5 h-5"
                                        />
                                    </div>
                                </div>
                                <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyBitcoin;
