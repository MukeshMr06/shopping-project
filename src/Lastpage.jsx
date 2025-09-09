import React from 'react'
import img1 from './assets/lastpageimg/img1.svg'
import img2 from './assets/lastpageimg/img2.svg'
import img3 from './assets/lastpageimg/img3.svg'
import Del from './assets/lastpageimg/delete.svg'
import clip from './assets/lastpageimg/clip.svg'
import arrow from './assets/lastpageimg/arrow.svg'
import arr from './assets/secondpageimg/arr.svg'
import { useNavigate } from 'react-router-dom'



const Lastpage = () => {

  const navigate = useNavigate()

  return (
    <div className="mx-2 md:mx-20" >

      <div className='flex flex-col gap-5'>

        <div className='flex gap-1'>
          <h3 className='text-gray-400'>Home</h3>
          <img src={arr} alt="" />
          <h3>cart</h3>
        </div>

        <h2 className="font-extrabold text-4xl">YOUR CART</h2>

        {/* Cart Item */}
        <div className='flex flex-col gap-10 w-full md:flex-row'>

          <div className="border border-[#0000001A] p-4 rounded-xl w-full">

            <div className='flex flex-col gap-3'>

              <div className="flex items-start justify-between gap-4">

                {/* Left image*/}
                <div className="flex items-start gap-4">
                  <img src={img1} alt="" className="w-32 h-auto" />
                  <div>
                    <p className="font-bold text-xl">Gradient Graphic T-shirt</p>
                    <p>Size: <span className="text-[#00000099]">Large</span></p>
                    <p>Color: <span className="text-[#00000099]">White</span></p>
                    <p className="font-bold text-2xl">$145</p>
                  </div>
                </div>

                {/* Right image */}
                <div className="flex flex-col items-center gap-2">
                  <img src={Del} alt="Delete" className="w-5 h-5 cursor-pointer" />
                  <div className="bg-[#F0F0F0] gap-2 flex rounded-full px-6 py-2 mt-16 md:mt-10">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                </div>
              </div>

              <div className='border-b border-[#0000001A] w-full mt-2'></div>


              <div className="flex items-start justify-between gap-4">

                {/* Left image*/}
                <div className="flex items-start gap-4">
                  <img src={img2} alt="" className="w-32 h-auto" />
                  <div>
                    <p className="font-bold text-xl">Checked Shirt</p>
                    <p>Size: <span className="text-[#00000099]">Medium</span></p>
                    <p>Color: <span className="text-[#00000099]">Red</span></p>
                    <p className="font-bold text-2xl">$180</p>
                  </div>
                </div>

                {/* Right image*/}
                <div className="flex flex-col items-center gap-2">
                  <img src={Del} alt="Delete" className="w-5 h-5 cursor-pointer" />
                  <div className="bg-[#F0F0F0] gap-2 flex rounded-full px-6 py-2 mt-16 md:mt-10">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                </div>
              </div>

              <div className='border-b border-gray-300 w-full mt-2'></div>


              <div className="flex items-start justify-between gap-4">

                {/* Left image*/}
                <div className="flex items-start gap-4">
                  <img src={img3} alt="" className="w-32 h-auto" />
                  <div>
                    <p className="font-bold text-xl">Skinny Fit Jeans</p>
                    <p>Size: <span className="text-[#00000099]">Large</span></p>
                    <p>Color: <span className="text-[#00000099]">Blue</span></p>
                    <p className="font-bold text-2xl">$240</p>
                  </div>
                </div>

                {/* Right image */}
                <div className="flex flex-col items-center gap-2">
                  <img src={Del} alt="Delete" className="w-5 h-5 cursor-pointer" />
                  <div className="bg-[#F0F0F0] gap-2 flex rounded-full px-6 py-2 mt-16 md:mt-10">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='border border-gray-300 rounded-xl w-full  mb-3 md:24 p-5'>
            <h2 className='font-bold text-2xl'>Order Summary</h2>

            <div className='flex flex-col gap-3 mt-2'>
              <div className='flex justify-between'>

                <h3 className='text-xl font-normal text-[#00000099]'>Subtotal</h3>
                <p className='font-bold text-xl'>$565</p>
              </div>
              <div className='flex justify-between'>
                <h3 className='text-xl font-normal text-[#00000099]'>Discount (-20%)</h3>
                <p className='font-bold text-xl text-[#FF3333]'>-$113</p>
              </div>
              <div className='flex justify-between'>
                <h3 className='text-xl font-normal text-[#00000099]'>Delivery Fee</h3>
                <p className='font-bold text-xl'>$15</p>
              </div>
              <div className='border-b border-[#0000001A] w-full mt-2'></div>
            </div>

            <div className='flex flex-col gap-2 mt-5'>
              <div className='flex mt-1 justify-between'>
                <h3 className='text-xl font-normal'>Total</h3>
                <p className='font-bold text-2xl'>$467</p>
              </div>

              <div className='flex mt-4 gap-2'>
                <div className='flex gap-1 items-center bg-[#F0F0F0] p-2 rounded-full w-3/4'>
                  <img src={clip} alt="" />
                  <input type="text" placeholder='Add promo code' />
                </div>
                <h1 className='bg-black text-white p-2 rounded-full text-center w-1/4 cursor-pointer'>Apply</h1>
              </div>

              <div className='flex  items-center bg-black text-white p-4 mt-4 rounded-full justify-center gap-3' onClick={()=> navigate('/')} >
                <h4>Go to Checkout</h4>
                <img className='' src={arrow} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}

export default Lastpage