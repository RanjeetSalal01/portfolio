"use client";

import AboutUs from "@/components/home/about/about";
import ContactUs from "@/components/home/contact/contact";
import Experience from "@/components/home/experience/experience";
import Intro from "@/components/home/intro/intro";
import Projects from "@/components/home/projects/projects";
import * as AOS from "aos";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full px-8 lg:px-0">
      <section id="intro">
        <Intro />
      </section>
      <section id="about-me">
        <AboutUs />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;