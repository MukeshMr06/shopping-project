import React,{useState} from 'react'
import Filter from './assets/thirdpageimg/filter.svg'
import arr from './assets/thirdpageimg/arr.svg'
import img1 from './assets/thirdpageimg/img1.svg'
import img2 from './assets/thirdpageimg/img2.svg'
import img3 from './assets/thirdpageimg/img3.svg'
import img4 from './assets/thirdpageimg/img4.svg'
import img5 from './assets/thirdpageimg/img5.svg'
import img6 from './assets/thirdpageimg/img6.svg'
import img7 from './assets/thirdpageimg/img7.svg'
import img8 from './assets/thirdpageimg/img8.svg'
import img9 from './assets/thirdpageimg/img9.svg'
import left from './assets/leftarrow.svg'
import right from './assets/rightarrow.svg'
import star from './assets/secondpageimg/star.svg'
import half from './assets/halfstar.svg'
import { useNavigate } from 'react-router-dom'


const Thirdpage = () => {
  const navigate = useNavigate()
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  return (
    <div className='mt-4 mx-2 md:mx-20 pb-20'>

      <div className='flex'>
        <h3 className='text-gray-400'>Home</h3>
        <img src={arr} alt="" />
        <h3>Casual</h3>
      </div>

      <div className='flex justify-between gap-6 mt-4'>

        <div className='hidden w-60 border border-[#0000001A] rounded-2xl p-4 md:block'>

          <div className='flex justify-between'>
            <h3 className='font-bold text-xl'>Filters</h3>
            <img className='w-6 h-6' src={Filter} alt="" />
          </div>
          <div className='border-b border-[#0000001A] mt-2'></div>

          {/* catagries */}
          <div className='mt-2 flex flex-col gap-2'>

            <div className='flex justify-between'>
              <h2 className=' font-normal'>T-shirts</h2>
              <img src={arr} alt="" />
            </div>

            <div className='flex justify-between'>
              <h2 className=' font-normal'>shorts</h2>
              <img src={arr} alt="" />
            </div>

            <div className='flex justify-between'>
              <h2 className='font-normal'>Shirts</h2>
              <img src={arr} alt="" />
            </div>


            <div className='flex justify-between'>
              <h2 className=' font-normal'>Hoodie</h2>
              <img src={arr} alt="" />
            </div>

            <div className='flex justify-between'>
              <h2 className=' font-normal'>Jeans</h2>
              <img src={arr} alt="" />
            </div>
          </div>

          <div className='border-b border-[#0000001A] mt-2'></div>

          {/* price */}

          <div>

            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-bold'>Price</h2>
              <img className='rotate-90' src={arr} alt="" />
            </div>
            <div>

            </div>
            <div className='border-b border-[#0000001A] mt-2'></div>

            <div className='flex justify-between'>
              <p className='font-bold text-2xl'>$20</p>
              <p className='font-bold text-2xl'>$200</p>
            </div>

            <div className='border-b border-[#0000001A] mt-2'></div>

          </div>

          {/* colors */}

          <div className='flex flex-col gap-3 mt-2'>

            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold'>Colors</h3>
              <img src={arr} alt="" />
            </div>

            <div className='grid grid-cols-5 gap-2'>
              <div className='w-10 h-10 rounded-full bg-green-600'></div>
              <div className='w-10 h-10 rounded-full bg-red-600'></div>
              <div className='w-10 h-10 rounded-full bg-yellow-600'></div>
              <div className='w-10 h-10 rounded-full bg-orange-600'></div>
              <div className='w-10 h-10 rounded-full bg-blue-600'></div>
              <div className='w-10 h-10 rounded-full bg-green-600'></div>
              <div className='w-10 h-10 rounded-full bg-violet-500'></div>
              <div className='w-10 h-10 rounded-full bg-rose-600'></div>
              <div className='w-10 h-10 rounded-full bg-pink-500'></div>
              <div className='w-10 h-10 rounded-full bg-black'></div>

            </div>

          </div>

          <div className='border-b border-[#0000001A] mt-2'></div>

          {/* size */}
          <div className='flex flex-col gap-3 mt-2'>
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold'>Size</h3>
              <img src={arr} alt="" />
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>XX-Small</p>
              <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>X-Small</p>
              <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>Small</p>
              <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'> Medium</p>
              <p className='bg-black text-sm font-normal text-white rounded-2xl p-2 text-center'>Large</p>
              <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>X-Large</p>
              <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>XX-Large</p>
              <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>3X-Large</p>
              <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>4X-Large</p>
            </div>

          </div>

          <div className='border-b border-[#0000001A] mt-2'></div>

          {/* Dress */}

          <div className='flex flex-col gap-3 mt-2'>

            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold'>Dress</h3>
              <img src={arr} alt="" />
            </div>

            <div className='flex flex-col gap-2'>

              <div className='flex justify-between'>
                <h2 className=' font-normal'>Casual</h2>
                <img src={arr} alt="" />
              </div>

              <div className='flex justify-between'>
                <h2 className=' font-normal'>Formal</h2>
                <img src={arr} alt="" />
              </div>

              <div className='flex justify-between'>
                <h2 className='font-normal'>Party</h2>
                <img src={arr} alt="" />
              </div>


              <div className='flex justify-between'>
                <h2 className=' font-normal'>Gym</h2>
                <img src={arr} alt="" />
              </div>

              <button className='bg-black text-white text-center px-2 py-1 rounded-2xl'>Apply Now</button>

            </div>
          </div>
        </div>


        {showMobileFilter && (
          <div className='fixed top-0 left-0 z-50 w-96 h-full bg-white border-r border-[#0000001A] rounded-r-2xl p-4 shadow-lg transition-transform duration-300 md:hidden'
            style={{ transform: showMobileFilter ? 'translateX(0)' : 'translateX(-100%)' }}>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='font-bold text-xl'>Filters</h3>
              <button onClick={() => setShowMobileFilter(false)} className='text-2xl font-bold cursor-pointer' aria-label='Close'>×</button>
            </div>
            <div className='border-b border-[#0000001A] mt-2'></div>
            {/* catagries */}
            <div className='mt-2 flex flex-col gap-2'>
              <div className='flex justify-between'>
                <h2 className=' font-normal'>T-shirts</h2>
                <img src={arr} alt="" />
              </div>
              <div className='flex justify-between'>
                <h2 className=' font-normal'>shorts</h2>
                <img src={arr} alt="" />
              </div>
              <div className='flex justify-between'>
                <h2 className='font-normal'>Shirts</h2>
                <img src={arr} alt="" />
              </div>
              <div className='flex justify-between'>
                <h2 className=' font-normal'>Hoodie</h2>
                <img src={arr} alt="" />
              </div>
              <div className='flex justify-between'>
                <h2 className=' font-normal'>Jeans</h2>
                <img src={arr} alt="" />
              </div>
            </div>
            <div className='border-b border-[#0000001A] mt-2'></div>
            {/* price */}
            <div>
              <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>Price</h2>
                <img className='rotate-90' src={arr} alt="" />
              </div>
              <div></div>
              <div className='border-b border-[#0000001A] mt-2'></div>
              <div className='flex justify-between'>
                <p className='font-bold text-2xl'>$20</p>
                <p className='font-bold text-2xl'>$200</p>
              </div>
              <div className='border-b border-[#0000001A] mt-2'></div>
            </div>
            {/* colors */}
            <div className='flex flex-col gap-3 mt-2'>
              <div className='flex justify-between items-center'>
                <h3 className='text-xl font-bold'>Colors</h3>
                <img src={arr} alt="" />
              </div>
              <div className='grid grid-cols-5 gap-2'>
                <div className='w-10 h-10 rounded-full bg-green-600'></div>
                <div className='w-10 h-10 rounded-full bg-red-600'></div>
                <div className='w-10 h-10 rounded-full bg-yellow-600'></div>
                <div className='w-10 h-10 rounded-full bg-orange-600'></div>
                <div className='w-10 h-10 rounded-full bg-blue-600'></div>
                <div className='w-10 h-10 rounded-full bg-green-600'></div>
                <div className='w-10 h-10 rounded-full bg-violet-500'></div>
                <div className='w-10 h-10 rounded-full bg-rose-600'></div>
                <div className='w-10 h-10 rounded-full bg-pink-500'></div>
                <div className='w-10 h-10 rounded-full bg-black'></div>
              </div>
            </div>
            <div className='border-b border-[#0000001A] mt-2'></div>
            {/* size */}
            <div className='flex flex-col gap-3 mt-2'>
              <div className='flex justify-between items-center'>
                <h3 className='text-xl font-bold'>Size</h3>
                <img src={arr} alt="" />
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>XX-Small</p>
                <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>X-Small</p>
                <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>Small</p>
                <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'> Medium</p>
                <p className='bg-black text-sm font-normal text-white rounded-2xl p-2 text-center'>Large</p>
                <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>X-Large</p>
                <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>XX-Large</p>
                <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>3X-Large</p>
                <p className='bg-[#F0F0F0] text-sm font-normal text-[#00000099] rounded-2xl p-2 text-center'>4X-Large</p>
              </div>
            </div>
            <div className='border-b border-[#0000001A] mt-2'></div>
            {/* Dress */}
            <div className='flex flex-col gap-3 mt-2'>
              <div className='flex justify-between items-center'>
                <h3 className='text-xl font-bold'>Dress</h3>
                <img src={arr} alt="" />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h2 className=' font-normal'>Casual</h2>
                  <img src={arr} alt="" />
                </div>
                <div className='flex justify-between'>
                  <h2 className=' font-normal'>Formal</h2>
                  <img src={arr} alt="" />
                </div>
                <div className='flex justify-between'>
                  <h2 className='font-normal'>Party</h2>
                  <img src={arr} alt="" />
                </div>
                <div className='flex justify-between'>
                  <h2 className=' font-normal'>Gym</h2>
                  <img src={arr} alt="" />
                </div>
                <button className='bg-black text-white text-center p-1 rounded-2xl'>Apply Now</button>
              </div>
            </div>
          </div>
        )}

        <div className='flex-1'>

          <div className='flex justify-between'>
            <h2 className='text-3xl font-bold'>Casual</h2>
            <div className='flex items-center gap-2 '>
              <p className='text-gray-400 font-normal text-sm'>Showing 1-10 of 100 Products</p>
              <p className='font-normal text-sm hidden md:block'>Sort by : <span className='font-medium'>Most Popular</span></p>
              <img className='rotate-90 hidden md:block' src={arr} alt="" />
              {/* Mobile filter icon triggers sidebar */}
              <img className='block md:hidden cursor-pointer' src={Filter} alt="" onClick={() => setShowMobileFilter(true)} />
            </div>
          </div>

          <div className='mt-3'>

            <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>

              <div className='flex flex-col gap-1 p-2 md:p-4'>
                <img className='w-64 h-64' src={img1} alt="" onClick={() => navigate('/cartpage')} />
                <p className='font-bold text-sm md:text-xl'>Gradient Graphic T-shirt</p>

                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={half} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>3.5/5</p>
                </div>

                <p className='font-bold text-2xl'>$145</p>
              </div>

              <div className='flex flex-col gap-1 p-2 md:p-4'>
                <img className='w-64 h-64' src={img2} alt="" onClick={() => navigate('/cartpage')}/>
                <p className='font-bold text-sm md:text-xl'>Polo with Tipping Details</p>
                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>4.0/5</p>
                </div>
                <p className='font-bold text-2xl'>$180</p>
              </div>

              <div className='flex flex-col gap-1 p-2 md:p-4'>
                <img className='w-64 h-64' src={img3} alt="" onClick={() => navigate('/cartpage')}/>
                <p className='font-bold text-sm md:text-xl'>Black Striped T-shirt</p>
                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={half} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>4.5/5</p>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-bold text-2xl'>$120</p>
                  <h3 className='text-2xl text-[#00000066] line-through'>$150</h3>
                  <p className='bg-[#FF33331A] p-1 w-fit font-medium rounded-2xl text-red-500'>-20%</p>
                </div>
              </div>

              <div className='flex flex-col gap-1 p-2 md:p-4'>
                <img className='w-64 h-64' src={img4} alt="" onClick={() => navigate('/cartpage')}/>
                <p className='font-bold text-sm md:text-xl'>Skinny Fit Jeans</p>
                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>4.0/5</p>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-bold text-2xl'>$240</p>
                  <h3 className='text-2xl text-[#00000066] line-through'>$260</h3>
                  <p className='bg-[#FF33331A] p-1 w-fit font-medium rounded-2xl text-red-500'>-20%</p>
                </div>
              </div>

              <div className='flex flex-col gap-1 p-2 md:p-4'>
                <img className='w-64 h-64' src={img5} alt="" onClick={() => navigate('/cartpage')}/>
                <p className='font-bold text-sm md:text-xl'>Checkered Shirt</p>
                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={half} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>4.5/5</p>
                </div>
                <p className='font-bold text-2xl'>$180</p>
              </div>

              <div className='flex flex-col gap-1 p-2 md:p-4'>
                <img className='w-64 h-64' src={img6} alt="" onClick={() => navigate('/cartpage')}/>
                <p className='font-bold text-sm md:text-xl'>Sleeve Striped T-shirt</p>
                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>5.0/5</p>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-bold text-2xl'>$130</p>
                  <h3 className='text-2xl text-[#00000066] line-through'>$160</h3>
                  <p className='bg-[#FF33331A] p-1 w-fit font-medium rounded-2xl text-red-500'>-20%</p>
                </div>
              </div>

              <div className='flex flex-col gap-1 p-2 md:p-4'>
                <img className='w-64 h-64' src={img7} alt="" onClick={() => navigate('/cartpage')}/>
                <p className='font-bold text-sm md:text-xl'>Vertical Striped Shirt</p>
                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={half} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>3.5/5</p>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-bold text-2xl'>$212</p>
                  <h3 className='text-2xl text-[#00000066] line-through'>$232</h3>
                  <p className='bg-[#FF33331A] p-1 w-fit font-medium rounded-2xl text-red-500'>-20%</p>
                </div>
              </div>

              <div className='flex flex-col gap-1 p-2  md:p-4'>
                <img className='w-64 h-64' src={img8} alt="" onClick={() => navigate('/cartpage')}/>
                <p className='font-bold text-sm md:text-xl'>Courage Graphic T-shirt</p>
                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>4.0/5</p>
                </div>
                <p className='font-bold text-2xl'>$145</p>
              </div>

              <div className='flex flex-col gap-1 p-2 md:p-4'>
                <img className='w-64 h-64' src={img9} alt=""  onClick={() => navigate('/cartpage')}/>
                <p className='font-bold text-sm md:text-xl'>Loose Fit Bermuda Shorts</p>
                <div className='flex gap-1.5 items-center'>
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={star} alt="" />
                  <img  src={half} alt="" />
                  <p className='text-gray-400 font-normal text-sm'>4.5/5</p>
                </div>
                <p className='font-bold text-2xl'>$80</p>
              </div>

            </div>
            <div className='border-b border-[#0000001A] mt-2'></div>

            {/* previous section */}

            <div className='mt-4 flex justify-between items-center'>

              <div className='flex items-center gap-2 border  p-2 rounded-md'>
                <img className='w-5 h-5' src={left} alt="" />
                <p className='font-medium text-sm cursor-pointer'>Previous</p>
              </div>

              <div className='flex gap-8 items-center'>
                <p className='bg-[#F0F0F0] rounded-sm px-3 py-1 cursor-pointer'>1</p>
                <p>2</p>
                <p className='hidden md:block'>3</p>
                <p>...</p>
                <p className='hidden md:block'>8</p>
                <p>9</p>
                <p>10</p>
              </div>

              <div className='flex items-center gap-2 border  p-2 rounded-md'>
                <img className='w-5 h-5' src={right} alt="" />
                <p className='font-medium text-sm cursor-pointer'>Next</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Thirdpage