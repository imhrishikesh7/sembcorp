import React from 'react'
import { Link } from 'react-router-dom'
const Bod = () => {
    return (
        <div className='marginal'>
            <h1 className='md:text-5xl text-4xl font-semibold text-[#161616] leading-normal'>Profile of the <br /><span className='text-[#00565C]'>Board of Directors</span></h1>
            <div className='md:flex md:justify-between md:items-center my-4'>
                <div className='md:w-[30%] md:pl-2 md:border-l md:border-black'>
                    <div>
                        <img src="./home/bod1.png" alt="" />
                        <p className='font-bold text-[#00565C] text-xl'>Mr. Vipul Tuli</p>
                        <p className=' text-[#00565C] text-xl'>Chairman</p>
                    </div>
                    <p className='my-4'>
                        Mr Tuli oversees Sembcorp’s investments and key stakeholder relationships in India and Bangladesh. He is concurrently the CEO of Sembcorp’s Hydrogen Business and the Group’s operations in the Middle East.
                    </p>
                    <Link to="/profile-of-the-board-of-directors" className='border-b-2 border-[#00565C] text-[#00565C]'>Read More</Link>
                </div>
                <div className='md:w-[30%] md:pl-2 md:border-l md:border-black'>
                    <div>
                        <img src="./home/bod2.png" alt="" />
                        <p className='font-bold text-[#00565C] text-xl'>Mr. Appakudal Nithyanand</p>
                        <p className=' text-[#00565C] text-xl'>Managing Director
                        </p>
                    </div>
                    <p className='my-4'>
                    Mr Nithyanand oversees Sembcorp’s renewable energy operations and strategic growth in India. He holds over 28 years of experience in leadership roles across the infrastructure, real estate, healthcare and utilities sectors. 
                    </p>
                    <Link to="/profile-of-the-board-of-directors" className='border-b-2 border-[#00565C] text-[#00565C]'>Read More</Link>
                </div>
                <div className='md:w-[30%] md:pl-2 md:border-l md:border-black'>
                    <div>
                        <img src="./home/bod3.png" alt="" />
                        <p className='font-bold text-[#00565C] text-xl'>Ms. Nuraliza Osman
                        </p>
                        <p className=' text-[#00565C] text-xl'>Director</p>
                    </div>
                    <p className='my-4'>
                    Ms Nuraliza Osman is a Director on our Board. Ms Osman oversees legal, compliance and ethics matters within the Group. She is an attorney qualified in Singapore and New York and brings rich experience in the energy industry.
                    </p>
                    <Link to="/profile-of-the-board-of-directors" className='border-b-2 border-[#00565C] text-[#00565C]'>Read More</Link>
                </div>

            </div>
        </div>
    )
}

export default Bod