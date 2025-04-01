import { useEffect, useRef, useState } from "react";
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

const GetInTouch = () => {
  const location = useLocation();
  const { isDarkTheme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

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
  }, [location]);

  const handleSubmit = (e) => {
    setSubmitted(true);
    setTimeout(() => {
      formRef.current.reset();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div
        id="contact-us"
        className={`flex flex-col items-center w-full px-6 md:px-12 py-5 relative z-10 ${
          isDarkTheme ? "bg-[#000000]" : "bg-white"
        }`}
      >
        <div className="relative z-10 w-full max-w-[300px] md:max-w-4xl mx-4 md:mx-8 mt-20 md:mt-24 mb-8">
          <Map className="w-full h-[150px] md:h-[300px] rounded-xl" />
        </div>

        <h2
          className={`text-3xl md:text-5xl self-stretch font-normal text-center mb-8 mt-8 md:mt-5 max-md:max-w-full font-raleway tracking-[0] leading-[normal] relative z-10 ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Get In Touch
        </h2>

        <div className="absolute inset-0 z-5">
          <BackgroundAnimation />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Left Side: Form */}
          <div className={`form-container flex flex-col items-center w-full md:h-auto px-10 py-5`}>
            <form
              ref={formRef}
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              method="POST"
              className="form-div flex flex-col items-center gap-5 p-5 w-[331px] md:w-full"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="oid" value="00DWU00000AmlDj" />
              <input
                type="hidden"
                name="retURL"
                value="https://www.softshala.com/"
              />

              <div>
                <Name />
              </div>
              <div>
                <Email />
              </div>
              <div>
                <Phone />
              </div>
              <div>
                <Message />
              </div>

              <button
                type="submit"
                className={`w-[165px] h-[39px] md:w-[186px] md:h-[42px] font-raleway leading-[21.32px] text-[13px] md:text-[18px] font-bold rounded-[13px] p-[10px] gap-[10px] ${
                  isDarkTheme
                    ? "bg-white text-black hover:bg-gray-500"
                    : "bg-black text-white hover:bg-[#525252]"
                }`}
              >
                Send Your Enquiry
              </button>
            </form>

            {submitted && (
              <p className="text-green-500 mt-4">
                Your enquiry has been submitted successfully!
              </p>
            )}
          </div>

          {/* Right Side: Address */}
          <div
            className="address-div flex flex-col gap-[28px] p-5 w-full h-[278px] relative z-10"
          >
            <p
              className={`w-full md:w-[600px] h-[140px] text-sm md:text-[22px] p-[10px] gap-[10px] mt-0 md:mt-7 leading-[24px] font-albert font-normal text-justify ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              Our team of certified and experienced IT consultants is available
              24/7 to assist with any IT-related queries. Simply email us with a
              brief description of your concern, and one of our consultants
              will promptly get back to you with a solution.
            </p>

            <div
              className={`w-full md:w-[540px] h-[40px] md:h-auto flex flex-row justify-center items-start gap-10 md:mt-5 ml-0 md:ml-10 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              <div className="w-[50px] md:w-[150px] h-[40px] md:h-[81px] flex flex-col items-center gap-2">
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

              <div className="w-[120px] md:w-[166px] flex flex-col items-center gap-2 ml-3">
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

              <div className="w-[100px] md:w-[166px] flex flex-col items-center gap-2">
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