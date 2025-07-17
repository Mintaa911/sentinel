
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries/post";
import type { BlogPost } from "@/types";

export const metadata: Metadata = {
	title: "Blog",
	description: "Read our latest blog posts about Sentinel Standards and the latest in glycomics and proteomics.",
}

export default async function Blog() {
  const posts = await client.fetch(postsQuery, {start: 0, end: 20})
  
  return (
    <main className="space-y-8 md:space-y-16">

      <section className="flex flex-col md:flex-row justify-between bg-[#07343C] rounded-lg border-0 shadow-none">
        <div className="md:w-[40%] flex flex-col justify-between p-8 text-white order-2 md:order-1">
          <div>
            <Badge className=" bg-white text-[#07343C] px-4 py-2 rounded-full mb-6 w-fit">Category</Badge>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Blog title heading goes here<br />long text</h1>
          </div>
          <div>
            <p className="mb-8 text-base md:text-lg text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim ips...</p>
            <Button variant="outline" className="bg-transparent text-[#178CA4] border border-[#178CA4]">Read more</Button>

          </div>
        </div>
        {/* Right: Image */}
        <div className="md:w-[60%] justify-self-end order-1 md:order-2">
          <Image
            src="/assets/blog-hero.png"
            alt="Blog hero"
            width={1000}
            height={1000}
            className="w-full rounded-t-lg md:rounded-t-none md:rounded-r-lg"
          />
        </div>
      </section>

      {/* Blog grid section */}
      <section className="space-y-4 md:space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold">Recent blog posts</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4">
            <Input placeholder="Search" className="w-64" />
            <Select>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
                <SelectItem value="lab-life">Lab Life</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: BlogPost) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}