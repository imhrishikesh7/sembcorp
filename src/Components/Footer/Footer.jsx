import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
    return (
        <footer className="site-footer bg-[#f7f7f7] border-t-4 border-[#59beba]">
            <div className="footer-content">
                {/* Logo Column */}
                <div className="logo-column">
                    <a href="">
                    <img className='footer-logo' src="./home/sembcorp-logo.svg" alt="" />
                    </a>
                </div>
                <div className="footer-info second-column">
                    <h2 className="footer-business-name">© Sembcorp Industries</h2>
                    <p className="footer-business-address">
                    Annual Report 2023-24
                    </p>
                </div>
                {/* Navigation and Info Column */}
                <div className="footer-info third-column">
                    {/* <h2 className="footer-business-name">© Pitti Engineering Limited</h2> */}

                    <p className="footer-business-address">
                    Developed By: 
                    </p>
                    <a href="https://kalolwala.com" target='_blank'><img className='w-[40px]' src="./home/k&a logo.svg" alt="" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
