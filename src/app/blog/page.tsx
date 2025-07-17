'use client'

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
import { client } from "@/lib/sanity/client";
import { postsQuery, postsCountQuery } from "@/lib/sanity/queries/post";
import type { BlogPost } from "@/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 16;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const start = (currentPage - 1) * postsPerPage;
      const end = start + postsPerPage;
      
      try {
        const [postsData, totalCount] = await Promise.all([
          client.fetch(postsQuery, { start, end }),
          client.fetch(postsCountQuery)
        ]);
        
        setPosts(postsData);
        setTotalPosts(totalCount);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (loading) {
    return (
      <main className="space-y-8 md:space-y-16">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading posts...</p>
          </div>
        </div>
      </main>
    );
  }

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
            priority
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
      
      {/* Pagination section */}
      {totalPages > 1 && (
        <section className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === 'ellipsis' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page as number);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      )}
    </main>
  )
}