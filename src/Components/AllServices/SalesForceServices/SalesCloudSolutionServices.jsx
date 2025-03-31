import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SolutionServices from "../images/salesfroce.png";
import OurExperties from "../images/OurExperties.png";
import ResultDeliver from "../images/ResultDeliver.png";
import OurSolutions from "../images/OurSolution.png";
import { useTheme } from "../../../Context/ThemeContext";
import { useInView } from "react-intersection-observer";
import whyChooseWhite from "../images/WhyChooseUs.png";
import whyChooseBlack from "../images/WhyChooseBlack.png";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
const SalesCloudSolutionServices = () => {
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
  const img2Ref = useRef(null);
  const listRef = useRef(null);
  const listRef2 = useRef(null);
  const listRef3 = useRef(null);
  const listRef4 = useRef(null);

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

  const handleImageClick = () => {
    gsap.to(imgRef.current, {
      x: -200,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });
    listRef.current.classList.remove("hidden");
    gsap.fromTo(
      listRef.current.querySelectorAll("li"),
      { x: 800, opacity: 0, scale: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        scale: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  };

  const handleClick2 = (index) => {
    const refs = [listRef2, listRef3, listRef4];
    const spans = document.querySelectorAll(".option-span");
    spans.forEach((span, i) => {
      if (i === index) {
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    });
    refs.forEach((ref, i) => {
      if (i === index) {
        gsap.fromTo(
          ref.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 1, ease: "power3.out" }
        );
        ref.current.classList.remove("hidden");
      } else {
        gsap.to(ref.current, {
          height: 0,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
        ref.current.classList.add("hidden");
      }
    });
  };

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
                SALESFORCE
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
                SALES CLOUD SOLUTIONS
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
              <p>ELEVATE YOUR SALES</p>
              <p>WITH SALESFORCE SALES</p>
              <p>CLOUD SOLUTIONS</p>
            </div>

            <div
              className="uppercase text-sm md:text-base mt-6 md:mt-8 font-medium tracking-[2.4px] h-[38px] text-[12px] md:text-[14px] leading-[18.78px] w-[90%] md:w-[700px] text-left"
              ref={para2Ref}
            >
              <p>
                Empowering sales teams with cutting-edge tools to close deals
                faster
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
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex justify-center md:justify-end w-full h-full mt-10 md:mt-28">
            <img
              src={SolutionServices}
              alt="salesforce"
              className="h-[280px] md:h-[472px] w-auto max-w-[280px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mr-0 md:mr-10 object-contain"
              ref={imgRef}
            />
          </div>
        </div>

        <div className="mx-auto items-start md:items-center justify-start md:justify-center mt-12 md:mt-0">
          <div className="flex justify-start md:justify-center mb-8 md:mb-10">
            <p className="w-[90%] md:w-[1118px] h-auto md:h-[75px] text-sm md:text-base font-raleway font-bold text-[16px] md:text-[22px] leading-[20px] md:leading-[23.59px] tracking-[0.1em] text-left md:text-center">
              {`"Build strong customer relationships and grow revenue with a single source of truth. Sales Cloud, the #1 CRM for sales, lets us help you sell faster, smarter, and more efficiently. With built-in automation, intelligence, and real-time data, we will help you boost productivity and growth."`}
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
                  Our Expertise
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
                    Consulting: We analyze your unique business challenges and
                    design a roadmap for success using Salesforce’s powerful
                    suite of tools.
                  </li>
                  <li>
                    Development: From custom applications to tailored features,
                    we develop solutions that align perfectly with your
                    business goals.
                  </li>
                  <li>
                    Integration: Seamlessly connect Salesforce with your
                    existing systems to create a unified and efficient
                    workflow.
                  </li>
                  <li>
                    Implementation: Get up and running quickly with our proven
                    implementation strategies, ensuring a smooth transition and
                    measurable ROI.
                  </li>
                </ul>
              </div>

              <div className="flex justify-center items-start mr-0 md:mr-10 mt-8 md:mt-0 w-full md:w-auto">
                <img
                  src={OurExperties}
                  alt="Our Expertise"
                  className="max-w-[220px] md:max-w-[300px] max-h-[200px] md:max-h-[298.39px] object-contain"
                />
              </div>
            </div>

            <div className="seconddiv flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mt-8 gap-6 md:gap-8">
              <div className="text-left max-w-[90%] md:max-w-[920px] p-[10px] gap-[10px] md:order-2 mr-0 md:mr-10">
                <h6 className="font-bold text-[20px] md:text-[30px] leading-[30px] md:leading-[45.49px] tracking-[0.1em] text-left">
                  Our Solutions Empower You to
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
                <ul className="list-disc pl-5 font-raleway font-medium text-[14px] md:text-[18px] text-left md:text-justify leading-[20px] md:leading-[24.59px] tracking-[0.1em] mt-4 md:mt-8">
                  <li>
                    Boost Sales Productivity with Salesforce Maps, Einstein AI,
                    and Sales Cloud in Slack to accelerate deal cycles and
                    optimize sales strategies.
                  </li>
                  <li>
                    Engage Buyers at Every Step by aligning marketing and sales
                    with built-in CRM intelligence and revenue analytics.
                  </li>
                  <li>
                    Streamline Revenue Processes through Revenue Cloud and CPQ
                    to automate quotes, contracts, and revenue lifecycle
                    management.
                  </li>
                  <li>
                    Unlock Actionable Insights via Tableau, Sales Analytics,
                    and Einstein Conversation Insights to drive informed
                    decisions and optimize performance.
                  </li>
                </ul>
              </div>

              <div className="flex justify-center items-start md:order-1 ml-0 md:ml-10 mt-8 md:mt-0 w-full md:w-auto">
                <img
                  src={OurSolutions}
                  alt="Our Solutions"
                  className="max-w-[220px] md:max-w-[300px] max-h-[200px] md:max-h-[298.39px] object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-start md:items-center font-raleway">
              <div className="font-bold text-[24px] md:text-[32px] leading-[35px] md:leading-[48px] tracking-[0.1em] text-left md:text-center mt-12 md:mt-16">
                Transform Your Sales with Salesforce Sales Cloud
              </div>
              <div className="flex justify-start md:justify-center items-start md:items-center w-full mt-2 md:mt-4">
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
              <p className="font-raleway font-medium text-[16px] md:text-[20px] text-left md:text-justify leading-[24px] md:leading-[28px] tracking-[0.1em] p-8 md:p-16 w-[90%] md:w-[1118px]">
                {`"At Softshala, we specialize in helping businesses unlock the full potential of Salesforce Sales Cloud to drive growth, enhance productivity, and build lasting customer relationships. With our expertise in consulting, development, integration, and implementation, we deliver solutions tailored to your sales needs."`}
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center mt-8 p-[10px] gap-8 md:gap-16 w-full">
                <img
                  src={isDarkTheme ? whyChooseWhite : whyChooseBlack}
                  className="w-[280px] md:w-[400px] mr-0 md:mr-24 cursor-pointer"
                  ref={img2Ref}
                  onMouseEnter={handleImageClick}
                />
                <div>
                  <ul
                    className="hidden list-disc font-raleway text-[16px] md:text-[22px] leading-[24px] md:leading-[31px] tracking-[0.1em] mt-8 md:mt-16 w-[90%] md:w-auto"
                    ref={listRef}
                  >
                    <li>
                      Certified Salesforce experts with a proven track record
                      of success.
                    </li>
                    <li>
                      Tailored strategies to optimize your sales processes.
                    </li>
                    <li>
                      Seamless integration and stress-free implementation to
                      ensure quick ROI.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="font-bold text-[24px] md:text-[32px] leading-[35px] md:leading-[48px] tracking-[0.1em] text-left md:text-center mt-12 md:mt-16">
                Key Solutions with Sales Cloud
              </div>
              <div className="flex justify-start md:justify-center items-start md:items-center w-full mt-2 md:mt-4">
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

              <div
                className={`flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center mt-8 p-[10px] gap-8 md:gap-16 font-raleway text-[14px] md:text-[16px] cursor-pointer`}
              >
                <span
                  className={`${
                    isDarkTheme ? "bg-white text-black" : "bg-black text-white"
                  } option-span w-[160px] md:w-[200px] p-[12px] md:p-[16px] rounded-[8px] text-center`}
                  onClick={() => handleClick2(0)}
                >
                  Enhance Sales Productivity
                </span>
                <span
                  className={`${
                    isDarkTheme ? "bg-white text-black" : "bg-black text-white"
                  } option-span w-[160px] md:w-[200px] p-[12px] md:p-[16px] rounded-[8px] text-center`}
                  onClick={() => handleClick2(1)}
                >
                  Build Stronger Customer Relationships
                </span>
                <span
                  className={`${
                    isDarkTheme ? "bg-white text-black" : "bg-black text-white"
                  } option-span w-[160px] md:w-[200px] p-[12px] md:p-[16px] rounded-[8px] text-center`}
                  onClick={() => handleClick2(2)}
                >
                  Drive Data-Driven Decisions
                </span>
              </div>

              <div
                className="mt-8 font-raleway hidden w-[90%] md:w-[920px]"
                ref={listRef2}
              >
                <ul className="text-[14px] md:text-[18px] text-left md:text-justify leading-[20px] md:leading-[28px] tracking-[0.1em]">
                  <li className="font-medium">
                    <strong className="font-bold">Workflow and Process Automation:</strong>{" "}
                    Streamline tasks and eliminate manual work with custom
                    workflows.
                  </li>
                  <li className="font-medium">
                    <strong className="font-bold">Quoting and Contract Approvals:</strong>{" "}
                    Speed up deal cycles with seamless approval processes and
                    accurate quotes.
                  </li>
                  <li className="font-medium">
                    <strong className="font-bold">CRM Everywhere:</strong>{" "}
                    Access and update your CRM anytime, anywhere with mobile
                    apps and browser extensions.
                  </li>
                </ul>
              </div>

              <div
                className="mt-8 font-raleway hidden w-[90%] md:w-[920px]"
                ref={listRef3}
              >
                <ul className="text-[14px] md:text-[18px] text-left md:text-justify leading-[20px] md:leading-[28px] tracking-[0.1em]">
                  <li className="font-medium">
                    <strong className="font-bold">Lead Management:</strong>{" "}
                    Capture, nurture, and convert leads efficiently with smart
                    tools.
                  </li>
                  <li className="font-medium">
                    <strong className="font-bold">Account and Opportunity Management:</strong>{" "}
                    Gain a 360-degree view of customer accounts to close deals
                    faster.
                  </li>
                  <li className="font-medium">
                    <strong className="font-bold">Activity Management:</strong>{" "}
                    Track interactions and ensure seamless collaboration across
                    teams.
                  </li>
                </ul>
              </div>

              <div
                className="mt-8 font-raleway hidden w-[90%] md:w-[920px]"
                ref={listRef4}
              >
                <ul className="text-[14px] md:text-[18px] text-left md:text-justify leading-[20px] md:leading-[28px] tracking-[0.1em]">
                  <li className="font-medium">
                    <strong className="font-bold">Sales AI:</strong> Use
                    Einstein AI to guide your sales team at every step of the
                    sales cycle.
                  </li>
                  <li className="font-medium">
                    <strong className="font-bold">Sales Analytics:</strong>{" "}
                    Optimize revenue and grow your pipeline with insights from
                    Tableau and Data Cloud.
                  </li>
                </ul>
              </div>
            </div>

            <div className="firstdiv flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mt-11 gap-6 md:gap-8">
              <div className="text-left max-w-[90%] md:max-w-[920px] p-[10px] gap-[10px] ml-0 md:ml-8">
                <h6 className="font-bold text-[20px] md:text-[30px] leading-[30px] md:leading-[45.49px] tracking-[0.1em] text-left">
                  The Results We Deliver
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
                  <li>Faster sales cycles and improved team productivity.</li>
                  <li>
                    Strengthened customer relationships and increased deal win
                    rates.
                  </li>
                  <li>
                    Actionable insights to make informed, data-driven
                    decisions.
                  </li>
                </ul>
              </div>

              <div className="flex justify-center items-start mr-0 md:mr-10 mt-8 md:mt-0 w-full md:w-auto">
                <img
                  src={ResultDeliver}
                  alt="The Results We Deliver"
                  className="max-w-[220px] md:max-w-[300px] max-h-[200px] md:max-h-[298.39px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
            .option-span.active {
              background-color: ${isDarkTheme ? "black" : "white"};
              color: ${isDarkTheme ? "white" : "black"};
            }
          `}
        </style>
      </div>
      <Footer />
    </>
  );
};

export default SalesCloudSolutionServices;