import Head from "next/head";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css"
          integrity="sha512-3sTMt/S2aRaMfmK4R2s6+9tDPxFhL78zTQpDpXnvw8v2b0+x8HtKmVg6I5Jne2fmzACyN1ZgFwcn3Z2sVeqsPQ=="
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-G4zxF3i5eoWO/ZODfF3v1eIv9CQOYVQXkX0s5JXwR0F4qXYR+R9H6k+goxwHbqMAbyjXebXq4VPhB1cznYcJLg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <section id="footer">
        <div className="container contnr-full-wdth-tab">
          <div className="row">
            <div
              className="col-xs-12 col-sm-3 tab-view-sx"
              style={{ padding: 0 }}
            >
              <div className="row">
                <div className="col-xs-12 col-footer">
                  <h4 style={{ marginLeft: "8px", marginBottom: "10px" }}>
                    BLOG
                  </h4>
                  <div className="row">
                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a href="/blog/succession-planning-and-its-importance/">
                        <div className="blog-img">
                          <img
                            src="/images/What-is-Succession-Planning-Why-is-it-Important.jpg"
                            className="img-respncv"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a href="/blog/roles-and-responsibilities-of-hr/">
                        <div className="blog-img">
                          <img
                            src="/images/13-Roles-and-Responsibilities-of-HR-in-a-Company.jpg"
                            className="img-respncv"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a href="/blog/employee-interview-techniques/">
                        <div className="blog-img">
                          <img
                            src="/images/15-Successful-Motivational-Employee-Interview-Techniques-For-2020.jpg"
                            className="img-respncv"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a href="/blog/best-employee-attendance-tracking-apps/">
                        <div className="blog-img">
                          <img
                            src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020.png"
                            className="img-respncv"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a href="/blog/top-router-for-gaming/">
                        <div className="blog-img">
                          <img
                            src="/images/Top-18-Gaming-Routers-To-Use-In-2020.png"
                            className="img-respncv"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a href="/blog/wifi-security-camera/">
                        <div className="blog-img">
                          <img
                            src="/images/15-best-wifi-security-camera-to-buy-in-2020.png"
                            className="img-respncv"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div className="col-xs-12 col-footer-2">
                  <h4 style={{ marginLeft: "8px", textAlign: "left" }}>
                    Subscribe
                  </h4>
                  <ul className="ps-2">
                    <li>
                      <form method="post" id="sub_mail">
                        <span
                          id="form_error_sub"
                          style={{ color: "#ff940f", width: "100%" }}
                        ></span>
                        <span
                          id="form_success_sub"
                          style={{ color: "#b0cb31", width: "100%" }}
                        ></span>
                        <div
                          className="form-group"
                          style={{
                            display: "flex",
                            position: "relative",
                            width: "100%",
                          }}
                        >
                          <input
                            type="email"
                            placeholder="Mail"
                            className="form-control"
                            name="your_email"
                            required
                          />
                          <input type="hidden" id="current_page" value="Home" />
                          <input
                            type="submit"
                            id="subscribe_submit"
                            value="Send"
                          />
                          <div className="sub_loader"></div>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-3 tab-view-sx"
              style={{ padding: 0 }}
            >
              <div className="col-xs-12 col-footer-2">
                <h4 className="padg-sx">PAGES</h4>
                <ul id="footer-list" className="p-zero-sx">
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="/who-we-are/">Who We Are</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="/our-apps/">Our Apps</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="/how-it-works/">How It Works</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="/pricing/">Pricing</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="/contact-us/">Contact</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="/blog/">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-3 tab-view-sx"
              style={{ padding: 0 }}
            >
              <div className="col-xs-12 col-footer mrgnBotm">
                <h4 className="ps-2">OUR PARTNERS</h4>
                <ul id="footer-list-sec" className="ps-2">
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="https://www.wifiattendance.com/software-testing-partner/">
                      Testbytes
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="https://www.wifiattendance.com/digital-marketing-partner/">
                      Jointviews
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="https://www.wifiattendance.com/app-development-partner/">
                      Redbytes
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevronRightIcon-styl"
                    />
                    <a href="https://www.wifiattendance.com/software-development-partner/">
                      Probytes
                    </a>
                  </li>
                </ul>
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-sm-6 download-img tab-view-sx">
                      <a
                        href="https://itunes.apple.com/in/app/wifi-attendance/id1327723248?mt=8&amp;ign-itsct=1327723248-1327723248&amp;ign-itscg=0176&amp;ign-mpt=uo%3D4"
                        target="_blank"
                      >
                        <img
                          src="/images/app-store2.png"
                          className="img-respncv"
                          width="100px"
                        />
                      </a>
                    </div>
                    <div className="col-sm-6 download-img tab-view-sx">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.edsys.wifiattendance&amp;hl=en"
                        target="_blank"
                      >
                        <img
                          src="/images/play-store2.png"
                          className="img-respncv"
                          width="100px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-3 tab-view-sx"
              style={{ padding: 0 }}
            >
              <div className="col-xs-12 col-footer">
                <h4 className="ps-2">CONTACT US</h4>
                <ul id="footer-list2" className="ps-2 mb-2">
                  <li>Wifi Attendance, Floor-3</li>
                  <li>Edsys Towers,</li>
                  <li>Near ICICI Bank ATM</li>
                  <li>Kamaleswaram, Trivandrum</li>
                  <li>Kerala - 695009</li>
                </ul>
                <div className="col-xs-12 col-sm-12 footer-icons footrIconWid">
                  <a
                    href="https://www.facebook.com/wifiattendance/"
                    target="_blank"
                  >
                    <i>
                      <FaFacebookF />
                    </i>
                  </a>
                  <a href="https://twitter.com/wifi_attendance" target="_blank">
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                  <a
                    href="https://in.pinterest.com/wifiattendance/"
                    target="_blank"
                  >
                    <i>
                      <FaPinterestP />
                    </i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wifiattendance/"
                    target="_blank"
                  >
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCFSQetG5qfcpU721_-KGwqg"
                    target="_blank"
                  >
                    <i>
                      <FaYoutube />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </div>
              </div>
              <div className="youtube_subscribe">
                <div
                  id="___ytsubscribe_0"
                  style={{
                    textIndent: "0px",
                    margin: "0px",
                    padding: "0px",
                    background: "transparent",
                    borderStyle: "none",
                    float: "none",
                    lineHeight: "normal",
                    fontSize: "1px",
                    verticalAlign: "baseline",
                    display: "inline-block",
                    width: "173px",
                    height: "48px",
                  }}
                >
                  <iframe
                    ng-non-bindable=""
                    frameBorder="0"
                    hspace="0"
                    marginHeight="0"
                    marginWidth="0"
                    scrolling="no"
                    style={{
                      position: "static",
                      top: "0px",
                      width: "173px",
                      margin: "0px",
                      borderStyle: "none",
                      left: "0px",
                      visibility: "visible",
                      height: "48px",
                    }}
                    tabIndex="0"
                    vspace="0"
                    width="100%"
                    id="I0_1710238777425"
                    name="I0_1710238777425"
                    src="https://www.youtube.com/subscribe_embed?usegapi=1&amp;channelid=UCFSQetG5qfcpU721_-KGwqg&amp;layout=full&amp;count=default&amp;origin=https%3A%2F%2Fwww.wifiattendance.com&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.8uXxGUoumbY.O%2Fd%3D1%2Frs%3DAHpOoo96qx3mL4tzGUOa-0q0udyPRqEAoA%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1710238777425&amp;_gfid=I0_1710238777425&amp;parent=https%3A%2F%2Fwww.wifiattendance.com&amp;pfname=&amp;rpctoken=14637496"
                    data-gapiattached="true"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container icon-con">
          <div
            className="col-xs-12 col-sm-6 footer-icons"
            style={{ padding: "0" }}
          >
            <p>
              © Copyright 2020 wi-fi attendance. All Rights Reserved. Digital
              Marketing By <a href="http://www.jointviews.com/">Jointviews</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
