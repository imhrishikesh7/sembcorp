import React from 'react'
import { motion } from 'framer-motion'
const BoardOfDir3 = () => {
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
                
            <div className='md:flex md:justify-center md:items-center bg-gradient-to-r from-[#06a499] to-[#ffff] py-4'>
                    <div className='md:w-[20%] p-4'>
                        <img src="./home/bod3.png" className='m-auto' alt="" />
                    </div>
                    <div className='md:w-[75%] p-4 '>
                        <p className='text-[#00565C] font-semibold'>Ms Nuraliza Osman</p>
                        <p className='mb-2'>Director</p>
                        <p>Ms Nuraliza Osman is a Director on our Board. Ms Osman oversees legal, compliance and ethics matters within the Group. She is an attorney qualified in Singapore and New York and brings rich experience in the energy industry across the entire value chain internationally, including in the upstream, downstream and renewables sectors. Ms Osman was previously from an international energy major and had served in various functions during her 17.5-year tenure with the Company. Before joining Sembcorp, she was managing counsel for mergers and acquisitions, leading a team of lawyers responsible for advising on significant high-risk transactions and complex joint ventures across Asia. Over the course of her career, she has worked in Singapore, London, the Netherlands and West Africa (Gabon, Ghana and Nigeria) and has built deep and proven expertise in dealing with challenging legal dilemmas in extremely difficult environments. Prior to this, Ms Osman was a lawyer specialising in commercial litigation and practiced in two of Singapore’s leading law firms, Messrs Rajah & Tann and Messrs Tan Kok Quan Partnership working under senior counsels of the Singapore bar. She was previously nominated by GIC Private Limited as one of 10 leading female leaders making a difference and by the Law Society of Singapore as a notable Young Lawyer. Ms Osman is a director and has been volunteering with the Make-A-Wish Foundation for more than 20 years. She holds a Bachelor of Laws (Honours) from National University of Singapore.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BoardOfDir3