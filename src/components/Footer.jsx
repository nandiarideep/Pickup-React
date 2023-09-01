import React from 'react';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import img2 from '../assets/images/img2.png';

const Footer = () => {
  return (
    <div>
      <div className='justify-between h-full bg-[#040A1A] w-full text-white font-abc font-bold flex flex-col'>
        {/* Upper Footer Section */}
        <div className='md:flex md:justify-between m-5 justify-center'>
          <div className='text-white flex flex-col mx-5'>
            <h1 className='text-[3rem]'>Pickup</h1>
            <h3 className='text-lg'>Send Anything, <br />anywhere, <br />anytime</h3>
          </div>
          <div className='text-white mx-5'>
            <h1 className='text-2xl'>Company</h1>
            <h3 className='cursor-pointer hover:underline'>About Us</h3>
            <h3 className='cursor-pointer hover:underline'>Offers</h3>
            <h3 className='cursor-pointer hover:underline'>Careers</h3>
            <h3 className='cursor-pointer hover:underline'>Blog</h3>
          </div>
          <div className='text-white mx-5'>
            <h1 className='text-2xl'>Quick Links</h1>
            <h3 className='cursor-pointer hover:underline'>City Tempo</h3>
            <h3 className='cursor-pointer hover:underline'>For Enterprise</h3>
            <h3 className='cursor-pointer hover:underline'>Packers & Movers</h3>
            <h3 className='cursor-pointer hover:underline'>Courier</h3>
            <h3 className='cursor-pointer hover:underline'>Services</h3>
          </div>
          <div className='text-white mx-5'>
            <h1 className='text-2xl'>Support</h1>
            <h3 className='cursor-pointer hover:underline'>Contact Us</h3>
            <h3 className='cursor-pointer hover:underline'>Privacy Policy</h3>
            <h3 className='cursor-pointer hover:underline'>Terms of Service</h3>
            <h3 className='cursor-pointer hover:underline'>Insurance FAQs</h3>
            <h3 className='cursor-pointer hover:underline'>Driver Partner Terms & Conditions</h3>
          </div>
          <div className='gap-2 flex flex-col'>
            <img src={img2} height={100} width={200} alt='banner'/>
          </div>
        </div>
        {/* Lower Footer Section */}
        <div className='text-white mx-5'>
          <h1 className='text-[2rem]'>We are here</h1>
          <div className='md:flex md:justify-between text-[16px]'>
            <h3 className='cursor-pointer hover:text-[#c4bfbf]'>Delhi NCR</h3>
            <h3 className='cursor-pointer hover:text-[#c4bfbf]'>Hyderabad</h3>
            <h3 className='cursor-pointer hover:text-[#c4bfbf]'>Bangalore</h3>
            <h3 className='cursor-pointer hover:text-[#c4bfbf]'>Mumbai</h3>
            <h3 className='cursor-pointer hover:text-[#c4bfbf]'>Vadodara</h3>
          </div>
        </div>
        
        <div className='bg-[#08112C] h-full w-full md:justify-between items-center md:flex justify-center  text-white'>
          <div className='flex gap-3 m-5'>
              <div className='cursor-pointer bg-[#454c53] hover:bg-[#383e44] p-2 text-[1.5rem] rounded-[50px]'>
                <AiOutlineInstagram />
              </div>
              <div className='cursor-pointer bg-[#454c53] hover:bg-[#383e44] p-2 text-[1.5rem] rounded-[50px]'>
                <BsFacebook />
              </div>
              <div className='cursor-pointer bg-[#454c53] hover:bg-[#383e44] p-2 text-[1.5rem] rounded-[50px]'>
                <FaLinkedin />
              </div>
              <div className='cursor-pointer bg-[#454c53] hover:bg-[#383e44] p-2 text-[1.5rem] rounded-[50px]'>
                <AiOutlineYoutube />
              </div>
              <div className='cursor-pointer bg-[#454c53] hover:bg-[#383e44] p-2 text-[1.5rem] rounded-[50px]'>
                <BsTwitter />
              </div>
          </div>
          <h1 className='m-5'>2023 Pickup Logistics Solutions Pvt. Ltd. | CIN: 000000000000000 </h1>
        </div>

      </div>
    </div>
  )
}

export default Footer
