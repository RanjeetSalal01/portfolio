"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleImageSlider from "react-simple-image-slider";

const Projects = () => {
  const isWindowDefined = typeof window !== "undefined";

  const getInitialSliderWidth = () => {
    if (!isWindowDefined) return 600; // Default value for server-side rendering
    return window.innerWidth > 1200 ? 600 : 400;
  };

  const [sliderWidth, setSliderWidth] = useState(getInitialSliderWidth);

  const updateSliderWidth = () => {
    if (isWindowDefined) {
      setSliderWidth(window.innerWidth > 1200 ? 600 : 400);
    }
  };

  useEffect(() => {
    if (isWindowDefined) {
      window.addEventListener("resize", updateSliderWidth);
      return () => {
        window.removeEventListener("resize", updateSliderWidth);
      };
    }
  }, [isWindowDefined]);

  const listOfProjects = [
    {
      id: "tab1",
      images: [
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1749628813/Screenshot_2025-06-11_133000_nrnqx8.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1749628518/Screenshot_2025-06-11_132447_j9ckjq.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1749628815/Screenshot_2025-06-11_132546_wirw7z.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1749628815/Screenshot_2025-06-11_132836_wyf4nx.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1749628815/Screenshot_2025-06-11_132653_hpngm2.png",
        },
      ],
      tech: ["Angular", "NodeJS", "MongoDB", "ExpressJS"],
      title: "Recyclink Admin Dashboard",
      description:
        "Developed an admin dashboard for Recyclink to manage and improve their waste collection process. The system helps the team easily assign, track, and monitor pickups across different areas. It also includes features for employee tracking, reporting, and fine management to keep operations clear and well-organized.",
    },
    {
      id: "tab1",
      images: [
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518222/portfolio/tpo6xzu8t1cufsl30ntl.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518296/portfolio/dh9xbdkyrbseblabiih7.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518302/portfolio/uatgwjciay67gmzx7vav.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518305/portfolio/hfboue5ce7ub91jipnja.png",
        },
      ],
      tech: ["Nextjs", "Tailwind CSS", "NodeJS", "ChartJS", "ExpressJS"],
      title: "BeyondSeed Admin",
      description:
        "BeyondSeed is a member driven growth engine designed to help early-stage startups scale their business and move from Seed to Series A. BeyondSeed Admin is a comprehensive dashboard designed to streamline the operations of BeyondSeed.",
    },
    {
      id: "tab3",
      images: [
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518316/portfolio/wfl8h9vkkerpi7fmoliu.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518316/portfolio/m1mhtmot4unojio78a3e.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518322/portfolio/fxxrpn1wdmlvxy3mlplv.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518318/portfolio/q6jq6oxci1dnjmsdc8oz.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518318/portfolio/e24bluwvsrqifz2aaoof.png",
        },
      ],
      tech: ["Angular", "Material", "NodeJS", "ExpressJS"],
      title: "CARF Admin",
      description:
        "CARF Admin is a comprehensive dashboard designed for the Cancer Aid & Research Foundation (CARF). An Indian Charitable Organization – Established in the year 2001. CARF manages various aspects of its operations, including transactions, patient management, donor management, hospital management, CSR activities",
    },

    {
      id: "tab4",
      images: [
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518321/portfolio/aq0h7bg7bh7zchbcfoua.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518307/portfolio/dxdjh00bua8cwchkubhe.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720518304/portfolio/klmiov0g2vewxjsb6yqj.png",
        },
        {
          url: "https://res.cloudinary.com/djiomkm2m/image/upload/v1720520131/beyondseed-landingPage-4_htvpn4.png",
        },
      ],
      title: "BeyondSeed Website",
      tech: ["Angular", "Material", "ExpressJS", "NodeJs"],
      description:
        "The BeyondSeed Website serves as a comprehensive platform that articulates the mission and impact of BeyondSeed. It showcases a curated list of invested startups, detailed insights into their growth engine, and profiles of team members and mentors. ",
    },
  ];

  return (
    <div className="sm:w-full lg:w-[70%] xl:w-[80%] mx-auto py-24">
      <div className="flex justify-between w-full" data-aos="fade-up">
        <div className="flex flex-col gap-y-10 w-full">
          <div className="sectionTitle after:w-[150px] section pl-6 text-lg">
            Projects that I was a part of
          </div>
          <div className="flex flex-col gap-y-40">
            {listOfProjects.map((info: any, index: number) => (
              <div
                data-aos="fade-up"
                key={info.id}
                className={`flex   relative justify-between w-full ${
                  index % 2 != 0
                    ? "flex-col lg:flex-row-reverse"
                    : "flex-col lg:flex-row"
                }`}
              >
                <div className="w-full h-full">
                  <div
                    className={`hidden lg:flex  ${
                      index % 2 != 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <SimpleImageSlider
                      // width={600}
                      width={sliderWidth}
                      height={350}
                      images={info.images}
                      showBullets={true}
                      // autoPlay={true}
                      showNavs={false}
                      style={{
                        borderRadius: "8px",
                        zIndex: "1",
                        // width: "100%!important",
                      }}
                    />
                  </div>
                  <div className="block lg:hidden h-[40vh]">
                    <SimpleImageSlider
                      width={100}
                      height={100}
                      images={info.images}
                      showBullets={true}
                      autoPlay={true}
                      showNavs={false}
                      style={{
                        borderRadius: "8px",
                        zIndex: "1",
                        width: "100%!important",
                        height: "40vh!important",
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full flex flex-col  lg:justify-between gap-y-5  ${
                    index % 2 != 0
                      ? "lg:mr-[-10rem] lg:items-start"
                      : "lg:ml-[-10rem] lg:items-end"
                  } z-10`}
                >
                  <div className="flex  mt-6 flex-col gap-y-3">
                    <div
                      className={`text-sm text-[#64ffda] font-normal ${
                        index % 2 != 0
                          ? "text-center lg:text-start"
                          : "text-center lg:text-end"
                      } `}
                    >
                      Featured Project
                    </div>
                    <div
                      className={`text-lightestSlate  font-medium text-base ${
                        index % 2 != 0
                          ? "text-center lg:text-start"
                          : "text-center lg:text-end"
                      }`}
                    >
                      {info.title}
                    </div>
                  </div>
                  <div
                    style={{
                      boxShadow: " 0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                      transition:
                        "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                    }}
                    className={`p-5 z-10 text-[#a8b2d1] font-medium text-base rounded-sm bg-[#112240]  top-[35%] ${
                      index % 2 != 0 ? "right-[50%]" : "left-[50%]"
                    }`}
                  >
                    {info.description}
                  </div>

                  <div
                    // key={index}
                    className={`text-sm text-[#64ffda]  bottom-4  flex flex-wrap justify-center gap-y-4 gap-x-4 font-normal ${
                      index % 2 != 0 ? "text-start left-0" : "text-end right-0"
                    } `}
                  >
                    {info.tech.map((info: any, index: number) => (
                      <span className="underline" key={index}>
                        {info}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
