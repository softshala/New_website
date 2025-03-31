import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Name from "./NameInput/Name";
import Email from "./NameInput/Email";
import Phone from "./NameInput/Phone";
import Message from "./NameInput/Message";
import mobileImgWhite from "../GetInTouch/formsIcons/mobileicon.png";
import mobileImgBlack from "../GetInTouch/formsIcons/Phoneget.png";
import emailImgBlack from "../GetInTouch/formsIcons/emailget.png";
import emailImgWhite from "../GetInTouch/formsIcons/writeus icon.png";
import officeImgWhite from "../GetInTouch/formsIcons/office icon.png";
import officeImgBlack from "../GetInTouch/formsIcons/office.png";
import Map from "../GetInTouch/Map";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import { useTheme } from "../../Context/ThemeContext";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const location = useLocation();
  const { isDarkTheme } = useTheme();

  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const addressRef = useRef(null);
  const headingRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const scrollToContact = () => {
      if (location.state?.scrollToContact) {
        const contactUs = document.getElementById("contact-us");
        if (contactUs) {
          contactUs.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToContact();

    const animateForm = () => {
      const formItems = formRef.current?.querySelectorAll(".form-item");
      const addressItems = addressRef.current?.querySelectorAll(".all-item");

      gsap.fromTo(
        formItems,
        { x: -230, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        addressItems,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        headingRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        mapRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 3,
          delay: 0.5,
          ease: "power3.out",
        }
      );
    };

    const container = document.getElementById("contact-us");
    if (container) {
      container.addEventListener("mouseenter", animateForm);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", animateForm);
      }
    };
  }, [location]);

  const handleSubmit = (e) => {
    setSubmitted(true);
    setTimeout(() => {
      formRef.current.reset();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="overflow-hidden">
      <NavBar />

      <div
        id="contact-us"
        className={`flex flex-col items-center w-full px-4 md:px-10 py-5 overflow-hidden relative z-10 ${
          isDarkTheme ? "bg-[#000000]" : "bg-white"
        }`}
      >
        <div className="relative z-10 w-full max-w-[300px] md:max-w-4xl mx-4 md:mx-8 mt-20 md:mt-24 mb-8">
          <Map ref={mapRef} className="w-full h-[150px] md:h-[300px] rounded-xl" />
        </div>

        {/* Centered Header */}
        <h2
          ref={headingRef}
          className={`heading-item text-3xl md:text-5xl self-stretch font-normal text-center mb-8 mt-8 md:mt-5 max-md:max-w-full font-raleway tracking-[0] leading-[normal] relative z-10 ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Get In Touch
        </h2>

        <div className="absolute inset-0 z-5">
          <BackgroundAnimation />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full overflow-hidden">
          {/* Left Side: Form */}
          <div className={`form-container flex flex-col items-center w-[331px] md:w-full md:h-auto px-10 py-5`}>
            <form
              ref={formRef}
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              method="POST"
              className="form-div flex flex-col items-center gap-5 p-5"
              onSubmit={handleSubmit}
            >
              {/* Hidden Fields */}
              <input type="hidden" name="oid" value="00DWU00000AmlDj" />
              <input
                type="hidden"
                name="retURL"
                value="https://www.softshala.com/"
              />

              {/* Form Fields */}
              <div className="form-item">
                <Name />
              </div>
              <div className="form-item">
                <Email />
              </div>
              <div className="form-item">
                <Phone />
              </div>
              <div className="form-item">
                <Message />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-[165px] h-[39px] md:w-[186px] md:h-[42px] font-raleway leading-[21.32px] text-[13px] md:text-[18px] font-bold rounded-[13px] p-[10px] gap-[10px] ${
                  isDarkTheme
                    ? "bg-white text-black hover:bg-gray-500"
                    : "bg-black text-white hover:bg-[#525252]"
                } form-item`}
              >
                Send Your Enquiry
              </button>
            </form>

            {/* Success Message */}
            {submitted && (
              <p className="text-green-500 mt-4">
                Your enquiry has been submitted successfully!
              </p>
            )}
          </div>

          {/* Right Side: Address */}
          <div
            ref={addressRef}
            className="address-div flex flex-col gap-[28px] p-5 w-[300px] md:w-full h-[278px] relative z-10"
          >
            <p
              className={`w-[330px] md:w-[600px] h-[140px] text-sm md:text-[22px] p-[10px] gap-[10px] mt-0 md:mt-7 leading-[24px] font-albert font-normal text-justify ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              Our team of certified and experienced IT consultants is available
              24/7 to assist with any IT-related queries. Simply email us with a
              brief description of your concern, and one of our consultants
              will promptly get back to you with a solution.
            </p>

            {/* Contact Info Sections */}
            <div
              className={`w-[300px] md:w-[540px] h-[40px] md:h-auto flex flex-row justify-center items-start gap-10 md:mt-5 ml-0 md:ml-10 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              {/* Call Us Section */}
              <div className="w-[50px] md:w-[150px] h-[40px] md:h-[81px] flex flex-col items-center gap-2 all-item">
                <img
                  src={isDarkTheme ? mobileImgWhite : mobileImgBlack}
                  alt="Call Icon"
                  className="w-8 h-8 mb-1"
                />
                <h3
                  className={`text-sm md:text-xl font-semibold text-center ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  Call Us
                </h3>
                <a
                  href="tel:+9119079671033"
                  className={`text-sm text-center ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  +919079671033
                </a>
              </div>

              {/* Write Us Section */}
              <div className="w-[120px] md:w-[166px] flex flex-col items-center gap-2 all-item ml-3">
                <img
                  src={isDarkTheme ? emailImgWhite : emailImgBlack}
                  alt="Email Icon"
                  className="w-8 h-8 mb-1"
                />
                <h3
                  className={`text-sm md:text-xl font-semibold text-center ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  Write Us
                </h3>
                <a
                  href="mailto:sales@softshala.com"
                  className={`text-sm text-center underline ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  sales@softshala.com
                </a>
              </div>

              {/* Main Office Section */}
              <div className="w-[100px] md:w-[166px] flex flex-col items-center gap-2 all-item">
                <img
                  src={isDarkTheme ? officeImgWhite : officeImgBlack}
                  alt="Location Icon"
                  className="w-8 h-8 mb-1"
                />
                <h3
                  className={`text-sm md:text-xl font-semibold text-center ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  Main Office
                </h3>
                <p
                  className={`text-sm text-center ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  132, Shree Ram Vihar Jagatpura, Jaipur Rajasthan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetInTouch;