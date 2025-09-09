import tshirt1 from './assets/tshirt1.svg'
import tshirt2 from './assets/tshirt2.svg'
import tshirt3 from './assets/tshirt3.svg'
import tshirt4 from './assets/tshirt4.svg'
import star from './assets/secondpageimg/star.svg'
import half from './assets/halfstar.svg'
import { useNavigate } from 'react-router-dom'



const Newarrival = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex flex-col gap-7 mt-10'>
                <h2 className='font-bold text-5xl flex justify-center'>NEW ARRIVALS</h2>

                <div className='flex  overflow-x-auto gap-8 mx-4 md:grid md:grid-cols-4 md:mx-16 mt-5 snap-x snap-mandatory scrollbar-hide'>

                    <div className="flex flex-col gap-2 min-w-[250px] md:w-[200px] snap-start">
                        <img className='w-full rounded-xl' src={tshirt1} alt="" onClick={()=> navigate('/productpage')} />
                        <p className='font-bold text-xl'>T-SHIRT WITH TAPE DETAILS</p>
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className='text-gray-400 font-normal text-sm'>5.0/5</p>
                        </div>
                        <p className='text-2xl font-bold'>$120</p>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[250px] md:w-[200px] snap-start">
                        <img className='w-full  object-cover rounded-xl' src={tshirt2} alt="" onClick={()=> navigate('/productpage')} />
                        <p className='font-bold text-xl'>SKINNY FIT JEANS</p>
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className='text-gray-400 font-normal text-sm'>4.0/5</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <p className=' font-bold text-2xl'>$240</p>
                            <p className='text-[#00000066] font-medium text-2xl line-through'>$260</p>
                            <p className=' bg-[#FF33331A] rounded-full px-4 py-1 text-[#FF3333] '>-20%</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[250px] md:w-[200px] snap-start">
                        <img className='w-full  object-cover rounded-xl' src={tshirt3} alt="" onClick={()=> navigate('/productpage')} />
                        <p className='font-bold text-xl'>CHECKERED SHIRT</p>
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className='text-gray-400 font-normal text-sm'>3.0/5</p>
                        </div>
                        <p className='text-2xl font-bold'>$180</p>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[250px] md:w-[200px] snap-start">
                        <img className='w-full  object-cover rounded-xl' src={tshirt4} alt="" onClick={()=> navigate('/productpage')} />
                        <p className='font-bold text-xl'>SLEEVE STRIPED T-SHIRT</p>
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={half} alt="" />
                            <p className='text-gray-400 font-normal text-sm'>4.5/5</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <p className='text-2xl font-bold'>$130</p>
                            <p className='text-[#00000066] font-medium text-2xl line-through'>$260</p>
                            <p className=' bg-[#FF33331A] rounded-full px-6 py-1 text-[#FF3333]'>-30%</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center my-2'>
                    <button className=' border px-6 py-2 cursor-pointer rounded-full' onClick={() => navigate('/productpage')}>View All</button>
                </div>

                <div className='border-b border-[#0000001A] w-full'></div>
            </div>
        </div>
    )
}

export default Newarrival