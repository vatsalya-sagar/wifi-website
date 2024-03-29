import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          id="elementor-icons-css"
          href="https://wp.wifiattendance.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.29.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-common-css"
          href="https://wp.wifiattendance.com/wp-content/plugins/elementor/assets/css/common.min.css?ver=3.20.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="https://wp.wifiattendance.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.20.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="swiper-css"
          href="https://wp.wifiattendance.com/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wifiattendance-style-css"
          href="https://wp.wifiattendance.com/wp-content/themes/wifiattendance/style.css?ver=1.0.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-8-css"
          href="https://wp.wifiattendance.com/wp-content/uploads/elementor/css/post-8.css?ver=1710741060"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-global-css"
          href="https://wp.wifiattendance.com/wp-content/uploads/elementor/css/global.css?ver=1710755424"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-11-css"
          href="https://wp.wifiattendance.com/wp-content/uploads/elementor/css/post-11.css?ver=1710840073"
          media="all"
        />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
