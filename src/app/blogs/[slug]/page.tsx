import { notFound } from "next/navigation";
import { allBlogs } from "@/data/BlogDetails";
import ShareButton from "@/components/ShareButton";
import { Syne, Space_Mono } from "next/font/google";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: `${slug} - Sayak Majumder` };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allBlogs.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="relative min-h-screen pb-12 md:pb-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[5%] -right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-blue-600/10 dark:bg-purple-600/10 blur-[100px]" />
        <div className="absolute top-[40%] -left-[15%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full bg-emerald-600/5 dark:bg-emerald-500/5 blur-[120px]" />
        
        <div 
           className={`absolute top-[10%] text-[10vw] font-black text-neutral-500 opacity-[0.03] select-none whitespace-nowrap -rotate-6 ${syne.className}`}
        >
          {post.title.toUpperCase()}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        <Link 
          href="/blogs"
          className={`${spaceMono.className} inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-2 md:mb-4`}
        >
           ← Back to Online Corner
        </Link>
        
        <div className="mb-10 md:mb-16">
          <div className="flex items-center justify-between gap-4 mb-6 md:mb-8 border-b border-neutral-200/50 dark:border-white pb-6">
            <div className="flex items-center gap-4">
              <span className={`${spaceMono.className} inline-block px-4 py-1.5 text-xs font-bold text-neutral-900 dark:text-white bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-full border border-neutral-300 dark:border-neutral-700 uppercase tracking-widest`}>
                {post.date}
              </span>
            </div>
            <ShareButton title={post.title} slug={post.slug} />
          </div>

          <h1 className={`${syne.className} text-4xl md:text-6xl  font-black text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-neutral-500 tracking-tighter leading-[0.95] md:leading-[0.85] mb-6 md:mb-8`}>
            {post.title}
          </h1>
          
          <p className={`${spaceMono.className} text-neutral-600 dark:text-neutral-400 text-base md:text-lg  mb-8 border-l-4 border-neutral-900 dark:border-white pl-4 md:pl-6 leading-relaxed max-w-3xl`}>
            {post.excerpt}
          </p>
        </div>

        <div className={`prose dark:prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-['Syne'] prose-headings:tracking-tight prose-headings:font-bold prose-img:rounded-3xl hover:prose-a:text-blue-500 ${spaceMono.className}`}>
          {post.content}
        </div>
      </div>
    </article>
  );
}
