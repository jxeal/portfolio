"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { data } from "@/data/data";
import ThemeToggle from "../components/ThemeToggle";
import Contact from "./Contact";
import { Button } from "./ui/button";

export default function Appbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-10 appbar-container flex justify-between items-center px-4 pt-3 pb-2 mb-2 bg-white/50 dark:bg-black/50 rounded-xl max-w-[100dvw] md:max-w-[780px] mx-auto font-['Clash_Display']"
      style={{
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <div>
        <h1 className="text-3xl font-semibold md:text-4xl">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {data.alias}
          </button>
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
            <Button
              className="bg-transparent hover:bg-transparent text-base hover:text-accent"
              variant={"ghost"}
              onClick={() => {
                setIsOpen(false);
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-4 items-center">
        <Contact />
        <Button
          className="bg-transparent hover:bg-transparent text-base hover:text-accent"
          variant={"ghost"}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </Button>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
