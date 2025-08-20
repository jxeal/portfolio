import { data } from "@/data/data";
import Contact from "./Contact";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer flex flex-col justify-center items-center font-['Clash_Display']">
      <div className="mt-16 h-[1px] w-full bg-foreground"></div>
      <div className="flex justify-center items-center gap-5 p-8 text-lg">
        <Contact />
        <div>||</div>
        <div>
          <Link
            className=" text-base hover:text-accent "
            href={data.contact_info.linkedin.link}
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
        <div>||</div>
        <div>
          <Link
            className=" text-base hover:text-accent "
            href={data.contact_info.github.link}
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="pb-10 text-sm text-center ">
        Made with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="hover:text-accent"
        >
          Next.js
        </a>{" "}
        & &#128153; by Sayak Majumder.
        <br />
        Inspired from{" "}
        <a
          href="https://www.justinchi.me/"
          target="_blank"
          className="hover:text-accent"
        >
          Justin Chi
        </a>{" "}
        and{" "}
        <a
          href="https://delba.dev/"
          target="_blank"
          className="hover:text-accent"
        >
          Delba De Oliveria
        </a>
      </div>
    </div>
  );
}
