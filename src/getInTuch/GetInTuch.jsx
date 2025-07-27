import cupleImg from '../assets/cuple.jpg'

const GetInTuch = () => {
    return (
        <section className='bg-amber-50 grid grid-cols-2 w-[90%] h-[450px] rounded-2xl mx-auto mt-12'>
            <div className='w-[50%] mx-auto mt-14'>
                <h1 className='text-3xl font-semibold text-center'>Get In <span className='text-[#C27F30]'>Tuch With Us</span></h1>

                <form className='flex flex-col gap-4 mt-8' action="">
                    <input className='border p-1 border-gray-400 rounded-lg' type="text" placeholder='name' />
                    <input className='border p-1 border-gray-400 rounded-lg' type="text" placeholder='Email' />
                    <input className='border p-1 border-gray-400 rounded-lg' type="text" placeholder='Phone' />
                    <button className='border p-1 border-gray-400 bg-[#C27F30] text-white rounded-lg' type='submit'>Submit</button>
                </form>

                <div className='text-xs flex items-start gap-7 mt-8'>
                    <div className='flex items-center gap-3'>
                        C
                        <div className=''>
                            <p>Phone</p>
                            <p className='text-[#C27F30]'>01986711517</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        C
                        <div className=''>
                            <p>Email</p>
                            <p className='text-[#C27F30]'>info@cant.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img src={cupleImg} alt="" width={500} height={700} className='w-full h-full rounded-r-2xl' />
            </div>
        </section>
    );
};

export default GetInTuch;