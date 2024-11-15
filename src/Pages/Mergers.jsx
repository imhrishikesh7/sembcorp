import React from 'react'
import { motion } from 'framer-motion'
const Mergers = () => {
  return (
    <div className='marginal'>
        <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Mergers and acquisitions</motion.h1>
                <div className='my-4 mergers-bg p-4'
                style={{  
                  backgroundImage: "url(" + "./other/mer1.png" + ")",
                  height: "130vh",
                  width: "100%",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
                >
                    <p className='italic text-xl text-white'>During the reporting year, we took significant strides in expanding our renewable energy footprint through a combination of acquisitions aimed at enhancing our operational efficiency. With the integration of the impressive Vector Green portfolio, having a capacity of 583 MW into our operations, we have strengthened our position as a prominent renewable energy provider. Further, we acquired an operational wind portfolio with a capacity of 228 MW from Leap Green Energy to expand our clean energy sources.</p>
                </div>
    </div>
  )
}

export default Mergers