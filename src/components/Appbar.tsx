import { data } from "@/data/data";
import ThemeToggle from "../components/ThemeToggle";
import Contact from "./Contact";

export default function Appbar() {
  return (
    <header className="appbar-container flex justify-between items-center pb-10 ">
      <div>
        <h1 className="text-2xl font-semibold md:text-4xl">
          <a href="#hero">{data.alias}</a>
          <span className="text-accent text-4xl ">.</span>
        </h1>
      </div>
      <div className="flex justify-between gap-4 md:gap-8 items-center">
        <Contact />

        <a className=" hover:bg-transparent hover:text-accent" href="#projects">
          Projects
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
}
