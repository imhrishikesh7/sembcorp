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
            <img src="./other/case4.png" className='my-4' alt="" />
            <div className='md:flex md:justify-between'>
                <div className='md:w-[49%]'>
                    <p className='text-xl text-[#06a499] font-semibold mb-2'>
                        Transforming Workplace Safety with Integra 2.0
                    </p>
                    <p className='mb-2'>
                        We are bolstering workplace safety
                        with Integra 2.0 e-PTW, our innovative
                        in-house digital app. This mobile-first solution streamlines the permit-to-work (PTW) process, enabling users to access and manage PTWs from any location using a mobile device. Integra 2.0 goes beyond convenience; it enhances asset performance by ensuring seamless integration into existing systems and reducing costs associated with traditional paper-based systems.
                    </p>
                    <p className='mb-2'>
                        Integra has advanced features such as geo-tagged images for visual verification and QR code integration for instant access to safety protocols. In addition to this,
                        the robust digital platform strengthens governance and prevents accidents.
                    </p>
                </div>
                <div className='md:w-[49%]'>
                    <img src="./other/case5.png" className='md:w-[70%]' alt="" />
                </div>
            </div>
            <img src="./other/case6.png" className='my-4' alt="" />
            <h2 className='text-4xl font-semibold my-2'>Challenges</h2>
            <div className='md:flex md:justify-between'>
                <div className='md:w-[24%]'>
                    <img src="./other/sc11.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc12.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc13.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc14.jpg" alt="" />
                </div>
            </div>
            <h2 className='text-4xl font-semibold my-2'>Actions Taken</h2>
            <div className='md:flex md:justify-between'>
                <div className='md:w-[24%]'>
                    <img src="./other/sc21.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc22.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc23.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc24.jpg" alt="" />
                </div>
            </div>
            <h2 className='text-4xl font-semibold my-2'>Benefits</h2>
            <div className='md:flex md:justify-between'>
                <div className='md:w-[24%]'>
                    <img src="./other/sc31.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc32.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc33.jpg" alt="" />
                </div>
                <div className='md:w-[24%]'>
                    <img src="./other/sc34.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default CaseStudies