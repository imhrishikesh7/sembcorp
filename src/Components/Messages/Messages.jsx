import React from 'react'

const Messages = () => {
    return (
        <div className='marginal'>
            <h1 className='md:text-5xl text-4xl font-semibold text-[#161616] leading-normal'><span className='text-[#00565C]'>Chairman </span>and <br /><span className='text-[#00565C]'>Managing Director’s <br /></span>Message</h1>
            <div className='md:flex my-5 md:justify-between md:items-center'>
                <div className='md:w-[60%] bg-[#5CBEBA] relative text-white md:px-[8%] md:py-[4%] p-2 md:rounded-bl-3xl'>
                    <img src="./home/quotes.png" className='absolute top-[0] left-[1%] w-[90px]' alt="" />
                    <p className='mb-4'>
                        Our development capabilities enable us to seize commercial opportunities across the entire supply chain and optimise sector infrastructure.
                    </p>
                    <p>
                        Further, we are exploring hybrid power projects and low-carbon alternatives, such as green hydrogen and its derivatives.
                    </p>
                </div>
                <div className='md:w-[20%] md:mr-2 m-auto md:m-0'>
                    <img src="./home/msg1.png" className='w-full' alt="" />
                </div>
                <div className='md:w-[20%] m-auto md:m-0'>
                <img src="./home/msg2.png" className='w-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Messages