"use client";
import React, { useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-24 pb-8">
      <div className={`${styles.stickyFooter} left-8  hidden lg:block`}>
        <div style={{ writingMode: "vertical-lr", margin: "20px auto" }}>
          <a
            style={{
              right: "30px",
              padding: "10px",
              color: "#a8b2d1",
              writingMode: "vertical-rl",
            }}
            className={`${styles.footerItem}`}
            href="https://github.com/RanjeetSalal01"
            target="_blank"
          >
            <Image src="/github.svg" width={22} height={22} alt={"GitHub"} />
          </a>
          <a
            style={{
              right: "30px",
              padding: "10px",
              color: "#a8b2d1",
              writingMode: "vertical-rl",
            }}
            className={`${styles.footerItem}`}
            href="https://www.linkedin.com/in/ranjeet-singh-salal-61203a1b7/"
            target="_blank"
          >
            <Image src="/linkdin.svg" width={22} height={22} alt={"LinkedIn"} />
          </a>
        </div>
      </div>
      <div className={`${styles.stickyFooter} right-8 hidden lg:block`}>
        <a
          style={{
            margin: "20px auto",
            padding: "10px",
            color: "#a8b2d1",
            writingMode: "vertical-rl",
          }}
          className={`${styles.footerItem}`}
          href="mailto:ranjeetsalal2001@gmail.com"
          target="_blank"
        >
          ranjeetsalal2001@gmail.com
        </a>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="text-[#64ffda] font-normal text-base underline">
          Built with Nextjs by Ranjeet Singh Salal
        </div>
        <div className="text-[#a8b2d1] font-normal text-base">
          <span>© 2024</span> | <span> All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;