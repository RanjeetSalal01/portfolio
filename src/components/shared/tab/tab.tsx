"use client";
import React, { useState } from "react";

const Tabs = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex gap-x-12 flex-col lg:flex-row gap-y-12" data-aos="fade-up">
      <div className="flex flex-col items-start border-l-2 pl-2  border-[#303C55]">
        {tabs.map((tab: any) => (
          <button
            key={tab.id}
            className={`lg:w-60 w-full p-4 flex text-sm font-medium ${
              activeTab === tab.id
                ? "bg-[#112240] text-[#64ffda] border-transparent rounded-lg "
                : "text-[#a8b2d1]"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.role}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab: any) => (
          <div
            key={tab.id}
            style={{ display: activeTab === tab.id ? "block" : "none" }}
          >
            <div>
              <div className="flex gap-x-2 text-base font-medium">
                <div className="text-[#ccd6f6]">{tab.role}</div>
                <div className="border border-lightestSlate"></div>
                <div className="text-[#64ffda]">{tab.company}</div>
              </div>
              <div className="text-sm mt-3 mb-9 font-normal text-[#a8b2d1]">
                {tab.date}
              </div>
              {tab.description.map((info: any) => (
                <div
                  className="text-sm mb-4 relative description pl-8 text-[#a8b2d1] font-normal"
                  key={info}
                >
                  {info}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
