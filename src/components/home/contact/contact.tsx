"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import SimpleImageSlider from "react-simple-image-slider";

const ContactUs = () => {
  return (
    <div className="sm:w-full lg:w-[70%] xl:w-[80%] mx-auto py-24">
      <div className="flex justify-between w-full" data-aos="fade-up">
        <div className="flex flex-col gap-y-10 w-full">
          <div className="sectionTitle after:w-[150px] section pl-6 text-lg">Contact</div>
          <div className="flex ">
            <div className="flex w-full flex-col gap-y-6">
              <div className="text-[#64ffda] text-base font-medium">
                Lets connect!{" "}
              </div>
              <div className="text-[#a8b2d1] font-sm font-medium">
                I craft dynamic and responsive solutions. Reach out to
                collaborate on innovative projects. <br />{" "}
              </div>
              <a
                href="mailto:ranjeetsalal2001@gmail.com"
                className="border border-[#64ffda] hover:bg-[#64ffda12] rounded-[4px] cursor-pointer w-32 h-12 flex items-center justify-center "
              >
                <span className="text-sm text-[#a8b2d1] hover:text-[#64ffda]">
                  Connect
                </span>
              </a>
            </div>
            {/* <div className="w-full h-full flex justify-center items-center"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
