import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import daimg from "../images/salesforce ds1.png";
import solutionDesign from "../images/solutionDesign.png";
import bestPractice from "../images/Best Practice.png";
import CPQ from "../images/CPQ.png";
import { useTheme } from "../../../Context/ThemeContext";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
const SalesForceCPQ = () => {
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();
  const [isMidRange, setIsMidRange] = useState(false);

  const paraRef = useRef(null);
  const para2Ref = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const salesforceRef = useRef(null);
  const consultingRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMidRange(width >= 1000 && width <= 1300);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!inView) return;

    const timeline = gsap.timeline();

    if (paraRef.current) {
      const paraItems = paraRef.current.querySelectorAll("p");
      const paraItems2 = para2Ref.current.querySelectorAll("p");

      gsap.fromTo(
        paraItems,
        { x: 430, opacity: 0 },
        { x: 0, opacity: 1, duration: 2.5, stagger: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        paraItems2,
        { y: 130, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.5, stagger: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, x: 300 }, // Fixed to match upper code
        { opacity: 1, x: 0, duration: 1.3, ease: "power3.inOut" }
      );
      gsap.fromTo(
        imgRef.current,
        { y: -400, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease: "power3.out" }
      );

      const salesforceLetters = salesforceRef.current.innerText.split("");
      salesforceRef.current.innerHTML = salesforceLetters
        .map((char) => `<span class="letter">${char}</span>`)
        .join("");

      const consultingLetters = consultingRef.current.innerText.split("");
      consultingRef.current.innerHTML = consultingLetters
        .map((char) => `<span class="letter">${char}</span>`)
        .join("");

      timeline
        .fromTo(
          salesforceRef.current.querySelectorAll(".letter"),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 2, stagger: 0.1, ease: "power3.out" }
        )
        .fromTo(
          line1Ref.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 2, // Adjusted to match upper code
            ease: "power3.out",
          },
          "<"
        )
        .fromTo(
          consultingRef.current.querySelectorAll(".letter"),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 2, stagger: 0.1, ease: "power3.out" },
          "<"
        )
        .fromTo(
          line2Ref.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 2, // Adjusted to match upper code
            ease: "power3.out",
          },
          "<"
        );
    }
  }, [inView]);

  const handleNavigation = () => {
    navigate("/get-in-touch", { state: { scrollToContact: true } });
  };

  return (
    <>
      <NavBar />
      <div
        ref={ref}
        className={`mt-20 md:mt-10 ${
          isMidRange ? "px-12" : "pl-6 md:px-14 pr-4"
        } ${isDarkTheme ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <div className="w-full h-auto overflow-hidden font-raleway grid grid-cols-1 md:grid-cols-2 relative min-h-screen top-0 mb-10 md:mb-10">
          {/* Left Section */}
          <div className="flex flex-col justify-start gap-6 ml-0 md:ml-10 mt-8 md:mt-28">
            <div className="text-left">
              <h5
                className="text-[20px] md:text-[32px] font-medium tracking-[4.8px]"
                ref={salesforceRef}
              >
                SALESFORCE CPQ
              </h5>
              <div className="flex items-center" ref={line1Ref}>
                <hr
                  className="border-t-2 my-2 w-[150px] md:w-[255px]"
                  style={{
                    backgroundImage: isDarkTheme
                      ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                      : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "2px",
                    border: "none",
                  }}
                />
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundImage: isDarkTheme
                      ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                      : "linear-gradient(to right, #000000, #1F4B55)",
                  }}
                ></div>
              </div>

              <h5
                className="uppercase text-[20px] md:text-[32px] font-medium tracking-[4.8px]"
                ref={consultingRef}
              >
                (CONFIGURE, PRICE, QUOTE)
              </h5>
              <div className="flex items-center" ref={line2Ref}>
                <hr
                  className="border-t-2 my-2 w-[220px] md:w-[433px]"
                  style={{
                    backgroundImage: isDarkTheme
                      ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                      : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "2px",
                    border: "none",
                  }}
                />
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundImage: isDarkTheme
                      ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                      : "linear-gradient(to right, #000000, #1F4B55)",
                  }}
                ></div>
              </div>
            </div>

            <div
              className="uppercase text-[28px] md:text-[46px] font-medium mt-4 md:mt-5 tracking-[3.02px] leading-normal text-left"
              ref={paraRef}
            >
              <p>AUTOMATE & OPTIMIZE</p>
              <p>YOUR SALES WITH</p>
              <p>SALESFORCE CPQ</p>
            </div>

            <div
              className="uppercase text-sm md:text-base mt-6 md:mt-8 font-medium tracking-[2.4px] h-[38px] text-[12px] md:text-[14px] leading-[18.78px] w-[90%] md:w-[700px] text-left"
              ref={para2Ref}
            >
              <p>
                Deliver accurate pricing, streamline approvals, and close deals
                faster with our CPQ solutions
              </p>
            </div>

            <div
              className={`flex justify-start md:justify-center ${
                isMidRange ? "mt-6" : "mt-8 md:mt-4"
              }`}
            >
              <button
                type="submit"
                className={`w-[200px] md:w-[210px] h-[48px] md:h-[42px] font-raleway leading-[18.78px] text-[16px] md:text-[16px] font-bold rounded-[13px] py-2 md:p-[10px] gap-[10px] 
                  ${
                    isDarkTheme
                      ? "bg-white text-black hover:bg-gray-500"
                      : "bg-black text-white hover:bg-[#525252]"
                  }
                  form-item`}
                ref={btnRef}
                onClick={handleNavigation}
              >
                Get a Free Consultation
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex justify-center md:justify-end w-full h-full mt-10 md:mt-28">
            <img
              src={CPQ}
              alt="salesforce"
              className="h-[280px] md:h-[472px] w-auto max-w-[280px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mr-0 md:mr-10 object-contain"
              ref={imgRef}
            />
          </div>
        </div>

        <div className="mx-auto items-start md:items-center justify-start md:justify-center mt-12 md:mt-0">
          <div className="flex justify-start md:justify-center mb-8 md:mb-10">
            <p className="w-[90%] md:w-[1118px] h-auto md:h-[75px] text-sm md:text-base font-raleway font-bold text-[16px] md:text-[22px] leading-[20px] md:leading-[23.59px] tracking-[0.1em] text-left md:text-center">
              {`"We specialize in developing customized Service Cloud solutions that enhance the platform's out-of-the-box capabilities and meet unique client requirements."`}
            </p>
          </div>

          <div className="flex justify-start md:justify-center items-start md:items-center mt-6 md:mt-8 mb-4 md:mb-1.5">
            <h6 className="font-bold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left md:text-center">
              What We Do
            </h6>
          </div>
          <div className="flex justify-start md:justify-center items-start md:items-center mb-8 md:mb-10">
            <hr
              className="w-[150px] md:w-[250px] h-[1px] border-none"
              style={{
                backgroundImage: isDarkTheme
                  ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                  : "linear-gradient(to right, #000000, #1F4B55)",
                height: "1px",
                border: "none",
              }}
            />
          </div>

          <div className="space-y-12 md:space-y-0">
            <div className="firstdiv flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mt-8 gap-6 md:gap-8 mb-12 md:mb-10">
              <div className="text-left max-w-[90%] md:max-w-[920px] p-[10px] gap-[10px] ml-0 md:ml-8">
                <h6 className="font-bold text-[20px] md:text-[30px] leading-[30px] md:leading-[45.49px] tracking-[0.1em] text-left">
                  Discovery & Analysis
                </h6>
                <div className="flex justify-start items-center mt-2 md:mt-0.5">
                  <hr
                    className="w-[200px] md:w-[360px] h-[1px] border-none"
                    style={{
                      backgroundImage: isDarkTheme
                        ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                        : "linear-gradient(to right, #000000, #1F4B55)",
                      height: "1px",
                      border: "none",
                    }}
                  />
                </div>
                <p className="font-raleway font-medium p-[10px] text-[14px] md:text-[18px] text-left md:text-justify leading-[20px] md:leading-[24.59px] tracking-[0.1em] mt-4 md:mt-8">
                  We collaborate with your team to assess your existing
                  customer service processes, pain points, and KPIs. Whether
                  you need to improve case resolution times, implement
                  automation, or enhance self-service options, we define a
                  roadmap tailored to your goals.
                </p>
              </div>

              <div className="flex justify-center items-start mr-0 md:mr-10 mt-8 md:mt-0 w-full md:w-auto">
                <img
                  src={daimg}
                  alt="Discovery & Analysis"
                  className="max-w-[220px] md:max-w-[300px] max-h-[200px] md:max-h-[298.39px] object-contain"
                />
              </div>
            </div>

            <div className="seconddiv flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mt-8 gap-6 md:gap-8 mb-12 md:mb-10">
              <div className="text-left max-w-[90%] md:max-w-[920px] p-[10px] gap-[10px] md:order-2 mr-0 md:mr-10">
                <h6 className="font-bold text-[20px] md:text-[30px] leading-[30px] md:leading-[45.49px] tracking-[0.1em] text-left">
                  Solution Design
                </h6>
                <div className="flex justify-start items-center mt-2 md:mt-0.5">
                  <hr
                    className="w-[180px] md:w-[273px] h-[1px] border-none"
                    style={{
                      backgroundImage: isDarkTheme
                        ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                        : "linear-gradient(to right, #000000, #1F4B55)",
                      height: "1px",
                      border: "none",
                    }}
                  />
                </div>
                <p className="font-raleway font-medium p-[10px] text-[14px] md:text-[18px] text-left md:text-justify leading-[20px] md:leading-[24.59px] tracking-[0.1em] mt-4 md:mt-8">
                  We design a scalable and future-proof Service Cloud
                  architecture that aligns with your workflows and customer
                  needs. This includes feature recommendations such as
                  Omni-Channel routing, Knowledge Base, or Einstein AI for
                  automation.
                </p>
              </div>

              <div className="flex justify-center items-start md:order-1 ml-0 md:ml-10 mt-8 md:mt-0 w-full md:w-auto">
                <img
                  src={solutionDesign}
                  alt="Solution Design"
                  className="max-w-[220px] md:max-w-[300px] max-h-[200px] md:max-h-[298.39px] object-contain"
                />
              </div>
            </div>

            <div className="thirddiv flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mt-8 gap-6 md:gap-8">
              <div className="text-left max-w-[90%] md:max-w-[920px] p-[10px] gap-[10px] ml-0 md:ml-8">
                <h6 className="font-bold text-[20px] md:text-[30px] leading-[30px] md:leading-[45.49px] tracking-[0.1em] text-left">
                  Best Practices We Follow
                </h6>
                <div className="flex justify-start items-center mt-2 md:mt-0.5">
                  <hr
                    className="w-[200px] md:w-[360px] h-[1px] border-none"
                    style={{
                      backgroundImage: isDarkTheme
                        ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                        : "linear-gradient(to right, #000000, #1F4B55)",
                      height: "1px",
                      border: "none",
                    }}
                  />
                </div>
                <ul className="list-disc pl-5 font-raleway font-medium text-[14px] md:text-[18px] text-left md:text-justify leading-[20px] md:leading-[24.59px] tracking-[0.1em] mt-4 md:mt-8">
                  <li>
                    Define clear use cases for Service Cloud features and align
                    them with business objectives.
                  </li>
                  <li>
                    Ensure scalability by designing a system that accommodates
                    future growth and additional channels (social media, chat,
                    etc).
                  </li>
                  <li>
                    Conduct a gap analysis to identify customizations needed
                    beyond out-of-the-box features.
                  </li>
                </ul>
              </div>

              <div className="flex justify-center items-start mr-0 md:mr-10 mt-8 md:mt-0 w-full md:w-auto">
                <img
                  src={bestPractice}
                  alt="Best Practices"
                  className="max-w-[220px] md:max-w-[300px] max-h-[200px] md:max-h-[298.39px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalesForceCPQ;