import { notFound } from "next/navigation";
import { allBlogs } from "@/data/BlogDetails";
import ShareButton from "@/components/ShareButton";

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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          <p className="text-md text-gray-900 dark:text-white">{post.date}</p>
        </div>

        <ShareButton title={post.title} slug={post.slug} />
      </div>

      <div className="border-b pb-4 mb-8"></div>

      <div className="text-lg leading-relaxed space-y-6 text-justify">
        {post.content}
      </div>
    </article>
  );
}
