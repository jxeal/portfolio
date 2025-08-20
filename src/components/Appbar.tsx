"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { data } from "@/data/data";
import ThemeToggle from "../components/ThemeToggle";
import Contact from "./Contact";
import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";

export default function Appbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 appbar-container flex justify-between items-center px-4 pt-3 pb-1 mb-2 bg-white/75 dark:bg-black/75 rounded-xl max-w-[95dvw] md:max-w-[780] mx-auto font-['Clash_Display']">
      <div>
        <h1 className="text-3xl font-semibold md:text-4xl">
          <a href="#hero" className="">
            {data.alias}
          </a>
        </h1>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`absolute right-0 mt-2 w-40 p-2 rounded-lg shadow-lg border transition-opacity duration-300 ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          } bg-terminal border-2 border-gray-200 dark:border-black`}
        >
          <div className="flex flex-col space-y-2 items-center text-center">
            <Contact />
            <a className="hover:text-accent" href="#projects">
              <Button
                className="bg-background hover:bg-background text-base hover:text-accent"
                variant={"ghost"}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Button>
            </a>
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex justify-between gap-4 items-center">
        <Contact />
        <a className="hover:text-accent" href="#projects">
          <Button
            className="bg-background hover:bg-background text-base hover:text-accent"
            variant={"ghost"}
          >
            Projects
          </Button>
        </a>
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
