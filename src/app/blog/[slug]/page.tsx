'use client'

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useParams } from "next/navigation";
import { client } from "@/lib/sanity/client";
import { postBySlugQuery, postsQuery } from "@/lib/sanity/queries/post";
import { useState, useEffect } from "react";
import BlogSuggestion from "@/components/blog/BlogSuggestion";
import BlogContent from "@/components/blog/blogContent";
import type { BlogPost } from "@/types";

export default function BlogPost() {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [blogSuggestion, setBlogSuggestion] = useState<BlogPost[]>([])
    const { slug } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const post = await client.fetch(postBySlugQuery, { slug })
            setPost(post)
        }
        fetchPost()
    }, [slug])

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await client.fetch(postsQuery, { start: 0, end: 4 })
            setBlogSuggestion(posts)
        }
        fetchPosts()
    }, [])

    const formatDate = (date: string) => {
        if (!date) return ''
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className="space-y-8 md:space-y-16">
            <div className="flex items-center gap-2">
                <span className="text-gray-600">Blog</span>
                <span className="text-[#178CA4] font-semibold">/</span>
                <span className="text-[#178CA4] font-semibold">Article</span>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <Badge className="bg-[#D8F3F6] text-black  px-4 py-2 rounded-full mb-6 w-fit">Category</Badge>
                    <Badge className="bg-gray-200 text-black  px-4 py-2 rounded-full mb-6 w-fit">15 min</Badge>
                </div>
                <div className="space-y-8">
                    <h1 className="w-[80%] text-2xl md:text-6xl font-semibold ">
                        {post?.title}
                    </h1>
                    <p className="text-sm text-muted-foreground">{formatDate(post?.publishedAt || '')}</p>
                </div>
            </div>
            {post?.mainImage && (
                <div className="relative width-[100%] h-[400px] md:h-[600px]">
                    <Image
                        src={post.mainImage}
                        alt="Example"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            )}

            <div className="space-y-4 md:space-y-8">
                {post && <BlogContent content={post.body} />}
            </div>

            <section className="space-y-4 md:space-y-8">
                <p className="text-2xl md:text-3xl font-semibold">More Blog Posts</p>
                <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
                    {blogSuggestion.map((post, i) => (
                        <BlogSuggestion key={i} post={post} />
                    ))}
                </div>
            </section>
        </div>
    );
}  