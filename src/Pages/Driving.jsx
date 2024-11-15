import React from 'react'
import { motion } from 'framer-motion'
const Driving = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Driving brown-to-green transition </motion.h1>
                <div className='my-4 driving-bg p-4'
                style={{  
                    backgroundImage: "url(" + "./other/dr1.png" + ")",
                    height: "130vh",
                    width: "100%",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                    <p className='font-semibold mb-2'>A relentless pursuit of operational excellence</p>
                    <p className='italic text-xl'>We emphasise maximising efficiency. We have imzplemented a repowering initiative at Vector Green sites, generating additional clean energy at a cost-effective rate. Additionally, we assumed self-operation and maintenance (O&M) responsibility for Vector Green's ground-mounted solar portfolio, having a capacity of 486 MW, well-ahead of schedule. This showcases our dedication to optimising performance across our assets and our expertise in sustaining our growth in the years to come.</p>
                </div>
        </div>
    )
}

export default Driving