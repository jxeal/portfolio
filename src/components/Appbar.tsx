import { data } from "@/data/data";
import ThemeToggle from "../components/ThemeToggle";
import Contact from "./Contact";

export default function Appbar() {
  return (
    <header className="appbar-container flex justify-between items-center pb-10 ">
      <div>
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <a href="#hero" className=" md:pl-5">
            {data.alias}
          </a>
          <span className="text-3xl md:text-4xl font-extrabold text-accent">
            .
          </span>
        </h1>
      </div>
      <div className="flex justify-between gap-4 md:gap-8 items-center">
        <Contact />

        <a className=" hover:text-accent" href="#projects">
          Projects
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
}
