import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            {/* features */}
            <section>
                <div className=' space-y-3 py-7'>
                    <h1 className='text-2xl font-semibold'>Our Features</h1>
                    <p className='w-1/2 mx-auto text-lg'>
                        Our Features Our FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur Features.
                    </p>
                </div>
                <div className='py-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-24'>
                    <div className=' relative group'>
                        <div className='border-2 transition-all group-hover:bg-[#285BDB] absolute left-0 right-0 -top-16 bg-white w-20 h-20 flex justify-center items-center mx-auto rotate-45'>
                            <i className="fas fa-mobile-alt rotate-0 textColor group-hover:text-white text-xl"></i>
                        </div>
                        <div className='border border-gray-800 hover:border-[#285BDB] content py-12 px-4 space-y-2'>
                            <h2 className='text-xl font-semibold'>Latest Smart Phones</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                            </p>
                        </div>
                    </div>
                    <div className=' relative group'>
                        <div className='border-2 transition-all group-hover:bg-[#285BDB] absolute left-0 right-0 -top-16 bg-white w-20 h-20 flex justify-center items-center mx-auto rotate-45'>
                            <i className="fas fa-mobile-alt rotate-0 textColor group-hover:text-white text-xl"></i>
                        </div>
                        <div className='border border-gray-800 hover:border-[#285BDB] content py-12 px-4 space-y-2'>
                            <h2 className='text-xl font-semibold'>Latest Smart Phones</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                            </p>
                        </div>
                    </div>
                    <div className=' relative group'>
                        <div className='border-2 transition-all group-hover:bg-[#285BDB] absolute left-0 right-0 -top-16 bg-white w-20 h-20 flex justify-center items-center mx-auto rotate-45'>
                            <i className="fas fa-mobile-alt rotate-0 textColor group-hover:text-white text-xl"></i>
                        </div>
                        <div className='border border-gray-800 hover:border-[#285BDB] content py-12 px-4 space-y-2'>
                            <h2 className='text-xl font-semibold'>Latest Smart Phones</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end features */}

            {/* latest phones section */}
            <section>
                <div className=' space-y-3 py-7'>
                    <h1 className='text-2xl font-semibold'>Latest Phones</h1>
                    <p className='w-1/2 mx-auto text-lg'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    </p>
                </div>
            </section>
            {/* end latest phones section */}
        </div>
    );
};

export default Home;