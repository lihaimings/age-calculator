import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "getting-started",
    title: "Getting Started with Age Calculator",
    excerpt: "Learn how to use Age Calculator effectively with this comprehensive guide.",
    date: "2024-01-15",
  },
];

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Blog</h1>
        <p className="text-gray-600 text-center mb-12">Tips, guides, and updates about Age Calculator</p>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-indigo-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
