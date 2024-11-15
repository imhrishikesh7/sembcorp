import React from 'react'
import { motion } from 'framer-motion'
const Accelarating = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Accelerating cleaner energy adoption in India</motion.h1>
            <div className='md:flex md:justify-between my-4'>
                <div className='md:w-[39%]'>
                    <p className='text-xl font-semibold text-[#06a499]'>
                        India’s Green Balancing
                        Act: Powering Growth with
                        Renewables
                    </p>
                    <p className='mb-2 text-lg'>
                        India has set ambitious goals for a cleaner future, to achieve 50% renewable energy and 500 GW capacity from non-fossil fuels by 2030 and carbon neutrality
                        by 2070. On the back of technological advancements in renewables, coupled with continued government support, the total generation capacity has reached 442 GW as of March 2024; out of this, around 52% is contributed by the private sector.
                    </p>
                </div>
                <div className='md:w-[60%]'>
                    <img src="./other/ac1.png" className='md:w-[100%]' alt="" />
                </div>
            </div>
            <img src="./other/ac2.png" className='my-4' alt="" />
            <p className='mb-2'>
                While renewable energy offers immense benefits in terms of sustainability and energy security, its variable nature presents a challenge. This variability makes it difficult to plan and operate the grid solely on renewables. To fully reap the benefits of clean energy, India needs to strike a balance with other reliable sources of power.
            </p>
            <p className='mb-2'>
                <strong>Bridging the Gap: The Role of Thermal Power and Storage:</strong> To achieve a smooth transition, India acknowledges the need for a stable base and has been strategically taking following actions:
            </p>
            <div className='p-4 my-4 bg-[#d9ede8]'>
                <ul className='list-disc px-4'>
                    <li className='mb-3 pb-2 border-b border-[#06a499]'>
                        <strong>Strategic use of coal:</strong> Acknowledging the need for reliable backup, the Government has supported coal production to provide a stable baseload for the grid during the energy transition.
                    </li>
                    <li className='mb-3 pb-2 border-b border-[#06a499]'>
                        <strong>Energy storage push:</strong> Recognising the importance of storage of excess RE power, the Government has implemented policies promoting the development of storage systems. This includes both pumped hydro storage as well as battery energy storage solutions, allowing renewables to be used even when these sources are not available.
                    </li>
                    <li className='mb-3'>
                        <strong>Hybrid and FDRE bids:</strong> A focus on hybrid projects (combining wind and solar) and bids that factor in dispatchability (ability to deliver power on demand) ensure a more consistent power supply and optimise grid utilisation.
                    </li>
                </ul>
            </div>
            <p className='mb-2'>
                By strategically using a mix of renewable and dispatchable power sources, along with energy storage solutions, India can achieve an optimal balance in its energy sector. This will pave the way for an economical, clean and reliable power supply for its growing economy.
            </p>
            <img src="./other/ac3.png" className='my-4' alt="" />
            <p className='font-semibold text-xl mb-2'>
                Measures to increase demand for Renewable Energy
            </p>
            <p className='mb-2'>
                Multiple measures have been taken to increase the demand for renewable energy, which includes:
            </p>
            <img src="./other/ac4.png" className='my-4' alt="" />
            <img src="./other/ac5.png" className='my-4' alt="" />
            <p className='font-semibold text-xl mb-2'>
                Green Hydrogen for a sustainable energy future
            </p>
            <p className='mb-2'>
                The Indian Government launched the “National Green Hydrogen Mission” with an initial outlay of ₹ 19,744 crore, including an outlay of ₹ 17,490 crore
                for the Strategic Interventions for Green Hydrogen Transition (SIGHT) programme. The mission aims to make India a global hub for production, utilisation and export of green hydrogen and its derivatives.
            </p>
            <img src="./other/ac6.png" className='my-4' alt="" />
            <p className='mb-2'>
                Under the SIGHT programme, SECI also issued tenders for providing incentive support for GH2 capacity of 5 lakh ton per annum, which is a production linked mechanism. Under this, an incentive support of up to ₹ 50 per kg has to be provided to the developers.
            </p>
            <p className='mb-2'>
                In order to further provide support to this emerging sector, MNRE has announced a 25- year waiver on ISTS charges, for Green H2 projects which gets commissioned up to Dec, 2030 for a period of 25 years. This is yet to be included in CERC ISTS sharing regulations, post which such waiver shall be available to GH2 plants.
            </p>
            <p className='font-semibold text-xl mb-2'>
                Policy support to unlock growth of energy storage
            </p>
            <p className='mb-2'>
                India has recognised the crucial role of energy storage in its RE ambitions and has recently implemented several policy measures to boost its growth. Here are some key highlights:
            </p>
            <div className='p-4 my-4 bg-[#d9ede8]'>
                <ul className='list-disc px-4'>
                    <li className='mb-3 pb-2 border-b border-[#06a499]'>
                        <strong>Viability Gap Funding (VGF):</strong> The Government announced VGF for Battery Energy Storage Systems (BESS) projects in 2023. This scheme helps bridge the gap between the project cost and the tariff that can be recovered from selling the stored energy.
                    </li>
                    <li className='mb-3 pb-2 border-b border-[#06a499]'>
                        <strong>Energy Storage Obligation (ESO): </strong>Introduced in 2022, the ESO mandates electricity procurement from renewable sources with storage. This creates a guaranteed offtake market for developers, making storage projects more financially viable. The ESO requirement is set to increase every year, further stimulating storage deployment.
                    </li>
                    <li className='mb-3'>
                        <strong>National Energy Storage Policy and National Pumped Hydro Policy: </strong>These policies provide a comprehensive framework for developing and deploying various energy storage technologies, including pumped hydro, a mature and proven technology in India.
                    </li>
                </ul>
            </div>
            <div className='p-4 my-4 bg-[#eeede9]'>
                <p className='text-xl font-semibold text-[#06a499] mb-3'>
                Important regulatory
                developments
                </p>
                <p className='text-xl font-[500] mb-2'>
                    <img src="./other/aci1.png" className='w-[80px]' alt="" />
                    General Network Access (GNA)
                    and Amendment in Sharing of ISTS Charge Regulations
                </p>
                <p className='mb-2'>
                    General Network Access is a major change in grid access regulations in India. Instead of the earlier system of contract- based access and pricing, under GNA,
                    the injecting as well as drawee entities will have access to the grid, independent of nature and duration of power procurement contract. For new projects, generators would have to take only the connectivity and they will be deemed
                    to have access required for dispatch of power. Also, to enable accelerated growth in RE capacity addition, GNA Regulations have provisions for timely completion
                    of associated projects and penalties or cancellation of connectivity if projects are not completed in time.
                </p>
                <p className='mb-2'>
                    CERC has further issued amendment, providing clarity on key issues specifically related to RE GNA, submission of BG, delay in SCOD , among others. Apart from the above, CERC has also introduced a new route for applying connectivity based on BG in lieu of actual land.
                </p>
                <p className='mb-3'>
                    Further, the recent amendment to Sharing of ISTS Charges Regulations has assigned the responsibility of transmission system usage charges solely on the procurers, relieving generators from such obligation. As ISTS charges are location specific, such an amendment will eliminate the disparity and bring all the plants to a level playing field. Sharing Regulations are now also aligned with the notification of Ministry to provide 100% waiver on ISTS charges for the procurement of RE power for projects commissioned till June, 2025. Post 2025, there will be staggered reduction in waiver till June, 2028.
                </p>
                <p className='text-xl font-[500] my-2'>
                    <img src="./other/aci2.png" className='w-[80px]' alt="" />
                    DSM Regulations
                </p>
                <p className='mb-2'>
                    The central regulator has issued an amendment to Regulation on Deviation Settlement Mechanism (DSM), making it more stringent compared to earlier DSM regulations. While the deviation bands have been made stricter, regulations now also allow aggregated schedule at the grid substation. It is anticipated that such a change in the DSM Regulations will push the renewable generators to forecast and schedule generation more accurately on day-ahead basis.
                </p>
                <p className='mb-3'>
                    Also, the role of individual participants for grid stability has now been shifted to the grid operator, through the development of a separate ancillary market. Apart from enhancing safety of the grid, this mechanism opens up opportunities
                    for the generators, especially the ones which can quickly ramp-up / ramp-
                    down their capacities by providing grid support through ancillary services. The DSM bands are expected to further get stringent encouraging the development of forecasting technology.
                </p>
                <p className='text-xl font-[500] my-2'>
                    <img src="./other/aci3.png" className='w-[80px]' alt="" />
                    Indian Electricity Grid Code (IEGC)
                </p>
                <p className='mb-2'>
                    CERC has notified Indian Electricity Grid Code Regulation (IEGC), to align the regulations with multiple developments in the sector, including the Security constraints economic despatch (SCED), DSM and Ancillary services, GNA and Connectivity Regulations, among others.
                </p>
                <p className='mb-2'>
                    IEGC also provides the roles, functions, and responsibilities of the concerned
                    stakeholders connected with the operation
                    of the power system as per the Act, Rules and Notifications issued by the Central Government. All these will help in achieving maximum efficiency of the power system, followed by specific extensive provisions
                    pertaining to-
                </p>
                <div className='p-4 my-4 bg-[#acd6d2]'>
                    <ul className='list-disc px-4'>
                        <li className='mb-3'>
                            Reliability and adequacy of
                            resources
                        </li>
                        <li className='mb-3'>
                            Technical and design criteria for connectivity to the grid, including integration of new elements,
                            trial operation and declaration
                            of commercial operation of generating stations and inter-State
                            transmission systems
                        </li>
                        <li className='mb-3'>
                            Protection setting and performance monitoring of the protection systems, including protection audit
                        </li>
                        <li className='mb-3'>
                            Operational requirements and technical capabilities for secure and reliable grid operation, including load generation balance, outage planning and system operation
                        </li>
                        <li className='mb-3'>
                            Unit commitment, scheduling and despatch criteria for physical
                            delivery of electricity
                        </li>
                        <li className='mb-3'>
                            Integration of renewables
                        </li>
                        <li className='mb-3'>
                            Ancillary services and reserves
                        </li>
                        <li className='mb-3'>
                            Cyber security
                        </li>
                    </ul>
                </div>
                <p className='text-xl font-[500] my-2'>
                    <img src="./other/aci4.png" className='w-[80px]' alt="" />
                    Regulatory developments in
                    Exchange Market
                </p>
                <p className='mb-2'>
                From time to time, the Regulator has come out with several regulatory changes, making the power exchange market more vibrant. Last year, witnessing a sudden increase in electricity demand, the exchange market saw a sharp increase 
                in prices. To balance the interests of developers and the consumers, a price ceiling of ₹ 12 per unit was introduced. Such ceiling on tariff has been further revised to ₹ 10 per unit. Such ceiling tariff for the HP-DAM which has been introduced recently has been fixed at ₹ 20 per unit.
                </p>
                <p className='mb-3'>
                Overall, the Indian power exchange market has come a long way over the past decade. Power Exchanges, which had power trade segments only up to 11 days,  have been allowed a segment with longer duration contracts of up to 90 days. This is expected to increase trading volumes, providing opportunities for both sellers as 
                well as buyers.
                </p>
                <p className='text-xl font-[500] my-2'>
                    <img src="./other/aci5.png" className='w-[80px]' alt="" />
                    CEA has issued phasing plan for implementation of 40% technical minimum load by thermal power plants 
                </p>
                <p>
                The CEA’s plan is a significant step towards a more renewable-powered and stable Indian grid. This will also help in RE integration and infusion of more RE in the country, presenting both opportunities and challenges. By carefully managing the transition, India can leverage the benefits of this plan while mitigating potential drawbacks. Overall, the success will depend on factors like technological advancements to improve thermal plant flexibility, the development of cost- effective energy storage solutions and implementing policies that incentivise clean energy integration.
                </p>
            </div>
        </div>
    )
}

export default Accelarating