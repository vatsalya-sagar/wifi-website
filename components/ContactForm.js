import react, { useState, useEffect } from "react"
import { useRouter } from 'next/router'

export default function ContactForm() {

    const router  = useRouter();
    // const { asPath, pathname } = useRouter();
    // console.log("-------->>", asPath)
    const utm_code = router.asPath;

    console.log("utm_code" , utm_code)
    // Local state for holding form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneField, setPhoneField] = useState('');
    const [message, setMessage] = useState('');
    const [userLive , setLiveLocation] =useState ()

    

    useEffect(() => {
        fetch('https://api.testreveal.com:3013/api/get-client-location')
          .then(response => response.json())
          .then(data => {
            console.log("UserLocation" , data)
            setLiveLocation(data)
          })
          .catch(error => console.log(error))
      }, []);

    //Form validation
    useEffect(() => {
        const utm_code = router.asPath;
        console.log("utm_code" , utm_code)

        "use strict";
        var forms = document.querySelectorAll(".needs-validation");
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
                "submit",
                function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        // console.log("Thanks for submission");
                       // document.querySelector(".formconfirm-msg").style.display = "block";
                    }
                    //form.classList.add("was-validated");
                },
                false
            );
        });
    });

    // submitFormData
    const handleSubmit3 = async (e) => {
        e.preventDefault()
        // alert("Working")
        // console.log('Sending')
        await fetch('https://admin.officecaller.com/api/leads/website_lead/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": "Wifi Attendance website",
                "first_name": name,
                "email": email,
                "phone": phoneField,
                "city": "Not Available, Not Available",
                "state": "",
                "country": "Not Available",
                "address_line": '',
                "latitude": "", "longitude": "",
                "contact_lead": "Lead from Wifi Attendance",
                "app_category": "No Category",
                "category_text": "Lead from Wifi Attendance",
                "app_platform": "Lead from Wifi Attendance",
                "cross_platfrom_status": "NA",
                "which_cross_platform": "NA",
                "grand_cost": "",
                // "enq_date": enq_date,
                "favourite": "",
                "enq_through": utm_code,
                "enq_from": utm_code,
                "enquiryfrom": utm_code,
                "country_code": "Not Available",
                "choosen_approach": "NA",
                "choosen_devices": "NA",
                "choosen_screen_count": 0,
                "choosen_login_methods": [""],
                // "choosen_features": [utm_code],
                "choosen_features": userLive ? [userLive?.country_name , userLive?.region_name , userLive?.city , userLive?.country_code , userLive?.time_zone?.current_time , userLive?.currency.name , userLive?.isp , userLive?.latitude , userLive?.longitude ] : [],
                "choosen_language": "NA",
                "choosen_admin": "NA ",
                "admin_efforts": 0,
                "choosen_webapp": "NA",
                "secondary_app": "NA",
                "screen_efforts": 0,
                "webservices": 0,
                "webapp_efforts": 0,
                "ios_efforts": 0,
                "android_efforts": 0,
                "crossplatform_efforts": 0,
                "secondary_app_efforts": 0,
                "features_efforts": 0,
                "database_efforts": 0,
                "grand_total_efforts": 0,
                "approx_cost": "NA",
                "timeline_month": "NA",
                "user_comment": message,
                // "mail_date": enq_date,
                "apikey": "7dac0fcac909b349"
            })
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) 
            {
                router.push('/thank-you')
                console.log('Response succeeded!');
            } else {
                console.log('Something went wrong...please check')
            }
        })
    }

  return (
    <>
    <form onSubmit={(e) => { handleSubmit3(e) }} >
                  <div className="form-group mrgnBotm-main">
                    <input
                      type="text"
                      className="form-control formCntrl"
                      name="your_name"
                      placeholder="Your Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mrgnBotm-main">
                    <input
                      type="email"
                      className="form-control formCntrl"
                      name="your_email"
                       onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group mrgnBotm-main">
                    <input
                      type="tel"
                      className="form-control formCntrl"
                      name="your_sub"
                      placeholder="Mobile No"
                      onChange={(e) => setPhoneField(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mrgnBotm-main">
                    <textarea
                      className="form-control formCntrl"
                      rows="3"
                      name="your_message"
                        onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-rounded btn-lg fw-bold px-4">Submit <i className="fa fa-arrow-right ms-1"></i></button>
                  
                </form>
    
    </>
  )
}
