"use Client";
// import TypingAnimation from "@/components/TypeAnimation";
import React from "react";

import styles from "./Intro.module.css";
import TypingAnimation from "@/components/typeAnimation";

const Intro = () => {
  const texts = ["Mean Stack Developer"];
  return (
    <div
      className="flex mt-24 lg:mt-0 flex-col gap-y-8 h-[70vh] lg:h-[100vh] justify-center items-start sm:w-full lg:w-[70%] xl:w-[80%] mx-auto text-[#64ffda]"
      // style={{ height: `calc(100vh - 15rem)` }}
    >
      <div className={`${styles.aboutItem} flex gap-y-4 flex-col`}>
        <div className={`text-lg font-normal`}>Hello! My name is</div>
        <div
          style={{
            background:
              "linear-gradient(120deg, #50efb5, #8ff4ca, #7e57c2, #0087f2, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="bg-clip-text flex text-4xl lg:text-6xl flex-col font-semibold gap-y-5 text-white"
        >
          {/*  */}
          <div>Ranjeet Singh Salal</div>
          <div className="block lg:hidden">MEAN / MERN</div>
          <div className="block lg:hidden">Stack Developer</div>
          <div className="hidden lg:block">
            <TypingAnimation texts={texts} />
          </div>
          {/* <div>MEAN / MERN Stack Developer</div> */}
        </div>
      </div>
      <div>
        <div
          className={` ${styles.aboutItem} text-[#a8b2d1] text-base w-full lg:w-[40%]`}
        >
          Passionate and detail-oriented developer with{" "}
          <span className="text-[#64ffda] underline">
            2+ years of hands-on experience
          </span>{" "}
          in full-stack development. Skilled in writing clean, efficient, and
          reusable code, with a strong focus on debugging and optimizing
          performance
        </div>
      </div>

      {/* <div className="border border-[#64ffda] hover:bg-[#64ffda12] rounded-[4px] cursor-pointer w-20 h-8 flex items-center justify-center ">
        <span className="text-sm text-[#a8b2d1] hover:text-[#64ffda]">Connect</span>
      </div> */}
    </div>
  );
};

export default Intro;
