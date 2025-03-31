import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Blacklogo from "../../public/images/SoftshalaBlackFooter.png";
import Whitelogo from "../../public/images/SoftshalaWhiteFooter.png";
import AgentForceBlack from "../../public/images/AgentForce/AgentForceRoboBlack.mov";
import AgentForceWhite from "../../public/images/AgentForce/AgentForceRoboWhite.mov";
import { useTheme } from "../Context/ThemeContext";
import SalesForcePartnerBlack from "../../public/images/SalesForcePartnersFooter.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about", { state: { scrollToContact: true } });
  };

  const handleCareerClick = () => {
    navigate("/careers", { state: { scrollToContact: true } });
  };

  const handleNavigation = () => {
    navigate("/get-in-touch", { state: { scrollToContact: true } });
  };

  const handleSalesforceClick = () => {
    navigate("/sales-force-consulting", { state: { scrollToContact: true } });
  };

  const handleServicenowClick = () => {
    navigate("/service-now", { state: { scrollToContact: true } });
  };

  const handleWebDevelopmentClick = () => {
    navigate("/web-development", { state: { scrollToContact: true } });
  };

  return (
    <div className="relative w-full min-h-[292px] h-auto">
      <video
        key={isDarkTheme ? "black" : "white"}
        loop
        autoPlay
        muted
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[200px] md:w-[600px] md:ml-72 h-auto z-0"
      >
        <source
          src={isDarkTheme ? AgentForceBlack : AgentForceWhite}
          type="video/mp4"
        />
      </video>
      <footer className={`${isDarkTheme ? "bg-black text-white" : "bg-white text-black"} pb-4`}>
        <div className="container mx-auto px-6 sm:px-4 md:px-6 gap-2 sm:gap-6 md:gap-20 flex flex-row justify-between items-start font-raleway pt-[150px] sm:pt-[200px] md:pt-[250px] -ml-2 sm:-ml-2 md:-ml-0">
          <div className="flex flex-col items-start ml-6 sm:ml-4 md:ml-24">
            <img
              src={isDarkTheme ? Whitelogo : Blacklogo}
              alt="Softshala Technology Logo"
              className="w-[100px] sm:w-[180px] md:w-[187px] h-auto"
            />
            <ul className="space-y-1 cursor-pointer mt-4 sm:mt-10 md:mt-24 text-[12px] sm:text-[10px] md:text-[20px] font-semibold flex flex-col gap-1 sm:gap-2">
              <li>
                <div onClick={handleAboutClick} className="hover:text-blue-500">
                  About
                </div>
              </li>
              <li>
                <div onClick={handleCareerClick} className="hover:text-blue-500">
                  Career
                </div>
              </li>
              <li>
                <div onClick={handleNavigation} className="hover:text-blue-500">
                  Contact
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start mr-6 sm:mr-4 md:mr-96">
            <h3 className="font-bold mt-8 sm:mt-10 md:mt-24 text-[14px] sm:text-[12px] md:text-[23px]">All Services</h3>
            <hr
              className="w-[60px] sm:w-[105px] md:w-[215px] h-[1px] border-none"
              style={{
                backgroundImage: isDarkTheme
                  ? 'linear-gradient(to right, #000000, #FFFFFF ,#000000)'
                  : 'linear-gradient(to right, #FFFFFF, #000000, #FFFFFF)',
                border: "none",
              }}
            />
            <ul className="space-y-1 mt-2 sm:mt-6 md:mt-7 text-[12px] sm:text-[10px] md:text-[20px] font-semibold flex flex-col gap-1 sm:gap-2">
              <li>
                <div onClick={handleSalesforceClick} className="hover:text-blue-500">
                  Salesforce
                </div>
              </li>
              <li>
                <div onClick={handleServicenowClick} className="hover:text-blue-500">
                  Servicenow
                </div>
              </li>
              <li>
                <div onClick={handleWebDevelopmentClick} className="hover:text-blue-500">
                  Web Development
                </div>
              </li>
            </ul>
          </div>
          {/* Salesforce Partner Image in the row for md and above */}
          <div className="hidden md:flex flex-row items-start mr-6 sm:mr-4 md:mr-20">
            <img
              src={SalesForcePartnerBlack}
              alt="Salesforce Partner"
              className="w-[60px] sm:w-[120px] md:w-[190.9px] h-auto mt-4 sm:mt-10 md:mt-16 z-20"
            />
          </div>
        </div>

        {/* Salesforce Partner Image Section for mobile and sm (below md) */}
        <div className="md:hidden flex justify-center sm:justify-start mt-8 sm:mt-10 px-6 sm:px-4">
          <img
            src={SalesForcePartnerBlack}
            alt="Salesforce Partner"
            className="w-[60px] sm:w-[120px] h-auto z-20"
          />
        </div>

        {/* Social Icons and Bottom Text Section */}
        <div className="mt-4 sm:mt-10 flex flex-col">
          <div className="flex flex-row gap-2 sm:gap-6 justify-center sm:justify-start ml-0 sm:ml-28 md:ml-28 px-6 sm:px-0">
            <a href="#" className="hover:text-blue-500 text-base sm:text-lg md:text-xl transition-colors duration-200">
              <FaFacebookF className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:text-blue-500 text-base sm:text-lg md:text-xl transition-colors duration-200">
              <FaTwitter className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://www.instagram.com/softshala/" className="hover:text-[#E4405F] text-base sm:text-lg md:text-xl transition-colors duration-200">
              <FaInstagram className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A98962040" className="hover:text-blue-500 text-base sm:text-lg md:text-xl transition-colors duration-200">
              <FaLinkedinIn className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:text-red-700 text-base sm:text-lg md:text-xl transition-colors duration-200">
              <FaYoutube className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
          </div>
          <div className="mt-2 sm:mt-8 flex flex-row gap-2 sm:gap-4 md:gap-28 p-2 sm:p-4 md:p-0 text-[8px] sm:text-[8px] md:text-[14px] mb-4 sm:mb-10 justify-start ml-6 sm:ml-28 md:ml-28 px-6 sm:px-0">
            <p>@2025 Softshala Pvt. Ltd. All Rights Reserved</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;