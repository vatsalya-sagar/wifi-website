import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleScroll = () => {
    const headerMain = document.querySelector(".headermain");
    const wrapper = document.querySelector(".wrapper");
    const stepscaptionouter = document.querySelector(".stepscaptionouter");

    if (headerMain) {
      if (window.pageYOffset > headerMain.offsetTop) {
        headerMain.classList.add("fixed");
        headerMain.classList.add("no-margin");
        if (wrapper) {
          wrapper.style.marginTop = "0";
        }
        stepscaptionouter?.style.setProperty("--after-top", "200px");
        stepscaptionouter?.style.setProperty("--after-height", "700px");
      } else {
        headerMain.classList.remove("fixed");
        headerMain.classList.remove("no-margin");
        if (wrapper) {
          wrapper.style.marginTop = "-125px";
        }
        stepscaptionouter?.style.setProperty("--after-top", "320px");
        stepscaptionouter?.style.setProperty("--after-height", "600px");
      }
    }
  };

  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen1(!isOpen1);
  };
  return (
    <div>
      <div className="hdr-top">
        <div className="container">
          <div className="hir-sx" style={{ opacity: 1, bottom: "30px" }}>
            <div id="_hd_expand">
              <div className="_hio"></div>
              <div className="expandButton"></div>
              <div className="_0_sd">
                <div className="_sw _0_sd_a">
                  <img
                    src="https://www.wifiattendance.com/wp-content/themes/wifiattendance/images/india_flag.png"
                    alt="Flag"
                  />
                  <a href="tel:+91 81 1386 0000">
                    <p>+91 811 386 3000</p>
                  </a>
                </div>
                <div className="_sr">
                  <div className="_sw _0_sd_b">
                    <a
                      href="https://service.wifiattendance.com/Plans/Index/"
                      target="_blank"
                    >
                      Register /
                    </a>
                  </div>
                  <div className="_sw _0_sd_c">
                    <a
                      href="https://service.wifiattendance.com/account/login"
                      target="_blank"
                    >
                      Login
                    </a>
                  </div>
                  {/* <div className="_sw _0_sd_d">
                    <a href="#">Demo</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="headermain">
        <div className="brandLogo" id="navbar-logo-sx">
          <a href="/">
            <img src="/images/logo11.png" className="img-respncv" alt="Logo" />
          </a>
        </div>
        <div className="LinkBox">
          <a href="/our-apps/">Our Apps</a>

          {/* <div className="dropdown">
            <div className="dropdown">
              <a href="/" className="who-v-r-colr">
                Product
                <RiArrowDropDownLine
                  style={{
                    fontSize: "20px",
                  }}
                />
              </a>
              <div className="dropdown-content">
                <a href="/our-product/">Canteen Management System Solution</a>
              </div>
            </div>
          </div> */}
          <div className="dropdown">
            <div className="dropdown">
              <a href="/who-we-are/" className="who-v-r-colr">
                Who We Are
                <RiArrowDropDownLine
                  style={{
                    fontSize: "20px",
                  }}
                />
              </a>
              <div className="dropdown-content">
                <a href="/digital-marketing-partner/">
                  Digital Marketing Partner
                </a>
                <a href="/software-testing-partner/">
                  Software Testing Partner
                </a>
                <a href="/app-development-partner/">App Development Partner </a>
                <a href="/software-development-partner/">
                  Software Development Partner
                </a>
              </div>
            </div>
          </div>
          <a href="/how-it-works/">How It Works</a>
          <a href="/pricing/">Pricing</a>
          <a href="/blog/">Blog</a>
          <a href="/contact-us/" className="hdr-contct-btn-style">
            Contact Us
          </a>
          <a
            href="https://www.youtube.com/channel/UCFSQetG5qfcpU721_-KGwqg"
            target="_blank"
          >
            <TfiYoutube
              style={{ color: "rgb(224, 27, 36)", fontSize: "35px" }}
            />
          </a>
          <CiSearch className="_srch_icon" onClick={toggleSearch} />
          {isSearchVisible && (
            <div ref={searchInputRef} className="searchInputContainer">
              <input className="inputd" type="text" placeholder="Search..." />
              <input type="submit" value="Ok" className="searchIconContainer" />
            </div>
          )}
        </div>

        <div className="LinkBox-tab">
          <CiSearch className="_srch_icon" onClick={toggleSearch} />
          {isSearchVisible && (
            <div ref={searchInputRef} className="searchInputContainer1">
              <input className="inputd1" type="text" placeholder="Search..." />
              <input
                type="submit"
                value="Ok"
                className="searchIconContainer1"
              />
            </div>
          )}
          <a
            href="https://www.youtube.com/channel/UCFSQetG5qfcpU721_-KGwqg"
            target="_blank"
          >
            <TfiYoutube
              style={{ color: "rgb(224, 27, 36)", fontSize: "35px" }}
            />
          </a>
          <FaBars className="bar-icon-drawer" onClick={toggleDrawer} />
        </div>
        {isDrawerOpen && (
          <div className="drawer" onClick={toggleDrawer}>
            <div className="drawer-content text-center">
              <a href="/our-apps/">Our Apps</a>
              <a href="/" onClick={toggleDropdown1}>
                Product
                <RiArrowDropDownLine style={{ fontSize: "20px" }} />
              </a>
              {isOpen1 && (
                <div className="inner-drop-down-content">
                  <a href="/our-product/">Canteen Management System Solution</a>
                </div>
              )}
              <a href="/who-we-are/" onClick={toggleDropdown}>
                Who We Are
                <RiArrowDropDownLine style={{ fontSize: "20px" }} />
              </a>
              {isOpen && (
                <div className="inner-drop-down-content">
                  <a href="/digital-marketing-partner/">
                    Digital Marketing Partner
                  </a>
                  <a href="/software-testing-partner/">
                    Software Testing Partner
                  </a>
                  <a href="/app-development-partner/">
                    App Development Partner
                  </a>
                  <a href="/software-development-partner/">
                    Software Development Partner
                  </a>
                </div>
              )}
              <a href="/how-it-works/">How It Works</a>
              <a href="/pricing/">Pricing</a>
              <a href="/blog/">Blog</a>
              <a href="/contact-us/" className="drwr-contct-btn-style">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
