import { useState } from "react";
import SkillsMenu from "../Components/ServicesDropdown/SkillsMenu";
import lightThemeImage from "../../public/images/themeChnager/sun.png";
import darkThemeImage from "../../public/images/themeChnager/Moon.png";
import { useTheme } from "../Context/ThemeContext";
import BlackLogo from "../../public/images/BlackLogo.png";
import WhiteLogo from "../../public/images/WhiteLogo.png";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import BlackAboutNav from "../../public/BlackAboutNav.png";
import BlackCareerNav from "../../public/BlackCareerNav.png";
import BlackContactUs from "../../public/BlackContactUs Nav.png";
import BlackLWS from "../../public/BlackLWSNav.png";
import BlackService from "../../public/BlackServicesNav.png";
import WhiteAbout from "../../public/WhiteHomeNav.png";
import WhiteCareer from "../../public/WhiteCareerNav.png";
import WhiteContact from "../../public/WhiteContactNav.png";
import WhiteLWS from "../../public/WhiteLWSNav.png";
import WhiteServices from "../../public/WhiteServicesNav.png";

const NavBar = () => {
  const [isSkillsMenuVisible, setSkillsMenuVisible] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleServicesClick = () => {
    setSkillsMenuVisible((prev) => !prev);
  };

  const handleNavigation = () => {
    navigate("/get-in-touch", { state: { scrollToContact: true } });
  };

  const handleHome = () => {
    navigate("/home", { state: { scrollToContact: true } });
  };

  const handleAbout = () => {
    navigate("/about", { state: { scrollToContact: true } });
  };

  const LwsNavigation = () => {
    navigate("/lws", { state: { scrollToContact: true } });
  };
  
  const careersNavigation = () => {
    navigate("/careers", { state: { scrollToContact: true } });
  };

  return (
    <div
      className={`${
        isDarkTheme ? "bg-black bg-opacity-80" : "bg-white"
      } z-[99999] fixed top-0 w-full h-24 backdrop-blur-md`}
    >
      <div className="flex flex-col w-full items-start gap-2.5 px-[20px] md:px-[70px] z-[50] text-base py-2.5 cursor-pointer font-raleway">
        <div className="flex items-center relative self-stretch w-full">
          {/* Logo */}
          <div className="inline-flex items-left gap-0 md:gap-2.5 p-0 md:p-2.5">
            <img
              className="w-[74px] h-[74px]"
              alt="logo"
              src={isDarkTheme ? WhiteLogo : BlackLogo}
              onClick={handleHome}
            />
          </div>

          <button
            className="md:hidden relative w-[80px] ml-16 h-[30px] flex items-center justify-between rounded-full border-2 border-gray-400"
            style={{ background: "linear-gradient(to right, #1E1E1E, #A5AAAD)" }}
            onClick={toggleTheme}
          >
            <div
              className={`absolute w-[25.5px] h-[25.5px] rounded-full transition-transform duration-500 ${
                isDarkTheme ? "translate-x-[1px]" : "translate-x-[50px]"
              }`}
              style={{
                background: isDarkTheme
                  ? "linear-gradient(to right, #000000, #1F4B55)"
                  : "#87CEEB",
              }}
            ></div>
            <img
              src={darkThemeImage}
              alt="Dark Theme"
              className={`w-[21px] h-[20px] z-10 ml-1 rounded-full object-cover transition-opacity duration-300 ${
                isDarkTheme ? "opacity-100" : "opacity-30"
              }`}
            />
            <img
              src={lightThemeImage}
              alt="Light Theme"
              className={`w-[27px] h-[27px] z-10 rounded-full object-cover transition-opacity duration-300 ${
                isDarkTheme ? "opacity-50" : "opacity-100"
              }`}
            />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-[39px] pl-5 pr-2.5 py-2.5 flex-1">
            <div
              className={`relative ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap cursor-pointer`}
              onClick={handleAbout}
            >
              ABOUT
            </div>

            <div
              className={`relative flex items-center ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap cursor-pointer`}
              onClick={handleServicesClick}
            >
              <span>SERVICES</span>
              <span className="ml-2">{isSkillsMenuVisible ? "▼" : "▶"}</span>
            </div>

            <div
              className={`relative ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap`}
              onClick={careersNavigation}
            >
              CAREERS
            </div>
            <div
              className={`relative ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap`}
              onClick={handleNavigation}
            >
              CONTACT US
            </div>
            <div
              className={`relative ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap`}
              onClick={LwsNavigation}
            >
              LWS
            </div>
          </div>

          <div className="md:hidden flex items-center ml-auto">
            <button
              className="text-2xl text-gray-600 dark:text-white"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Theme Toggle Button */}
          <div className={`hidden md:flex ml-auto items-center cursor-pointer w-[81px] h-[31px]`}>
            <button
              className={`relative w-[80px] h-[30px] flex items-center justify-between rounded-full`}
              style={{
                background: isDarkTheme
                  ? "linear-gradient(to right, #1E1E1E, #A5AAAD)"
                  : "linear-gradient(to right, #1E1E1E, #A5AAAD)",
                borderRadius: "100px",
                border: "2px solid #A5AAAD",
              }}
              onClick={toggleTheme}
            >
              <div
                className={`absolute w-[25.5px] h-[25.5px] rounded-full transition-transform duration-500 ${
                  isDarkTheme ? "translate-x-[1px]" : "translate-x-[50px]"
                }`}
                style={{
                  background: isDarkTheme
                    ? "linear-gradient(to right, #000000, #1F4B55)"
                    : "#87CEEB",
                }}
              ></div>
              <img
                src={darkThemeImage}
                alt="Dark Theme"
                className={`w-[21.08px] h-[20.08px] z-10 ml-1 rounded-full object-cover transition-opacity duration-300 ${
                  isDarkTheme ? "opacity-100" : "opacity-30"
                }`}
              />
              <img
                src={lightThemeImage}
                alt="Light Theme"
                className={`w-[27px] h-[27px] z-10 rounded-full object-cover transition-opacity duration-300 ${
                  isDarkTheme ? "opacity-50" : "opacity-100"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Skills Menu */}
        <div
          className={`skills-menu-container absolute top-[70px] z-10 transition-all duration-500 ${
            isSkillsMenuVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4 pointer-events-none"
          }`}
        >
          {isSkillsMenuVisible && <SkillsMenu />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col justify-center items-center right-0">
          <div
            className={`absolute top-20 left-0 w-full h-[49px] ${
              isDarkTheme ? "bg-black text-white" : "bg-white text-black"
            } shadow-lg md:hidden flex flex-row z-[0] gap-5 m-2 ml-8 text-[0.7rem]`}
          >
            <img
              onClick={handleAbout}
              className="cursor-pointer"
              src={isDarkTheme ? WhiteAbout : BlackAboutNav}
            />
            <img
              onClick={handleServicesClick}
              className="cursor-pointer"
              src={isDarkTheme ? WhiteServices : BlackService}
            />
            <img
              onClick={careersNavigation}
              className="cursor-pointer"
              src={isDarkTheme ? WhiteCareer : BlackCareerNav}
            />
            <img
              onClick={handleNavigation}
              className="cursor-pointer"
              src={isDarkTheme ? WhiteContact : BlackContactUs}
            />
            <img
              onClick={LwsNavigation}
              className="cursor-pointer"
              src={isDarkTheme ? WhiteLWS : BlackLWS}
            />
          </div>
        </div>
      )}

      {/* Inline styles for responsiveness */}
      <style>{`
        .skills-menu-container {
          left: 250px;
        }

        @media (max-width: 768px) {
          .skills-menu-container {
            top: ${isMobileMenuOpen ? "120px" : "80px"};
            left: 0;
            width: 100%;
            padding: 0 20px;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;