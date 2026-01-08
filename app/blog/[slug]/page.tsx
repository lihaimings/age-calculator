import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

interface Props {
  params: { slug: string };
}

function getPost(slug: string) {
  const filepath = path.join(process.cwd(), "public/blog", `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  
  const content = fs.readFileSync(filepath, "utf-8");
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  
  let title = slug;
  let date = "";
  let body = content;

  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
    const dateMatch = frontmatter.match(/date:\s*"([^"]+)"/);
    if (titleMatch) title = titleMatch[1];
    if (dateMatch) date = dateMatch[1];
    body = content.replace(/^---\n[\s\S]*?\n---\n*/, "");
  }

  return { slug, title, date, body };
}

export function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "public/blog");
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".md"));
  return files.map(f => ({ slug: f.replace(".md", "") }));
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="text-indigo-600 inline-flex items-center gap-2 mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        {post.date && (
          <div className="flex items-center gap-2 text-gray-500 mb-8">
            <Calendar className="w-4 h-4" /> {post.date}
          </div>
        )}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: formatMarkdown(post.body) }} />
      </div>
    </article>
  );
}

function formatMarkdown(md: string): string {
  return md
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^- (.*$)/gm, "<li>$1</li>");
}
