"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
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
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resetAutoplay = useCallback(() => {
    if (!active || typeof active !== "object") return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    const imgs = Array.isArray(active.images) ? active.images : [];
    if (imgs.length === 0) return;

    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }, 2000);
  }, [active]);

  useEffect(() => {
    setCurrent(0);
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [active, resetAutoplay]);

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
          <div className="fixed inset-0 grid place-items-center z-[100] font-['Clash_Display'] md:p-6">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full h-full md:h-auto md:max-h-[100%] max-w-5xl flex flex-col bg-white dark:bg-black/90 backdrop-blur-3xl overflow-hidden overflow-y-auto scrollbar-none md:rounded-[2rem] shadow-2xl border-0 md:border md:border-white/10"
            >
              <div className="relative shrink-0">
                <motion.div
                  layoutId={`image-${active.title}-${id}`}
                  className="relative group"
                >
                  {Array.isArray(active.images) && active.images.length > 0 ? (
                    (() => {
                      const imgs = active.images;
                      return (
                        <>
                          <div className="overflow-hidden w-full h-[40vh] md:h-[50vh] relative bg-black">
                            <motion.div
                              className="flex w-full h-full"
                              animate={{ x: `-${current * 100}%` }}
                              transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            >
                              {imgs.map((img, i) => (
                                <Image
                                  key={i}
                                  unoptimized
                                  priority
                                  width={1200}
                                  height={800}
                                  src={img || "/placeholder.svg"}
                                  alt={`${active.title} - ${i + 1}`}
                                  className="w-full h-full object-contain md:object-cover object-center flex-shrink-0"
                                />
                              ))}
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrent((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
                              resetAutoplay();
                            }}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white rounded-full h-12 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrent((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
                              resetAutoplay();
                            }}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white rounded-full h-12 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                          </button>

                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                            {imgs.map((_, i) => (
                              <button
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrent(i);
                                  resetAutoplay();
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  i === current ? "bg-white w-8" : "bg-white/40 w-2 hover:bg-white/60"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      );
                    })()
                  ) : (
                    <div className="relative h-[40vh] md:h-[50vh] w-full bg-black">
                      <Image
                        unoptimized
                        priority
                        width={1200}
                        height={800}
                        src={active.src || "/placeholder.svg"}
                        alt={active.title}
                        className="w-full h-full object-contain md:object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}
                </motion.div>
                
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 hover:bg-black/70 backdrop-blur-lg border border-white/20 text-white rounded-full h-10 w-10 flex items-center justify-center transition-colors z-50"
                  aria-label="Close"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              <div className="p-6 md:p-10 flex flex-col font-['Clash_Display'] w-full pb-20 md:pb-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 w-full border-b border-neutral-200/50 dark:border-neutral-800/50 pb-8">
                  <div className="flex-1 w-full">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-900 dark:text-white text-3xl md:text-5xl mb-4 tracking-tight"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex gap-4 shrink-0">
                    {active.gitLink && (
                      <Button
                        variant={"outline"}
                        className="rounded-xl h-12 w-12 p-0 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 bg-white/50 dark:bg-transparent backdrop-blur-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(active.gitLink, "_blank");
                        }}
                      >
                        <IconBrandGithub size={24} />
                      </Button>
                    )}

                    {active.liveLink && (
                      <Button
                        variant={"default"}
                        className="rounded-xl h-12 px-6 bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center gap-2 font-semibold text-base transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(active.liveLink, "_blank");
                        }}
                      >
                        <span>View Project</span>
                        <ExternalLink size={18} />
                      </Button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="prose dark:prose-invert prose-lg max-w-none text-neutral-700 dark:text-neutral-300"
                    >
                      {active.content}
                    </motion.div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-neutral-50 dark:bg-white/5 rounded-2xl p-6 border border-neutral-200/50 dark:border-white/10"
                    >
                      <h4 className="text-sm font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">Role / Type</h4>
                      <div className="inline-block px-4 py-2 text-sm font-bold bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm">
                        {active.type}
                      </div>

                      <h4 className="text-sm font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4 mt-8">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {active.techStacks?.split(' ').map((tech: string) => (
                          <span key={tech} className="px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-white/10 rounded-md border border-neutral-200 dark:border-transparent shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full flex flex-col gap-4 md:gap-6 py-6 md:py-8">
        {cards.map((card) => {
          return (
            <React.Fragment key={card.title}>
              {active && typeof active === "object" && active.title === card.title ? (
                // hide the selected card from the grid when it's active
                <div className="invisible" />
              ) : (
                <motion.li
                  layoutId={`card-${card.title}-${id}`}
                  onClick={() => setActive(card)}
                  className="group flex flex-col md:flex-row items-center md:items-stretch gap-6 w-full p-4 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
                >
                  <motion.div 
                    layoutId={`image-${card.title}-${id}`} 
                    className="w-full md:w-1/3 shrink-0 relative overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[4/3] border border-white/20 dark:border-neutral-800/50 shadow-inner"
                  >
                    <Image
                      unoptimized
                      width={400}
                      height={300}
                      src={card.src || "/placeholder.svg"}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </motion.div>

                  <div className="flex flex-col justify-start font-['Clash_Display'] w-full md:w-2/3 px-2 md:px-2 py-4 pt-6 md:pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <motion.h3
                        layoutId={`title-${card.title}-${id}`}
                        className="font-bold text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl tracking-wide group-hover:text-accent transition-colors"
                      >
                        {card.title}
                      </motion.h3>
                      <div className="hidden md:flex items-center">
                        <span className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 bg-black/5 dark:bg-white/5 rounded-full backdrop-blur-sm">
                          {card.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-auto">
                      <motion.p
                        layoutId={`description-${card.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed line-clamp-2"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                    
                    <div className="mt-8">
                       <h4 className="text-[10px] md:text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">Technologies</h4>
                       <div className="flex flex-wrap items-center gap-2">
                          <span className="md:hidden px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 bg-black/5 dark:bg-white/5 rounded-full">
                             {card.type}
                          </span>
                         {card.techStacks?.split(' ').map((tech, index) => (
                           <span key={`${card.title}-tech-${index}`} className="px-2.5 py-1 text-[11px] md:text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-white/60 dark:bg-neutral-800/60 rounded border border-neutral-200/50 dark:border-neutral-700/50">
                             {tech}
                           </span>
                         ))}
                       </div>
                    </div>
                  </div>
                </motion.li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}
