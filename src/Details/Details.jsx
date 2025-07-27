import React from 'react';

const Details = () => {
    return (
        <div className='mt-14 w-[80%] mx-auto bg-amber-50 p-6'>
            <div className='flex items-start gap-6'>
                <img className='w-[500px]' src="https://i.ibb.co/zXwgMGR/469485458-1113580023892362-4640270459255473691-n.jpg" alt="" />

                <div>
                    <h1 className='text-2xl'>Ledis Elegent Side bag</h1>
                    <div className='flex items-center gap-4 font-semibold text-xs mt-5 text-[#C27F30]'>
                        <p>Woman</p>
                        <p>Bags</p>
                    </div>
                    <p className='text-2xl font-semibold text-zinc-900'>$ 135.00</p>

                    <div className='mt-5'>
                        <span>Available Sizes</span>
                        <ul className='flex items-center gap-3 text-sm font-semibold mt-1'>
                            {
                                ['S', 'M', "L", 'XL', '2XL'].map(v => {
                                    return (
                                        <li className='px-3 py-2 bg-slate-50 border border-gray-500'>{v}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>


                    <div className='mt-5'>
                        <span>Available Colors</span>
                        <ul className='flex items-center gap-3 text-sm font-semibold mt-1'>
                            <li className={`w-11 rounded-lg h-8 hover:border border-amber-500 bg-amber-200`}></li>
                            <li className={`w-11 rounded-lg h-8 hover:border border-amber-500 bg-gray-400`}></li>
                            <li className={`w-11 rounded-lg h-8 hover:border border-amber-500 bg-zinc-800`}></li>
                            <li className={`w-11 rounded-lg h-8 hover:border border-amber-500 bg-cyan-200`}></li>
                            <li className={`w-11 rounded-lg h-8 hover:border border-amber-500 bg-sky-300`}></li>
                        </ul>
                    </div>



                    <div className='mt-5'>
                        <span>Description</span>
                        <p className='text-xs text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum quasi, enim, incidunt delectus laudantium veritatis possimus fugit ducimus quas, aut maxime! Fugit voluptatibus minima illum dolorem numquam a repellat eaque aliquid earum. Corrupti quam perspiciatis iure voluptate quibusdam illo maiores, porro, amet illum, impedit laudantium. Ratione eveniet esse ut!</p>
                    </div>


                    <button className='bg-[#C27F30] p-2 text-white mt-8'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;