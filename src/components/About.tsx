import React from "react";
import { data } from "@/data/data";
import TypingAnimation from "./ui/typing-animation";

const About = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row items-center">
        <div className="w-40 h-50 overflow-hidden rounded-full">
          <img
            src="/images/dp.jpg"
            alt="Profile Image"
            className="w-full h-full object-cover transform scale-125"
          />
        </div>

        <TypingAnimation duration={75} className="text-6xl pl-6">
          {data.name}
        </TypingAnimation>
        <span className=" bg-white animate-blink h-14 w-6">&nbsp;</span>
      </div>

      <div className="p-4 text-xl">{data.description}</div>

      <div className="flex flex-row justify-center lg:gap-10 lg:p-5 gap-5 p-3">
        <a
          className="flex flex-row"
          href={`mailto:${data.contact_info.email}`}
          target="_blank"
        >
          <img
            src="/contactIcon/email.svg"
            alt="Email-icon"
            className="w-8 h-6"
          />
          {/* {data.contact_info.email} */}
        </a>
        <a
          className="flex flex-row"
          href={data.contact_info.github.link}
          target="_blank"
        >
          <img
            src="/contactIcon/github.svg"
            alt="Github-icon"
            className="w-8 h-6"
          />
          {/* {data.contact_info.github.username} */}
        </a>
        <a
          className="flex flex-row"
          href={data.contact_info.linkedin.link}
          target="_blank"
        >
          <img
            src="/contactIcon/linkedin.svg"
            alt="LinkedIn-icon"
            className="w-8 h-6"
          />
          {/* {data.contact_info.linkedin.username} */}
        </a>
        <a
          className="flex flex-row"
          href={data.contact_info.insta.link}
          target="_blank"
        >
          <img
            src="/contactIcon/instagram.svg"
            alt="Instagram-icon"
            className="w-8 h-6"
          />
          {/* {data.contact_info.insta.username} */}
        </a>
        <a
          className="flex flex-row"
          href={data.contact_info.x_twitter.link}
          target="_blank"
        >
          <img
            src="/contactIcon/twitter.svg"
            alt="Twitter-icon"
            className="w-8 h-6"
          />
          {/* {data.contact_info.x_twitter.username} */}
        </a>
        <a
          className="flex flex-row lg:px-5 md:px-8"
          href={data.resume.link}
          target="_blank"
        >
          {data.resume.title}
          <img
            src="/contactIcon/resume.svg"
            alt="Resume-icon"
            className="w-8 h-6"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
