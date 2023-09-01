import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import ahm from '../images/ahm.png'
import bang from '../images/bang.png'
import chan from '../images/chan.png'
import chen from '../images/chen.png'
import coim from '../images/coim.png'
import del from '../images/del.png'


// const CityModal = () => {
//   const [showModal, setShowModal] = useState(false);
  
  const Cities = () => {
    const [locationData] = useState([
      {
        img: ahm,
        name: "Ahmedabad",
      },
      {
        img: bang,
        name: "Bangalore",
      },
      {
        img: chan,
        name: "Chandigarh",
      },
      {
        img: chen,
        name: "Chennai",
      },
      {
        img: coim,
        name: "Coimbatore",
      },
      {
        img: del,
        name: "Delhi",
      },
    ]);
    return (
      <div className='flex justify-center items-center h-screen w-full bg-[#eeefff] '>
        <div className='h-[100%] w-[70%] bg-slate-50 rounded-xl'>
          <div className='m-10 flex flex-col'>
            <div className='flex items-center text-2xl justify-between'>
              <h1 className='m-2'>Choose Your City</h1>
              
            </div>
            <div className='flex gap-10 flex-wrap m-3'>
              {
                locationData.map(post => (
                  <div className='h-[100px] w-[100px] bg-[#efefef] rounded-xl transition duration-300 transform hover:translate-x-2 hover:translate-y-2 cursor-pointer' >
                    <img src={post.url} alt="" />
                    <p className='text-black flex justify-center items-end'>{post.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
  

export default Cities



