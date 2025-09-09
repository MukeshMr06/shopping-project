import Homelog from './assets/homepage.jpg'
import Smallimg from './assets/smallvector.svg'
import Bigimg from './assets/bigvector.svg'
import logo1 from './assets/logo1.svg'
import logo2 from './assets/logo2.svg'
import logo3 from './assets/logo3.svg'
import logo4 from './assets/logo4.svg'
import logo5 from './assets/logo5.svg'
import Newarrival from './Newarrival'
import Selling from './Selling'
import Dressstyle from './Dressstyle'
import Customer from './Customer'


const LandingPage = () => {
  return (
    <div className='h-auto'>

      <div className='bg-[#F2F0F1] hidden md:block  mt-4 relative'>

        <div className='flex flex-col md:flex-row justify-between relative'>

          <div className='flex flex-col items-start gap-3 mx-2 md:ml-20'>

            <h2 className='font-extrabold uppercase mt-18 md:text-6xl '>Find Clothes <br /> That Matches <br /> Your Style</h2>
            <p className='font-normal text-base md:w-[500px]'>Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.</p>
            <button className='bg-black font-medium text-base text-white rounded-full cursor-pointer px-8 py-2'>Shop Now</button>
          
            <div className='grid grid-cols-2 mx-1 md:grid-cols-3 md:w-[600px]'>
              <div className=''>
                <p className='font-bold  text-4xl'>200+</p>
                <p className='font-normal text-base'>Interational Brands</p>
              </div>
              <div>
                <p className='font-bold  text-4xl'>2,000+</p>
                <p className='font-normal text-base'>High-Quality Products</p>
              </div>
              <div className='ml-24 md:ml-0'>
                <p className='font-bold text-4xl'>30,000+</p>
                <p className='font-normal text-base'>Happy Customers</p>
              </div>
            </div>
          </div>

          <div className=" flex justify-center mt-10">
            <img className="w-72 h-72 md:w-[400px] md:h-[500px] object-cover absolute right-20
            " src={Homelog} alt="" />
            <img className="absolute top-10 right-10 w-20 h-20 md:w-20 md:h-20" src={Smallimg} alt="" />
            <img className="absolute bottom-40 right-2/6 w-28 h-28 md:w-10 md:h-10" src={Bigimg} alt="" />
          </div>
        </div>

        <div className='bg-black w-full mt-[100px] md:mt-20'>
          <div className='grid grid-cols-3 mx-10 md:flex md:justify-around items-center'>
            <img className='w-24 h-24' src={logo1} alt="" />
            <img className='w-20 h-20' src={logo2} alt="" />
            <img className='w-24 h-24' src={logo3} alt="" />
            <div className='col-span-3 flex justify-center gap-20 md:col-span-1 md:flex-none'>
              <img className='w-24 h-24' src={logo4} alt="" />
              <img className='w-24 h-24' src={logo5} alt="" />
            </div>
          </div>
        </div>

      </div>

      <div className='bg-[#F2F0F1] md:hidden relative mt-4 p-2 '>
        <div className='flex flex-col md:flex-row justify-between '>

          <div className='flex flex-col items-start gap-3 mx-2 md:ml-20'>

            <h2 className='font-extrabold uppercase mt-18 text-3xl '>Find Clothes <br /> That Matches <br /> Your Style</h2>
            <p className='font-normal text-base md:w-[500px]'>Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.</p>
            <button className='bg-black font-medium text-base text-white rounded-full w-full p-2 px-8 py-2'>Shop Now</button>
            <div className='grid grid-cols-2 mx-1  gap-5 mt-3'>
              <div className=''>
                <p className='font-bold  text-4xl'>200+</p>
                <p className='font-normal text-base'>Interational Brands</p>
              </div>
              <div>
                <p className='font-bold  text-4xl'>2,000+</p>
                <p className='font-normal text-base'>High-Quality Products</p>
              </div>
              <div className='ml-24 md:ml-0'>
                <p className='font-bold text-4xl'>30,000+</p>
                <p className='font-normal text-base'>Happy Customers</p>
              </div>
            </div>
          </div>

          <div className=" flex justify-center relative mt-10">
            <img className="w-[300px] h-[350px]  right-20
            " src={Homelog} alt="" />
            <img className="  w-10 h-10" src={Smallimg} alt="" />
            <img className=" absolute bottom-32  left-3 w-10 h-10 " src={Bigimg} alt="" />
          </div>
        </div>

        <div className='bg-black w-full'>
          <div className='grid grid-cols-3 mx-10 md:flex md:justify-around items-center'>
            <img className='w-24 h-24' src={logo1} alt="" />
            <img className='w-20 h-20' src={logo2} alt="" />
            <img className='w-24 h-24' src={logo3} alt="" />
            <div className='col-span-3 flex justify-center gap-20 md:col-span-1 md:flex-none'>
              <img className='w-24 h-24' src={logo4} alt="" />
              <img className='w-24 h-24' src={logo5} alt="" />
            </div>
          </div>
        </div>

      </div>

      <Newarrival />
      <Selling />
      <Dressstyle />
      <Customer />


    </div>
  )
}

export default LandingPage