import React from 'react'
import {motion} from 'framer-motion'
const CatEnergy = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Catalysing Energy Transition</motion.h1>
             <p className='text-[#00565C] italic text-xl my-4'>
                We are one of the leading independent renewable power producers in India, specialising in the deployment of a diverse array of green energy sources, including wind and solar technologies, to meet the increasing energy demands across the nation.
            </p>
            <p className='my-4'>
                A strong track record of developing and operating power generation assets is completed by digital capabilities that ensure superior asset management for long-term deployment. Present across 18 states
                in India, we work with all stakeholders
                to enable a low-carbon future. Our
                sector leadership is demonstrated by our successful development and management of nearly 3GW of green power generation assets. Through our dual focus on generation and efficiency solutions, we
                are well-positioned to make a significant contribution to a cleaner energy future.
            </p>
            <p className='my-4'>
                Our extensive portfolio of renewable energy solutions, which includes wind farms
                and solar installations is geared towards accelerating the transition towards utilising renewable energy. With a proven track record, we are strategically positioned to scale sustainable power generation and support India’s ambitious renewable energy goals.
            </p>
            <div className='md:flex md:justify-between my-4'>
                <div>
                    <div className='border-b border-black pb-2'>
                        <h1 className='text-5xl text-[#59beb9] font-[200]'>3<sup>rd</sup></h1>
                        <p>
                            Largest player in the country <br />based on installed wind capacity
                        </p>
                    </div>
                </div>
                <div>
                    <div className='border-b border-black pb-2'>
                        <h1 className='text-5xl text-[#59beb9] font-[200]'>60+</h1>
                        <p>
                            Renewable assets
                        </p>
                    </div>
                </div>
                <div>
                    <div className='border-b border-black pb-2'>
                        <h1 className='text-5xl text-[#59beb9] font-[200]'>2 GW*</h1>
                        <p>
                            Wind capacity
                        </p>
                    </div>
                </div>
                <div>
                    <div className='border-b border-black pb-2'>
                        <h1 className='text-5xl text-[#59beb9] font-[200]'>13</h1>
                        <p>
                            States
                        </p>
                    </div>
                </div>
                <div>
                    <div className='border-b border-black pb-2'>
                        <h1 className='text-5xl text-[#59beb9] font-[200]'>~0.7 GW*</h1>
                        <p>
                            Solar capacity
                        </p>
                    </div>
                </div>
                <div>
                    <div className='border-b border-black pb-2'>
                        <h1 className='text-5xl text-[#59beb9] font-[200]'>~2.7 GW*</h1>
                        <p>
                            Total renewables capacity
                        </p>
                    </div>
                </div>
            </div>
            <p className='font-bold text-xl my-4 text-[#59beb9]'>Performance Highlights</p>

            <img src="./other/ce1.png" alt="" />
            <img src="./other/ce2.png" alt="" />
        </div>
    )
}

export default CatEnergy