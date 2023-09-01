import React from 'react'

const Estimate = () => {
  return (
      <div className='flex justify-center items-center h-screen w-full bg-[#eeefff] '>
          <div className='h-[90%] w-[70%] bg-slate-50 rounded-xl flex'>
            <div className='h-full w-[40%] bg-[#7e7e79] rounded-tl-xl rounded-bl-xl'>
                <h1 className='flex justify-center'>Get an Estimate</h1>
                <p>Please fill in the details,<br />so we can provide you with the best of our services</p>
            </div>
            <div className='h-full w-[60%] bg-[#d5d0d0ee] rounded-tr-xl rounded-br-xl'>
                <div className='m-5 flex flex-col flex-wrap justify-center items-center'>
                    <div className='h-[100px] w-[300px] bg-[#4b4a4a]'></div>
                </div>
            </div>
          </div>
      </div>
  )
}

export default Estimate
