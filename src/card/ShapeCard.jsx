import React from 'react';

const ShapeCard = () => {
    return (
        <div className='mx-auto mt-12'>
            <div className="w-[250px] bg-[#f9f5f1] rounded-xl shadow">
                    <img
                        src="https://i.ibb.co/YTXbqvRx/download.jpg"
                        alt="Speed Dating"
                        fill
                    className="rounded-tl-[60%] hover:rounded-tl-[0%] rounded-br-[60%] duration-100 w-full"
                />
                
                <div className='text-center p-4'>
                    <h1 className='mt-2 text-xl'>Speed Dating Night</h1>

                    <ul className='mt-4 text-sm'>
                        <li className='flex gap-2'>C <p>july 5th 2025</p></li>
                        <li className='flex gap-2'>C <p>7.00AM - 8.45AM</p></li>
                        <li className='flex gap-2'>C <p>princess Street</p></li>
                        <li className='flex gap-2'>C <p>Central park Manhattan</p></li>
                        <li className='flex gap-2'>C <p>$25 VIP</p></li>
                    </ul>

                    <button className='w-[70%] py-2 bg-[#B1772D] text-white mt-6 rounded-md'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShapeCard;