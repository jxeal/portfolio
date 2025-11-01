import { notFound } from "next/navigation";
import { allBlogs } from "@/data/BlogDetails";

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
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
        {post.title}
      </h1>

      <p className="text-md text-gray-900 dark:text-white border-b pb-4 mb-8">
        {post.date}
      </p>

      <div className="text-lg leading-relaxed space-y-6 text-justify">
        {post.content}
      </div>
    </article>
  );
}
