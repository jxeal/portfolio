"use client";
import Link from "next/link";
import { BlogPostMetadata } from "@/data/BlogDetails";
import { motion, useScroll, useTransform } from "framer-motion";
import { Syne, Space_Mono } from "next/font/google";
import { useRef } from "react";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BlogCardProps {
  post: BlogPostMetadata;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.1 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  // Alternate layouts based on index for a more editorial/magazine feel
  const isEven = index % 2 === 0;

  return (
    <motion.div
      style={{
          scale: scaleProgress,
          opacity: opacityProgress,
      }}
      className="w-full"
    >
      <Link
        ref={ref}
        href={`/blogs/${post.slug}`}
        className={`group relative block w-full bg-white/10 dark:bg-neutral-900/10 backdrop-blur-3xl overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/40 dark:border-white/10 hover:bg-white/30 dark:hover:bg-neutral-800/40 transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02] pointer-events-none" />
        
        {/* Large abstract number background */}
        <div className={`absolute top-0 ${isEven ? 'right-4' : 'left-4'} -translate-y-[10%] text-[10rem] md:text-[18rem] lg:text-[18rem] leading-none font-black text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-[15%] ${syne.className}`}>
            {(index + 1).toString().padStart(2, '0')}
        </div>

        <div className={`relative p-8 md:p-14 flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className="flex-1 w-full space-y-6 md:space-y-8 z-10">
            <div className={`flex items-center gap-4 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
              <span className={`${spaceMono.className} inline-block px-4 py-1.5 text-xs font-bold text-neutral-900 dark:text-white bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-full border border-neutral-300 dark:border-neutral-700 uppercase tracking-widest`}>
                {post.date}
              </span>
              <div className={`h-[2px] flex-1 bg-neutral-300 dark:bg-neutral-700 transition-all duration-700 group-hover:bg-neutral-900 dark:group-hover:bg-white scale-x-[0.3] group-hover:scale-x-100 ${isEven ? 'origin-left' : 'origin-right'}`} />
            </div>
            
            <h3 className={`${syne.className} font-extrabold text-neutral-900 dark:text-white text-3xl md:text-5xl lg:text-5xl tracking-tighter leading-[0.95] transition-transform duration-700 group-hover:-translate-y-2 ${!isEven ? 'md:text-right' : ''}`}>
              {post.title}
            </h3>
            
            <p className={`${spaceMono.className} text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors duration-500 ${!isEven ? 'md:ml-auto md:text-right' : ''}`}>
              {post.excerpt}
            </p>

            <div className={`inline-flex items-center gap-3 mt-4 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white ${spaceMono.className} ${!isEven ? 'w-full md:justify-end' : ''}`}>
               {isEven ? 'Read Transmission' : ''} 
               <motion.span 
                 className="inline-block" 
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 animate={{ x: [0, 8, 0] }}
               >
                 {isEven ? '→' : '←'}
               </motion.span>
               {!isEven && ' Read Transmission'}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

