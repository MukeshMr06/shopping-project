import React from 'react'
import tshirt5 from './assets/tshirt5.svg'
import tshirt6 from './assets/tshirt6.svg'
import tshirt7 from './assets/tshirt7.svg'
import tshirt8 from './assets/tshirt8.svg'
import star from './assets/secondpageimg/star.svg'
import half from './assets/halfstar.svg'
import { useNavigate } from 'react-router-dom'


const Selling = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className='flex flex-col gap-7 mt-10'>
                <h2 className='font-bold text-5xl flex justify-center'>TOP SELLING</h2>

                <div className='flex  overflow-x-auto gap-8 mx-4 md:grid md:grid-cols-4 md:mx-16 mt-5 snap-x snap-mandatory scrollbar-hide'>

                    <div className='flex flex-col gap-2 min-w-[250px] md:w-[200px] snap-start'>
                        <img className='w-full   rounded-xl' src={tshirt5} alt="" onClick={()=> navigate('/productpage')} />
                        <p className='font-bold text-xl'>Vertical Striped Shirt</p>
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className='text-gray-400 font-normal text-sm'>4.0/5</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <p className='text-2xl font-bold'>$212</p>
                            <p className='text-[#00000066] text-2xl font-bold line-through'>$232</p>
                            <p className=' bg-[#FF33331A] rounded-full px-4 py-1 text-[#FF3333]'>-20%</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 min-w-[250px] md:w-[200px] snap-start'>
                        <img className='w-full   rounded-xl' src={tshirt6} alt="" onClick={()=> navigate('/productpage')} />
                        <p className='font-bold text-xl'>Courage-Graphic T-Shirt</p>
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={half} alt="" />
                            <p className='text-gray-400 font-normal text-sm'>3.5/5</p>
                        </div>
                        <p className='text-2xl font-bold'>$145</p>
                    </div>

                    <div className='flex flex-col gap-2 min-w-[250px] md:w-[200px] snap-start'>
                        <img className='w-full   rounded-xl' src={tshirt7} alt="" onClick={()=> navigate('/productpage')} />
                        <p className='font-bold text-xl'>Loose Fit Bermuda Shorts</p>
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className='text-gray-400 font-normal text-sm'>4.0/5</p>
                        </div>
                        <p className='text-2xl font-bold'>$80</p>
                    </div>

                    <div className='flex flex-col gap-2 min-w-[250px] md:w-[200px] snap-start'>
                        <img className='w-full   rounded-xl' src={tshirt8} alt="" onClick={()=> navigate('/productpage')} />
                        <p className='font-bold text-xl'>Faded Skinny Jeans</p>
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={half} alt="" />
                            <p className='text-gray-400 font-normal text-sm'>4.5/5</p>
                        </div>
                        <p className='text-2xl font-bold'>$130</p>
                    </div>

                </div>

                <div className='flex justify-center my-2'>
                    <button className=' border px-6 py-2 cursor-pointer rounded-full' onClick={() => navigate('/productpage')}>View All</button>
                </div>
            </div>
        </div>
    )
}

export default Selling