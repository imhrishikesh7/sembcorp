import React from 'react'
import { motion } from 'framer-motion'
const Mapping = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Mapping our progress</motion.h1>
                <div className='my-4 md:flex flex-wrap md:justify-between'>
                    <img src="./other/m1.png" className='md:w-[30%]' alt="" />
                    <img src="./other/m2.png" className='md:w-[30%]' alt="" />
                    <img src="./other/m3.png" className='md:w-[30%]' alt="" />
                    <img src="./other/m4.png" className='md:w-[30%]' alt="" />
                    <img src="./other/m5.png" className='md:w-[30%]' alt="" />
                    <img src="./other/m6.png" className='md:w-[30%]' alt="" />
                </div>
        </div>
    )
}

export default Mapping