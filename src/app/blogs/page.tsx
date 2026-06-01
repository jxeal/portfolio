import { allBlogs, BlogPostMetadata } from "@/data/BlogDetails";
import BlogCard from "@/components/BlogCard";
import { Syne, Space_Mono } from "next/font/google";

export const metadata = {
  title: "Blogs - Sayak Majumder",
};

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function BlogsIndexPage() {
  return (
    <section className="relative min-h-[80vh] py-8 md:py- overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-blue-600/20 dark:bg-purple-600/20 blur-[100px] animate-pulse" />
        <div className="absolute top-[30%] -right-[15%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full bg-emerald-600/10 dark:bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 md:mb-24">
            <h1 className={`${syne.className} text-5xl md:text-[5rem] lg:text-[5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-neutral-500 tracking-tighter uppercase mb-6 md:mb-8 leading-[0.85]`}>
              THE ARCHIVE.
            </h1>
            <p className={`${spaceMono.className} text-neutral-600 dark:text-neutral-400 text-xs md:text-sm lg:text-sm mb-12 max-w-2xl border-l-4 border-neutral-900 dark:border-white pl-6 md:pl-8 uppercase tracking-widest leading-relaxed`}>
              Occasional brain dumps from things I build, break, and learn. <br/>
              Will include a lot of yapping. <span className="font-bold text-red-600 dark:text-red-600 animate-pulse">Beware!</span>
            </p>
        </div>
        
        <div className="flex flex-col gap-16 md:gap-24">
          {allBlogs.map((blog: BlogPostMetadata, index: number) => (
            <BlogCard key={blog.slug} post={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
