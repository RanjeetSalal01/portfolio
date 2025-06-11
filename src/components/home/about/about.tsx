import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full lg:w-[70%] xl:w-[80%] mx-auto py-24">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-10">
          <div
            className="sectionTitle after:w-[150px] section pl-6 text-lg"
            data-aos="fade-up"
          >
            About me
          </div>
          <div
            data-aos="fade-up"
            className="text-[#a8b2d1] text-base flex flex-col gap-y-4"
          >
            <div>
              {" "}
              With over{" "}
              <span className="text-[#64ffda] underline">
                1.6+ years of experience
              </span>{" "}
              in web development, I have a solid foundation in both front-end
              and back-end technologies. My expertise spans across creating
              dynamic and responsive web applications, ensuring seamless user
              experiences, and developing robust server-side logic. I am
              proficient in{" "}
              <span className="text-[#64ffda] underline">
                {" "}
                HTML, CSS, JavaScript
              </span>
              , and popular front-end frameworks such as{" "}
              <span className="text-[#64ffda] underline">React</span> or{" "}
              <span className="text-[#64ffda] underline">Angular</span>. On the
              back-end, I have hands-on experience with server-side technologies
              like{" "}
              <span className="text-[#64ffda] underline">Node.js, Expressjs</span>,
              and I am well-versed in database management using NoSQL databases.
            </div>

            <div>
              Some of the technologies that I have trained and worked on include
              (but are not limited to):
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-wrap gap-y-5 mt-2 gap-x-5"
          >
            <Image
              className="w-20 h-20 rounded-xl cursor-pointer hover:scale-125 p-3 bg-white"
              src="/angular.jpg"
              width={100}
              height={100}
              alt={""}
            />
            <Image
              className="w-20 h-20 rounded-xl cursor-pointer hover:scale-125 p-3 bg-white"
              src="/react.svg"
              width={100}
              height={100}
              alt={""}
            />
            <Image
              className="w-20 h-20 rounded-xl cursor-pointer hover:scale-125 p-3 bg-white"
              src="/js.png"
              width={100}
              height={100}
              alt={""}
            />
            <Image
              className="w-20 h-20 rounded-xl cursor-pointer hover:scale-125 p-3 bg-white"
              src="/tailwind.svg"
              width={100}
              height={100}
              alt={""}
            />
            <Image
              className="w-20 h-20 rounded-xl cursor-pointer hover:scale-125 p-3 bg-white"
              src="/mongodb.svg"
              width={100}
              height={100}
              alt={""}
            />
            <Image
              className="w-20 h-20 rounded-xl cursor-pointer hover:scale-125 p-3 bg-white"
              src="/nodejs.svg"
              width={100}
              height={100}
              alt={""}
            />
            {/* <Image
              className="w-20 h-20 rounded-xl cursor-pointer hover:scale-125 p-3 bg-white"
              src="/express.svg"
              width={100}
              height={100}
              alt={""}
            /> */}
          </div>
        </div>
        {/* <div>
          <Image
            className="w-[120rem] h-96"
            src="/mario2.svg"
            width={100}
            height={100}
            alt={""}
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
