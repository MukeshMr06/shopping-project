import shop from './assets/SHOP.svg'
import twitter from './assets/footerimg/twitter.svg'
import facebook from './assets/footerimg/facebook.svg'
import chatgpt from './assets/footerimg/chatgpt.svg'
import github from './assets/footerimg/github.svg'
import visa from './assets/footerimg/visa.svg'
import card from './assets/footerimg/card.svg'
import paypal from './assets/footerimg/paypal.svg'
import applepay from './assets/footerimg/applepay.svg'
import gpay from './assets/footerimg/gpay.svg'
import email from './assets/footerimg/email.svg'




const Footer = () => {
  return (
    <div className='bg-[#F0F0F0] mt-60 relative md:mt-32'>
      {/* Black floating box */}
      <div className='absolute -top-50 left-1/2 -translate-x-1/2 bg-black text-white rounded-2xl w-[95%] max-w-6xl p-6 sm:p-8 md:p-10 md:-top-20'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-32'>
          <h3 className='w-full md:w-1/2 font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-6 md:mb-0'>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
          <div className='flex flex-col gap-4 w-full md:w-1/2'>
            {/* Email input with icon */}
            <div className='bg-white flex gap-3 items-center border outline-none py-2 sm:py-3 rounded-full'>
              <img className='w-6 h-6 mx-2 sm:mx-3' src={email} alt="" />
              <input
                className='text-black outline-none font-bold w-full text-sm sm:text-base'
                type="email"
                placeholder='Enter your Email address'
              />
            </div>
            {/* Subscribe button */}
            <button className='bg-white text-black font-bold rounded-full py-2 sm:py-3 w-full text-sm sm:text-base'>
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className='pt-40 md:gap-4'>
        <div className='flex flex-col mx-4 lg:flex-row lg:mx-20 gap-8 lg:gap-10 '>
          <div className='flex flex-col w-full lg:w-[400px] gap-3 '>
            <img className='w-40 sm:w-60' src={shop} alt="" />
            <p className='font-normal text-sm'>
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className='flex gap-2 '>
              <img className='w-6 h-6' src={twitter} alt="" />
              <img className='w-6 h-6' src={facebook} alt="" />
              <img className='w-6 h-6' src={chatgpt} alt="" />
              <img className='w-6 h-6' src={github} alt="" />
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-10 sm:gap-10 mt-6 lg:mt-2'>
            <div className='flex flex-col gap-2 '>
              <h2 className='font-medium text-base'>COMPANY</h2>
              <p className='text-sm'>About</p>
              <p className='text-sm'>Features</p>
              <p className='text-sm'>Works</p>
              <p className='text-sm'>Career</p>
            </div>
            <div className='flex flex-col gap-2  '>
              <h2 className='font-medium text-base'>HELP</h2>
              <p className='text-sm'>Customer Support</p>
              <p className='text-sm'>Delivery Details</p>
              <p className='text-sm'>Terms & Conditions</p>
              <p className='text-sm'>Privacy Policy</p>
            </div>
            <div className='flex flex-col gap-2 '>
              <h2 className='font-medium text-base'>FAQ</h2>
              <p className='text-sm'>Account</p>
              <p className='text-sm'>Manage Deliveries</p>
              <p className='text-sm'>Orders</p>
              <p className='text-sm'>Payments</p>
            </div>
            <div className='flex flex-col gap-2  '>
              <h2 className='font-medium text-base'>RESOURCES</h2>
              <p className='text-sm'>Free eBooks</p>
              <p className='text-sm'>Development Tutorial</p>
              <p className='text-sm'>How to - Blog</p>
              <p className='text-sm'>Youtube Playlist</p>
            </div>
          </div>
        </div>
        <div className='border-b border-[#0000001A] sm:mx-20 my-3'></div>
        <div className='mx-2  flex md:flex-row sm:mx-20 flex-col gap-2 justify-between items-center'>
          <h3 className='font-normal text-xs sm:text-sm mt-3 text-center'>Shop.co © 2000-2023, All Rights Reserved</h3>
          <div className='flex gap-2 sm:gap-3 flex-wrap justify-center'>
            <img className='w-14 h-14' src={visa} alt="" />
            <img className='w-14 h-14' src={gpay} alt="" />
            <img className='w-14 h-14' src={card} alt="" />
            <img className='w-14 h-14' src={paypal} alt="" />
            <img className='w-14 h-14' src={applepay} alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer