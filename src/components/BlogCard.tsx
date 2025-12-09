import Link from "next/link";
import { BlogPostMetadata } from "@/data/BlogDetails";

interface BlogCardProps {
  post: BlogPostMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group block p-6 border border-gray-200 rounded-lg transition duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 "
    >
      <h3 className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
        {post.date}
      </p>
      <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
      {/* <span className="mt-3 inline-block text-sm font-medium text-blue-600 dark:text-blue-400">
        Read More &rarr;
      </span> */}
    </Link>
  );
}
