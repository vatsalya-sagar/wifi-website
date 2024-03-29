import React from 'react'
import { FaPhoneVolume } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Head from 'next/head';
import ContactForm from '@/components/ContactForm';

const contact = () => {
    return (
        <>
         <Head>
        <title>Contact-Us</title>
       
      </Head>
        <div className='mainsection'>
            <div className="parallaxwindowco">
                <section id="banner" className='bannerco'>
                    <div className="conconco">
                        <div className="container">
                            <h2 className='titleco'>CONTACT US</h2>
                        </div>
                    </div>
                </section>
            </div>
           
            <section id="map" className='mapco'>
                <p className="maptextco">Interested in <span className='spantxt'>Wifiattendance Management System</span>?</p>
                <p className="maptextco">We would love to hear from you</p>
                {/* <div className="row">
                <div className="col-xs-12" id="map-column">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.319367874583!2d76.94576701478263!3d8.46829219391105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb116e511e37%3A0x4b39514e38f43fa4!2sWi-Fi+Attendance!5e0!3m2!1sen!2sin!4v1522211922643" width="100%" height="450" frameborder="0" style={{border: "0"}} allowFullScreen title="Map"></iframe>
                </div>
            </div> */}
            </section>
            <section id="bg" className='bgco'>
                
                <div className="contactco" id="contact-col">
                    <div className="row mainco">
                        <div className="col-xs-12 col-sm-6 addstyleco centerco">
                            <h4 className='hfour'> TRIVANDRUM</h4>
                            <p className='para'>Wi-fi Attendance, Floor-3, Edsys Towers,<br /> Near ICICI Bank ATM, Kamaleswaram, <br />Trivandrum, Kerala-695009</p>

                            <h4 className='hfour'>PUNE</h4>
                            <p className='para'>Wi-fi Attendance, 2nd Floor, 125/2, Sainiketan <br />  Colony Kalas road, Visharant Wadi, Pune,<br /> Maharashtra-411015</p>

                            <div className="row">
                                <div className="col-xs-12  col-sm-12">
                                    <p className='para'>
                                        {/* <i className="fa fa-volume-control-phone"></i> */}
                                        <FaPhoneVolume className='fontco' />

                                        <a href="tel:+91 811 386 3000" className='alink'>+91 811 386 3000</a>
                                    </p>

                                    <p className='para'>
                                        {/* <i className="fa fa-envelope-o"></i> */}
                                        <HiOutlineEnvelope className="fontco" />

                                        <a href="mailto:info@wifiattendance.com" className='alink'>info@wifiattendance.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <hr />
                            </div>
                            <div className="col-sm-12 addricons">
                                <a href="https://www.facebook.com/wifiattendance/" className='asocial' >
                                    {/* <i className="fa fa-facebook"></i> */}
                                    <FaFacebookF className="fontco"/>                                   
                                </a>
                                <a href="https://twitter.com/wifi_attendance"  className='asocial'>
                                    {/* <i className="fa fa-twitter"></i> */}
                                    <FaTwitter className="fontco"/>

                                    </a>
                                <a href="https://www.linkedin.com/company/wifiattendance/"  className='asocial'>
                                    {/* <i className="fa fa-linkedin"></i> */}
                                    <FaLinkedinIn  className="fontco"/>

                                    </a>
                                <a href="https://www.youtube.com/channel/UCFSQetG5qfcpU721_-KGwqg" target="_blank" className='asocial'>
                                    {/* <i className="fa fa-youtube"></i> */}
                                    <TfiYoutube className="fontco"/>

                                    </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 contactstyleco">
                            <h3 className='hthree'>QUICK CONTACT</h3>
                           <ContactForm/>
                           
                        </div>
                    </div>
                </div>
            </section></div>
        </>

    )
}

export default contact
