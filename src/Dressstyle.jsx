import React from 'react'
import causal from './assets/casual.png'
import formal from './assets/formal.png'
import party from './assets/party.png'
import gym from './assets/gym.png'


const Dressstyle = () => {
  return (
    <div className="bg-[#F0F0F0] mx-2 rounded-xl mt-4 p-5 md:mx-20">

      <h4 className="text-center font-bold text-5xl my-8 uppercase">browse by dress style</h4>

      <div className="grid grid-cols-1 gap-2 md:flex md:flex-wrap md:gap-6 md:mx-2 pb-10 md:p-4">

        <div className='relative md:flex-1'>
          <img className="w-full h-72 object-cover rounded-xl transform scale-x-[-1]" src={causal} alt="" />
          <p className='text-4xl font-bold absolute top-4 left-4'>Casual</p>
        </div>

        <div className='relative md:w-2/3'>
          <img className="w-full h-72 object-cover rounded-xl transform scale-x-[-1]" src={formal} alt="" />
          <p className='text-4xl font-bold absolute top-4 left-4'>Formal</p>
        </div>

        <div className='relative md:w-2/3'>
          <img className="w-full h-72 object-cover rounded-xl" src={party} alt="" />
          <p className='text-4xl font-bold absolute top-4 left-4'>Party</p>
        </div>

        <div className='relative md:flex-1'>
          <img className="w-full h-72 object-cover rounded-xl" src={gym} alt="" />
          <p className='text-4xl font-bold absolute top-4 left-4'>Gym</p>
        </div>

      </div>

    </div>

  )
}

export default Dressstyle