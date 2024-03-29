import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { FaCogs } from "react-icons/fa";
import { Blogleftbar } from "@/components/Blogleftbar";
import { BASEPATH } from "@/config";

export default function CategoryPost({ catedata }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  console.log(catedata, "catadata");

  if (catedata?.data?.category) {
    const categorySlug = catedata.data.category.slug;

    return (
      <>
        <div className="category-list ">
          <div id="banner">
            <div className="con-con" id="BlogMainSection">
              <div className="container title">
                <h2 className="text-center ">
                  Category Archives: {categorySlug}
                </h2>
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
                          className="color"
                          href="/blog/category/hr-management/"
                        >
                          HR Management
                        </a>
                      </li>
                      <li>
                        <a className="color" href="/blog/category/infographic/">
                          Infographic
                        </a>
                      </li>
                      <li>
                        <a
                          className="color"
                          href="/blog/category/safety-and-security/"
                        >
                          Safety and Security
                        </a>
                      </li>
                      <li>
                        <a className="color" href="/blog//category/general/">
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
          <div className="container ">
            <div className="row ">
              {catedata?.data?.category?.posts?.nodes?.map((item, index) => (
                <>
                  <div className="col-lg-3 mb-3 mt-3  ">
                    <Link
                      className="linktxt linkhovtext"
                      href={`/blog/${item.slug}`}
                    >
                      <img
                        src={item.featuredImage?.node?.guid}
                        alt=""
                        className="BlogmainMd"
                      />
                    </Link>

                    <div className="_blg-grd-0a2-ul">
                      <span>{categorySlug}</span>
                      <Link
                        className="linktxt linkhovtext"
                        href={`/blog/${item.slug}`}
                      >
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.date}</p>
                    </div>
                  </div>
                </>
              ))}

              {/* <nav
                className="navigation paging-navigation Bottompagination"
                role="navigation"
              >
                <h1 className="screen-reader-text">Posts navigation</h1>
                <div className="pagination loop-pagination">
                  <a
                    aria-current="page"
                    className="page-numbers current"
                    href="/blog/category/hr-management/"
                  >
                    1
                  </a>
                  <a
                    aria-current="page"
                    className="page-numbers current"
                    href="/blog/category/hr-management/page/2/"
                  >
                    2
                  </a>
                  <a
                    className="page-numbers"
                    href="/category/hr-management/page/3/"
                  >
                    3
                  </a>
                  <a
                    className="page-numbers"
                    href="/category/hr-management/page/4/"
                  >
                    4
                  </a>
                  <a
                    className="page-numbers"
                    href="/category/hr-management/page/5/"
                  >
                    5
                  </a>
                  <a
                    className="page-numbers"
                    href="/category/hr-management/page/6/"
                  >
                    6
                  </a>
                  <a
                    className="page-numbers"
                    href="/category/hr-management/page/7/"
                  >
                    7
                  </a>
                  <a className="next page-numbers" href="">
                    Next →
                  </a>
                </div>
              </nav> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export async function getStaticPaths() {
  const resourceAPI = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        categories {
          nodes {
            count
            categoryId
            slug
            
          }
        }
      }
      `,
    }),
  });
  const resourceAPIList = await resourceAPI.json();
  const paths = resourceAPIList.data?.categories?.nodes?.map((list) => ({
    params: { cateslug: list.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const currentApi = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query NewQuery {
              
             category (id: "${params.cateslug}" ,idType:SLUG) {
              slug
              name
              link
              posts (first: 66){
                nodes {
                
                  title
                  excerpt
                 slug
                 date
                  featuredImage {
                    node {
                      guid
                      uri
                    }
                  }

                }
              }
            
            }
          }

          `,
    }),
  });

  const catedata = await currentApi.json();

  return {
    props: {
      catedata,
    },
    revalidate: 10,
  };
}
