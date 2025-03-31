import WebServices from "./WebServices/WebServices";
import "./WebServices/web.css";
import WebServicesHeading from "./WebServices/WebServicesHeading";
import { useTheme } from "../../../Context/ThemeContext";
import NavBar from "../../NavBar";
import CircleDesign from "../Animations/CircleDesign";
import RopeAnimation from "../Animations/RopeAnimation";
import Footer from "../../Footer";

const WebDevelopment = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="">
      <NavBar />
      <div
        className={`h-auto font-raleway ${
          isDarkTheme ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col items-start md:items-center gap-6 md:gap-10 pt-28 md:pt-28 pl-6 md:px-14 pr-4">
          <h4 className="font-thin text-[20px] md:text-2xl uppercase tracking-[0.55em] leading-[30px] md:leading-[36px] text-left md:text-center">
            Transform Ideas into Scalable Web Solutions
          </h4>
          <h4 className="font-thin text-[24px] md:text-3xl uppercase tracking-[0.55em] leading-[30px] md:leading-[36px] text-left md:text-center">
            with
          </h4>

          <CircleDesign />

          <div className="2nd content">
            <div className="flex justify-start md:justify-center items-start md:items-center mt-8 md:mt-12">
              <h6 className="font-bold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left md:text-center">
                Our Full-Stack Web Development Services
                <hr
                  className="w-[200px] md:w-[360px] h-[1px] border-none"
                  style={{
                    backgroundImage: isDarkTheme
                      ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                      : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "px",
                    border: "none",
                  }}
                />
              </h6>
            </div>
            <p className="text-start justify-start text-[14px] md:text-[18px] font-normal leading-[20px] md:leading-[24.59px] tracking-[0.125rem] pt-6 md:max-w-[920px]">
              We offer comprehensive end-to-end web development solutions,
              ensuring seamless functionality, security, and scalability across
              all aspects of your application.
            </p>
          </div>
        </div>
        <WebServices />
        <div className="3rd content pl-6 md:px-14 pr-4">
          <div className="flex justify-start md:justify-center items-start md:items-center mt-8 md:mt-12 p-[10px]">
            <h6 className="font-bold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left md:text-center">
              Why Choose Us?
              <hr
                className="w-[200px] md:w-[360px] h-[1px] border-none"
                style={{
                  backgroundImage: isDarkTheme
                    ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                    : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "px",
                  border: "none",
                }}
              />
            </h6>
          </div>
          <p className="text-start justify-start text-[14px] md:text-[18px] font-normal leading-[20px] md:leading-[24.59px] tracking-[0.125rem] pt-6 md:max-w-[920px]">
            We offer comprehensive end-to-end web development solutions,
            ensuring seamless functionality, security, and scalability across
            all aspects of your application.
          </p>
        </div>

        <WebServicesHeading />

        <RopeAnimation />
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopment;