import Footer from "@/components/Footer";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Employee Attendance Management System | WiFi Attendance</title>
      </Head>
      <div className="wrapper">
        <section id="banner-sx">
          <img
            src="./images/att1.jpg"
            className="img-respncv"
            alt="banner_image"
          />
          <img
            src="./images/loc_2_big.png"
            className="img-banner img-respncv"
            alt="banner_marker_image1"
          />

          <img
            src="./images/loc_1_big.png"
            className="img-banner00 img-respncv"
            alt="banner_marker_image2"
          />

          <img
            src="./images/loc_3_big.png"
            className="img-banner000 img-respncv"
            alt="banner_marker_image3"
          />

          <a
            href="https://service.wifiattendance.com/Plans/Index/"
            className="btn btn-default"
            id="d_banner-btn"
            target="_blank"
          >
            REGISTER NOW
          </a>
        </section>
        <section id="download-app">
          <div className="container">
            <div className="row">
              <div className="col-xs-12" style={{ textAlign: "center" }}>
                <a
                  target="_blank"
                  href="https://service.wifiattendance.com/Plans/Index/"
                  className="btn btn-default"
                  id="d_banner-btn1"
                >
                  REGISTER NOW
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="_app-grd">
          <div class="container contnr-full-wdth-tab">
            <div class="row">
              <div class="col-md-12">
                <div class="_app-grd-hd">
                  <h2>Our Apps</h2>
                </div>
              </div>
              <div class="col-sm-4">
                <a href="/manager-app/">
                  <div class="_app-grd-a">
                    <img src="./images/Manager App.png" alt="" />
                    <h4>Manager App</h4>
                  </div>
                </a>
              </div>
              <div class="col-sm-4">
                <a href="/employee-attendance-app/">
                  <div class="_app-grd-a">
                    <img src="./images/Employee App.png" alt="" />
                    <h4>Employee App</h4>
                  </div>
                </a>
              </div>
              <div class="col-sm-4">
                <a href="/hr-app/">
                  <div class="_app-grd-a">
                    <img src="./images/HR manager app.png" alt="" />
                    <h4>HR App</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="system">
          <div className="container contnr-full-wdth-tab">
            <div className="row main-sys">
              <div
                className="col-xs-12 col-sm-6 center"
                style={{ padding: "0" }}
              >
                <div className="col-xs-12 pdg-R-L">
                  <div className="system-title" style={{ padding: "0" }}>
                    <h2>WIFI ATTENDANCE SYSTEM</h2>
                  </div>
                  <div className="col-xs-12 system-content pdg-R-L">
                    <p>
                      Do you need a simple and convenient way to track your
                      staff attendance and their whereabouts? Well, now we have
                      a better technology in contrast to normal RFID biometric
                      systems.
                    </p>
                    <p></p>
                    <p>
                      Wi-Fi attendance daily attendance tracker is one-of-a-kind
                      system designed with businesses like yours in mind. Spend
                      less time on HR management and focus on what matters most
                      to your organization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img
                  src="./images/officefd.jpg"
                  className="img-respncv"
                  alt="office-room"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="tracking">
          <div className="container contnr-full-wdth-tab">
            <div className="row">
              <div
                className="col-xs-12 main-sys col-revrs"
                style={{ padding: "0" }}
              >
                <div className="col-xs-12 col-sm-pull-6 col-sm-6 center img-bg-clr">
                  <img
                    src="./images/wifi_tracker1.png"
                    className="img-respncv"
                    alt="wifi_tracker_image"
                  />
                </div>
                <div className="col-xs-12 col-sm-push-6 col-sm-6 pdg-R-L">
                  <div className="tracking-title">
                    <h1>DAILY ATTENDANCE TRACKER APP</h1>
                  </div>
                  <div className="col-xs-12 tracking-content pdg-R-L">
                    <p>
                      Wi-Fi Attendance is a daily attendance tracking app for
                      businesses. Unlike normal biometric apps, it works only if
                      there is Wi-Fi connectivity.
                    </p>
                    <p>
                      This means your employees can mark their attendance only
                      if they are in the office Wi-Fi connectivity range. The
                      app uses Wi-Fi router devices to keep the employees in the
                      network. Besides this, the app allows you to track the
                      exact location of your employees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why">
          <div className="container contnr-full-wdth-tab">
            <div className="row">
              <div className="col-xs-12" style={{ padding: 0 }}>
                <div className="col-xs-12">
                  <div className="why-title">
                    <h2>WHY TO CHOOSE WI-FI ATTENDANCE MONITORING SYSTEM?</h2>
                  </div>
                  <div className="col-xs-12 why-content">
                    <div className="h3-p">
                      <p>
                        Wi-Fi Attendance system helps you tackle many business
                        challenges
                      </p>
                    </div>
                    <p>Let’s check out some benefits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row why-row row2col grid" id="why-row">
              <div className="col-xs-12 col-sm-4 col">
                <div className="col-xs-12 why-col">
                  <h4>Time Saved-Money Saved!</h4>
                  <p id="flex-text">
                    Attendance tracker app can save your time and effort. It
                    tracks your employees’ working hours accurately and you can
                    be tension free. By doing so, you are not only saving your
                    time but also your money.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col">
                <div className="col-xs-12 why-col">
                  <h4>Increased Productivity of Employees</h4>
                  <p id="flex-text">
                    As the system works only in office Wi-Fi range, there is no
                    chance for any sort of cheating such as buddy punching. Thus
                    it increases employees’ productivity and helps to maintain a
                    smooth workflow.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col">
                <div className="col-xs-12 why-col">
                  <h4>Reduces Errors in Payroll</h4>
                  <p id="flex-text">
                    As the system can track the employee working hours
                    accurately, it is possible to manage paid off time, vacation
                    time, get approvals for time sheet and integrate those
                    details with payroll services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="test">
          <div className="container contnr-full-wdth-tab">
            <div className="row">
              <div className="col-xs-12">
                <div className="test-title">
                  <h2>WHAT PEOPLE ARE SAYING?</h2>
                  <p>
                    Still need convincing? Check out what people are saying
                    about Wi-fi Attendance
                  </p>
                </div>
                <div className="container cntr-styl">
                  <div className="icon-styl">
                    <a href="#">
                      <i className="fa fa-chevron-left"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact-main">
          <div className="container contnr-full-wdth-tab">
            <div className="row main-sys">
              <div className="col-xs-12 col-sm-6">
                <div className="col-xs-12">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/IJ5jJabbE2o"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen=""
                      className="youtube-ifrm-styl"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 colSmOffset"
                style={{ textAlign: "center" }}
              >
                <h3>QUICK CONTACT</h3>
                <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
