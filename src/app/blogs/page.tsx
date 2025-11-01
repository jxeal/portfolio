import { allBlogs, BlogPostMetadata } from "@/data/BlogDetails"; // Adjust path as needed
import BlogCard from "@/components/BlogCard"; // Import the card component

export const metadata = {
  title: "Blogs - Sayak Majumder",
};

export default function BlogsIndexPage() {
  return (
    <section>
      <h1 className="text-2xl md:text-3xl pl-1 font-bold text-gray-900 dark:text-white">
        My Online Corner
      </h1>
      <div className="text-base pt-4 pl-1">
        Occasional brain dumps from things I build, break, and learn. <br />
        Will include a lot of yapping. Beware!
      </div>
      <div className="space-y-8 mt-6">
        {allBlogs.map((blog: BlogPostMetadata) => (
          <BlogCard key={blog.slug} post={blog} />
        ))}
      </div>
    </section>
  );
}
