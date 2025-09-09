import React from 'react'
import Right from './assets/rightarrow.svg'
import Left from './assets/leftarrow.svg'
import Tick from './assets/tick.svg'
import star from './assets/secondpageimg/star.svg'
import half from './assets/halfstar.svg'


const Customer = () => {
    return (
        <div className='mt-20 flex flex-col gap-5 mx-3 md:mx-16'>
            <div className='mx-4 items-end flex justify-between '>
                <p className='font-bold text-xl md:text-5xl'>OUR HAPPY CUSTOMERS</p>
                <div className='flex gap-1'>
                    <img className='w-6 h-6' src={Left} alt="" />
                    <img className='w-6 h-6' src={Right} alt="" />
                </div>
            </div>

            {/* Review section */}
            <div className='flex overflow-x-auto space-x-4 p-2 scrollbar-hide'>

                <div className='w-[360px] flex-shrink-0 border px-7 py-7 m-2 flex flex-col gap-1 rounded-xl md:w-[450px]'>
                    <div className='flex gap-1.5 items-center'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>Mukesh MR</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>

                <div className='w-[360px] flex-shrink-0 border px-7 py-7 m-2 flex flex-col gap-1 rounded-xl md:w-[450px]'>
                    <div className='flex gap-1.5 items-center'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>James S</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.
                        The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                </div>

                <div className='w-[360px] flex-shrink-0 border px-7 py-7 m-2 flex flex-col gap-1 rounded-xl md:w-[450px]'>
                    <div className='flex gap-1.5 items-center'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={half} alt="" />
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>Alex A</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.
                         The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                </div>

                <div className='w-[360px] flex-shrink-0 border px-7 py-7 m-2 flex flex-col gap-1 rounded-xl md:w-[450px]'>
                    <div className='flex gap-1.5 items-center'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>Roshan M</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.
                         The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                </div>

                <div className='w-[360px] border flex-shrink-0 px-7 py-7 m-2 flex flex-col gap-1 rounded-xl md:w-[450px]'>
                    <div className='flex gap-1.5 items-center'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={half} alt="" />
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>Sarathi H</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co. 
                        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>

            </div>

        </div>
    )
}

export default Customer