import React from 'react';

const PopularCategory = () => {
    return (
        <div className='py-16'>
            <h1 className='text-2xl font-semibold'>Popular Category</h1>
            <div className=' my-20 grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3'>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='bg-[#A8B1FF] p-12 rounded-md relative'>
                    <i className="fas fa-arrow-right absolute right-5 top-3"></i>
                        <img className='mx-auto' src="/public/img/Rectangle 24.png" alt="" srcset="" />
                        <p className='text-white font-semibold pt-4 text-xl'>Smart Phones</p>
                    </div>
                    <div className='bg-[#4E7EF8] p-10 rounded-md relative'>
                    <i className="fas fa-arrow-right absolute right-5 top-3"></i>
                        <img className='mx-auto' src="/public/img/Rectangle 25.png" alt="" srcset="" />
                        <p className='text-white font-semibold pt-4 text-xl'>Tablet</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='grid max-md:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3'>
                        <div className='bg-[#3F76FF] p-10 rounded-md relative'>
                        <i className="fas fa-arrow-right absolute right-5 top-3"></i>
                            <img className='mx-auto' src="/public/img/Rectangle 29.png" alt="" srcset="" />
                            <p className='text-white font-semibold pt-4 text-xl'>Buds</p>
                        </div>
                        <div className='bg-[#285BDB] p-10 rounded-md relative'>
                        <i className="fas fa-arrow-right absolute right-5 top-3"></i>
                            <img className='mx-auto' src="/public/img/Rectangle 28.png" alt="" srcset="" />
                            <p className='text-white font-semibold pt-4 text-xl'>Charger</p>
                        </div>
                    </div>
                    <div className='bg-[#CAD9FF] p-12 rounded-md relative'>
                    <i className="fas fa-arrow-right absolute right-5 top-5"></i>
                    <img className='mx-auto' src="/public/img/Rectangle 26.png" alt="" srcset="" />
                            <p className=' font-semibold pt-5 text-xl'>Popular Brands</p>
                    </div>
                </div>
                <div className='bg-[#6A8DE6] p-12 rounded-md relative'>
                <i className="fas fa-arrow-right absolute right-5 top-5"></i>
                    <img className='mx-auto' src="/public/img/Rectangle 27.png" alt="" srcset="" />
                            <p className='text-white font-semibold pt-12 text-xl'>Camera</p>
                    </div>
            </div>
        </div>
    );
};

export default PopularCategory;