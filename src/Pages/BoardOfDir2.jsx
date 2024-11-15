import React from 'react'
import { motion } from 'framer-motion'
const BoardOfDir2 = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Profile of the Board of Directors</motion.h1>
            <div className='my-4'>
                
                <div className='md:flex md:justify-center md:items-center bg-gradient-to-r from-[#06a499] to-[#ffff] py-4 mb-4'>
                    <div className='md:w-[20%] p-4'>
                        <img src="./home/bod2.png" className='m-auto' alt="" />
                    </div>
                    <div className='md:w-[75%] p-4 '>
                        <p className='text-[#00565C] font-semibold'>Mr Appakudal Nithyanand</p>
                        <p className='mb-2'>Managing Director</p>
                        <p>Mr Nithyanand oversees Sembcorp’s renewable energy operations and strategic growth in India. He holds over 28 years of experience in leadership roles across the infrastructure, real estate, healthcare and utilities sectors. Before joining Sembcorp, he was the Chief Executive Officer of Asia
                            of Roadis Transportation, a global investment and operating infrastructure Company. Prior to that,
                            he was the Chief Commercial & Business Development Officer (Airports) at the GMR Group where he was responsible for revenue and growth of its airport business. Over the span of his career, he has led companies as the Chief Executive Officer and led business development and sales, strategic acquisitions and divestments as well as managed key stakeholder relationships. Mr Nithyanand holds a Master of Business Administration from Carnegie Mellon University, a Masters in Finance from Delhi University and a Bachelor’s degree in Economics from Delhi University.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BoardOfDir2