import React from 'react'
import { motion } from 'framer-motion'
const CaseStudies = () => {
  return (
    <div className='marginal'>
        <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Case studies</motion.h1>
                <div className='my-4'>
                    <p className='text-xl text-[#06a499] font-semibold mb-2'>
                    Virtual brain – Solar analytics
                    </p>
                    <p className='mb-2'>
                    Traditionally, managing and maintaining vast utility-scale solar plants have been a complex task due to their size and numerous components. Manual and time-based inspections were labour-intensive and inefficient, leading to delayed problem identification, indemonstrable inspection records and inefficient use of manpower. To overcome these limitations and achieve operational excellence, we have embarked on a digital transformation journey for Operation and Maintenance (O&M) practices in our solar plants. This initiative leverages cutting-edge technologies to streamline maintenance, improve efficiency and maximise plant performance.
                    </p>
                    <p className='text-xl font-semibold mb-2'>
                    We developed sophisticated analytics tools that leverage plant data to
                    </p>
                    <img src="./other/case1.png" alt="" />
                    <div className='my-4 md:flex md:justify-between'>
                        <div className='my-2 md:w-[49%]'>
                            <p className='text-3xl font-semibold'>Outcomes</p>
                            <img src="./other/case2.png" alt="" />
                        </div>  
                        <div className='my-2 md:w-[49%]'>
                            <p className='text-3xl font-semibold'>Value proposition</p>
                            <img src="./other/case3.png" alt="" />
                        </div>  
                    </div>
                </div>
                <img src="./other/case4.png" alt="" />

    </div>
  )
}

export default CaseStudies