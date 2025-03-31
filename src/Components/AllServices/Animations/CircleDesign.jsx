import { useState } from "react";
import { useTheme } from "../../../Context/ThemeContext";
import { motion } from "framer-motion";
import Blackfrontend from "../Animations/Images/Frontend.png";
import BlackBackend from "../Animations/Images/Backend.png";
import BlackDatabase from "../Animations/Images/DataBase.png";
import WhiteFrontend from "../Animations/Images/FrontendWhite.png";
import WhiteBackend from "../Animations/Images/BackendWhite.png";
import WhiteDatabase from "../Animations/Images/DatabaseWhite.png";
import FullStackWhite from "../Animations/Images/FULLSTACKwHITE.png";
import FullStackBlack from "../Animations/Images/FULLSTACKBLACK.png";

const CircleDesign = () => {
  const { isDarkTheme } = useTheme();
  const [showText, setShowText] = useState(false);
  const [showImage, setImage] = useState(false);
  const [mergeCircles, setMergeCircles] = useState(false);
  const [showFullStack, setShowFullStack] = useState(false);

  return (
    <div
      className={`${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      } flex justify-center items-center h-auto md:h-screen -mt-4 md:-mt-8 mb-2 md:mb-8`}
    >
      <motion.div
        initial={{ rotate: 180 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, delay: 0.02, ease: "linear" }}
        onAnimationComplete={() => {
          setShowText(true);
          setImage(true);
          setTimeout(() => {
            setMergeCircles(true);
            setTimeout(() => setShowFullStack(true), 1000); // 2 sec delay
          }, 1000);
        }}
        className="w-[300px] md:w-[643px] h-[300px] md:h-[643px] relative flex items-center justify-center rounded-full"
      >
        {!showFullStack ? (
          <>
            {/* Green Circle (Database) - Sabse piche */}
            <motion.div
              initial={{ width: 20, height: 20, x: 0, y: 0, zIndex: 1 }}
              animate={{
                width: mergeCircles ? (window.innerWidth < 768 ? 110 : 236) : (window.innerWidth < 768 ? 110 : 236),
                height: mergeCircles ? (window.innerWidth < 768 ? 110 : 236) : (window.innerWidth < 768 ? 110 : 236),
                x: mergeCircles ? 0 : 0,
                y: mergeCircles ? 0 : (window.innerWidth < 768 ? 60 : 120),
                opacity: mergeCircles ? 0 : 1,
              }}
              transition={{ duration: 1, ease: "linear" }}
              className="absolute bg-green-500 rounded-full shadow-[0_0_20px_rgba(0,255,0,0.9)] md:shadow-[0_0_50px_rgba(0,255,0,0.9)] flex flex-col gap-1 md:gap-2 items-center justify-center text-sm md:text-xl font-bold"
            >
              {showImage && (
                <img
                  src={isDarkTheme ? WhiteDatabase : BlackDatabase}
                  alt="database"
                  className="w-[28px] h-[28px] md:w-[56.25px] md:h-[56.25px]"
                />
              )}
              {showText && "DATA BASE"}
            </motion.div>

            {/* Red Circle (Back-end) - Beech mein */}
            <motion.div
              initial={{ width: 20, height: 20, x: 0, y: 0, zIndex: 2 }}
              animate={{
                width: mergeCircles ? (window.innerWidth < 768 ? 110 : 236) : (window.innerWidth < 768 ? 110 : 236),
                height: mergeCircles ? (window.innerWidth < 768 ? 110 : 236) : (window.innerWidth < 768 ? 110 : 236),
                x: mergeCircles ? 0 : (window.innerWidth < 768 ? 75 : 150),
                y: mergeCircles ? 0 : (window.innerWidth < 768 ? -75 : -150),
                opacity: mergeCircles ? 0 : 1,
              }}
              transition={{ duration: 1, ease: "linear" }}
              className="absolute bg-red-500 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.9)] md:shadow-[0_0_50px_rgba(255,0,0,0.9)] flex flex-col gap-1 md:gap-2 items-center justify-center text-sm md:text-xl font-bold"
            >
              {showImage && (
                <img
                  src={isDarkTheme ? WhiteBackend : BlackBackend}
                  alt="backend"
                  className="w-[35px] h-[29px] md:w-[70.26px] md:h-[58.72px]"
                />
              )}
              {showText && "BACK-END"}
            </motion.div>

            {/* Blue Circle (Front-end) - Sabse aage */}
            <motion.div
              initial={{ width: 20, height: 20, x: 0, y: 0, zIndex: 3 }}
              animate={{
                width: mergeCircles ? (window.innerWidth < 768 ? 110 : 236) : (window.innerWidth < 768 ? 110 : 236),
                height: mergeCircles ? (window.innerWidth < 768 ? 110 : 236) : (window.innerWidth < 768 ? 110 : 236),
                x: mergeCircles ? 0 : (window.innerWidth < 768 ? -75 : -150),
                y: mergeCircles ? 0 : (window.innerWidth < 768 ? -75 : -150),
                opacity: mergeCircles ? 0 : 1,
              }}
              transition={{ duration: 1, ease: "linear" }}
              className="absolute bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.9)] md:shadow-[0_0_50px_rgba(0,255,255,0.9)] flex flex-col gap-1 md:gap-2 items-center justify-center text-sm md:text-xl font-bold"
            >
              {showImage && (
                <img
                  src={isDarkTheme ? WhiteFrontend : Blackfrontend}
                  alt="frontend"
                  className="w-[22px] h-[31px] md:w-[44.44px] md:h-[62.5px]"
                />
              )}
              {showText && "FRONT-END"}
            </motion.div>
          </>
        ) : (
          // Merged Full-Stack Circle
          <motion.div
            initial={{ width: window.innerWidth < 768 ? 180 : 400, height: window.innerWidth < 768 ? 180 : 400, opacity: 0 }}
            animate={{ width: window.innerWidth < 768 ? 180 : 400, height: window.innerWidth < 768 ? 180 : 400, opacity: 1 }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute bg-[#AF9C70] gap-1 md:gap-3 rounded-full shadow-[0_0_20px_rgba(139,69,19,0.9)] md:shadow-[0_0_50px_rgba(139,69,19,0.9)] flex flex-col items-center justify-center text-lg md:text-3xl font-bold"
          >
            {showImage && (
              <img
                src={isDarkTheme ? FullStackWhite : FullStackBlack}
                alt="fullstack"
                className="w-[70px] h-[73px] md:w-[138.83px] md:h-[146.63px]"
              />
            )}
            FULL STACK
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CircleDesign;