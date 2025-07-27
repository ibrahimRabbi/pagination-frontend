import React from 'react';

const ProductCard = () => {
    return (
        <div className='mt-12 grid grid-cols-4 gap-8 w-[90%] mx-auto'>
            {
                [1, 2, 34, 4].map(v => {
                    return (
                        <div key={v} className="bg-[#fceedd] h-[365px] rounded-xl shadow-lg py-7 px-5">
                            <div className="rounded-xl overflow-hidden relative">
                                <img
                                    src="https://i.ibb.co/DDwJDpB/image.jpg"
                                    alt="Mariam Star"
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-48"
                                />
                                <div className='absolute right-3 top-4 bg-white p-2 rounded-full'>Love</div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h2 className="mt-2 text-lg font-medium text-zinc-800">Red Tulip</h2>
                                <p>4.5 *</p>
                            </div>
                            <p className='text-sm mt-1'>Lorem ipsum dolor adipisicing elit.</p>
                            <div className='flex justify-between items-center mt-2'>
                                <h1 className='text-[22px]'>$ 120.00</h1>
                                <button className="mt-3 px-3 py-1.5 bg-[#B1772D] text-white rounded-md text-sm hover:bg-[#9d6523] transition">
                                   Buy Now
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    );
};

export default ProductCard;