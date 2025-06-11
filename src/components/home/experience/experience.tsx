"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tabs from "@/components/shared/tab/tab";

const Experience = () => {
  const tabs = [
    {
      id: "tab1",
      role: "Junior Software Engineer",
      company: "NextEdge Labs",
      date: "Nov 2022 - Present",
      description: [
        " Developed and maintained full stack web applications with proficiency in server-side and client-side technologies",
        "Designed and implemented RESTful APIs to support multiple applications, using Node.js and Express.",
        " Implemented innovative solutions and optimized performance, resulting in improved user experience and increased efficiency.",
        "Utilized advanced libraries and frameworks to build responsive and user-friendly interfaces.",

        ,
      ],
    },
    {
      id: "tab2",
      role: "Web Developer (Internship)",
      company: "Kamet",
      date: "Nov 2021 - Jan 2022",
      description: [
        "Developed and maintained web applications using Angular and React.",
        " Developed reusable components and services that improved code efficiency by 20%",
        "Developed and maintained impactful web applications utilizing Angular 6, HTML, CSS, and JavaScript to enhance user experience.",
      ],
    },
  ];

  return (
    <div className="sm:w-full lg:w-[70%] xl:w-[80%] mx-auto py-24">
      <div className="flex justify-between" data-aos="fade-up">
        <div className="flex flex-col gap-y-10">
          <div className="sectionTitle after:w-[150px] section pl-6 text-lg">Experience</div>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
