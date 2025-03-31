import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const beTheRef = useRef(null);
  const nextGenRef = useRef(null);
  const innovatorRef = useRef(null);
  const navigate = useNavigate();
  
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const beThe = beTheRef.current;
    const nextGen = nextGenRef.current;
    const inno = innovatorRef.current;

    if (!beThe || !nextGen || !inno) return;

    gsap.set(beThe, { opacity: 1, x: -700 });
    gsap.set(nextGen, { opacity: 1, x: 700 });

    gsap.set(inno, {
      x: [-4600, 9600],
      y: -3750,
      letterSpacing: "530px",
      opacity: 1,
      width: "100vw",
      height: "100vh",
      fontSize: "6978px",
    });

    gsap.to(beThe, {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
    });

    gsap.to(nextGen, {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
    });

    gsap.to(inno, {
      y: 0,
      x: [0,0],
      opacity: 1,
      width: "auto",
      height: "auto",
      fontSize: "6rem",
      delay: 1.5,
      letterSpacing: "0px",
      duration: 3,
      ease: "power3.out",
    });
  }, []);

  const handleCareers = () => {
    navigate("/careers", { state: { scrollToContact: true } });
  };

  return (
    <div className={`${isDarkTheme ? "bg-[#000000] text-white" : "bg-white text:black" } z-50 mt-9 `}>
      <div 
        className="w-full max-w-[1566px] h-[70vh] md:h-[692px] max-auto top-24 gap-[58px] flex flex-col items-start relative z-10 px-4 md:px-0"
        style={{
          background: "linear-gradient(to right, rgba(0, 0, 0, 1)100% , rgba(0, 0, 0, ) 0%)",
        }}
      >
        <div className="relative self-stretch">
          <div 
            className={`flex flex-col w-full md:w-[40%] items-start gap-10 md:gap-20 relative`}
            style={isDarkTheme ? {
              background: "linear-gradient(to right, rgba(0, 0, 0, 1)60% , rgba(0, 0, 0, 0))"
            } : {
              background: "linear-gradient(to right, rgba(255,255,255,1) 60%, rgba(255,255,255,0))"
            }}
          >
            <div
              className={`box font-thin text-5xl md:text-8xl ml-6 md:ml-32 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
              ref={beTheRef}
            >
              BE THE
            </div>
            <div
              className={`font-thin text-5xl md:text-8xl ml-6 md:ml-32 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
              ref={nextGenRef}
            >
              NEXT GEN
            </div>
            <div
              className={`font-thin text-5xl md:text-8xl ml-6 md:ml-32 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
              ref={innovatorRef}
            >
              INNOVATOR
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <button 
            className={`w-[105px] h-[39px] text-base font-bold ${
              isDarkTheme
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-black text-white hover:bg-gray-700"
            } rounded-md`}
            onClick={handleCareers}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;