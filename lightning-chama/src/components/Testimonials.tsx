import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Alice",
            stars: 5,
            text: "Chama has changed the way I save",
            avatarColor: "bg-purple-100", // Placeholder for avatar
            initial: "A"
        },
        {
            name: "Bob",
            stars: 5,
            text: "I love the community aspect of the platform",
            avatarColor: "bg-blue-100", // Placeholder for avatar
            initial: "B"
        }
    ];

    return (
        <section className="py-20 px-6 bg-[#F9FAFB]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 text-center mb-12">
                    What Our User Says
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center flex-shrink-0`}>
                                    <span className="text-lg font-bold text-gray-600">{testimonial.initial}</span>
                                </div>

                                {/* Name and Stars */}
                                <div className="flex flex-col flex-1">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="font-bold text-gray-900">{testimonial.name}</span>
                                        <div className="flex items-center gap-0.5">
                                            {[...Array(testimonial.stars)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 text-[#F7931A]" /* Warm Gold */
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-[#6B7280] leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
