import Link from "next/link";
import React, { useState } from "react";
import { FaCogs } from "react-icons/fa";

const Dem = () => {
  const [openSection, setOpenSection] = useState("");
  const [showNormalBlogNav, setShowNormalBlogNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };
  const handleOpenSection = (sectionId) => {
    setOpenSection(sectionId);
    setShowNormalBlogNav(true);
  };

  return (
    <>
      <div id="" className="Overmain">
        {!showNormalBlogNav && (
          <div className="NormalBlog">
            <div className="blogSection1">
              <div className="blogSEcMain" id="BlogMainSection">
                <div className="col-md-6">
                  <div className="">
                    <Link
                      className="linktxt"
                      href="/blog/succession-planning-and-its-importance/"
                    >
                      <h2>What is Succession Planning? Why is it Important?</h2>
                    </Link>
                  </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div>
                    <div>
                      <Link
                        className="linktxt"
                        href="/blog/category/attendance-tracker-software/"
                      >
                        <h4>Attendance Tracker Software </h4>
                      </Link>
                      <Link
                        className="linktxt"
                        href="/blog/best-employee-attendance-tracking-apps/"
                      >
                        <p>15 Best Employee Attendance Tracking Apps 2020</p>
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="linktxt"
                        href="/blog/category/attendance-tracker-software/"
                      >
                        <h4>Safety and Security </h4>
                      </Link>
                      <Link
                        className="linktxt"
                        href="/blog/best-employee-attendance-tracking-apps/"
                      >
                        <p>15 Best WiFi Security Camera To Buy In 2020</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogSection2">
              <div className="row">
                <div className="col-md-12">
                  <div className="_blg-ct-a ">
                    <div className="collapse" id="listblogA1">
                      <ul>
                        <li>
                          <a
                            className="color"
                            href="/blog/category/hr-management/"
                          >
                            HR Management
                          </a>
                        </li>
                        <li>
                          <a
                            className="color"
                            href="/blog/category/infographic/"
                          >
                            Infographic
                          </a>
                        </li>
                        <li>
                          <a
                            className="color"
                            href="category/safety-and-security/"
                          >
                            Safety and Security
                          </a>
                        </li>
                        <li>
                          <a className="color" href="/blog/category/general/">
                            General
                          </a>
                        </li>
                        <li>
                          <a
                            className="color"
                            href="/blog/category/attendance-tracker-software/"
                          >
                            Attendance Tracker Software
                          </a>
                        </li>
                        <li>
                          <a className="color" href="/blog/category/wifi-tech/">
                            WiFi Tech
                          </a>
                        </li>
                        <li>
                          <a
                            className="color"
                            href="/blog/category/work-culture/"
                          >
                            Work Culture
                          </a>
                        </li>
                        <li>
                          <a
                            className="color"
                            href="/blog/category/corporate-wellness/"
                          >
                            Corporate Wellness
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-container blogSection2Inv">
              <button className="CogsBlog" onClick={handleDropdownToggle}>
                <FaCogs className="FaCogs" /> Categories
              </button>
              {dropdownOpen && (
                <div className="link-container dropsubBlog">
                  <ul>
                    <li>
                      <a href="/blog/category/hr-management/">HR Management</a>
                    </li>
                    <li>
                      <a href="/blog/category/infographic/">Infographic</a>
                    </li>
                    <li>
                      <a href="/blog/category/safety-and-security/">
                        Safety and Security
                      </a>
                    </li>
                    <li>
                      <a href="/blog/category/general/">General</a>
                    </li>
                    <li>
                      <a href="/blog/category/attendance-tracker-software/">
                        Attendance Tracker Software
                      </a>
                    </li>
                    <li>
                      <a href="/blog/category/wifi-tech/">WiFi Tech</a>
                    </li>
                    <li>
                      <a href="/blog/category/work-culture/">Work Culture</a>
                    </li>
                    <li>
                      <a href="/blog/category/corporate-wellness/">
                        Corporate Wellness
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="blogSection3" id="blogSection3">
              <div className="blogSec3main">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="BlogBox">
                      <h4 className="text-center">Recent Blogs</h4>
                      <div className="row">
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/succession-planning-and-its-importance/"
                          >
                            <img
                              src="/images/What-is-Succession-Planning-Why-is-it-Important.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/succession-planning-and-its-importance/"
                            >
                              <p>
                                What is Succession Planning? Why is it
                                Important?
                              </p>
                            </Link>
                            <time className="blog-time">January 2, 2020</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/roles-and-responsibilities-of-hr/"
                          >
                            <img
                              src="/images/13-Roles-and-Responsibilities-of-HR-in-a-Company.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/roles-and-responsibilities-of-hr/"
                            >
                              <p>
                                13 Roles And Responsibilities of HR in a Company
                              </p>
                            </Link>
                            <time className="blog-time">December 23, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/employee-interview-techniques/"
                          >
                            <img
                              src="/images/15-Successful-Motivational-Employee-Interview-Techniques-For-2020.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/employee-interview-techniques/"
                            >
                              <p>
                                15 Successful Motivational Employee Interview
                                Techniques For 2020
                              </p>
                            </Link>
                            <time className="blog-time">December 5, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/best-employee-attendance-tracking-apps/"
                          >
                            <img
                              src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020.png"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/best-employee-attendance-tracking-apps/"
                            >
                              <p>
                                15 Best Employee Attendance Tracking Apps 2020
                              </p>
                            </Link>
                            <time className="blog-time">November 20, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/top-router-for-gaming/"
                          >
                            <img
                              src="/images/Top-18-Gaming-Routers-To-Use-In-2020.png"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/top-router-for-gaming/"
                            >
                              <p>Top 18 Router For Gaming To Use In 2020</p>
                            </Link>
                            <time className="blog-time">November 17, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/wifi-security-camera/"
                          >
                            <img
                              src="/images/15-best-wifi-security-camera-to-buy-in-2020.png"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/wifi-security-camera/"
                            >
                              <p>15 Best WiFi Security Camera To Buy In 2020</p>
                            </Link>
                            <time className="blog-time">November 17, 2019</time>
                          </div>
                        </div>
                        <div className="blog_SideSection">
                          <h4>Infographic</h4>

                          <div className="more_blog">
                            <Link
                              className="linktxt more_blogLink"
                              href="/blog/category/infographic/"
                            >
                              6 More Blogs
                            </Link>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/how-poor-leave-management-impacts-business/"
                          >
                            <img
                              src="/images/6-ways-how-poor-Leave-management-impacts-business.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/how-poor-leave-management-impacts-business/"
                            >
                              <p>
                                6 Ways How Poor Leave Management Impacts
                                Business
                              </p>
                            </Link>
                            <time className="blog-time">May 6, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/workforce-management/"
                          >
                            <img
                              src="/images/Workforce-Management-5-Steps-For-Getting-It-Right.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/workforce-management/"
                            >
                              <p>
                                Workforce Management: 5 Steps For Getting It
                                Right!
                              </p>
                            </Link>
                            <time className="blog-time">April 30, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/managing-millennial-employees/"
                          >
                            <img
                              src="/images/Managing-Millennial-Employees.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/managing-millennial-employees/"
                            >
                              <p>
                                Managing Millennial Employees: Getting Game
                                Right!
                              </p>
                            </Link>
                            <time className="blog-time">March 25, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/time-management/"
                          >
                            <img
                              src="/images/15-01-2018_7-Keys-to-time-management-featured-image-2.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/time-management/"
                            >
                              <p>7 Keys To Time Management</p>
                            </Link>
                            <time className="blog-time">January 23, 2019</time>
                          </div>
                        </div>
                        <div className="blog_SideSection">
                          <h4>Work Culture</h4>

                          <div className="more_blog">
                            <Link
                              className="linktxt more_blogLink"
                              href="/blog/category/work-culture/"
                            >
                              12 More Blogs
                            </Link>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/how-to-become-a-digital-nomad/"
                          >
                            <img
                              src="/images/How-To-Become-A-Digital-Nomad-Step-By-Step-Guide.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/how-to-become-a-digital-nomad/"
                            >
                              <p>
                                How To Become a Digital Nomad
                                [Step-by-Step-Guide]
                              </p>
                            </Link>
                            <time className="blog-time">October 18, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/reasons-why-corporate-fitness-programs-fail/"
                          >
                            <img
                              src="/images/15-reasons-why-corporate-fitness-programs-fail-1.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/reasons-why-corporate-fitness-programs-fail/"
                            >
                              <p>
                                15 Reasons Why Corporate Fitness Programs Fail
                              </p>
                            </Link>
                            <time className="blog-time">August 2, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/business-intelligence-tools/"
                          >
                            <img
                              src="/images/27-Business-Intelligence-tools-for-enhanced-reporting-and-collaboration.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/business-intelligence-tools/"
                            >
                              <p>
                                27 Business Intelligence Tools For Enhanced
                                Reporting And Collaboration
                              </p>
                            </Link>
                            <time className="blog-time">June 26, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/performance-appraisal/"
                          >
                            <img
                              src="/images/Performance-Appraisal-All-You-Need-To-Know.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/performance-appraisal/"
                            >
                              <p>
                                Performance Appraisal – All You Need To Know
                              </p>
                            </Link>
                            <time className="blog-time">June 11, 2019</time>
                          </div>
                        </div>
                        <div className="blog_SideSection">
                          <h4>General</h4>
                          <div className="more_blog">
                            <Link
                              className="linktxt more_blogLink"
                              href="/blog/category/general/"
                            >
                              24 More Blogs
                            </Link>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/best-employee-attendance-tracking-apps/"
                          >
                            <img
                              src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020 (1).png"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/best-employee-attendance-tracking-apps/"
                            >
                              <p>
                                15 Best Employee Attendance Tracking Apps 2020
                              </p>
                            </Link>
                            <time className="blog-time">November 20, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/inspirational-movies-entrepreneurs/"
                          >
                            <img
                              src="/images/Top-10-Inspirational-Movies-For-Entrepreneurs-new.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/inspirational-movies-entrepreneurs/"
                            >
                              <p>
                                Top 10 Inspirational Movies For Entrepreneurs
                              </p>
                            </Link>
                            <time className="blog-time">March 18, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/delegation-of-authority/"
                          >
                            <img
                              src="/images/04-02-2019_What-is-delegation-of-authority-How-id-it-beneficial-to-business.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10 ">
                            <Link
                              className="linktxt"
                              href="/blog/delegation-of-authority/"
                            >
                              <p>
                                What Is Delegation of Authority? How Is It
                                Beneficial To Business?﻿
                              </p>
                            </Link>
                            <time className="blog-time">March 7, 2019</time>
                          </div>
                        </div>
                        <div className="SmBoxBlog col-xl-12 col-lg-12 col-md-6 col-sm-12">
                          <Link
                            className="linktxt"
                            href="/blog/dealing-with-difficult-boss/"
                          >
                            <img
                              src="/images/11-01-2019_10-Tips-for-Dealing-With-a-Difficult-Boss.edited.jpg"
                              alt=""
                              className="BlogmainSm"
                            />
                          </Link>
                          <div className="blog10">
                            <Link
                              className="linktxt"
                              href="/blog/dealing-with-difficult-boss/"
                            >
                              <p>10 Tips For Dealing With A Difficult Boss</p>
                            </Link>
                            <time className="blog-time">January 30, 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div className="row _bm0">
                      <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5">
                        <div className="_blg-grd-0a2">
                          <div className="blog_SideSection">
                            <h4>HR Management</h4>

                            <div className="more_blog">
                              <Link
                                className="linktxt more_blogLink"
                                href="/blog/category/hr-management/"
                              >
                                66 More Blogs
                              </Link>
                            </div>
                          </div>
                          <div className="Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/succession-planning-and-its-importance/"
                            >
                              <img
                                src="/images/What-is-Succession-Planning-Why-is-it-Important.jpg"
                                alt=""
                                className="BlogmainMd"
                              />
                            </Link>
                            <div className="_blg-grd-0a2-ul">
                              <span>HR Management</span>
                              <Link
                                className="linktxt"
                                href="/blog/succession-planning-and-its-importance/"
                              >
                                <h3>
                                  What is Succession Planning? Why is it
                                  Important?
                                </h3>
                              </Link>
                              <time className="_blg-time">January 2, 2020</time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/roles-and-responsibilities-of-hr/"
                            >
                              <img
                                src="/images/13-Roles-and-Responsibilities-of-HR-in-a-Company.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/roles-and-responsibilities-of-hr/"
                              >
                                <p>
                                  13 Roles And Responsibilities of HR in a
                                  Company
                                </p>
                              </Link>
                              <time className="blog-time">
                                December 23, 2019
                              </time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/employee-interview-techniques/"
                            >
                              <img
                                src="/images/15-Successful-Motivational-Employee-Interview-Techniques-For-2020.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/employee-interview-techniques/"
                              >
                                <p>
                                  15 Successful Motivational Employee Interview
                                  Techniques For 2020
                                </p>
                              </Link>
                              <time className="blog-time">
                                December 5, 2019
                              </time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/benefits-of-studying-human-resource-management/"
                            >
                              <img
                                src="/images/10-Benefits-of-Studying-Human-Resource-Management-in-2020.png"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/benefits-of-studying-human-resource-management/"
                              >
                                <p>
                                  10 Benefits of Studying Human Resource
                                  Management in 2020
                                </p>
                              </Link>
                              <time className="blog-time">
                                November 11, 2019
                              </time>
                            </div>
                          </div>
                          <div className="blg_gif">
                            <Link
                              className="linktxt"
                              href="/manager-app/"
                              target="_blank"
                            >
                              <img
                                src="/images/Gif-Banner-blog.gif"
                                alt="image"
                                className="InboxOpen"
                              />
                            </Link>
                          </div>
                          <div className="Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/wifi-security-camera/"
                            >
                              <img
                                src="/images/15-best-wifi-security-camera-to-buy-in-2020.png"
                                alt=""
                                className="BlogmainMd"
                              />
                            </Link>
                            <div className="_blg-grd-0a2-ul">
                              <span>
                                Safety and Security <span>WiFi Tech</span>
                              </span>
                              <Link
                                className="linktxt"
                                href="/blog/wifi-security-camera/"
                              >
                                <h3>
                                  15 Best WiFi Security Camera To Buy In 2020
                                </h3>
                              </Link>
                              <time className="_blg-time">
                                November 17, 2019
                              </time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/parental-control-apps/"
                            >
                              <img
                                src="/images/25-Best-Parental-Control-Apps.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/parental-control-apps/"
                              >
                                <p>
                                  Top 25 Parental Control Apps To Use In 2020{" "}
                                </p>
                              </Link>
                              <time className="blog-time">July 1, 2019</time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/parental-control-routers/"
                            >
                              <img
                                src="/images/Top-20-Parental-Control-Routers-to-Use-in-2019.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/parental-control-routers/"
                              >
                                <p>
                                  Top 20 Parental Control Routers to Use in 2019
                                </p>
                              </Link>
                              <time className="blog-time">
                                January 10, 2019
                              </time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/wivi-technology/"
                            >
                              <img
                                src="/images/08-10-2018_Wifi-can-let-you-see-through-walls-Know-How.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/wivi-technology/"
                              >
                                <p>
                                  WiFi Can Let You See Through Walls - Know How!
                                </p>
                              </Link>
                              <time className="blog-time">
                                October 15, 2018
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-7 col-xl-7">
                        <div className="_blg-grd-0a3">
                          <div className="blog_SideSection">
                            <h4>WiFi Tech</h4>

                            <div className="more_blog">
                              <Link className="linktxt more_blogLink" href="">
                                45 More Blogs
                              </Link>
                            </div>
                          </div>
                          <div className="Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/best-employee-attendance-tracking-apps/"
                            >
                              <img
                                src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020.png"
                                alt=""
                                className="BlogmainMd"
                              />
                            </Link>
                            <div className="_blg-grd-0a3-ul">
                              <span>
                                Attendance Tracker Software
                                <span>
                                  General <span>WiFi Tech</span>
                                  <Link
                                    className="linktxt"
                                    href="/blog/best-employee-attendance-tracking-apps/"
                                  >
                                    <h3>
                                      15 Best Employee Attendance Tracking Apps
                                      2020
                                    </h3>
                                  </Link>
                                  <time className="_blg-time">
                                    November 20, 2019
                                  </time>
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/top-router-for-gaming/"
                            >
                              <img
                                src="/images/Top-18-Gaming-Routers-To-Use-In-2020.png"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/top-router-for-gaming/"
                              >
                                <p>Top 18 Router For Gaming To Use In 2020</p>
                              </Link>
                              <time className="blog-time">
                                November 17, 2019
                              </time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/wifi-security-camera/"
                            >
                              <img
                                src="/images/15-best-wifi-security-camera-to-buy-in-2020.png"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/wifi-security-camera/"
                              >
                                <p>
                                  15 Best WiFi Security Camera To Buy In 2020
                                </p>
                              </Link>
                              <time className="blog-time">
                                November 17, 2019
                              </time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/best-wifi-routers/"
                            >
                              <img
                                src="/images/Best-WIFI-routers-2020.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/best-wifi-routers/"
                              >
                                <p>15 Best WiFi Routers For 2020</p>
                              </Link>
                              <time className="blog-time">
                                October 29, 2019
                              </time>
                            </div>
                          </div>
                          <div className="blog_SideSection">
                            <h4>Attendance Tracker Software</h4>

                            <div className="more_blog">
                              <Link className="linktxt more_blogLink" href="">
                                19 More Blogs
                              </Link>
                            </div>
                          </div>
                          <div className="Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/best-employee-attendance-tracking-apps/"
                            >
                              <img
                                src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020.png"
                                alt=""
                                className="BlogmainMd"
                              />
                            </Link>
                            <div className="_blg-grd-0a3-ul">
                              <span>
                                Attendance Tracker Software
                                <span>
                                  General <span>WiFi Tech</span>
                                  <Link
                                    className="linktxt"
                                    href="/blog/best-employee-attendance-tracking-apps/"
                                  >
                                    <h3>
                                      15 Best Employee Attendance Tracking Apps
                                      2020
                                    </h3>
                                  </Link>
                                  <time className="_blg-time">
                                    November 20, 2019
                                  </time>
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/wifi-attendance-app-2-0-launched/"
                            >
                              <img
                                src="/images/WiFi-Attendance-App-2-0-Launched.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/wifi-attendance-app-2-0-launched/"
                              >
                                <p>
                                  WiFi Attendance App 2.0 Launched! Check its
                                  Delightful New Features
                                </p>{" "}
                              </Link>
                              <time className="blog-time">
                                December 18, 2018
                              </time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/time-tracking-software/"
                            >
                              <img
                                src="/images/Essential-Features-of-Time-Tracking-Software-with-Benefits-V4.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/time-tracking-software/"
                              >
                                <p>
                                  8 Essential Features of Time Tracking Software
                                  with Benefits
                                </p>
                              </Link>
                              <time className="blog-time">October 9, 2018</time>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/best-wifi-routers/"
                            >
                              <img
                                src="/images/10-Benefits-of-web-based-Time-clock-app-V2.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/best-wifi-routers/"
                              >
                                <p>11 Benefits of Web Based Time Clock App</p>
                              </Link>
                              <time className="blog-time">October 3, 2018</time>
                            </div>
                          </div>
                          <div className="blog_SideSection">
                            <h4>Corporate Wellness</h4>

                            <div className="more_blog">
                              <Link className="linktxt more_blogLink" href="">
                                2 More Blogs
                              </Link>
                            </div>
                          </div>
                          <div className="Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/reasons-why-corporate-fitness-programs-fail/"
                            >
                              <img
                                src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020.png"
                                alt=""
                                className="BlogmainMd"
                              />
                            </Link>
                            <div className="_blg-grd-0a3-ul">
                              <span>
                                Corporate Wellness
                                <span>
                                  General <span>Work Culture</span>
                                  <Link
                                    className="linktxt"
                                    href="/blog/reasons-why-corporate-fitness-programs-fail/"
                                  >
                                    <h3>
                                      15 Reasons Why Corporate Fitness Programs
                                      Fail
                                    </h3>
                                  </Link>
                                  <time className="_blg-time">
                                    August 2, 2019
                                  </time>
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="SmBoxBlog Blog2wh">
                            <Link
                              className="linktxt"
                              href="/blog/corporate-companies-best-employee-wellness-program/"
                            >
                              <img
                                src="/images/15-Corporate-Companies-With-Best-Employee-Wellness-Program.jpg"
                                alt=""
                                className="BlogmainSm"
                              />
                            </Link>
                            <div className="blog10">
                              <Link
                                className="linktxt"
                                href="/blog/corporate-companies-best-employee-wellness-program/"
                              >
                                <p>
                                  15 Corporate Companies With Best Employee
                                  Wellness Program
                                </p>
                              </Link>
                              <time className="blog-time">July 19, 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="dropdown-container blogSection2Inv">
          <button className="CogsBlog" onClick={handleDropdownToggle}>
            <FaCogs className="FaCogs" /> Categories
          </button>
          {dropdownOpen && (
            <div className="link-container dropsubBlog">
              <ul>
                <li>
                  <a href="/blog/category/hr-management/">HR Managementeee</a>
                </li>
                <li>
                  <a href="/blog/category/infographic/">Infographic</a>
                </li>
                <li>
                  <a href="/blog/category/safety-and-security/">
                    Safety and Security
                  </a>
                </li>
                <li>
                  <a href="/blog/category/general/">General</a>
                </li>
                <li>
                  <a href="/blog/category/attendance-tracker-software/">
                    Attendance Tracker Software
                  </a>
                </li>
                <li>
                  <a href="/blog/category/wifi-tech/">WiFi Tech</a>
                </li>
                <li>
                  <a href="/blog/category/work-culture/">Work Culture</a>
                </li>
                <li>
                  <a href="/blog/category/corporate-wellness/">
                    Corporate Wellness
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div> */}
        {/* {showNormalBlogNav && ( */}
        {/* <div className="NormalBlogNav">
            <div id="banner">
              <div className="con-con" id="BlogMainSection">
                <div className="container title">
                  {openSection === "Sec1" && (
                    <h2 className="text-center">
                      Category Archives: Hr Mangement
                    </h2>
                  )}
                  {openSection === "Sec2" && (
                    <h2 className="text-center">
                      Category Archives: Infographic
                    </h2>
                  )}
                  {openSection === "Sec3" && (
                    <h2 className="text-center">
                      Category Archives: Safety and Security
                    </h2>
                  )}
                  {openSection === "Sec4" && (
                    <h2 className="text-center">Category Archives: General</h2>
                  )}
                  {openSection === "Sec5" && (
                    <h2 className="text-center">
                      Category Archives: Attendance Tracker Software
                    </h2>
                  )}
                  {openSection === "Sec6" && (
                    <h2 className="text-center">
                      Category Archives: WiFi Tech
                    </h2>
                  )}
                  {openSection === "Sec7" && (
                    <h2 className="text-center">
                      Category Archives: Work Culture
                    </h2>
                  )}
                  {openSection === "Sec8" && (
                    <h2 className="text-center">
                      Category Archives: Corporate Wellness
                    </h2>
                  )}
                </div>
              </div>
            </div>
            <div className="blogSection1">
              <div className="blogSEcMain" id="BlogMainSection">
                <div className="col-md-6">
                  <div className="">
                    <Link
                      className="linktxt linkhovtext"
                      href="/blog/succession-planning-and-its-importance/"
                    >
                      <h2>What is Succession Planning? Why is it Important?</h2>
                    </Link>
                  </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div>
                    <div>
                      <Link
                        className="linktxt linkhovtext"
                        href="/blog/category/attendance-tracker-software/"
                      >
                        <h4>Attendance Tracker Software </h4>
                      </Link>
                      <Link
                        className="linktxt linkhovtext"
                        href="/blog/best-employee-attendance-tracking-apps/"
                      >
                        <p>15 Best Employee Attendance Tracking Apps 2020</p>
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="linktxt linkhovtext"
                        href="/blog/category/attendance-tracker-software/"
                      >
                        <h4>Safety and Security </h4>
                      </Link>
                      <Link
                        className="linktxt linkhovtext"
                        href="/blog/best-employee-attendance-tracking-apps/"
                      >
                        <p>15 Best WiFi Security Camera To Buy In 2020</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogSection2">
              <div className="row">
                <div className="col-md-12">
                  <div className="_blg-ct-a ">
                    <div className="collapse" id="listblogA1">
                      <ul>
                        <li>
                          <a
                            href="/category/hr-management/"
                            onClick={() => handleOpenSection("Sec1")}
                          >
                            HR Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/category/infographic/"
                            onClick={() => handleOpenSection("Sec2")}
                          >
                            Infographic
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/category/safety-and-security/"
                            onClick={() => handleOpenSection("Sec3")}
                          >
                            Safety and Security
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/category/general/"
                            onClick={() => handleOpenSection("Sec4")}
                          >
                            General
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/category/attendance-tracker-software/"
                            onClick={() => handleOpenSection("Sec5")}
                          >
                            Attendance Tracker Software
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/category/wifi-tech/"
                            onClick={() => handleOpenSection("Sec6")}
                          >
                            WiFi Tech
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/category/work-culture/"
                            onClick={() => handleOpenSection("Sec7")}
                          >
                            Work Culture
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/category/corporate-wellness/"
                            onClick={() => handleOpenSection("Sec8")}
                          >
                            Corporate Wellness
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-container blogSection2Inv">
              <button className="CogsBlog" onClick={handleDropdownToggle}>
                <FaCogs className="FaCogs" /> Categories
              </button>
              {dropdownOpen && (
                <div className="link-container">
                  <ul>
                    <li>
                      <a
                        href="#/category/hr-management/"
                        onClick={() => handleOpenSection("Sec1")}
                      >
                        HR Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/category/infographic/"
                        onClick={() => handleOpenSection("Sec2")}
                      >
                        Infographic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/category/safety-and-security/"
                        onClick={() => handleOpenSection("Sec3")}
                      >
                        Safety and Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/category/general/"
                        onClick={() => handleOpenSection("Sec4")}
                      >
                        General
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/category/attendance-tracker-software/"
                        onClick={() => handleOpenSection("Sec5")}
                      >
                        Attendance Tracker Software
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/category/wifi-tech/"
                        onClick={() => handleOpenSection("Sec6")}
                      >
                        WiFi Tech
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/category/work-culture/"
                        onClick={() => handleOpenSection("Sec7")}
                      >
                        Work Culture
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/category/corporate-wellness/"
                        onClick={() => handleOpenSection("Sec8")}
                      >
                        Corporate Wellness
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div> */}
        {/* <div id="openSecStart">
              {openSection === "Sec1" && (
                <div id="Sec1" className="justrowBlog">
                  <div className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/succession-planning-and-its-importance/"
                        >
                          <img
                            src="/images/What-is-Succession-Planning-Why-is-it-Important.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/succession-planning-and-its-importance/"
                          >
                            <h3>
                              What is Succession Planning? Why is it Important?
                            </h3>
                          </Link>
                          <p>Thursday January 2, 2020</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/roles-and-responsibilities-of-hr/"
                        >
                          <img
                            src="/images/13-Roles-and-Responsibilities-of-HR-in-a-Company.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/roles-and-responsibilities-of-hr/"
                          >
                            <h3>
                              13 Roles And Responsibilities of HR in a Company
                            </h3>
                          </Link>
                          <p>Friday December 20, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-interview-techniques/"
                        >
                          <img
                            src="/images/15-Successful-Motivational-Employee-Interview-Techniques-For-2020.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-interview-techniques/"
                          >
                            <h3>
                              15 Successful Motivational Employee Interview
                              Techniques For 2020
                            </h3>
                          </Link>
                          <p>Friday December 6, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/benefits-of-studying-human-resource-management/"
                        >
                          <img
                            src="/images/10-Benefits-of-Studying-Human-Resource-Management-in-2020.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/benefits-of-studying-human-resource-management/"
                          >
                            <h3>
                              10 Benefits of Studying Human Resource Management
                              in 2020
                            </h3>
                          </Link>
                          <p>Monday November 11, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/blockchain-in-human-resource-management/"
                        >
                          <img
                            src="/images/9-ways-blockchain-can-impact-human-resource-management.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/blockchain-in-human-resource-management/"
                          >
                            <h3>
                              9 Ways Blockchain Can Impact Human Resource
                              Management
                            </h3>
                          </Link>
                          <p>Friday October 11, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/strategies-effective-performance-management/"
                        >
                          <img
                            src="/images/10-Strategies-For-Effective-Performance-Management.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/strategies-effective-performance-management/"
                          >
                            <h3>
                              10 Strategies for Effective Performance Management
                            </h3>
                          </Link>
                          <p>Friday September 6, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/human-capital-management-tips/"
                        >
                          <img
                            src="/images/Human-Capital-Management.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/human-capital-management-tips/"
                          >
                            <h3>
                              Human Capital Management: 14 Tips To Succeed
                            </h3>
                          </Link>
                          <p>Wednesday June 19, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/talent-management/"
                        >
                          <img
                            src="/images/Talent-Management.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/talent-management/"
                          >
                            <h3>Talent Management: 11 Tips To Do It Right</h3>
                          </Link>
                          <p>Monday June 17, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/performance-appraisal/"
                        >
                          <img
                            src="/images/Performance-Appraisal-All-You-Need-To-Know.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/performance-appraisal/"
                          >
                            <h3>
                              Performance Appraisal – All You Need To Know
                            </h3>
                          </Link>
                          <p>Tuesday June 11, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-turnover/"
                        >
                          <img
                            src="/images/What-is-Employee-Turnover-13-Ways-to-Reduce-It.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-turnover/"
                          >
                            <h3>
                              What Is Employee Turnover? 13 Ways To Reduce It!
                            </h3>
                          </Link>
                          <p>Monday May 27, 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/"
                        onClick={() => handleOpenSection("Sec1")}
                      >
                        1
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/page/2/"
                        onClick={() => handleOpenSection("Sec9")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/3/"
                        onClick={() => handleOpenSection("Sec10")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/4/"
                        onClick={() => handleOpenSection("Sec11")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/5/"
                        onClick={() => handleOpenSection("Sec12")}
                      >
                        5
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/6/"
                        onClick={() => handleOpenSection("Sec13")}
                      >
                        6
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/7/"
                        onClick={() => handleOpenSection("Sec14")}
                      >
                        7
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec2" && (
                <div id="Sec2" className="justrowBlog">
                  <div className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-poor-leave-management-impacts-business/"
                        >
                          <img
                            src="/images/6-ways-how-poor-Leave-management-impacts-business.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Infographic </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-poor-leave-management-impacts-business/"
                          >
                            <h3>
                              6 Ways How Poor Leave Management Impacts Business
                            </h3>
                          </Link>
                          <p>Monday May 6, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/workforce-management/"
                        >
                          <img
                            src="/images/Workforce-Management-5-Steps-For-Getting-It-Right.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            HR Management
                            <span>
                              Infographic <span>Work Culture</span>
                            </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/workforce-management/"
                          >
                            <h3>
                              Workforce Management: 5 Steps For Getting It
                              Right!
                            </h3>
                          </Link>
                          <p>Tuesday April 30, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/managing-millennial-employees/"
                        >
                          <img
                            src="/images/Managing-Millennial-Employees.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            HR Management <span>Infographic</span>{" "}
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/managing-millennial-employees/"
                          >
                            <h3>
                              Managing Millennial Employees: Getting Game Right!
                            </h3>
                          </Link>
                          <p>Monday March 25, 2019</p>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/time-management/"
                        >
                          <img
                            src="/images/15-01-2018_7-Keys-to-time-management-featured-image-2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Infographic </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/time-management/"
                          >
                            <h3>7 Keys To Time Management</h3>
                          </Link>
                          <p>Wednesday January 23, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/icons-of-business-world/"
                        >
                          <img
                            src="/images/19-12-2018_4-BIGGEST-FAILURES-WHO-EMERGED-ICONS-OF-BUSSINESS-WORLD-featured-image.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Infographic</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/icons-of-business-world/"
                          >
                            <h3>
                              4 Biggest Failures Who Are Now Icons Of Business
                              World
                            </h3>
                          </Link>
                          <p>Wednesday December 19, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/7-stages-employee-development-program/"
                        >
                          <img
                            src="/images/26-11-2018_7-stages-of-an-effective-Employee-Development-Program-Featured-Image.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Infographic</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/7-stages-employee-development-program/"
                          >
                            <h3>
                              7 Stages Of An Effective Employee Development
                              Program [Infographic]
                            </h3>
                          </Link>
                          <p>Monday November 26, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "Sec3" && (
                <div id="Sec3" className="justrowBlog">
                  <div className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-security-camera/"
                        >
                          <img
                            src="/images/15-best-wifi-security-camera-to-buy-in-2020.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-security-camera/"
                          >
                            <h3>15 Best WiFi Security Camera To Buy In 2020</h3>
                          </Link>
                          <p>Monday November 18, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/parental-control-apps/"
                        >
                          <img
                            src="/images/25-Best-Parental-Control-Apps.jpg"
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/parental-control-apps/"
                          >
                            <h3>Top 25 Parental Control Apps To Use In 2020</h3>
                          </Link>
                          <p>Monday July 1, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/parental-control-routers/"
                        >
                          <img
                            src="/images/Top-20-Parental-Control-Routers-to-Use-in-2019.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/parental-control-routers/"
                          >
                            <h3>
                              Top 20 Parental Control Routers to Use in 2019
                            </h3>
                          </Link>
                          <p>Thursday January 10, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wivi-technology/"
                        >
                          <img
                            src="/images/08-10-2018_Wifi-can-let-you-see-through-walls-Know-How.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wivi-technology/"
                          >
                            <h3>
                              WiFi Can Let You See Through Walls – Know How!
                            </h3>
                          </Link>
                          <p>Monday October 15, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/monitor-employees-internet-usage/"
                        >
                          <img
                            src="/images/4-ways-to-monitor-employees-internet.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/monitor-employees-internet-usage/"
                          >
                            <h3>4 Ways to Monitor Employees Internet Usage</h3>
                          </Link>
                          <p>Tuesday September 25, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/windows-apps-track-internet-usage/"
                        >
                          <img
                            src="/images/5-windows-apps-to-track-internet-Usage-V3-wecompress.com_.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/windows-apps-track-internet-usage/"
                          >
                            <h3>5 Windows Apps to Track Internet Usage</h3>
                          </Link>
                          <p>Tuesday September 25, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/set-wifi-password/"
                        >
                          <img
                            src="/images/04-09-2018_6-easy-steps-to-set-WiFi-password.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/set-wifi-password/"
                          >
                            <h3>6 Easy Steps to Set WiFi Password</h3>
                          </Link>
                          <p>Tuesday September 4, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-networks-influence-smart-city-development/"
                        >
                          <img
                            src="/images/27-08-2018_How-will-Wi-fi-networks-influence-smart-city-development.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-networks-influence-smart-city-development/"
                          >
                            <h3>
                              How Will WiFi Networks Influence Smart City
                              Development ?
                            </h3>
                          </Link>
                          <p>Monday August 27, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-based-employee-attendance-system/"
                        >
                          <img
                            src="/images/Blog-210-V3.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-based-employee-attendance-system/"
                          >
                            <h3>
                              7 Reasons You should Use A WiFi Based Attendance
                              System
                            </h3>
                          </Link>
                          <p>Friday August 3, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-wifi-analyzer-apps-for-android/"
                        >
                          <img
                            src="/images/11-best-wifi-analyzer-apps-for-android-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security <span>WiFi Tech</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-wifi-analyzer-apps-for-android/"
                          >
                            <h3>11 Best WiFi Analyzer Apps for Android</h3>
                          </Link>
                          <p>Friday December 13, 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/safety-and-security/"
                        onClick={() => handleOpenSection("Sec3")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/safety-and-security/page/2/"
                        onClick={() => handleOpenSection("Sec15")}
                      >
                        2
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec4" && (
                <div id="Sec4" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-employee-attendance-tracking-apps/"
                        >
                          <img
                            src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span>
                              General <span>WiFi Tech</span>
                            </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-employee-attendance-tracking-apps/"
                          >
                            <h3>
                              15 Best Employee Attendance Tracking Apps 2020
                            </h3>
                          </Link>
                          <p>Wednesday November 20, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/inspirational-movies-entrepreneurs/"
                        >
                          <img
                            src="/images/Top-10-Inspirational-Movies-For-Entrepreneurs-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            General <span>Work Culture</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/inspirational-movies-entrepreneurs/"
                          >
                            <h3>
                              Top 10 Inspirational Movies For Entrepreneurs
                            </h3>
                          </Link>
                          <p>Monday March 18, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/delegation-of-authority/"
                        >
                          <img
                            src="/images/04-02-2019_What-is-delegation-of-authority-How-id-it-beneficial-to-business.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            General <span>Work Culture</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/delegation-of-authority/"
                          >
                            <h3>
                              What Is Delegation of Authority? How Is It
                              Beneficial To Business?﻿
                            </h3>
                          </Link>
                          <p>Thursday March 7, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/dealing-with-difficult-boss/"
                        >
                          <img
                            src="/images/11-01-2019_10-Tips-for-Dealing-With-a-Difficult-Boss.edited.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/dealing-with-difficult-boss/"
                          >
                            <h3>10 Tips For Dealing With A Difficult Boss</h3>
                          </Link>
                          <p>Wednesday January 30, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/business-books-entrepreneurs/"
                        >
                          <img
                            src="/images/25-Essential-Business-books-for-Entrepreneurs.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/business-books-entrepreneurs/"
                          >
                            <h3>
                              25 Essential Business books for Entrepreneurs
                            </h3>
                          </Link>
                          <p>Monday January 21, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/work-life-balance-tips/"
                        >
                          <img
                            src="/images/17-tips-to-maintain-a-healthy-work-life-balance.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/work-life-balance-tips/"
                          >
                            <h3>
                              17 Tips To Maintain A Healthy Work-Life Balance In
                              2019
                            </h3>
                          </Link>
                          <p>Monday January 7, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/habits-of-highly-successful-entrepreneurs/"
                        >
                          <img
                            src="/images/11-Habits-Of-Highly-Successful-Entrepreneurs.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/habits-of-highly-successful-entrepreneurs/"
                          >
                            <h3>
                              11 Habits Of Highly Successful Entrepreneurs
                            </h3>
                          </Link>
                          <p>Wednesday January 2, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/time-management-tips/"
                        >
                          <img
                            src="/images/8-Time-Management-Tips-You-Need-To-Know.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/time-management-tips/"
                          >
                            <h3>8 Time Management Tips You Need To Know</h3>
                          </Link>
                          <p>Friday December 28, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/personal-branding/"
                        >
                          <img
                            src="/images/10-Ways-To-Achieve-Personal-Branding.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/personal-branding/"
                          >
                            <h3>10 Ways To Achieve Personal Branding</h3>
                          </Link>
                          <p>Friday December 21, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/motivational-quotes-for-employees/"
                        >
                          <img
                            src="/images/50-motivational-quotes-for-employees-V2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/motivational-quotes-for-employees/"
                          >
                            <h3>45 Motivational Quotes For Employees</h3>
                          </Link>
                          <p>Wednesday December 5, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/general/"
                        onClick={() => handleOpenSection("Sec4")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/general/page/2/"
                        onClick={() => handleOpenSection("Sec16")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/general/page/3/"
                        onClick={() => handleOpenSection("Sec17")}
                      >
                        3
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec5" && (
                <div id="Sec5" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-employee-attendance-tracking-apps/"
                        >
                          <img
                            src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span>
                              General <span>WiFi Tech</span>
                            </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-employee-attendance-tracking-apps/"
                          >
                            <h3>
                              15 Best Employee Attendance Tracking Apps 2020
                            </h3>
                          </Link>
                          <p>Wednesday November 20, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-attendance-app-2-0-launched/"
                        >
                          <img
                            src="/images/WiFi-Attendance-App-2-0-Launched.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span> HR Management</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-attendance-app-2-0-launched/"
                          >
                            <h3>
                              WiFi Attendance App 2.0 Launched! Check its
                              Delightful New Features
                            </h3>
                          </Link>
                          <p>Tuesday December 18, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-employee-attendance-tracking-apps/"
                        >
                          <img
                            src="/images/Essential-Features-of-Time-Tracking-Software-with-Benefits-V4.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-employee-attendance-tracking-apps/"
                          >
                            <h3>
                              8 Essential Features of Time Tracking Software
                              with Benefits
                            </h3>
                          </Link>
                          <p>Tuesday October 9, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/web-based-time-clock-app/"
                        >
                          <img
                            src="/images/10-Benefits-of-web-based-Time-clock-app-V2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/web-based-time-clock-app/"
                          >
                            <h3>11 Benefits of Web Based Time Clock App</h3>
                          </Link>
                          <p>Wednesday October 3, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-attendance-makes-hr-managers-job-simple/"
                        >
                          <img
                            src="/images/How-WiFi-Attendance-Makes-HR-Managers-Job-Simple.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span> HR Management</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-attendance-makes-hr-managers-job-simple/"
                          >
                            <h3>
                              How WiFi Attendance Makes HR Manager’s Job Simple
                            </h3>
                          </Link>
                          <p>Friday August 17, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/differences-between-biometric-and-wifi-attendance/"
                        >
                          <img
                            src="/images/7-Differences-Between-Biometric-and-Wi-Fi-Attendance-Systems.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span> HR Management</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/differences-between-biometric-and-wifi-attendance/"
                          >
                            <h3>
                              7 Differences Between Biometric and WiFi
                              Attendance Systems
                            </h3>
                          </Link>
                          <p>Monday August 13, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/benefits-wifi-attendance-app/"
                        >
                          <img
                            src="/images/6-Benefits-of-Using-Wi-Fi-Attendance-app-for-Your-company.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span>
                              HR Management <span>WiFi Tech</span>
                            </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/benefits-wifi-attendance-app/"
                          >
                            <h3>
                              6 Benefits of Using WiFi Attendance App For Your
                              Company
                            </h3>
                          </Link>
                          <p>Friday August 10, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-based-employee-attendance-system/"
                        >
                          <img
                            src="/images/Blog-210-V3.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span>
                              HR Management<span>Safety and Security </span>
                              <span>WiFi Tech</span>
                            </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-based-employee-attendance-system/"
                          >
                            <h3>
                              7 Reasons You should Use A WiFi Based Attendance
                              System
                            </h3>
                          </Link>
                          <p>Friday August 3, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/advantages-wifi-attendance-system-work-place/"
                        >
                          <img
                            src="/images/Blog-211-final.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span>
                              HR Management<span>Safety and Security </span>
                              <span>WiFi Tech</span>
                            </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/advantages-wifi-attendance-system-work-place/"
                          >
                            <h3>
                              7 Advantages of WiFi Attendance System for Your
                              Work Place&nbsp;
                            </h3>
                          </Link>
                          <p>Tuesday July 31, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-attendance-app-helps-hr-manager/"
                        >
                          <img
                            src="/images/Blog-201.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span>
                              HR Management<span>Safety and Security </span>
                              <span>WiFi Tech</span>
                            </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-attendance-app-helps-hr-manager/"
                          >
                            <h3>
                              5 Different Ways A WiFi Attendance App Helps The
                              HR Manager
                            </h3>
                          </Link>
                          <p>Tuesday July 24, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/attendance-tracker-software/"
                        onClick={() => handleOpenSection("Sec5")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/attendance-tracker-software/page/2/"
                        onClick={() => handleOpenSection("Sec18")}
                      >
                        2
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec6" && (
                <div id="Sec6" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-employee-attendance-tracking-apps/"
                        >
                          <img
                            src="/images/15-Best-Employee-Attendance-Tracking-Apps-2020.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software
                            <span>
                              General <span>WiFi Tech</span>
                            </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-employee-attendance-tracking-apps/"
                          >
                            <h3>
                              15 Best Employee Attendance Tracking Apps 2020
                            </h3>
                          </Link>
                          <p>Wednesday November 20, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/top-router-for-gaming/"
                        >
                          <img
                            src="/images/Top-18-Gaming-Routers-To-Use-In-2020.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/top-router-for-gaming/"
                          >
                            <h3>Top 18 Router For Gaming To Use In 2020</h3>
                          </Link>
                          <p>Monday November 18, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-security-camera/"
                        >
                          <img
                            src="/images/15-best-wifi-security-camera-to-buy-in-2020.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security
                            <span> WiFi Tech </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-security-camera/"
                          >
                            <h3>15 Best WiFi Security Camera To Buy In 2020</h3>
                          </Link>
                          <p>Monday November 18, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-wifi-routers/"
                        >
                          <img
                            src="/images/Best-WIFI-routers-2020.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-wifi-routers/"
                          >
                            <h3>15 Best WiFi Routers For 2020</h3>
                          </Link>
                          <p>Monday October 28, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-repeater-vs-extender/"
                        >
                          <img
                            src="/images/What-Is-The-Difference-Between-A-WiFi-Repeater-And-WiFi-Extender.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-repeater-vs-extender/"
                          >
                            <h3>
                              What Is The Difference Between A WiFi Repeater And
                              WiFi Extender?
                            </h3>
                          </Link>
                          <p>Wednesday August 28, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/visual-positioning-system/"
                        >
                          <img
                            src="/images/Visual-Positioning-System-All-You-Need-to-Know.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/visual-positioning-system/"
                          >
                            <h3>
                              Visual Positioning System – All You Need To Know
                            </h3>
                          </Link>
                          <p>Thursday July 25, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/get-wifi-car/"
                        >
                          <img
                            src="/images/How-to-get-Wi-Fi-in-the-car.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/get-wifi-car/"
                          >
                            <h3>How To Get WiFi In The Car?</h3>
                          </Link>
                          <p>Tuesday July 16, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/connect-ipad-to-wifi/"
                        >
                          <img
                            src="/images/How-to-connect-iPad-to-Wifi.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/connect-ipad-to-wifi/"
                          >
                            <h3>How To Connect iPad To WiFi?</h3>
                          </Link>
                          <p>Friday July 12, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/parental-control-apps/"
                        >
                          <img
                            src="/images/25-Best-Parental-Control-Apps.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Safety and Security
                            <span> WiFi Tech </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/parental-control-apps/"
                          >
                            <h3>Top 25 Parental Control Apps To Use In 2020</h3>
                          </Link>
                          <p>Monday July 1, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/boost-home-wifi/"
                        >
                          <img
                            src="/images/The-10-Best-Ways-to-Boost-Your-Home-Wifi.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/boost-home-wifi/"
                          >
                            <h3>Top 10 Best Ways to Boost Your Home WiFi</h3>
                          </Link>
                          <p>Wednesday April 10, 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/wifi-tech/"
                        onClick={() => handleOpenSection("Sec6")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/2/"
                        onClick={() => handleOpenSection("Sec19")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/3/"
                        onClick={() => handleOpenSection("Sec20")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/4/"
                        onClick={() => handleOpenSection("Sec21")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/blog/category/wifi-tech/page/5/"
                        onClick={() => handleOpenSection("Sec22")}
                      >
                        5
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec7" && (
                <div id="Sec7" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-to-become-a-digital-nomad/"
                        >
                          <img
                            src="/images/How-To-Become-A-Digital-Nomad-Step-By-Step-Guide.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-to-become-a-digital-nomad/"
                          >
                            <h3>
                              How To Become a Digital Nomad [Step-by-Step-Guide]
                            </h3>
                          </Link>
                          <p>Friday October 18, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/reasons-why-corporate-fitness-programs-fail/"
                        >
                          <img
                            src="/images/15-reasons-why-corporate-fitness-programs-fail-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Work Culture<span>Corporate Wellness </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/reasons-why-corporate-fitness-programs-fail/"
                          >
                            <h3>
                              15 Reasons Why Corporate Fitness Programs Fail
                            </h3>
                          </Link>
                          <p>Friday August 2, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/business-intelligence-tools/"
                        >
                          <img
                            src="/images/27-Business-Intelligence-tools-for-enhanced-reporting-and-collaboration.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/business-intelligence-tools/"
                          >
                            <h3>
                              27 Business Intelligence Tools For Enhanced
                              Reporting And Collaboration
                            </h3>
                          </Link>
                          <p>Tuesday June 25, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/performance-appraisal/"
                        >
                          <img
                            src="/images/Performance-Appraisal-All-You-Need-To-Know.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            HR Management <span> Work Culture</span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/performance-appraisal/"
                          >
                            <h3>
                              Performance Appraisal – All You Need To Know
                            </h3>
                          </Link>
                          <p>Tuesday June 11, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/workforce-management/"
                        >
                          <img
                            src="/images/Workforce-Management-5-Steps-For-Getting-It-Right.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Infographic Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/workforce-management/"
                          >
                            <h3>
                              Workforce Management: 5 Steps For Getting It
                              Right!
                            </h3>
                          </Link>
                          <p>Tuesday April 30, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-motivation-non-financial-incentives/"
                        >
                          <img
                            src="/images/12-Tips-For-Employee-Motivation-With-Non-Financial-Incentives.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-motivation-non-financial-incentives/"
                          >
                            <h3>
                              12 Tips to Motivate Your Staff With Non-Financial
                              Incentives﻿
                            </h3>
                          </Link>
                          <p>Friday April 26, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/sexual-harassment-work//"
                        >
                          <img
                            src="/images/how-to-deal-with-sexual-harrassment-at-office.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/sexual-harassment-work//"
                          >
                            <h3>
                              How To Deal With Sexual Harassment At Work?﻿
                            </h3>
                          </Link>
                          <p>Friday April 5, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/benefits-employee-engagement-software/"
                        >
                          <img
                            src="/images/10-benefits-employee-engagement-software.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/benefits-employee-engagement-software/"
                          >
                            <h3>10 Benefits of Employee Engagement Software</h3>
                          </Link>
                          <p>Friday March 22, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/inspirational-movies-entrepreneurs/"
                        >
                          <img
                            src="/images/Top-10-Inspirational-Movies-For-Entrepreneurs-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/inspirational-movies-entrepreneurs/"
                          >
                            <h3>
                              Top 10 Inspirational Movies For Entrepreneurs
                            </h3>
                          </Link>
                          <p>Monday March 18, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/online-collaboration-tools-enhance-team-productivity%ef%bb%bf/"
                        >
                          <img
                            src="/images/18-02-2019_51-online-collaboration-tools-to-enhance-team-productivity.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/online-collaboration-tools-enhance-team-productivity%ef%bb%bf/"
                          >
                            <h3>
                              51 Online Collaboration Tools to Enhance Team
                              Productivity﻿
                            </h3>
                          </Link>
                          <p>Friday March 15, 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/work-culture/"
                        onClick={() => handleOpenSection("Sec7")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/work-culture/page/2/"
                        onClick={() => handleOpenSection("Sec23")}
                      >
                        2
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec8" && (
                <div id="Sec8" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/reasons-why-corporate-fitness-programs-fail/"
                        >
                          <img
                            src="/images/15-reasons-why-corporate-fitness-programs-fail-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Work Culture<span>Corporate Wellness </span>
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/reasons-why-corporate-fitness-programs-fail/"
                          >
                            <h3>
                              15 Reasons Why Corporate Fitness Programs Fail
                            </h3>
                          </Link>
                          <p>Friday August 2, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/corporate-companies-best-employee-wellness-program/"
                        >
                          <img
                            src="/images/15-Corporate-Companies-With-Best-Employee-Wellness-Program.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Corporate Wellness</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/corporate-companies-best-employee-wellness-program/"
                          >
                            <h3>
                              15 Corporate Companies With Best Employee Wellness
                              Program
                            </h3>
                          </Link>
                          <p>Friday July 19, 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "Sec9" && (
                <div id="Sec9" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/dealing-with-family-leave/"
                        >
                          <img
                            src="/images/22-05-2019_Things-Human-Resource-must-consider-when-dealing-while-sanctioning-family-leave.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/dealing-with-family-leave/"
                          >
                            <h3>
                              15 Things HR Manager Must Consider When Dealing
                              With Family Leave
                            </h3>
                          </Link>
                          <p>Thursday May 23, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/recent-trends-human-resource-management/"
                        >
                          <img
                            src="/images/16-05-2019_What-are-the-recent-trends-in-human-resource-management.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/recent-trends-human-resource-management/"
                          >
                            <h3>
                              What Are the Recent Trends in Human Resource
                              Management?
                            </h3>
                          </Link>
                          <p>Friday May 17, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/challenges-human-resource-managemen-solutions/"
                        >
                          <img
                            src="/images/Top-17-challenges-faced-by-human-resource-management.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/challenges-human-resource-managemen-solutions/"
                          >
                            <h3>
                              Top 17 Challenges Faced by Human Resource
                              Management﻿
                            </h3>
                          </Link>
                          <p>Friday May 10, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-poor-leave-management-impacts-business/"
                        >
                          <img
                            src="/images/6-ways-how-poor-Leave-management-impacts-business.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Infographic</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-poor-leave-management-impacts-business/"
                          >
                            <h3>
                              6 Ways How Poor Leave Management Impacts Business
                            </h3>
                          </Link>
                          <p>Monday May 6, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/workforce-management/"
                        >
                          <img
                            src="/images/Workforce-Management-5-Steps-For-Getting-It-Right.jpg"
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Infographic Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/workforce-management/"
                          >
                            <h3>
                              Workforce Management: 5 Steps For Getting It
                              Right!
                            </h3>
                          </Link>
                          <p>Tuesday April 30, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-motivation-non-financial-incentives/"
                        >
                          <img
                            src="/images/12-Tips-For-Employee-Motivation-With-Non-Financial-Incentives.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-motivation-non-financial-incentives/"
                          >
                            <h3>
                              12 Tips to Motivate Your Staff With Non-Financial
                              Incentives﻿
                            </h3>
                          </Link>
                          <p>Friday April 26, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/ai-redefining-functions-hr-tech/"
                        >
                          <img
                            src="/images/how-ai-is-redefining-the-functions-of-HR-tech.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/ai-redefining-functions-hr-tech/"
                          >
                            <h3>
                              How AI is Redefining the Functions of HR Tech?﻿
                            </h3>
                          </Link>
                          <p>Friday April 12, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/sexual-harassment-work/"
                        >
                          <img
                            src="/images/22-05-2019_Things-Human-Resource-must-consider-when-dealing-while-sanctioning-family-leave.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/sexual-harassment-work/"
                          >
                            <h3>
                              How To Deal With Sexual Harassment At Work?﻿
                            </h3>
                          </Link>
                          <p>Friday April 5, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/tips-hr-managers-company-culture/"
                        >
                          <img
                            src="/images/15-Tips-HR-Can-Help-Create-A-Sustainable-Company-Culture.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/tips-hr-managers-company-culture/"
                          >
                            <h3>
                              15 Tips For HR Managers To Create A Sustainable
                              Company Culture
                            </h3>
                          </Link>
                          <p>Wednesday April 3, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/tips-attract-perfect-employee/"
                        >
                          <img
                            src="/images/tips-to-attract-the-perfect-employee.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/tips-attract-perfect-employee/"
                          >
                            <h3>Tips To Attract The Perfect Employee</h3>
                          </Link>
                          <p>Monday April 1, 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/"
                        onClick={() => handleOpenSection("Sec1")}
                      >
                        1
                      </span>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/page/2/"
                        onClick={() => handleOpenSection("Sec9")}
                      >
                        2
                      </span>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/3/"
                        onClick={() => handleOpenSection("Sec10")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/4/"
                        onClick={() => handleOpenSection("Sec11")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/5/"
                        onClick={() => handleOpenSection("Sec12")}
                      >
                        5
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/6/"
                        onClick={() => handleOpenSection("Sec13")}
                      >
                        6
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/7/"
                        onClick={() => handleOpenSection("Sec14")}
                      >
                        7
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec10" && (
                <div id="Sec10" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/managing-millennial-employees/"
                        >
                          <img
                            src="/images/Managing-Millennial-Employees.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Infographic</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/managing-millennial-employees/"
                          >
                            <h3>
                              Managing Millennial Employees: Getting Game Right!
                            </h3>
                          </Link>
                          <p>Monday March 25, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/benefits-employee-engagement-software/"
                        >
                          <img
                            src="/images/10-benefits-employee-engagement-software.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/benefits-employee-engagement-software/"
                          >
                            <h3>10 Benefits of Employee Engagement Software</h3>
                          </Link>
                          <p>Friday March 22, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-exit-interview/"
                        >
                          <img
                            src="/images/how-to-conduct-an-employee-exit-interview.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-exit-interview/"
                          >
                            <h3>How to Conduct an Employee Exit Interview﻿</h3>
                          </Link>
                          <p>Wednesday March 20, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/online-collaboration-tools-enhance-team-productivity%ef%bb%bf/"
                        >
                          <img
                            src="/images/18-02-2019_51-online-collaboration-tools-to-enhance-team-productivity.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/online-collaboration-tools-enhance-team-productivity%ef%bb%bf/"
                          >
                            <h3>
                              51 Online Collaboration Tools to Enhance Team
                              Productivity﻿
                            </h3>
                          </Link>
                          <p>Friday March 15, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/give-positive-feedback-employees/"
                        >
                          <img
                            src="/images/How-to-give-a-positive-feedback-to-employees.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/give-positive-feedback-employees/"
                          >
                            <h3>How To Give Positive Feedback To Employees</h3>
                          </Link>
                          <p>Thursday March 7, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/build-great-work-relationships/"
                        >
                          <img
                            src="/images/15-01-2018_How-to-build-great-work-relationships.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/build-great-work-relationships/"
                          >
                            <h3>How To Build Great Work Relationships</h3>
                          </Link>
                          <p>Monday January 28, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/deal-political-talk-office/"
                        >
                          <img
                            src="/images/15-01-2019_6-Ways-To-Deal-With-Political-Talk-In-The-Office.edited.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/deal-political-talk-office/"
                          >
                            <h3>
                              6 Ways To Deal With Political Talk In The
                              Office&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </h3>
                          </Link>
                          <p>Friday January 18, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-communication-apps/"
                        >
                          <img
                            src="/images/Top-26-Apps-For-Internal-Employee-Communication.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-communication-apps/"
                          >
                            <h3>
                              Top 26 Apps For Internal Employee Communication in
                              2019
                            </h3>
                          </Link>
                          <p>Tuesday January 15, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/team-building-games/"
                        >
                          <img
                            src="/images/Awesome-Team-Building-Games-for-Employees.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/team-building-games/"
                          >
                            <h3>
                              16 Awesome Team Building Games for Your Employees
                            </h3>
                          </Link>
                          <p>Friday January 4, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-attendance-app-2-0-launched/"
                        >
                          <img
                            src="/images/WiFi-Attendance-App-2-0-Launched.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-attendance-app-2-0-launched/"
                          >
                            <h3>
                              WiFi Attendance App 2.0 Launched! Check its
                              Delightful New Features
                            </h3>
                          </Link>
                          <p>Tuesday December 18, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/"
                        onClick={() => handleOpenSection("Sec1")}
                      >
                        1
                      </span>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/page/2/"
                        onClick={() => handleOpenSection("Sec9")}
                      >
                        2
                      </span>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/3/"
                        onClick={() => handleOpenSection("Sec10")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/4/"
                        onClick={() => handleOpenSection("Sec11")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/5/"
                        onClick={() => handleOpenSection("Sec12")}
                      >
                        5
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/6/"
                        onClick={() => handleOpenSection("Sec13")}
                      >
                        6
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/7/"
                        onClick={() => handleOpenSection("Sec14")}
                      >
                        7
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec11" && (
                <div id="Sec11" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/team-management-skills/"
                        >
                          <img
                            src="/images/21-skills-required-for-effective-team-management.V3g.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/team-management-skills/"
                          >
                            <h3>
                              20 Skills Required For Effective Team Management
                            </h3>
                          </Link>
                          <p>Wednesday December 12, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/strategies-improve-communication-workplace/"
                        >
                          <img
                            src="/images/04-12-2018_17-strategies-to-improve-communication-at-workplace.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/strategies-improve-communication-workplace/"
                          >
                            <h3>
                              17 Strategies to Improve Communication at
                              Workplace
                            </h3>
                          </Link>
                          <p>Tuesday December 11, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/motivate-team-members-better-performance/"
                        >
                          <img
                            src="/images/30-11-2019_13-ways-to-motivate-your-team-members-for-better-performance.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/motivate-team-members-better-performance/"
                          >
                            <h3>
                              13 Ways To Motivate Your Team Members for Better
                              Performance
                            </h3>
                          </Link>
                          <p>Friday November 30, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/10-challenges-hr-managers-and-how-to-tackle-them/"
                        >
                          <img
                            src="/images/28-11-2018_10-Challenges-Faced-by-HR-Managers-and-How-to-Tackle-Them.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/10-challenges-hr-managers-and-how-to-tackle-them/"
                          >
                            <h3>
                              10 Challenges Faced by HR Managers and How to
                              Tackle Them
                            </h3>
                          </Link>
                          <p>Wednesday November 28, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/improve-policy-implementation-workplace/"
                        >
                          <img
                            src="/images/How-to-improve-policy-implementation-at-workplace.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/improve-policy-implementation-workplace/"
                          >
                            <h3>
                              How to Improve Policy Implementation
                              at&nbsp;Workplace
                            </h3>
                          </Link>
                          <p>Wednesday November 21, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/10-best-employee-retention-ideas/"
                        >
                          <img
                            src="/images/15-11-2018_10-Best-Employee-Retention-Ideas.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/10-best-employee-retention-ideas/"
                          >
                            <h3>10 Best Employee Retention Ideas</h3>
                          </Link>
                          <p>Friday November 16, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-engagement-infographics/"
                        >
                          <img
                            src="/images/Why-Employee-Engagement-Matters.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-engagement-infographics/"
                          >
                            <h3>Why Employee Engagement Matters?</h3>
                          </Link>
                          <p>Wednesday November 14, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/software-tools-team-manager/"
                        >
                          <img
                            src="/images/10-software-tools-every-team-Manager-needs-V5-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/software-tools-team-manager/"
                          >
                            <h3>11 Software Tools Every Team Manager Needs</h3>
                          </Link>
                          <p>Wednesday November 7, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/time-tracking-important-project-management/"
                        >
                          <img
                            src="/images/05-10-2018_9-Reasons-Time-Tracking-is-Important-in-Project-Management.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/time-tracking-important-project-management/"
                          >
                            <h3>
                              9 Reasons Time Tracking is Important in Project
                              Management
                            </h3>
                          </Link>
                          <p>Thursday October 11, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/improve-employee-attendance/"
                        >
                          <img
                            src="/images/How-to-Improve-Employee-Attendance-at-Work-V2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/improve-employee-attendance/"
                          >
                            <h3>How to Improve Employee Attendance at Work</h3>
                          </Link>
                          <p>Monday September 17, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/"
                        onClick={() => handleOpenSection("Sec1")}
                      >
                        1
                      </span>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/page/2/"
                        onClick={() => handleOpenSection("Sec9")}
                      >
                        2
                      </span>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/3/"
                        onClick={() => handleOpenSection("Sec10")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/4/"
                        onClick={() => handleOpenSection("Sec11")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/5/"
                        onClick={() => handleOpenSection("Sec12")}
                      >
                        5
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/6/"
                        onClick={() => handleOpenSection("Sec13")}
                      >
                        6
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/7/"
                        onClick={() => handleOpenSection("Sec14")}
                      >
                        7
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec12" && (
                <div id="Sec12" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-attendance-makes-hr-managers-job-simple/"
                        >
                          <img
                            src="/images/How-to-improve-policy-implementation-at-workplace.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-attendance-makes-hr-managers-job-simple/"
                          >
                            <h3>
                              How WiFi Attendance Makes HR Manager’s Job Simple
                            </h3>
                          </Link>
                          <p>Friday August 17, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/differences-between-biometric-and-wifi-attendance/"
                        >
                          <img
                            src="/images/7-Differences-Between-Biometric-and-Wi-Fi-Attendance-Systems.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/differences-between-biometric-and-wifi-attendance/"
                          >
                            <h3>
                              7 Differences Between Biometric and WiFi
                              Attendance Systems
                            </h3>
                          </Link>
                          <p>Monday August 13, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/benefits-wifi-attendance-app/"
                        >
                          <img
                            src="/images/6-Benefits-of-Using-Wi-Fi-Attendance-app-for-Your-company.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/benefits-wifi-attendance-app/"
                          >
                            <h3>
                              6 Benefits of Using WiFi Attendance App For Your
                              Company
                            </h3>
                          </Link>
                          <p>Friday August 10, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-based-employee-attendance-system/"
                        >
                          <img
                            src="/images/Blog-210-V3.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software HR Management Safety and
                            Security WiFi Tech
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-based-employee-attendance-system/"
                          >
                            <h3>
                              7 Reasons You should Use A WiFi Based Attendance
                              System
                            </h3>
                          </Link>
                          <p>Friday August 3, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/advantages-wifi-attendance-system-work-place/"
                        >
                          <img
                            src="/images/Blog-211-final.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software HR Management WiFi Tech
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/advantages-wifi-attendance-system-work-place/"
                          >
                            <h3>
                              7 Advantages of WiFi Attendance System for Your
                              Work Place&nbsp;
                            </h3>
                          </Link>
                          <p>Tuesday July 31, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-attendance-app-helps-hr-manager/"
                        >
                          <img
                            src="/images/Blog-201.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-attendance-app-helps-hr-manager/"
                          >
                            <h3>
                              5 Different Ways A WiFi Attendance App Helps The
                              HR Manager
                            </h3>
                          </Link>
                          <p>Tuesday July 24, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/productivity-tools/"
                        >
                          <img
                            src="/images/Blog-173-final-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/productivity-tools/"
                          >
                            <h3>
                              15 Tools for Improving Employee Productivity
                            </h3>
                          </Link>
                          <p>Tuesday June 26, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-attendance-app-features/"
                        >
                          <img
                            src="/images/Blog-160-final.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-attendance-app-features/"
                          >
                            <h3>
                              5 Must-Have Features of an Employee Attendance App
                            </h3>
                          </Link>
                          <p>Monday June 25, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-to-be-better-employee/"
                        >
                          <img
                            src="/images/how-to-be-a-Better-Employee-2019.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-to-be-better-employee/"
                          >
                            <h3>
                              How to Be a Better Employee in 2019 [19 Ways]
                            </h3>
                          </Link>
                          <p>Wednesday April 24, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/flexible-work-schedule/"
                        >
                          <img
                            src="/images/Blog-152.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/flexible-work-schedule/"
                          >
                            <h3>How to Create a Flexible Work Schedule</h3>
                          </Link>
                          <p>Monday June 11, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/"
                        onClick={() => handleOpenSection("Sec1")}
                      >
                        1
                      </span>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/page/2/"
                        onClick={() => handleOpenSection("Sec9")}
                      >
                        2
                      </span>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/3/"
                        onClick={() => handleOpenSection("Sec10")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/4/"
                        onClick={() => handleOpenSection("Sec11")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/5/"
                        onClick={() => handleOpenSection("Sec12")}
                      >
                        5
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/6/"
                        onClick={() => handleOpenSection("Sec13")}
                      >
                        6
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/7/"
                        onClick={() => handleOpenSection("Sec14")}
                      >
                        7
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec13" && (
                <div id="Sec13" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/hiring-process-right-employees-checklist/"
                        >
                          <img
                            src="/images/Blog-148.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/hiring-process-right-employees-checklist/"
                          >
                            <h3>Checklist for Hiring the Right Employees</h3>
                          </Link>
                          <p>Wednesday June 6, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/10-attendance-tracking-mistakes-infographic/"
                        >
                          <img
                            src="/images/Feature-Image.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/10-attendance-tracking-mistakes-infographic/"
                          >
                            <h3>10 Attendance Tracking Mistakes</h3>
                          </Link>
                          <p>Tuesday June 5, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/15-tips-to-ensure-better-work-life-balance/"
                        >
                          <img
                            src="/images/Blog-146-new5.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/15-tips-to-ensure-better-work-life-balance/"
                          >
                            <h3>15 Tips To Ensure Better Work-Life Balance</h3>
                          </Link>
                          <p>Monday June 4, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-attendance-tracking-system/"
                        >
                          <img
                            src="/images/Blog-144.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-attendance-tracking-system/"
                          >
                            <h3>
                              How to Find the Best Attendance Tracking System
                              for Your Employees
                            </h3>
                          </Link>
                          <p>Friday June 1, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-attendance-policy/"
                        >
                          <img
                            src="/images/Blog-142.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-attendance-policy/"
                          >
                            <h3>How to Create an Employee Attendance Policy</h3>
                          </Link>
                          <p>Thursday May 31, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-to-attract-millennials-to-your-workplace/"
                        >
                          <img
                            src="/images/Blog-1412.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-to-attract-millennials-to-your-workplace/"
                          >
                            <h3>How to Entice Millennials to Your Workplace</h3>
                          </Link>
                          <p>Wednesday May 30, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-to-build-high-performance-work-teams/"
                        >
                          <img
                            src="/images/Blog-136-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-to-build-high-performance-work-teams/"
                          >
                            <h3>How to Build High Performance Work Teams</h3>
                          </Link>
                          <p>Friday May 25, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/importance-attendance-in-work-ethics/"
                        >
                          <img
                            src="/images/Blog-135-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/importance-attendance-in-work-ethics/"
                          >
                            <h3>How Attendance is Related to Work Ethics</h3>
                          </Link>
                          <p>Thursday May 24, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/create-personal-goals-improve-attendance/"
                        >
                          <img
                            src="/images/Blog-129.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/create-personal-goals-improve-attendance/"
                          >
                            <h3>
                              How to Create Personal Goals to Improve Attendance
                              ?
                            </h3>
                          </Link>
                          <p>Tuesday May 22, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/ai-changing-workplace/"
                        >
                          <img
                            src="/images/Blog-106-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/ai-changing-workplace/"
                          >
                            <h3>
                              How Artificial Intelligence (AI) is Changing Your
                              Workplace
                            </h3>
                          </Link>
                          <p>Wednesday May 9, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/"
                        onClick={() => handleOpenSection("Sec1")}
                      >
                        1
                      </span>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/page/2/"
                        onClick={() => handleOpenSection("Sec9")}
                      >
                        2
                      </span>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/3/"
                        onClick={() => handleOpenSection("Sec10")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/4/"
                        onClick={() => handleOpenSection("Sec11")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/5/"
                        onClick={() => handleOpenSection("Sec12")}
                      >
                        5
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/6/"
                        onClick={() => handleOpenSection("Sec13")}
                      >
                        6
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/7/"
                        onClick={() => handleOpenSection("Sec14")}
                      >
                        7
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec14" && (
                <div id="Sec14" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/10-competent-steps-to-improve-employee-engagement/"
                        >
                          <img
                            src="/images/03-05-2018_10-Competent-Steps-to-Improve-Employee-Engagement.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/10-competent-steps-to-improve-employee-engagement/"
                          >
                            <h3>
                              10 Competent Steps to Improve Employee Engagement
                            </h3>
                          </Link>
                          <p>Friday May 4, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/human-resource-planning/"
                        >
                          <img
                            src="/images/Blog-91-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/human-resource-planning/"
                          >
                            <h3>How to Do Human Resource Planning in Style</h3>
                          </Link>
                          <p>Wednesday April 25, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/improve-toxic-work-environment/"
                        >
                          <img
                            src="/images/Blog-90-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/improve-toxic-work-environment/"
                          >
                            <h3>How to Improve a Toxic Work Environment</h3>
                          </Link>
                          <p>Monday April 23, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/better-company-culture/"
                        >
                          <img
                            src="/images/Blog-89.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/better-company-culture/"
                          >
                            <h3>How to Build a Better Company Culture</h3>
                          </Link>
                          <p>Friday April 20, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-absenteeism/"
                        >
                          <img
                            src="/images/Blog-92.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-absenteeism/"
                          >
                            <h3>
                              Is There a Way to Deal with Employee Absenteeism?
                            </h3>
                          </Link>
                          <p>Tuesday April 24, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/ai-redefines-hr-management/"
                        >
                          <img
                            src="/images/Blog-69-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/ai-redefines-hr-management/"
                          >
                            <h3>How AI Redefines HR Management Practices</h3>
                          </Link>
                          <p>Wednesday March 21, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/"
                        onClick={() => handleOpenSection("Sec1")}
                      >
                        1
                      </span>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/hr-management/page/2/"
                        onClick={() => handleOpenSection("Sec9")}
                      >
                        2
                      </span>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/3/"
                        onClick={() => handleOpenSection("Sec10")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/4/"
                        onClick={() => handleOpenSection("Sec11")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/5/"
                        onClick={() => handleOpenSection("Sec12")}
                      >
                        5
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/6/"
                        onClick={() => handleOpenSection("Sec13")}
                      >
                        6
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/hr-management/page/7/"
                        onClick={() => handleOpenSection("Sec14")}
                      >
                        7
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec15" && (
                <div id="Sec15" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/secure-wifi-network/"
                        >
                          <img
                            src="/images/Blog-187-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/secure-wifi-network/"
                          >
                            <h3>How Do I Secure My Wi-Fi Network</h3>
                          </Link>
                          <p>Tuesday July 17, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/monitor-your-childs-internet-usage/"
                        >
                          <img
                            src="/images/Blog-180-final.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/monitor-your-childs-internet-usage/"
                          >
                            <h3>How To Monitor Your Child’s Internet Usage</h3>
                          </Link>
                          <p>Friday July 13, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/what-is-microsoft-azure/"
                        >
                          <img
                            src="/images/WHAT-IS-MICROSOFT-AZURE-AND-ITS-APPLICATIONS2-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/what-is-microsoft-azure/"
                          >
                            <h3>
                              What is Microsoft Azure and Its Applications
                            </h3>
                          </Link>
                          <p>Tuesday July 10, 2018</p>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/parental-control-routers-2018/"
                        >
                          <img
                            src="/images/Blog-181-new-3.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/parental-control-routers-2018/"
                          >
                            <h3>
                              Top 15 Parental Control Routers to Use in 2018
                            </h3>
                          </Link>
                          <p>Thursday July 5, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/safety-and-security/"
                        onClick={() => handleOpenSection("Sec3")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/safety-and-security/page/2/"
                        onClick={() => handleOpenSection("Sec15")}
                      >
                        2
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec16" && (
                <div id="Sec16" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-to-assess-employee-performance/"
                        >
                          <img
                            src="/images/23-11-2018_How-to-assess-employee-performance-in-your-organisation.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-to-assess-employee-performance/"
                          >
                            <h3>
                              How To Assess Employee Performance In Your
                              Organization?
                            </h3>
                          </Link>
                          <p>Friday November 23, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/organizational-planning-important/"
                        >
                          <img
                            src="/images/Why-is-organizational-planning-important-for-your-business-2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/organizational-planning-important/"
                          >
                            <h3>
                              Why Is Organizational Planning Important For Your
                              Business?
                            </h3>
                          </Link>
                          <p>Monday November 19, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/10-best-employee-retention-ideas/"
                        >
                          <img
                            src="/images/15-11-2018_10-Best-Employee-Retention-Ideas.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/10-best-employee-retention-ideas/"
                          >
                            <h3>10 Best Employee Retention Ideas</h3>
                          </Link>
                          <p>Friday November 16, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/cloud-based-attendance-system/"
                        >
                          <img
                            src="/images/12-10-2018_8-Reasons-to-switch-to-a-cloud-based-attendance-system.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/cloud-based-attendance-system/"
                          >
                            <h3>
                              8 Reasons to Switch to a Cloud Based Attendance
                              System
                            </h3>
                          </Link>
                          <p>Friday October 19, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/android-pie/"
                        >
                          <img
                            src="/images/Android-9-Pie-11-Important-Features-You-Need-to-Know-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/android-pie/"
                          >
                            <h3>
                              Android 9.0 Pie – 11 Important Features You Need
                              to Know
                            </h3>
                          </Link>
                          <p>Thursday August 9, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/improve-listening-skills/"
                        >
                          <img
                            src="/images/Blog-161-lstnf.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/improve-listening-skills/"
                          >
                            <h3>A Guide to Improve Your Listening Skills</h3>
                          </Link>
                          <p>Thursday June 21, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/12-ways-to-deal-employee-attendance-issues/"
                        >
                          <img
                            src="/images/Blog-121.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/12-ways-to-deal-employee-attendance-issues/"
                          >
                            <h3>
                              12 Surefire Ways to Deal With Employee Attendance
                              Issues
                            </h3>
                          </Link>
                          <p>Thursday May 17, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/12-attendance-management-problems/"
                        >
                          <img
                            src="/images/Blog-117.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/12-attendance-management-problems/"
                          >
                            <h3>
                              12 Common Attendance Management Problems and How
                              to Fix Them
                            </h3>
                          </Link>
                          <p>Wednesday May 16, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/ai-changing-workplace/"
                        >
                          <img
                            src="/images/Blog-106-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/ai-changing-workplace/"
                          >
                            <h3>
                              How Artificial Intelligence (AI) is Changing Your
                              Workplace
                            </h3>
                          </Link>
                          <p>Wednesday May 9, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/encourage-and-inspire-employee-motivation/"
                        >
                          <img
                            src="/images/Blog-97.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/encourage-and-inspire-employee-motivation/"
                          >
                            <h3>
                              How to Encourage and Inspire Employee Motivation
                            </h3>
                          </Link>
                          <p>Wednesday May 2, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/general/"
                        onClick={() => handleOpenSection("Sec4")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/general/page/2/"
                        onClick={() => handleOpenSection("Sec16")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/general/page/3/"
                        onClick={() => handleOpenSection("Sec17")}
                      >
                        3
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec17" && (
                <div id="Sec17" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-assistance-programs-at-workplace/"
                        >
                          <img
                            src="/images/Do-We-Need-Employee-Assistance-Programs-at-the-Workplace-.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-assistance-programs-at-workplace/"
                          >
                            <h3>
                              Do We Need Employee Assistance Programs at the
                              Workplace?
                            </h3>
                          </Link>
                          <p>Monday April 30, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/types-of-corporate-culture/"
                        >
                          <img
                            src="/images/Blog-95-new.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/types-of-corporate-culture/"
                          >
                            <h3>10 Distinct Types of Corporate Culture</h3>
                          </Link>
                          <p>Friday April 27, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/improve-toxic-work-environment/"
                        >
                          <img
                            src="/images/Blog-90-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/improve-toxic-work-environment/"
                          >
                            <h3>How to Improve a Toxic Work Environment</h3>
                          </Link>
                          <p>Monday April 23, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/new-trends-in-time-and-attendance-systems/"
                        >
                          <img
                            src="/images/Blog-61_new-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/new-trends-in-time-and-attendance-systems/"
                          >
                            <h3>
                              What are the New Trends in Time and Attendance
                              Systems
                            </h3>
                          </Link>
                          <p>Friday March 16, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/general/"
                        onClick={() => handleOpenSection("Sec4")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/general/page/2/"
                        onClick={() => handleOpenSection("Sec16")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/general/page/3/"
                        onClick={() => handleOpenSection("Sec17")}
                      >
                        3
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec18" && (
                <div id="Sec18" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/10-attendance-tracking-mistakes/"
                        >
                          <img
                            src="/images/14-05-2018_10-Attendance-Tracking-Mistakes-and-How-to-Avoid-Them.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/10-attendance-tracking-mistakes/"
                          >
                            <h3>
                              10 Attendance Tracking Mistakes and How to Avoid
                              Them
                            </h3>
                          </Link>
                          <p>Monday May 14, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/employee-absenteeism/"
                        >
                          <img
                            src="/images/Blog-92.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software HR Management</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/employee-absenteeism/"
                          >
                            <h3>
                              Is There a Way to Deal with Employee Absenteeism?
                            </h3>
                          </Link>
                          <p>Tuesday April 24, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/end-to-end-solutions-for-marking-employee-attendance/"
                        >
                          <img
                            src="/images/13-03-2018_What-are-the-end-to-end-solutions-for-marking-employee-attendance.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/end-to-end-solutions-for-marking-employee-attendance/"
                          >
                            <h3>
                              What are the end-to-end solutions for marking
                              employee attendance?
                            </h3>
                          </Link>
                          <p>Thursday March 15, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/attendance-management-software/"
                        >
                          <img
                            src="/images/06-03-2018_Why-Do-We-Need-the-Right-Attendance-Management-Software.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/attendance-management-software/"
                          >
                            <h3>
                              Why Do We Need the Right Attendance Management
                              Software?
                            </h3>
                          </Link>
                          <p>Friday March 9, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/track-employee-attendance/"
                        >
                          <img
                            src="/images/5-3-2018_Top-6-Practices-to-Track-Your-Employee-Attendance.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/track-employee-attendance/"
                          >
                            <h3>
                              Top 6 Practices to Track Your Employee Attendance
                            </h3>
                          </Link>
                          <p>Friday March 9, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/smart-attendance-system/"
                        >
                          <img
                            src="/images/Benefits-of-IOT-based-Smart-Attendance-System.png"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/smart-attendance-system/"
                          >
                            <h3>
                              5 Benefits of IOT based Smart Attendance System
                            </h3>
                          </Link>
                          <p>Friday March 9, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/pros-and-cons-of-online-attendance-software/"
                        >
                          <img
                            src="/images/Blog-54.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/pros-and-cons-of-online-attendance-software/"
                          >
                            <h3>Pros and Cons of Online Attendance Software</h3>
                          </Link>
                          <p>Wednesday March 14, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/attendance-monitoring-software/"
                        >
                          <img
                            src="/images/How-to-Tackle-Business-Challenges-with-Attendance-Monitoring-Software-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/attendance-monitoring-software/"
                          >
                            <h3>
                              How to Tackle Business Challenges with Attendance
                              Monitoring Software
                            </h3>
                          </Link>
                          <p>Friday March 9, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/time-attendance-software/"
                        >
                          <img
                            src="/images/Why-Business-Should-Track-Time-and-Attendance.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Attendance Tracker Software</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/time-attendance-software/"
                          >
                            <h3>
                              Why Businesses Should Use Time and Attendance
                              Software?
                            </h3>
                          </Link>
                          <p>Friday March 9, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/attendance-tracker-software/"
                        onClick={() => handleOpenSection("Sec5")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/attendance-tracker-software/page/2/"
                        onClick={() => handleOpenSection("Sec18")}
                      >
                        2
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec19" && (
                <div id="Sec19" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/tips-choose-good-wifi-router/"
                        >
                          <img
                            src="/images/how-to-choose-a-good-wifi-router.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/tips-choose-good-wifi-router/"
                          >
                            <h3>How To Choose A Good WiFi Router?﻿</h3>
                          </Link>
                          <p>Monday April 8, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/routers-for-business/"
                        >
                          <img
                            src="/images/best-routers-for-business-2019.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/routers-for-business/"
                          >
                            <h3>Best Routers For Business 2019﻿</h3>
                          </Link>
                          <p>Wednesday March 27, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/modem-router-combos/"
                        >
                          <img
                            src="/images/31-01-2019_6-Best-Modem-Router-Combos-of-2019.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/modem-router-combos/"
                          >
                            <h3>6 Best Modem-Router Combos of 2019</h3>
                          </Link>
                          <h3>6 Best Modem-Router Combos of 2019</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/top-smart-speakers/"
                        >
                          <img
                            src="/images/05-02-2019_Top-8-smart-speakers-to-rule-the-charts-of-2019.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/top-smart-speakers/"
                          >
                            <h3>
                              Top 9 Smart Speakers To Rule The Charts of 2019
                            </h3>
                          </Link>
                          <p>Thursday March 7, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/difference-bluetooth-and-wifi/"
                        >
                          <img
                            src="/images/23-01-2019_What-is-the-difference-between-the-bluetooth-and-wifi.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/difference-bluetooth-and-wifi/"
                          >
                            <h3>
                              What Is The Difference Between
                              The&nbsp;Bluetooth&nbsp;And WiFi
                            </h3>
                          </Link>
                          <p>Friday February 1, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-range-extender/"
                        >
                          <img
                            src="/images/Top-10-WiFi-Range-Extenders-To-Use-In-2019.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-range-extender/"
                          >
                            <h3>Top 10 WiFi Range Extender To Use In 2019</h3>
                          </Link>
                          <p>Friday January 25, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/parental-control-routers/"
                        >
                          <img
                            src="/images/Top-20-Parental-Control-Routers-to-Use-in-2019.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/parental-control-routers/"
                          >
                            <h3>
                              Top 20 Parental Control Routers to Use in 2019
                            </h3>
                          </Link>
                          <p>Thursday January 10, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/difference-between-broadband-and-wifi/"
                        >
                          <img
                            src="/images/What-is-the-difference-between-broadband-and-Wi-Fi.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/difference-between-broadband-and-wifi/"
                          >
                            <h3>
                              What Is The Difference Between Broadband And WiFi
                            </h3>
                          </Link>
                          <p>Monday December 31, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-without-internet/"
                        >
                          <img
                            src="/images/22-05-2019_Things-Human-Resource-must-consider-when-dealing-while-sanctioning-family-leave.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-without-internet/"
                          >
                            <h3>How To Get WiFi Without Internet?</h3>
                          </Link>
                          <p>Wednesday December 26, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/optimise-wifi-network-using-wifi-analyzer/"
                        >
                          <img
                            src="/images/How-to-optimise-wifi-network-using-Wifi-analyzer.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/optimise-wifi-network-using-wifi-analyzer/"
                          >
                            <h3>
                              How to Optimise WiFi Network Using WiFi Analyzer?
                            </h3>
                          </Link>
                          <p>Monday November 12, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/wifi-tech/"
                        onClick={() => handleOpenSection("Sec6")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/2/"
                        onClick={() => handleOpenSection("Sec19")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/3/"
                        onClick={() => handleOpenSection("Sec20")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/4/"
                        onClick={() => handleOpenSection("Sec21")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/blog/category/wifi-tech/page/5/"
                        onClick={() => handleOpenSection("Sec22")}
                      >
                        5
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec20" && (
                <div id="Sec20" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/top-10-free-wifi-apps/"
                        >
                          <img
                            src="/images/02-11-2018_Top-10-apps-that-give-free-wifi.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/top-10-free-wifi-apps/"
                          >
                            <h3>Top 10 Apps That Give Free WiFi</h3>
                          </Link>
                          <p>Friday November 9, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/uses-of-lifi-technology/"
                        >
                          <img
                            src="/images/01-11-2018_10-potential-uses-of-Lifi-you-probably-never-thought-of.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/uses-of-lifi-technology/"
                          >
                            <h3>
                              Potential Uses Of LiFi Technology You Probably
                              Never Thought Of
                            </h3>
                          </Link>
                          <p>Thursday November 1, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-can-detect-bombs-weapons/"
                        >
                          <img
                            src="/images/12-10-2018_How-Wifi-will-help-detect-bombs-and-weapons.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-can-detect-bombs-weapons/"
                          >
                            <h3>How WiFi Can Help Detect Bombs and Weapons?</h3>
                          </Link>
                          <p>Tuesday October 23, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/get-free-wifi-anywhere/"
                        >
                          <img
                            src="/images/15-Ways-to-Get-Free-Wifi-Anywhere-Around-You.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/get-free-wifi-anywhere/"
                          >
                            <h3>
                              15 Ways to Get Free WiFi Anywhere Around You
                            </h3>
                          </Link>
                          <p>Thursday September 20, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-wifi-analyzer-apps-for-windows/"
                        >
                          <img
                            src="/images/10-Best-Wifi-Analyzer-Apps-for-Windows.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-wifi-analyzer-apps-for-windows/"
                          >
                            <h3>10 Best WiFi Analyzer Apps For Windows</h3>
                          </Link>
                          <p>Tuesday September 11, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/set-wifi-password/"
                        >
                          <img
                            src="/images/04-09-2018_6-easy-steps-to-set-WiFi-password.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/set-wifi-password/"
                          >
                            <h3>6 Easy Steps to Set WiFi Password</h3>
                          </Link>
                          <p>Tuesday September 4, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-does-wifi-work/"
                        >
                          <img
                            src="/images/How-Does-Wifi-Work-V2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-does-wifi-work/"
                          >
                            <h3>How does WiFi Work?</h3>
                          </Link>
                          <p>Friday August 31, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/set-up-wifi-at-home/"
                        >
                          <img
                            src="/images/How-to-Set-Up-WiFi-at-Home-5-Easy-Steps.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/set-up-wifi-at-home/"
                          >
                            <h3>How to Set Up WiFi at Home : 5 Easy Steps</h3>
                          </Link>
                          <p>Friday August 31, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/public-wifi-hotspots/"
                        >
                          <img
                            src="/images/Rise-in-Public-Wifi-Hotspots-Boon-or-Bane.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/public-wifi-hotspots/"
                          >
                            <h3>Rise in Public WiFi Hotspots: Boon or Bane?</h3>
                          </Link>
                          <p>Wednesday August 29, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-networks-influence-smart-city-development/"
                        >
                          <img
                            src="/images/27-08-2018_How-will-Wi-fi-networks-influence-smart-city-development.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-networks-influence-smart-city-development/"
                          >
                            <h3>
                              How Will WiFi Networks Influence Smart City
                              Development ?
                            </h3>
                          </Link>
                          <p>Monday August 27, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/wifi-tech/"
                        onClick={() => handleOpenSection("Sec6")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/2/"
                        onClick={() => handleOpenSection("Sec19")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/3/"
                        onClick={() => handleOpenSection("Sec20")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/4/"
                        onClick={() => handleOpenSection("Sec21")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/blog/category/wifi-tech/page/5/"
                        onClick={() => handleOpenSection("Sec22")}
                      >
                        5
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec21" && (
                <div id="Sec21" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/most-common-wifi-issues-solutions/"
                        >
                          <img
                            src="/images/21-08-2016_How-to-fix-the-most-common-WIFI-issues.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/most-common-wifi-issues-solutions/"
                          >
                            <h3>How to Fix the Most Common WiFi Issues?</h3>
                          </Link>
                          <p>Wednesday August 22, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/connect-laptop-wifi/"
                        >
                          <img
                            src="/images/How-to-Connect-Laptop-to-Wifi.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/connect-laptop-wifi/"
                          >
                            <h3>
                              How to Connect Laptop to WiFi – Three Simple Steps
                            </h3>
                          </Link>
                          <p>Friday August 24, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/benefits-wifi-attendance-app/"
                        >
                          <img
                            src="/images/6-Benefits-of-Using-Wi-Fi-Attendance-app-for-Your-company.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software HR Management WiFi Tech
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/benefits-wifi-attendance-app/"
                          >
                            <h3>
                              6 Benefits of Using WiFi Attendance App For Your
                              Company
                            </h3>
                          </Link>
                          <p>Friday August 10, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/role-of-wifi-in-iot/"
                        >
                          <img
                            src="/images/Blog-214-V4.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/role-of-wifi-in-iot/"
                          >
                            <h3>Role of WiFi in IoT</h3>
                          </Link>
                          <p>Tuesday August 7, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/wifi-based-employee-attendance-system/"
                        >
                          <img
                            src="/images/Blog-210-V3.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software HR Management Safety and
                            Security WiFi Tech
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/wifi-based-employee-attendance-system/"
                          >
                            <h3>
                              7 Reasons You should Use A WiFi Based Attendance
                              System
                            </h3>
                          </Link>
                          <p>Friday August 3, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/advantages-wifi-attendance-blogs/"
                        >
                          <img
                            src="/images/Blog-212-new-2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/advantages-wifi-attendance-blogs/"
                          >
                            <h3>
                              7 Advantages of pushing News and Blogs through
                              WiFi Attendance App
                            </h3>
                          </Link>
                          <p>Wednesday August 1, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/advantages-wifi-attendance-system-work-place/"
                        >
                          <img
                            src="/images/Blog-211-final.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>
                            Attendance Tracker Software HR Management WiFi Tech
                          </span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/advantages-wifi-attendance-system-work-place/"
                          >
                            <h3>
                              7 Advantages of WiFi Attendance System for Your
                              Work Place&nbsp;
                            </h3>
                          </Link>
                          <p>Tuesday July 31, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/evolution-of-wifi-routers/"
                        >
                          <img
                            src="/images/Blog-185.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/evolution-of-wifi-routers/"
                          >
                            <h3>Evolution of WiFi Routers</h3>
                          </Link>
                          <p>Thursday July 26, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/best-wifi-analyzer-apps-for-android/"
                        >
                          <img
                            src="/images/11-best-wifi-analyzer-apps-for-android-1.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/best-wifi-analyzer-apps-for-android/"
                          >
                            <h3>11 Best WiFi Analyzer Apps for Android</h3>
                          </Link>
                          <p>Friday December 13, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/secure-wifi-network/"
                        >
                          <img
                            src="/images/Blog-187-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/secure-wifi-network/"
                          >
                            <h3>How Do I Secure My Wi-Fi Network</h3>
                          </Link>
                          <p>Tuesday July 17, 2018</p>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/wifi-tech/"
                        onClick={() => handleOpenSection("Sec6")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/2/"
                        onClick={() => handleOpenSection("Sec19")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/3/"
                        onClick={() => handleOpenSection("Sec20")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/4/"
                        onClick={() => handleOpenSection("Sec21")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/blog/category/wifi-tech/page/5/"
                        onClick={() => handleOpenSection("Sec22")}
                      >
                        5
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec22" && (
                <div id="Sec22" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/what-is-lifi/"
                        >
                          <img
                            src="/images/Blog-183-final-new.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/what-is-lifi/"
                          >
                            <h3>What Is LiFi? All You Need to Know</h3>
                          </Link>
                          <p>Wednesday July 11, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/parental-control-routers-2018/"
                        >
                          <img
                            src="/images/Blog-181-new-3.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Safety and Security WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/parental-control-routers-2018/"
                          >
                            <h3>
                              Top 15 Parental Control Routers to Use in 2018
                            </h3>
                          </Link>
                          <p>Thursday July 5, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/future-of-wi-fi-and-mobility/"
                        >
                          <img
                            src="/images/Blog-177-new-2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/future-of-wi-fi-and-mobility/"
                          >
                            <h3>
                              15 Predictions for the Future of Wi-Fi and
                              Mobility
                            </h3>
                          </Link>
                          <p>Tuesday July 3, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/how-google-wifi-work/"
                        >
                          <img
                            src="/images/google-wifi-2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/how-google-wifi-work/"
                          >
                            <h3>How does Google Wi-Fi Work</h3>
                          </Link>
                          <p>Monday July 2, 2018</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/set-up-wifi-network/"
                        >
                          <img
                            src="/images/Blog-175-new2.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>WiFi Tech</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/set-up-wifi-network/"
                          >
                            <h3>How to Set Up Wi-Fi Network</h3>
                          </Link>
                          <p>Thursday July 5, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/wifi-tech/"
                        onClick={() => handleOpenSection("Sec6")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/2/"
                        onClick={() => handleOpenSection("Sec19")}
                      >
                        2
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/3/"
                        onClick={() => handleOpenSection("Sec20")}
                      >
                        3
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/wifi-tech/page/4/"
                        onClick={() => handleOpenSection("Sec21")}
                      >
                        4
                      </a>
                      <a
                        className="page-numbers"
                        href="#/blog/category/wifi-tech/page/5/"
                        onClick={() => handleOpenSection("Sec22")}
                      >
                        5
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
              {openSection === "Sec23" && (
                <div id="Sec23" className="justrowBlog">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/delegation-of-authority/"
                        >
                          <img
                            src="public/images/04-02-2019_What-is-delegation-of-authority-How-id-it-beneficial-to-business.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>General Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/delegation-of-authority/"
                          >
                            <h3>
                              What Is Delegation of Authority? How Is It
                              Beneficial To Business?﻿
                            </h3>
                          </Link>
                          <p>Thursday March 7, 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="Blog2wh">
                        <Link
                          className="linktxt linkhovtext"
                          href="/blog/leadership-skills-every-manager-needs/"
                        >
                          <img
                            src="public/images/35-Leadership-skills-every-manager-needs.jpg"
                            alt=""
                            className="BlogmainMd"
                          />
                        </Link>
                        <div className="_blg-grd-0a2-ul">
                          <span>Work Culture</span>
                          <Link
                            className="linktxt linkhovtext"
                            href="/blog/leadership-skills-every-manager-needs/"
                          >
                            <h3>
                              35 Leadership Skills Every Manager Needs To Master
                            </h3>
                          </Link>
                          <p>Monday February 4, 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav
                    className="navigation paging-navigation Bottompagination"
                    role="navigation"
                  >
                    <h1 className="screen-reader-text">Posts navigation</h1>
                    <div className="pagination loop-pagination">
                      <a className="prev page-numbers" href="">
                        ← Previous
                      </a>
                      <a
                        aria-current="page"
                        className="page-numbers current"
                        href="#/category/work-culture/"
                        onClick={() => handleOpenSection("Sec7")}
                      >
                        1
                      </a>
                      <a
                        className="page-numbers"
                        href="#/category/work-culture/page/2/"
                        onClick={() => handleOpenSection("Sec23")}
                      >
                        2
                      </a>
                      <a className="next page-numbers" href="">
                        Next →
                      </a>
                    </div>
                  </nav>
                </div>
              )}
            </div> */}
        {/* </div>
        )} */}
      </div>
    </>
  );
};

export default Dem;
