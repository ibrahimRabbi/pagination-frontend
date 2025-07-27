import React from 'react';

export default function VIPPricingCard() {
    const features = [
        'Lorem Ipsum',
        'Lorem Ipsum',
        'Lorem Ipsum',
        'Lorem Ipsum',
        'Lorem Ipsum',
        'Lorem Ipsum',
        'Lorem Ipsum',
        'Lorem Ipsum'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex gap-10 items-center justify-center p-8">
            {
                [1, 2, 3].map(v => {
                    return (
                        <div key={v} className="bg-[#F9F2EA] hover:scale-105 duration-150 hover:bg-gradient-to-br  from-amber-100 to-amber-200 rounded-2xl p-8 w-80 shadow-2xl">
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-amber-900 mb-3 tracking-wide">VIP</h2>
                                    <div className="text-5xl font-extrabold text-amber-800 mb-1">
                                        <span className="text-2xl align-top">£</span>153
                                    </div>
                                    <p className="text-sm text-amber-700 font-medium">User / Month</p>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3 mb-8">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="w-5 h-5 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mr-3 shadow-inner">
                                                <svg className="w-3 h-3 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-amber-800 text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide uppercase">
                                    Choose Plan
                                </button>
                            </div>
                    )
                })
            }
      </div>
    );
}