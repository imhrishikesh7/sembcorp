import React from 'react'
import { motion } from 'framer-motion'

const Building = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Building an empowered talent pool</motion.h1>
            <p className='text-xl text-[#06a499] font-semibold mb-2'>
                Employee engagement
            </p>
            <p className='mb-2'>
                We prioritise creating a supportive work environment that encourages participation, recognises employee achievements and builds a strong sense of community. Through targeted initiatives, we ensure that our people feel valued and empowered to contribute their best to fulfill organisational objectives.
            </p>
            <p className='mb-2'>
                We regularly solicit employee feedback through internal surveys such as ‘Make Us Better’ review and Employee Wellness surveys. Also, group discussions and regular town halls are conducted every quarter on a regional (South Asia) basis. These forums promote an open communication culture to effectively address employee concerns. We also aim to foster a culture of belonging through virtual sessions with our site-based employees and dedicated leadership connect sessions.
            </p>
            <p className='mb-2'>
                Our Human Capital Management (HCM) system platform offers a suite of features designed to streamline HR processes and empower our employees. Darwinbox provides a centralised hub for managing organisational structure, employee data and the entire employee lifecycle. It enhances performance management, leave management, trips and related expenses, as well as learning and development initiatives.
            </p>
            <b className='mb-2'>
                Mentioned below are some of the initiatives that we have rolled out for enhancing employee well-being-
            </b>
            <img src="./other/bld1.png" className='my-4' alt="" />
            <div className='md:flex md:justify-between my-4'>
                <div className='md:w-[69%]'>
                    <p className='text-xl text-[#06a499] font-semibold mb-2'>
                        Talent management
                    </p>
                    <p className='mb-2'>
                        We understand that our continued
                        success hinges on building a pool of talented individuals. This is why we
                        have implemented a robust talent management programme with a particular emphasis on nurturing and developing young professionals in critical roles. This programme equips future leaders with
                        the skills and expertise required to excel in functions such as business development, contracts, finance and procurement, ensuring a dynamic and future-ready workforce.
                    </p>
                    <p className='mb-2'>
                        We are committed to cultivating a
                        high-performing workforce by executing
                        a comprehensive talent management strategy, focusing on both performance optimisation and new hire integration.
                    </p>
                    <p className='mb-2'>
                        On the performance side, we ensure alignment between departmental goals and the Balanced Scorecard (BSC) at both the group and market level. Additionally, we have integrated the Sembcorp values into our performance evaluation process, enabling a more holistic assessment
                        of employee contributions. To further differentiate performance levels, we have implemented a tighter rating distribution. We have also launched an online tool
                        to facilitate continuous feedback, empowering employees and managers to engage in ongoing development conversations.
                    </p>
                </div>
                <div className='md:w-[29%]'>
                    <img src="./other/bld2.png" alt="" />
                </div>
            </div>
            <div className='md:flex md:justify-between my-4'>
                <div className='md:w-[39%]'>
                    <p className='text-xl text-[#06a499] font-semibold mb-2'>
                        Training and development
                    </p>
                    <p className='mb-2'>
                        Acknowledging the requirement of consistent improvement for sustained growth, we provide our team members with dedicated learning and development programmes. Also, employees are urged
                        to stay abreast of latest industry trends and upskill themselves. This commitment to employee development ensures our team is prepared to tackle new challenges, embrace innovation and contribute to our long-term success.
                    </p>
                    <p className='mb-2'>
                        We understand the significance of able leadership at all levels and therefore,
                        offer targeted programmes for different hierarchical positions. Further, aligned with our commitment to shaping a sustainable future, we encourage all employees to participate in relevant sustainability courses. We also aim to identify exception talent and invest in their career advancement
                        by sponsoring their pursuit of advanced programmes and relevant certifications.
                    </p>
                </div>
                <div className='md:w-[59%]'>
                    <img src="./other/bld3.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Building