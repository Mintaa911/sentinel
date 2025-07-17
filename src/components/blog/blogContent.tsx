import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import { urlFor } from "@/lib/sanity/client";
import type { BlogBody, BlogBodyChild } from "@/types";

export default function BlogContent({ content }: { content: BlogBody[] }) {

    return (
        <div>
            {content.length > 0 && content.map((item: BlogBody) => (
                <div key={item._key}>
                    {
                        item._type === "block" && item.style === "h2" && (
                            item.children?.map((child: BlogBodyChild) => {
                                return (
                                    <div key={child._key} className="my-4">
                                        <p className="md:w-[70%] md:text-4xl font-semibold">{child.text}</p>
                                    </div>
                                )
                            })
                        )
                    }
                    {
                        item._type === "quote" && (
                            <section className="w-full bg-[#D8F3F6] rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-4 py-6 md:py-16 px-4 md:px-8">
                                <QuoteIcon className="text-[#0C7792] opacity-50 w-12 h-12" />
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 max-w-3xl">
                                    {item.quote}
                                </h2>
                                <p className="text-gray-500 font-light text-lg">
                                    {item.author}
                                </p>
                            </section>
                        )
                    }
                    {
                        item._type === "block" && item.style === "normal" && (
                            item.children?.map((child: BlogBodyChild) => {
                                if (item?.listItem && (item?.listItem === 'bullet')) {
                                    return (
                                        <ul key={child._key} className="list-[square] marker:text-[#178CA4] list-inside text-sm md:text-base">
                                            <li>{child.text}</li>
                                        </ul>
                                    )
                                }
                                return (
                                    <div key={child._key} className="my-4">
                                        <p className="text-gray-600">{child.text}</p>
                                    </div>
                                )
                            })
                        )
                    }
                    {
                        item._type === "image" && (
                            <div className="relative width-[100%] h-[200px] md:h-[400px] my-4">
                                <Image
                                    src={urlFor(item.asset._ref).url()}
                                    alt="image"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        )
                    }
                </div>
            ))}

        </div>
    )
}