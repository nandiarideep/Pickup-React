import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cities from '../modals/Cities'
import { AiOutlineArrowRight } from 'react-icons/ai'
import bike from '../images/bike.png'
import cou from '../images/cou.png'
import pack from '../images/pack.png'
import truck from '../images/truck.png'


const Service = () => {
    // Services Data
    const [Data] = useState([
        {
            title: 'Two Wheelers',
            img: bike
        },
        {
            title: 'Trucks',
            img: truck
        },
        {
            title: 'Packers & Movers',
            img: pack
        },
        {
            title: 'Courier Service',
            img: cou
        },
    ])

    return (
        <div className='h-full w-full rounded-2xl shadow-xl font-abc'>
            <div className='flex justify-center items-center'>
                {Data.map((Data, i) => (
                    <div key={i}
                        className='h-full w-full rounded-2xl shadow-xl font-abc'>
                        <div className='flex flex-col justify-between items-center'>
                            <div className='md:text-xl text-lg'>
                                <img src={Data.img} alt="" />
                            </div>
                            <h1 className='md:text-xl text-lg m-3'>{Data.title}</h1>
                        </div>
                    </div>
                ))}
                <div className='bg-blue-700 text-white py-[50px] px-4 rounded-2xl cursor-pointer'>
                    {/* <Link to={<Cities />}></Link> */}
                    <div>
                      <h1>Get an Estimate</h1>
                    <h2 className='text-[#9b9595]'>{'{Takes - 2 mins}'}</h2>  
                    </div>
                    <div>
                        <AiOutlineArrowRight />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Service
