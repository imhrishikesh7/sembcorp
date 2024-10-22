import React from 'react'
import Slider1 from '../Sliders/Slider1'

const About = () => {
    return (
        <div className='marginal'>
            <div className='md:flex md:justify-between md:items-center'>
                <div className='md:w-[59%]'>
                    <h1 className='md:text-5xl text-4xl font-semibold text-[#00565C] leading-normal'>Sustainable development</h1>
                    <h1 className='md:text-5xl text-4xl font-semibold text-[#161616] leading-normal'>can only be realised through <br />
                        the widespread adoption of </h1>
                    <h1 className='md:text-5xl text-4xl font-semibold text-[#00565C] leading-normal'>renewable energy</h1>
                    <p className='mt-7 text-xl'>
                        At Sembcorp, we realise the immense potential of renewable energy to advance economic and infrastructure development, improve energy security and mitigate climate change.
                    </p>
                </div>
                <div className='md:w-[39%] relative'>
                    <img src="./home/ab1.png" className='md:rounded-tr-3xl rounded-tr-2xl my-4 md:my-0' alt="" />
                    <img src="./home/ab2.svg" className='absolute bottom-[-12%] right-0 md:w-[140px] w-[80px]' alt="" />
                </div>
            </div>
            <div className='md:flex md:justify-between my-4'>
            <div className='md:w-[59%] relative my-10'>
                    <img src="./home/ab3.png" className='md:rounded-tr-3xl rounded-tr-2xl my-4 md:my-0' alt="" />
                    <img src="./home/ab4.svg" className='absolute bottom-[-12%] left-0 md:w-[140px] w-[80px]' alt="" />
                    <div className='absolute bottom-[-18%] left-[160px]'>
                        <Slider1 />
                    </div>
                </div>
                <div className='md:w-[39%] md:mt-[25%]'>
                    <h1 className='md:text-5xl text-4xl font-semibold text-[#161616] leading-normal'>Catalysing <span className='text-[#00565C]'>energy transition</span></h1>
                    
                    <p className='mt-7 text-xl'>
                        At Sembcorp, we realise the immense potential of renewable energy to advance economic and infrastructure development, improve energy security and mitigate climate change.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About