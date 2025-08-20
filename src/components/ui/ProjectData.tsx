"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ProjectDetails } from "../../data/ProjectDetails";
import { ExternalLink } from "lucide-react";
import { Button } from "./button";
import { IconBrandGithub } from "@tabler/icons-react";

const cards = ProjectDetails;

export function ProjectData() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 dark:bg-white/30 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] font-['Clash_Display']">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[90vw] md:max-w-[550] max-h-[70vh] md:max-h-[80vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden overflow-y-auto scrollbar-none rounded-xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  unoptimized
                  priority
                  width={200}
                  height={200}
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-80 max-h-[30vh] md:max-h-[40vh] sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="justify-end gap-6 space-x-2">
                    {active.gitLink && (
                      <Button
                        variant={"outline"}
                        className="p-4 w-12 h-12"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(active.gitLink, "_blank");
                        }}
                      >
                        <IconBrandGithub />
                      </Button>
                    )}

                    {active.liveLink && (
                      <Button
                        variant={"outline"}
                        className="p-4 w-12 h-12"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(active.liveLink, "_blank");
                        }}
                      >
                        <ExternalLink />
                      </Button>
                    )}
                  </div>
                </div>
                <div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="p-1 mx-2 px-4 text-lg">{active.type}</div>
                    <span className="text-accent bg-neutral-200 dark:bg-neutral-700 flex w-fit p-1 my-1 mx-2 px-4 rounded-3xl ">
                      {active.techStacks}
                    </span>
                  </motion.div>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base pb-4 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="  w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 ">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-gray-400 dark:bg-terminal hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-xl cursor-pointer "
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  unoptimized
                  width={100}
                  height={100}
                  src={card.src || "/placeholder.svg"}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-center"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col font-['Clash_Display']">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
                <div className="mt-1 mb-1 text-lg">{card.type}</div>
                <div className="text-accent bg-neutral-200 dark:bg-neutral-500 px-3 py-1 my-1 rounded-3xl">
                  {card.techStacks}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
