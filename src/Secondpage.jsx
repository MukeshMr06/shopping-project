import React from 'react'
import img1 from './assets/secondpageimg/img1.png'
import img2 from './assets/secondpageimg/img2.png'
import img3 from './assets/secondpageimg/img3.png'
import img4 from './assets/secondpageimg/img4.png'
import img5 from './assets/secondpageimg/img5.png'
import img6 from './assets/secondpageimg/img6.png'
import img7 from './assets/secondpageimg/img7.png'
import arr from './assets/secondpageimg/arr.svg'
import filter from './assets/secondpageimg/filter.svg'
import { BsThreeDots } from "react-icons/bs";
import Tick from './assets/tick.svg'
import star from './assets/secondpageimg/star.svg'
import half from './assets/halfstar.svg'
import { useNavigate } from 'react-router-dom'


const Secondpage = () => {
  const navigate = useNavigate()

  return (
    <div className='mx-4 mt-5 flex flex-col gap-5 pb-[10px] md:mx-20'>

      <div className='flex'>
        <div className='flex items-center'>
          <h3 className='text-gray-400'>Home</h3>
          <img src={arr} alt="" />
        </div>
        <div className='flex items-center'>
          <h3 className='text-gray-400'>Shop</h3>
          <img src={arr} alt="" />
        </div>
        <div className='flex items-center'>
          <h3 className='text-gray-400'>Men</h3>
          <img src={arr} alt="" />
        </div>
        <div className='flex items-center'>
          <h3 className='font-normal'>T-shirts</h3>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-3 items-stretch h-auto md:h-[600px]'>

        <div className='flex flex-row md:flex-col gap-2 w-full md:w-52 h-auto md:h-full'>
          <img className='border border-black w-1/3 md:w-full h-32 md:h-1/3 rounded-xl object-cover' src={img1} alt="" onClick={() => navigate('/categorypage')} />
          <img className='w-1/3 md:w-full h-32 md:h-1/3 rounded-xl object-cover' src={img2} alt="" onClick={() => navigate('/categorypage')} />
          <img className='w-1/3 md:w-full h-32 md:h-1/3 rounded-xl object-cover' src={img3} alt="" onClick={() => navigate('/categorypage')} />
        </div>

        <div className='w-full md:w-[700px] h-[400px] md:h-full'>
          <img className='w-full h-full object-cover rounded-xl ' src={img1} alt="" />
        </div>


        <div className='flex flex-col gap-4 md:h-full ml-10'>
          <h1 className='font-extrabold uppercase text-4xl'>One Life Graphic T-shirt</h1>
          <div className='flex gap-1.5 items-center'>
            <img className='' src={star} alt="" />
            <img className='' src={star} alt="" />
            <img className='' src={star} alt="" />
            <img className='' src={star} alt="" />
            <img className='' src={half} alt="" />
            <p className='text-gray-400 font-normal text-sm'>4.5/5</p>
          </div>

          <div className='flex items-center gap-2 md:top-24'>
            <p className='font-bold text-3xl'>$260</p>
            <p className='text-gray-400 text-3xl line-through'>$300</p>
            <p className='bg-[#FF33331A] text-red-400 rounded-2xl px-2 py-1 w-fit'>-40%</p>
          </div>

          <p className='font-normal text-gray-400'>This graphic t-shirt which is perfect for any occasion.
            Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

          <div className='border-b border-[#0000001A] mt-2'></div>

          <p className='text-gray-400'>Select colors</p>

          <div className='flex gap-4'>
            <div className='bg-red-500 rounded-full w-10 h-10'></div>
            <div className='bg-[#31344F] rounded-full w-10 h-10'></div>
            <div className='bg-[#314F4A] rounded-full w-10 h-10'></div>
          </div>

          <div className='border-b border-[#0000001A] mt-2'></div>
          <p className='text-gray-400'>Choose Size</p>

          <div className='flex gap-2 items-center'>
            <p className='bg-[#F0F0F0] px-4 py-2 rounded-full'>Small</p>
            <p className='bg-[#F0F0F0] px-4 py-2 rounded-full'>Medium</p>
            <p className='bg-black text-white px-4 py-2 rounded-full'> Large</p>
            <p className='bg-[#F0F0F0] px-4 py-2 rounded-full'>X-Large</p>
          </div>

          <div className='border-b border-[#0000001A] mt-2'></div>

          <div className='flex  gap-3 mt-3'>
            <div className='flex gap-4 items-center bg-[#F0F0F0] rounded-full px-4 py-1 w-fit'>
              <p className='text-xl'>-</p>
              <p className='font-medium'>1</p>
              <p className='text-xl'>+</p>
            </div>
            <button className='bg-black text-white rounded-2xl px-4 py-1 w-full cursor-pointer' onClick={() => navigate('/categorypage')}>Add to Cart</button>
          </div>

        </div>

      </div>


      <div className='flex flex-col gap-4 mt-4 md:mt-2'>

        <div className='flex justify-around'>
          <p className='text-gray-400 text-xl'>Product Details</p>
          <p className='font-medium text-xl'>Rating & Reviews</p>
          <p className='text-gray-400 text-xl'>FAQs</p>
        </div>

        {/* Reviews */}
        <div className='border-b border-[#0000001A]'></div>

        <div className='flex justify-between items-center'>
          <p className='font-bold text-2xl'>All Reviews <span className='text-gray-400 text-sm'>(451)</span></p>

          <div className='flex gap-3'>
            <img className='bg-[#F0F0F0] p-2 rounded-2xl' src={filter} alt="" />
            <div className='hidden md:flex items-center rounded-2xl px-4 py-1 gap-1 bg-[#F0F0F0]'>
              <p>Latest</p>
              <img className='rotate-90 hidden md:block' src={arr} alt="" />
            </div>
            <p className='rounded-2xl bg-black text-white px-4 py-1'>Write a Review</p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 my-5'>

          <div className='border border-[#0000001A] p-4 rounded-2xl w-96 md:w-[600px]'>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-1.5 items-center'>
                  <img className='' src={star} alt="" />
                  <img className='' src={star} alt="" />
                  <img className='' src={star} alt="" />
                  <img className='' src={star} alt="" />
                  <img className='' src={half} alt="" />
                </div>
                <BsThreeDots />
              </div>

              <div className='flex gap-1.5'>
                <p className='font-bold text-xl'>Mukesh MR.</p>
                <img src={Tick} alt="" />
              </div>

              <div className='text-gray-400 flex flex-col gap-2'>
                <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect.
                  I can see the designer's touch in every aspect of this shirt."</p>

                <p>Posted on August 13, 2025</p>
              </div>

            </div>

          </div>

          <div className='border border-[#0000001A] p-4 rounded-2xl w-96 md:w-[600px]'>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-1.5 items-center'>
                  <img className='' src={star} alt="" />
                  <img className='' src={star} alt="" />
                  <img className='' src={star} alt="" />
                  <img className='' src={star} alt="" />
                </div>
                <BsThreeDots />
              </div>

              <div className='flex gap-1.5'>
                <p className='font-bold text-xl'>Alex M.</p>
                <img src={Tick} alt="" />
              </div>

              <div className='text-gray-400 flex flex-col gap-2'>
                <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself,
                  I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>

                <p>Posted on september 7, 2025</p>
              </div>

            </div>

          </div>

          <div className='border border-[#0000001A] p-4 rounded-2xl w-96 md:w-[600px]'>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-1.5 items-center'>
                  <img className='' src={star} alt="" />
                  <img className='' src={star} alt="" />
                  <img className='' src={star} alt="" />
                  <img className='' src={half} alt="" />
                </div>
                <BsThreeDots />
              </div>

              <div className='flex gap-1.5'>
                <p className='font-bold text-xl'>Ethan R.</p>
                <img src={Tick} alt="" />
              </div>

              <div className='text-gray-400 flex flex-col gap-2'>
                <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect.
                  I can see the designer's touch in every aspect of this shirt.""</p>

                <p>Posted on September 9, 2025</p>
              </div>

            </div>

          </div>

          <div className='border border-[#0000001A] p-4 rounded-2xl w-96 md:w-[600px]'>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-1.5 items-center'>
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                </div>
                <BsThreeDots />
              </div>

              <div className='flex gap-1.5'>
                <p className='font-bold text-xl'>Liam D.</p>
                <img src={Tick} alt="" />
              </div>

              <div className='text-gray-400 flex flex-col gap-2'>
                <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear.
                  It's evident that the designer poured their creativity into making this t-shirt stand out."</p>

                <p>Posted on September 1, 2025</p>
              </div>

            </div>

          </div>

          <div className='border border-[#0000001A] p-4 rounded-2xl w-96 md:w-[600px]'>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-1.5 items-center'>
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                </div>
                <BsThreeDots />
              </div>

              <div className='flex gap-1.5'>
                <p className='font-bold text-xl'>Olivia P.</p>
                <img src={Tick} alt="" />
              </div>

              <div className='text-gray-400 flex flex-col gap-2'>
                <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill.
                  It's like wearing a piece of art that reflects my passion for both design and fashion."</p>

                <p>Posted on August 18, 2025</p>
              </div>

            </div>

          </div>

          <div className='border border-[#0000001A] p-4 rounded-2xl w-96 md:w-[600px]'>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-1.5 items-center'>
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={star} alt="" />
                  <img className='w-5 h-5' src={half} alt="" />
                </div>
                <BsThreeDots />
              </div>

              <div className='flex gap-1.5'>
                <p className='font-bold text-xl'>Ava H.</p>
                <img src={Tick} alt="" />
              </div>

              <div className='text-gray-400 flex flex-col gap-2'>
                <p>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy.
                  The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>

                <p>Posted on August 19, 2025</p>
              </div>

            </div>

          </div>

        </div>

        <div className='flex justify-center'>
          <button className='border my-5 rounded-2xl px-4 py-1'>Load More Reviews</button>
        </div>

        {/* image seciton */}

        <div className='flex flex-col gap-7 mt-10'>
          <h3 className='font-bold text-3xl md:text-5xl flex justify-center'>You might also like</h3>

          <div className='flex gap-8 mx-4 mt-5 overflow-x-auto md:grid md:grid-cols-4 md:mx-16 md:overflow-x-visible scrollbar-hide' >
            <div className='flex flex-col gap-2 min-w-[250px] md:min-w-0'>
              <img className='w-full h-76 rounded-xl' src={img4} alt='' />
              <h4 className='text-xl font-bold'>Polo with Contrast Trims</h4>
              <div className='flex gap-1.5 items-center'>
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <p className='text-gray-400 font-normal text-sm'>4.0/5</p>
              </div>
              <div className='gap-2 flex items-center'>
                <p className='font-bold text-2xl'>$212</p>
                <p className='text-2xl text-[#00000066] line-through'>$242</p>
                <p className='bg-[#FF33331A] text-red-400 rounded-2xl px-2 py-1'>-20%</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 min-w-[250px] md:min-w-0'>
              <img className='w-full h-76 rounded-xl' src={img5} alt='' />
              <h4 className='text-xl font-bold'>Gradient Graphic T-shirt</h4>
              <div className='flex gap-1.5 items-center'>
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={half} alt='' />
                <p className='text-gray-400 font-normal text-sm'>3.5/5</p>
              </div>
              <p className='font-bold text-2xl'>$212</p>
            </div>
            <div className='flex flex-col gap-2 min-w-[250px] md:min-w-0'>
              <img className='w-full h-76 rounded-xl' src={img6} alt='' />
              <h4 className='text-xl font-bold'>Polo with Tipping Details</h4>
              <div className='flex gap-1.5 items-center'>
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={half} alt='' />
                <p className='text-gray-400 font-normal text-sm'>4.5/5</p>
              </div>
              <p className='font-bold text-2xl'>$212</p>
            </div>
            <div className='flex flex-col gap-2 min-w-[250px] md:min-w-0'>
              <img className='w-full h-76 rounded-xl' src={img7} alt='' />
            
              <h4 className='text-xl font-bold'>Black Striped T-shirt</h4>
             
              <div className='flex gap-1.5 items-center'>
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <p className='text-gray-400 font-normal text-sm'>5.0/5</p>
              </div>
              <div className='gap-2 flex items-center'>
                <p className='font-bold text-2xl'>$212</p>
                <p className='text-2xl text-[#00000066] line-through'>$242</p>
                <p className='bg-[#FF33331A] text-red-400 rounded-2xl px-2 py-1'>-20%</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Secondpage