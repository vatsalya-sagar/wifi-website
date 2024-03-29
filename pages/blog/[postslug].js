import Head from "next/head";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { Blogleftbar } from "@/components/Blogleftbar";
import { BASEPATH } from "@/config";

export default function SinglePost({ Postdata }) {
  console.log(Postdata, "Postdata");
  if (Postdata?.data?.post !== null) {
    return (
      <>
        <div
          className="parallax-window-s-p"
          data-parallax="scroll"
          data-z-index="1"
        >
          <section id="banner-s-p">
            <div className="con-con-s-p">
              <div className="container title-s-p">
                <h2>{Postdata?.data?.post?.title}</h2>
                <div></div>
              </div>
            </div>
          </section>
        </div>
        <div className="singlepost pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <img
                  src={Postdata?.data?.post?.featuredImage?.node?.guid}
                  className="img-respncv"
                />
                <div className="inner-page">
                  {Postdata?.data?.post?.content !== null && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${Postdata?.data?.post?.content}`,
                      }}
                    ></div>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <Blogleftbar />
              </div>
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
        posts {
          nodes {
            slug
          }
        }
      }
             `,
    }),
  });
  const resourceAPIList = await resourceAPI.json();
  const paths = resourceAPIList.data.posts.nodes.map((list) => ({
    params: { postslug: list.slug },
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
              
            post(id: "${params.postslug}" ,idType:SLUG) {
                postId
                slug
                title            
                content
                featuredImage {
                    node {
                      guid
                    }
                  }
              }
            }
          `,
    }),
  });

  const Postdata = await currentApi.json();

  return {
    props: {
      Postdata,
    },
    revalidate: 10,
  };
}
