"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogPostCard() {
  const router = useRouter();
  return (
    <div className="">
      <div className="relative w-full">
        <Image
          src="/assets/blog-cover.png"
          alt="Blog post cover"
          width={400}
          height={400}
          className="object-cover w-full h-full"
          
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-white text-[#07343C] px-3 py-1 rounded-full">Category</Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className="bg-white text-[#07343C] px-3 py-1 rounded-full">10 min</Badge>
        </div>
      </div>
      <div className="pt-4 pb-2 ">
        <h3 className="font-semibold text-lg mb-1 text-[#07343C]">Blog title heading will go here</h3>
        <p className="text-sm text-muted-foreground mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...</p>
        <Button variant="link" className="p-0 h-auto text-[#178CA4] text-sm" onClick={() => router.push('/blog/1')}>Read more</Button>
      </div>
    </div>
  );
} 