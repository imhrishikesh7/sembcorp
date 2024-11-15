import React from 'react'
import { motion } from 'framer-motion'
const BoardOfDir1 = () => {
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
                <div className='md:flex md:justify-center md:items-center mb-4 bg-gradient-to-r from-[#06a499] to-[#ffff] py-4'>
                    <div className='md:w-[20%]  p-4'>
                        <img src="./home/bod1.png" className='m-auto' alt="" />
                    </div>
                    <div className='md:w-[75%] p-4 '>
                        <p className='text-[#00565C] font-semibold'>Mr Vipul Tuli</p>
                        <p className='mb-2'>Chairman</p>
                        <p>Mr Tuli oversees Sembcorp’s investments and key stakeholder relationships in India and Bangladesh. He is concurrently the CEO of Sembcorp’s Hydrogen Business and the Group’s operations in the Middle East. Mr Tuli has over 30 years of experience in the energy sector. Prior to Sembcorp, he was a senior partner with McKinsey & Company where he helped to build and lead its Asian energy practice. He has also advised government institutions on issues of energy policy, organisation, industry structure and regulation. Mr Tuli holds a Bachelor’s degree in Chemical Engineering
                            from Indian Institute of Technology Delhi and completed his post graduate studies in business management from Indian Institute of Management Calcutta.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardOfDir1