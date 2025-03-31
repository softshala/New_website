import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./web.css";
import { useTheme } from "../../../../Context/ThemeContext";

const WebServicesHeading = () => {
  const headingRefs = useRef([]);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    // Only apply animations for desktop (≥768px)
    if (window.innerWidth >= 768) {
      headingRefs.current.forEach((heading, index) => {
        if (heading) {
          gsap.set(heading, {
            x: index % 2 === 0 ? 500 : 500,
            y: index % 2 === 0 ? 500 : 500,
            opacity: 0,
            scale: 0.9,
          });
        }
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            headingRefs.current.forEach((heading, index) => {
              gsap.to(heading, {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1 + index * 0.2,
                ease: "power3.out",
                scale: 1,
              });
            });
          }
        },
        { threshold: 0.5 }
      );

      if (headingRefs.current.length) {
        observer.observe(headingRefs.current[0]);
      }

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div
      className={`4th-content w-full h-auto md:h-screen relative mt-8 md:mt-16 ${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Row 1 */}
      <div className="1heading flex flex-col md:flex-row relative justify-center items-center gap-6 md:gap-10 p-4 md:p-6">
        <h6
          ref={(el) => (headingRefs.current[0] = el)}
          className="heading text-[20px] md:text-[34px] font-bold tracking-[0.1em] text-center"
        >
          Cutting-Edge Technologies
          <hr
            className="w-[150px] md:w-[300px] h-[1px] border-none mt-2 mx-auto"
            style={{
              backgroundImage: isDarkTheme
                ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                : "linear-gradient(to right, #000000, #1F4B55)",
            }}
          />
        </h6>
        <hr
          className="hidden md:block w-[1px] h-[50px] border-none"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(to bottom, #9CFF00, #00D1FF)"
              : "linear-gradient(to bottom, #000000, #1F4B55)",
          }}
        />
        <h6
          ref={(el) => (headingRefs.current[1] = el)}
          className="heading text-[20px] md:text-[34px] font-bold tracking-[0.1em] text-center"
        >
          End-to-End Development
          <hr
            className="w-[150px] md:w-[300px] h-[1px] border-none mt-2 mx-auto"
            style={{
              backgroundImage: isDarkTheme
                ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                : "linear-gradient(to right, #000000, #1F4B55)",
            }}
          />
        </h6>
      </div>

      {/* Row 2 */}
      <div className="2ndheading flex flex-col md:flex-row relative justify-center items-center gap-6 md:gap-10 p-4 md:p-6">
        <h6
          ref={(el) => (headingRefs.current[2] = el)}
          className="heading text-[20px] md:text-[34px] font-bold tracking-[0.1em] text-center"
        >
          Agile & Scalable Solutions
          <hr
            className="w-[150px] md:w-[300px] h-[1px] border-none mt-2 mx-auto"
            style={{
              backgroundImage: isDarkTheme
                ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                : "linear-gradient(to right, #000000, #1F4B55)",
            }}
          />
        </h6>
        <hr
          className="hidden md:block w-[1px] h-[50px] border-none"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(to bottom, #9CFF00, #00D1FF)"
              : "linear-gradient(to bottom, #000000, #1F4B55)",
          }}
        />
        <h6
          ref={(el) => (headingRefs.current[3] = el)}
          className="heading text-[20px] md:text-[34px] font-bold tracking-[0.1em] text-center"
        >
          User-Centric Designs
          <hr
            className="w-[150px] md:w-[300px] h-[1px] border-none mt-2 mx-auto"
            style={{
              backgroundImage: isDarkTheme
                ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                : "linear-gradient(to right, #000000, #1F4B55)",
            }}
          />
        </h6>
      </div>

      {/* Row 3 */}
      <div className="3rdheading flex flex-col md:flex-row relative justify-center items-center gap-6 md:gap-10 p-4 md:p-6">
        <h6
          ref={(el) => (headingRefs.current[4] = el)}
          className="heading text-[20px] md:text-[34px] font-bold tracking-[0.1em] text-center"
        >
          Performance & Security First
          <hr
            className="w-[150px] md:w-[300px] h-[1px] border-none mt-2 mx-auto"
            style={{
              backgroundImage: isDarkTheme
                ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                : "linear-gradient(to right, #000000, #1F4B55)",
            }}
          />
        </h6>
        <hr
          className="hidden md:block w-[1px] h-[50px] border-none"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(to bottom, #9CFF00, #00D1FF)"
              : "linear-gradient(to bottom, #000000, #1F4B55)",
          }}
        />
        <h6
          ref={(el) => (headingRefs.current[5] = el)}
          className="heading text-[20px] md:text-[34px] font-bold tracking-[0.1em] text-center"
        >
          24/7 Support & Maintenance
          <hr
            className="w-[150px] md:w-[300px] h-[1px] border-none mt-2 mx-auto"
            style={{
              backgroundImage: isDarkTheme
                ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                : "linear-gradient(to right, #000000, #1F4B55)",
            }}
          />
        </h6>
      </div>
    </div>
  );
};

export default WebServicesHeading;