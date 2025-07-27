import React from 'react';

const UserCard = () => {
    return (
        <div className='mt-12 grid grid-cols-4 gap-8 w-[90%] mx-auto'>
            {
                [1, 2, 34, 4].map(v => {
                    return (
                        <div key={v} className="bg-[#fceedd] h-[340px] rounded-xl shadow-lg py-7 px-5">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="https://i.ibb.co/DDwJDpB/image.jpg"
                                    alt="Mariam Star"
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-48"
                                />
                            </div>
                            <h2 className="mt-2 text-lg font-medium text-zinc-800">Mariam Star</h2>
                            <button className="mt-3 px-4 py-2 bg-[#B1772D] text-white rounded-md text-sm hover:bg-[#9d6523] transition">
                                View Profile
                            </button>
                        </div>
                    )
                })
            }
        </div>
        
    );
};

export default UserCard;