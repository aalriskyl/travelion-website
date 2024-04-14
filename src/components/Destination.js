import React from 'react'
import Maldives from '../assets/img/maldives.jpg';
import Bigben from '../assets/img/bigben.jpg';
import Kyoto from '../assets/img/kyoto.jpg';
import Seoul from '../assets/img/seoul.jpg';
import Paris from '../assets/img/paris.jpg';
const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>Travel Around The World
      </h1>
      <p className='py-4'>With no hassle</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-2 gap-2 md:gap-4">
        <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={Maldives} alt='maldives' />
        <img className="w-full h-full object-cover " src={Bigben} alt='bigben' />
        <img className="w-full h-full object-cover " src={Kyoto} alt='kyoto' />
        <img className="w-full h-full object-cover " src={Seoul} alt='seoul' />
        <img className="w-full h-full object-cover " src={Paris} alt='paris' />
      </div>
    </div>
  )
}

export default Destination
