'use client'

import { Badge } from "@/components/ui/badge";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export default function BlogPost() {
    const router = useRouter()
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h1>
                    <p className="text-sm text-muted-foreground">Jun 23, 2025</p>
                </div>
            </div>
            <div className="relative width-[100%] h-[400px] md:h-[600px]">
                <Image
                    src="/assets/article-cover.png"
                    alt="Example"
                    fill
                    className="rounded-lg object-cover"
                />
            </div>

            <div className="space-y-4">
                <p className="md:w-[70%] md:text-4xl font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className="text-gray-400">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="space-y-4">
                <p className="md:w-[70%] md:text-4xl font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div className="relative width-[100%] h-[200px] md:h-[400px]">
                    <Image
                        src="/assets/article-cover.png"
                        alt="Example"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className="text-gray-400">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="space-y-4">
                <p className="md:w-[70%] md:text-4xl font-semibold">Lorem Ipsum is simply dummy text of the printing</p>
                <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="space-y-4">
                <p className="md:w-[70%] md:text-4xl font-semibold">Subtitle goes here</p>
                <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="space-y-4">
                <p className="md:w-[70%] md:text-4xl font-semibold">Subtitle goes here</p>
                <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="space-y-4">
                <p className="md:w-[70%] md:text-4xl font-semibold">Subtitle goes here</p>
                <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <section className="w-full bg-[#D8F3F6] rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-4 py-6 md:py-16 px-4 md:px-8">
                <QuoteIcon className="text-[#0C7792] opacity-50 w-12 h-12" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 max-w-3xl">
                    Providing high-quality research products will help scientists answer difficult questions.
                </h2>
                <p className="text-gray-500 font-light text-lg">
                    Dr. Anthony Prudden
                </p>
            </section>
            <section className="relative">
                <div className="relative w-full h-[400px] md:h-[600px]">
                    <Image
                        src="/assets/article-cover.png"
                        alt="Example"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Image src="/assets/triangle.png" width={24} height={24} alt="Play button" />
                </div>
            </section>
            <section className="space-y-4 md:space-y-4">
                <p className="text-2xl md:text-5xl md:w-[90%]">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <p>Our solutions include:</p>
                <ul className="list-[square] marker:text-[#178CA4] list-inside text-sm md:text-base">
                    <li>Lorem Ipsum is simply dummy text </li>
                    <li>Lorem Ipsum is simply dummy text </li>
                    <li>Lorem Ipsum is simply dummy text </li>
                    <li>Lorem Ipsum is simply dummy text </li>
                    <li>Lorem Ipsum is simply dummy text </li>
                </ul>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </section>
            <section className="space-y-4">
                <p className="text-2xl md:text-5xl">Conclusion</p>
                <p>
                    Cybersecurity is not about paranoia — it&apos;s about preparation. As your business grows, your digital exposure increases. Investing in protection today means avoiding costly consequences tomorrow.
                </p>
                <p>
                    Whether you&apos;re just starting your cybersecurity journey or looking to reinforce existing defenses, Dokutech provides the tools, expertise, and guidance to help you thrive in a digital-first world — safely and securely.

                </p>
            </section>
            <section className="space-y-4 md:space-y-8">
                <p className="text-2xl md:text-3xl font-semibold">More Blog Posts</p>
                <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-col lg:flex-row gap-4">
                            <div className="relative w-full h-[160px] md:h-[180px]">
                                <Image
                                    src="/assets/blog-cover.png"
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
                                <h3 className="font-semibold text-lg mb-1 text-[#07343C]">Blog title heading will go here</h3>
                                <p className="text-sm text-muted-foreground mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...</p>
                                <Button variant="link" className="p-0 h-auto text-[#178CA4] text-sm" onClick={() => router.push('/blog/1')}>Read more</Button>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div className="flex justify-center">
                    <Button variant="outline" className="bg-transparent text-[#178CA4] border border-[#178CA4]" onClick={() => router.push('/blog')}>View All</Button>
                </div>
            </section>
        </div>
    );
}  