import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/blog.css";
import "@/styles/contactStyle.css";
import "@/styles/globals.css";
import "@/styles/homeStyles.css";
import Layout from "@/components/Layout";
import React, { useEffect } from "react";

// import "@fortawesome/fontawesome-free/css/all.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
