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
    <header className="appbar-container flex justify-between items-center pb-10 relative">
      <div>
        <h1 className="text-3xl font-extrabold md:text-4xl">
          <a href="#hero" className="md:pl-5">
            {data.alias}
          </a>
          <span className="text-3xl md:text-4xl font-extrabold text-accent">
            .
          </span>
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
          className={`absolute right-0 mt-2 w-40 p-2 rounded-lg shadow-lg bg-background bg-opacity-100 transition-opacity duration-300 ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-2 items-center text-center">
            <Contact />
            <a
              className="hover:text-accent"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              <Dialog>Projects</Dialog>
            </a>
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex justify-between gap-4 md:gap-8 items-center">
        <Contact />
        <a className="hover:text-accent" href="#projects">
          Projects
        </a>
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
