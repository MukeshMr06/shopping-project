import  { useState } from 'react'
import logo from './assets/SHOP.svg'
import search from './assets/searchbtn.svg'
import arr from './assets/thirdpageimg/arr.svg'
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";





const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            {/* SignIn */}
            <div className='bg-[#000000] w-full h-9 flex items-center justify-between px-2 sm:px-8'>
                <p className='text-[#FFFFFF] font-normal text-sm sm:text-sm text-center flex-1'>Sign up and get 20% off to your first order. <span className='font-medium underline text-sm'>Sign Up Now</span></p>
                <p className='hidden sm:flex w-5 h-5 text-white ml-40  justify-center items-center'>X</p>
            </div>

            {/* Navbar */}

            <div className='sticky top-0 z-50 flex justify-between items-center mt-6 mx-3 md:mx-20'>

                <div className='flex items-center gap-3'>

                    <div className='md:hidden'>
                        {open ? (
                            <RiCloseLine onClick={() => setOpen(false)} className='text-3xl cursor-pointer' />
                        ) : (< IoMdMenu onClick={() => setOpen(true)} className='text-3xl cursor-pointer' />)
                        }
                    </div>

                    <a href='/'><img className='font-bold text-2xl md:text-3xl' src={logo} alt="" /></a>

                    {/* Mobile view */}

                    <div className={`fixed top-0 left-0 w-[300px] h-screen bg-black flex flex-col
                        text-white items-center space-y-6 py-6 text-xl md:hidden transform transition-transform duration-500 ease-in-out
                         ${open ? "translate-x-0" : "-translate-x-full"}`}>

                        <button><RiCloseLine onClick={() => setOpen(false)} className='cursor-pointer absolute top-6 right-4' /></button>
                        <a href="/" className='hover:text-gray-300' onClick={() => setOpen(false)}>Home</a>
                        <a href="productpage" className='hover:text-gray-300' onClick={() => setOpen(false)}>Product</a>
                        <a href="categorypage" className='hover:text-gray-300' onClick={() => setOpen(false)}>Catrgory</a>
                        <a href="cartpage" className='hover:text-gray-300' onClick={() => setOpen(false)}>Cart</a>
                    </div>

                </div>

                <div className='hidden sm:flex text-sm gap-6'>
                    <div className='flex items-center gap-0.5'>
                        <p>Shop</p>
                        <img className='rotate-90' src={arr} alt="" />
                    </div>
                    <a href="productpage">On Sale</a>
                    <a href='categorypage'>New Arrivals</a>
                    <a href="cartpage">Brands</a>
                </div>

                {/* Search Bar */}
                <div className='hidden items-center bg-[#F0F0F0] w-xl h-12 rounded-full gap-2 md:flex'>
                    <img className='w-5.5 h-5.5 ml-2' src={search} alt="" />
                    <input className='font-normal text-base outline-none w-full' type="text" placeholder='Search a products...'  />
                </div>

                {/* icons */}
                <div className='flex md:hidden gap-3   items-center'>
                    {/* <img src={cart} alt="" />
                    <img src={login} alt="" /> */}
                    <CiSearch size={24}/>
                    <BsCart2 size={24}/>
                    <FaRegUserCircle size={24}/>

                </div>
                <div className='hidden md:flex  gap-3   items-center'>
                    {/* <img src={cart} alt="" />
                    <img src={login} alt="" /> */}
                    <BsCart2 size={24}/>
                    <FaRegUserCircle size={24}/>

                </div>
            </div>
            <div className='border-b border-[#0000001A] w-full mt-2'></div>

        </div>
    )
}

export default Navbar