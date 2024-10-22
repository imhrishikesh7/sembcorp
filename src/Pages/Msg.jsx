import React from 'react'
import { motion } from 'framer-motion'

const Msg = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-4xl text-3xl text-center pb-3 font-semibold bg-gradient-to-l from-[#00565C] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Chairman and Managing Director’s Message </motion.h1>
            <div className='md:flex md:justify-center md:items-center my-4'>
                <div className='p-[5%] bg-[#5CBEBA] text-white md:w-[50%]'>
                    <p className='text-3xl'>
                        Our development capabilities enable us to seize commercial opportunities across the entire supply chain and optimise sector infrastructure. Further, we are exploring hybrid power projects and low-carbon alternatives, such as green hydrogen and its derivatives.
                    </p>
                </div>
                <div className='p-[5%] bg-gray-200 md:w-[50%]'>
                    <p className='bg-black text-white px-2 w-fit mb-2'>Dear Shareholders,</p>
                    <p className=''>
                        The financial year 2023-24 was a transformative period for India’s power sector. Sustained economic growth drove record-high electricity demand, with consumption reaching 1,627 billion units (BUs), an increase of 7.6% year-on-year. Powered by a robust economy, supportive policies and technological advancements in renewables, India now ranks fourth worldwide in renewable energy capacity, and fourth in wind power and fifth in solar power, as per government reportsi. The country’s total generation capacity has reached 442GW as of March 2024, with 52% contributed by the private sector.
                    </p>
                </div>
            </div>
            <p className='mb-2'>
                As a key renewable energy player in India, Sembcorp Green Infra Limited (Sembcorp) continues to contribute to the nation’s energy transition. Keeping pace with
                the rising electricity demand, our power generation also grew 26% year-on-year, during FY2023-24.
            </p>
            <p className='mb-2'>
                This underpinned another year of impressive performance by Sembcorp in the financial year ending March 2024
                (FY2023-24). Despite the volatile global macroeconomic landscape, the Profit after Tax (PAT) increased 32% year-on-year to reach INR 3,594 million, while Earnings before Interest, Tax, Depreciation and Amortisation (EBITDA) was at INR 18,228 million, rising 25% compared to the previous year.
            </p>
            <p className='mb-2 text-[#5CBEBA] font-bold'>
                Favourable policy environment boosting India’s energy
                transition
            </p>

            <p className='mb-2'>
                In FY2023-24, India added an impressive renewable energy capacity of 18.48 GW, over 21% increase from the previous year, as per data from the Ministry of New and Renewable Energyii. Further, over 70%iii of the 26 gigawatts (GW) of the new power generated in the country during this period came from renewable energy sources. To support renewables deployment, the market for low-carbon technologies is steadily gaining traction and is anticipated to become USD80 billion in India by 2030. These trends position India to become a global leader in renewables, battery energy storage and green hydrogen.
            </p>
            <p className='mb-2'>
                Major government initiatives, including the General Network Access regulation, the Indian Electricity Grid Code regulation, the Transmission Charges Sharing regulation and the Green Hydrogen Policy, have accelerated the renewables sector’s growth. It is expected that the 50GW bidding trajectory for renewable energy will enable India to reach its 500GW target by 2030.
            </p>
            <p className='mb-2'>
                The Late Payment Surcharge Rules introduced in June 2022, which require distribution companies (DISCOMs) to maintain adequate payment security mechanism or make advance payments, has instilled financial discipline in the sector. This resulted in the reduction of outstanding dues of DISCOMs by 34%,
                as of March 2024 compared to June 2022. The introduction of a uniform renewable energy tariff for DISCOMs
                from a pooled average tariff from multiple bids will streamline the power purchase agreements’ signing process and enhance transparency.
            </p>
            <p className='mb-2 text-[#5CBEBA] font-bold'>
                Expanding portfolio, increasing efficiencies
            </p>
            <p className='mb-2 '>
                At Sembcorp, we are committed to
                support India’s goal of achieving 500GW of renewables capacity by 2030. We are scaling our operations and expanding our asset portfolio, while strengthening our capabilities across the renewable energy value chain.
            </p>
            <p className='mb-2 '>
                Our renewables portfolio of more than 4.7GW capacity (2.7GW operational
                and 2GW under construction), balanced between solar and wind, enables us to capture emerging opportunities in
                the sector.
            </p>
            <p className='mb-2 '>
                We operate one of India’s largest self- operated wind portfolios, capitalising on the strength of our in-house expertise. Our asset management capabilities are accentuated by strong in-house self- operations and maintenance (O&M)
                skills, with more than two-thirds of our operational projects being currently managed in-house. We have continuously increased utilisation of our assets, achieving an industry-leading energy- based availability (EBA) of 94.4% during this period. Furthermore, our in-house advanced solar analytics tool enabled higher operational efficiencies in our
                solar assets.
            </p>
            <p className='mb-2 '>
                Our development capabilities enable us
                to seize commercial opportunities across the entire supply chain and optimise sector infrastructure. To further enhance our value proposition, we are exploring hybrid power projects and low-carbon alternatives, such as green hydrogen and its derivatives.
            </p>
            <p className='mb-2 '>
                During the year, we added over 1.2GW
                of capacity through strategic wins in solar and hybrid power projects. We completed acquisition of 228MW of wind assets from two special purpose vehicles of Leap Green Energy Private Limited. The entire solar portfolio was transitioned to in-house O&M ahead of schedule. Our efficient project management strengths enabled commissioning of multiple solar projects, contributing 147MW to the state grids of Tamil Nadu and Karnataka. This includes the Pavagada wind project, where we successfully installed 4 MW WTG, which is one of the highest capacities in the region.
            </p>
            <p className='mb-2 '>
                Through strong asset management, our teams have achieved optimised cost, O&M and asset utilisation. Today, we operate some of the most efficient wind and solar assets in India. Our in-house digital asset management platform facilitates real-
                time data monitoring and timely issues resolution, improving asset productivity. Sharpening our engineering and digital capabilities is critical as we integrate acquisitions and develop greenfield projects, ensuring long-term sustainability.
            </p>

            <p className='mb-2 text-[#5CBEBA] font-bold'>
                Commitment to Environment, Social and Governance
            </p>
            <p className='mb-2'>
                Safety through innovation remains the key priority throughout our operations. Our in-house digital application, Integra 2.0 e-PTW, is transforming workplace safety by streamlining the permit-to-work process through a mobile-first solution. The efficacy of this robust safety tool, anchored in strong governance and compliance framework, is explained in detail later in this report.
            </p>
            <p className='mb-2'>
                We are dedicated to creating inclusive and sustainable communities, empowering individuals through education, promoting health and well-being and championing environmental stewardship. Our efforts have earned us consecutive ICC Social Impact Awards from 2022 to 2024, reflecting the impact our programmes on the underserved communities.
            </p>
            <p className='mb-2'>
                We also ensure our expansion plans strict adhere to high safety standards. We maintain zero-tolerance for non- compliance of safety rules. The FICCI Certificate of Appreciation for Excellence in Safety Systems, received in November 2023, is a testament to our commitment of following high safety standards in the power sector.
            </p>
            <p className='mb-2 text-[#5CBEBA] font-bold'>
                Focused on the future
            </p>
            <p className='mb-2'>
                Looking ahead, we aim to accelerate our growth in the renewable energy sector and deepen our commitment to decarbonisation. Backed by our strong execution capabilities and resolute focus on driving energy transition, we will continue to support India’s progress towards its renewables target. This will dovetail with our parent Company, Sembcorp Industries’ target of achieving 25GW gross installed renewables capacity by 2028 globally.
            </p>
            <p className='mb-2'>
                Our strategy in India entails expanding
                our renewables portfolio by prioritising three pillars of growth – greenfield bids, acquisition of quality renewables assets, and growing our base of commercial and industrial customers.
            </p>
            <p className='mb-2'>
                We are poised to capitalise on the emerging opportunities in energy storage and smart grid technologies. With a resilient business strategy and a team of competent professionals, we are confident in leading India’s renewable energy transformation — ensuring a sustainable and prosperous future for all.
            </p>
            <p className='mb-2 text-[#5CBEBA] font-bold'>
                Acknowledgements
            </p>
            <p className='mb-2'>
                The trust of our stakeholders has remained our guiding principle. It has empowered us to build a value-accretive business, overcome challenges and fortify our financial position. We extend our heartfelt appreciation to all team members for their dedication and resilience. We are grateful to our stakeholders for having trust in our capabilities.
            </p>
            <p className='mb-2'>
                We would also like to thank our Board of Directors, including the independent directors – Mr. Radhey Shyam Sharma, Ms. Sangeeta Talwar, and Mr. Kalaikuruchi Jairaj – and our promoters. Your steadfast commitment, invaluable guidance and support advanced our endeavour to drive a clean energy future.
            </p>
            <p className='mb-2'>
                We look forward to continuing this meaningful journey along with all stakeholders.
            </p>

            <div className='my-4 md:flex '>
                <div className='md:mr-4'>
                    <p className='text-xl font-bold text-[#5CBEBA]'>Vipul Tuli</p>
                    <p className='text-xl font-bold'>Chairman</p>
                </div>
                <div className='md:ml-4'>
                    <p className='text-xl font-bold text-[#5CBEBA]'>A Nithyanand</p>
                    <p className='text-xl font-bold'>Managing Director</p>
                </div>
            </div>
            <div className='mt-4 text-xs'>
                <p className='mb-1'>i.  Press Information Bureau (pib.gov.in)</p>
                <p className='mb-1'>ii.  India adds record 18 GW renewable energy capacity in FY24, shows data | News - Business Standard (business-standard.com)</p>
                <p className='mb-1'>iii.  Renewable Sources Generated 71% of India’s Power Generation Capacity (ceew.in) </p>
                <p className='mb-1'>iv.  India’s clean energy transition is rapidly underway, benefiting the entire world – Analysis - IEA</p>
            </div>
        </div>
    )
}

export default Msg