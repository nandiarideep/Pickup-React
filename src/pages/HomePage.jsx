import React, { useState } from 'react';
import image1 from '../images/image1.png'
import map from '../images/map.png'
import logo from '../images/logo.png'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import Service from '../components/Service';

const HomePage = () => {

    // Testimonial Data
    const [Data] = useState([
        {
            title: 'What is Pickup App?',
            details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis rerum nemo numquam omnis nisi consequuntur optio sint. Eos ducimus voluptatem earum magnam eaque modi! Dicta nisi animi nihil hic!'
        },
        {
            title: 'How do I use Pickup App?',
            details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis rerum nemo numquam omnis nisi consequuntur optio sint. Eos ducimus voluptatem earum magnam eaque modi! Dicta nisi animi nihil hic!'
        },
        {
            title: 'How do I book a tempo/mini truck/bike or intercity courier services online from the Pickup App?',
            details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis rerum nemo numquam omnis nisi consequuntur optio sint. Eos ducimus voluptatem earum magnam eaque modi! Dicta nisi animi nihil hic!'
        },
    ])

    // Testimonial Arrow Toggle
    const toggle = (i) => {
        if (active === i) {
            return setActive(false)
        }
        setActive(i)
    }

    // Arrow Buttons States
    const [active, setActive] = useState(false);

    return (
        <div className='min-h-full min-w-full relative flex flex-col items-center'>
            <div>
                <img src={image1} alt='banner' className='w-full' />
            </div>
            {/* Service Modals Section */}
            <div className=''>
                <Service />
            </div>
            <div className='flex flex-wrap text-center w-full h-[300px] justify-center items-end text-xl text-[#9b9595]'>
                <p className='m-5'>Moving a billion dreams ahead, one delivery at a time. <br /> Pursuing an unsaid promise to deliver anything, anywhere, anytime <br /> with the collaborative efforts of our driver - partners.</p>
            </div>
            {/* Gradient Background Section */}
            <div className='h-full w-full bg-gradient-to-b from-[#000000] to-[#040A1A] flex flex-col justify-center items-center'>
                <h1 className='text-white font-bold text-xl md:text-[2.5rem] m-10'>And thanks to you, we are growing each & every day!</h1>
                <div className='text-white flex justify-evenly gap-10 md:text-[3rem] m-5'>
                    <div>
                        <h1 className='font-bold'>19+</h1>
                        <h2 className='text-xl text-[#9b9595]'>Cities</h2>
                    </div>
                    <div>
                        <h1 className='font-bold'>5 Lakh+</h1>
                        <h2 className='text-xl text-[#9b9595]'>Driver Partners</h2>
                    </div>
                    <div>
                        <h1 className='font-bold'>1 Crore+</h1>
                        <h2 className='text-xl text-[#9b9595]'>Cities</h2>
                    </div>
                    <div>
                        <h1 className='font-bold'>10 Crore+</h1>
                        <h2 className='text-xl text-[#9b9595]'>Trips</h2>
                    </div>
                </div>
                <div className='m-5'>
                    <img src={map} alt="map" />
                </div>
                <h1 className='text-[#9b9595] text-xl font-bold m-5'>We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad, Jaipur, Pune, Kolkata, Surat, Chennai, Coimbatore, Indore, Nagpur, Chandigarh, Lucknow, Vadodara, Ludhiana, Kochi, and Nashik.</h1>
                <h1 className='text-[#9b9595] text-xl font-bold m-5'>~~~~~~~ SOME WORDS FROM OUR HAPPY CUSTOMERS ~~~~~~~</h1>
                {/* Testimonial Section */}
                <div className='h-full w-full md:flex justify-between m-5 text-white'>
                    <div className='m-5 flex flex-col rounded-2xl bg-slate-800 hover:bg-slate-900'>
                        <div className='md:flex gap-5 m-5'>
                            <img src={logo} alt="logo" />
                            <h1>Vinay<br /><span className='text-[#9b9595]'>Nagpur</span></h1>
                        </div>
                        <h1 className='m-5'>
                            “Way better than naaka
                            waalas. Have shifted all my
                            logistics needs to Porter and I
                            can now safely focus on my
                            business growth. Amazing
                            service!”
                        </h1>
                    </div>
                    <div className='m-5 flex flex-col rounded-2xl bg-slate-800 hover:bg-slate-900'>
                        <div className='md:flex gap-5 m-5'>
                            <img src={logo} alt="logo" />
                            <h1>Vinay<br /><span className='text-[#9b9595]'>Nagpur</span></h1>
                        </div>
                        <h1 className='m-5'>
                            “Way better than naaka
                            waalas. Have shifted all my
                            logistics needs to Porter and I
                            can now safely focus on my
                            business growth. Amazing
                            service!”
                        </h1>
                    </div>
                    <div className='m-5 flex flex-col rounded-2xl bg-slate-800 hover:bg-slate-900'>
                        <div className='md:flex gap-5 m-5'>
                            <img src={logo} alt="logo" />
                            <h1>Vinay<br /><span className='text-[#9b9595]'>Nagpur</span></h1>
                        </div>
                        <h1 className='m-5'>
                            “Way better than naaka
                            waalas. Have shifted all my
                            logistics needs to Porter and I
                            can now safely focus on my
                            business growth. Amazing
                            service!”
                        </h1>
                    </div>
                </div>
            </div>
            {/* FAQ Section */}
            <div className='h-full w-full flex flex-col justify-center items-center m-5 gap-5 font-abc'>
                <h1 className='text-2xl'>Frequently Asked Questions</h1>
                <h2 className='text-[#9b9595] text-xl mx-10'>
                    Here are some of the top FAQs to support you. Please do feel free to reach out to us for any
                    questions that you might have had but are not answered by the following.
                </h2>
                <div className='m-5 font-abc'>
                    {Data.map((Data, i) => (
                        <div key={i}
                            onClick={() => toggle(i)}
                            className='h-full rounded-2xl shadow-xl bg-[#f8f5f5] m-2 cursor-pointer'>
                            <div className='flex justify-between items-center'>
                                <h1 className='md:text-xl text-lg m-3'>{Data.title}</h1>
                                <div className='m-3 md:text-xl text-lg'>
                                    {active === i ? <AiOutlineUp /> : <AiOutlineDown />}
                                </div>
                            </div>
                            <p className={active === i ? 'text-md m-3' : 'text-md m-3 font-bold hidden'}>{Data.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage

