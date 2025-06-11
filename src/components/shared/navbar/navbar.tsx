"use client";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className="h-20 px-8 lg:px-0 flex fixed w-full top-0 items-center z-10 bg-navy"
      style={{ boxShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)" }}
    >
      <div className="flex w-full justify-start lg:justify-between items-center sm:w-full lg:w-[70%] xl:w-[80%] lg:mx-auto ">
        <a
          href="#"
          className={`${styles.navItem} ${
            isMounted ? styles.navItemMounted : ""
          } text-[#64ffda] font-semibold cursor-pointer text-2xl`}
        >
          𝑹𝑺
        </a>
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-[#64ffda] ml-auto"
        >
          ☰
        </button>
        <ul className="hidden lg:flex gap-x-6 items-center">
          {["About me", "Experience", "Projects", "Contact"].map(
            (text, index) => {
              const sectionId = text.toLowerCase().replace(" ", "-");
              return (
                <li
                  key={index}
                  className={`${styles.navItem} ${
                    isMounted ? styles.navItemMounted : ""
                  }`}
                >
                  <a href={`#${sectionId}`}>
                    <span className="underline text-sm text-lightestSlate">
                      {text}
                    </span>
                  </a>
                </li>
              );
            }
          )}
          <li
            className={`${styles.navItem} ${
              isMounted ? styles.navItemMounted : ""
            }`}
          >
            <div className="border border-[#64ffda] hover:bg-[#64ffda12] rounded-[4px] cursor-pointer w-20 h-8 flex items-center justify-center ">
              <a
                href="/my_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#64ffda] hover:bg-[#64ffda12] rounded-[4px] cursor-pointer w-20 h-8 flex items-center justify-center"
              >
                <span className="text-sm text-[#a8b2d1] hover:text-[#64ffda]">
                  Resume
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#112240] transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform lg:hidden`}
      >
        <button
          onClick={toggleSidebar}
          className="text-[#64ffda] w-full text-end p-4"
        >
          ✕
        </button>
        <ul className="flex flex-col gap-y-6 p-4">
          {["About me", "Experience", "Projects", "Contact"].map(
            (text, index) => {
              const sectionId = text.toLowerCase().replace(" ", "-");
              return (
                <li
                  key={index}
                  className={`${styles.navItem} ${
                    isMounted ? styles.navItemMounted : ""
                  }`}
                >
                  <a href={`#${sectionId}`} onClick={toggleSidebar}>
                    <span className="underline text-sm text-lightestSlate">
                      {text}
                    </span>
                  </a>
                </li>
              );
            }
          )}
          <li
            className={`${styles.navItem} ${
              isMounted ? styles.navItemMounted : ""
            }`}
          >
            <a
              href="/my_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#64ffda] hover:bg-[#64ffda12] rounded-[4px] cursor-pointer w-20 h-8 flex items-center justify-center"
              onClick={toggleSidebar}
            >
              <span className="text-sm text-[#a8b2d1] hover:text-[#64ffda]">
                Resume
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
