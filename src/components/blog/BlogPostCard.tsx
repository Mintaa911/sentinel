"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/types";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  const router = useRouter();

  const categoryTitle = post.categories?.[0]?.title || "Uncategorized";
  const excerpt = post.excerpt || "Read the full article.";
  const readingTime = Math.ceil(post.body.length / 5);

  return (
    <div className="">
      <div className="relative w-full h-[200px] md:h-[250px]">
        <Image
          src={post.mainImage}
          alt={`Cover image for ${post.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded"
          priority
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-white text-[#07343C] px-3 py-1 rounded-full">
            {categoryTitle}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className="bg-white text-[#07343C] px-3 py-1 rounded-full">
            {readingTime} min
          </Badge>
        </div>
      </div>
      <div className="pt-4 pb-2 ">
        <h3 className="font-semibold text-lg mb-1 text-[#07343C]">{post.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{excerpt}</p>
        <Button
          variant="link"
          className="p-0 h-auto text-[#178CA4] text-sm"
          onClick={() => router.push(`/blog/${post.slug}`)}
        >
          Read more
        </Button>
      </div>
    </div>
  );
} 