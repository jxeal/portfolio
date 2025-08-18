import React from "react";
import { data } from "@/data/data";
import TypingAnimation from "./ui/typing-animation";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
  IconFileText,
} from "@tabler/icons-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row items-center">
        <div className="w-40 h-50 overflow-hidden rounded-full">
          <Image
            unoptimized
            src="/images/dp.jpg"
            alt="Profile Image"
            className="w-full h-full object-cover transform scale-125"
            width={40}
            height={50}
          />
        </div>

        <TypingAnimation duration={75} className="text-4xl pl-6 md:text-6xl ">
          {data.name}
        </TypingAnimation>
      </div>

      <div className="p-4 mt-4 text-base md:text-xl">{data.description}</div>

      <div className="flex flex-row justify-center lg:gap-10 lg:p-5 gap-5 p-3 ">
        <a
          className="flex flex-row hover:text-accent"
          href={`mailto:${data.contact_info.email}`}
          target="_blank"
        >
          <IconMail />
        </a>
        <a
          className="flex flex-row hover:text-accent"
          href={data.contact_info.github.link}
          target="_blank"
        >
          <IconBrandGithub />
        </a>
        <a
          className="flex flex-row hover:text-accent"
          href={data.contact_info.linkedin.link}
          target="_blank"
        >
          <IconBrandLinkedin />
        </a>
        <a
          className="flex flex-row hover:text-accent"
          href={data.contact_info.insta.link}
          target="_blank"
        >
          <IconBrandInstagram />
        </a>
        <a
          className="flex flex-row hover:text-accent"
          href={data.contact_info.x_twitter.link}
          target="_blank"
        >
          <IconBrandX />
        </a>
        <a
          className="flex flex-row px-2 lg:px-5 md:px-8 hover:text-accent"
          href={data.resume.link}
          target="_blank"
        >
          <span className="hidden md:block">{data.resume.title}</span>
          <IconFileText />
        </a>
      </div>
    </div>
  );
};

export default About;
