import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/types";

export default function BlogSuggestion({ post }: { post: BlogPost }) {
    const router = useRouter()
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative w-full h-[160px] md:h-[180px]">
                <Image
                    src={post.mainImage}
                    alt="Example"
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Badge className="bg-[#D8F3F6] text-black  px-4 py-2 rounded-full w-fit">Category</Badge>
                    <Badge className="bg-white text-black  px-4 py-2 rounded-full">5 min</Badge>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-[#07343C]">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-[#178CA4] text-sm" onClick={() => router.push(`/blog/${post.slug}`)}>Read more</Button>
            </div>
        </div>
    )
}