"use client"

import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Quote } from "lucide-react";

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    
    const testimonials = [
        {
            name: "John Doe",
            position: "CEO",
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            name: "Jane Smith",
            position: "CTO",
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            name: "Jim Beam",
            position: "CFO",
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            name: "John Doe",
            position: "CEO",
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            name: "Jane Smith",
            position: "CTO",
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            name: "Jim Beam",
            position: "CFO",
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Function to get initials from name
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // Calculate translateX based on screen size and current index
    useEffect(() => {
        const updateTranslateX = () => {
            const width = window.innerWidth;
            let percentage;
            if (width < 640) {
                percentage = 100; // Mobile: full width
            } else if (width < 1024) {
                percentage = 50; // Tablet: half width
            } else {
                percentage = 40; // Desktop: 40% width
            }
            setTranslateX(currentIndex * percentage);
        };

        updateTranslateX();
        window.addEventListener('resize', updateTranslateX);
        
        return () => window.removeEventListener('resize', updateTranslateX);
    }, [currentIndex]);

    return (
        <section className="w-full space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4 sm:gap-0">
                <h2 className="text-[#222] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Testimonials</h2>
                <div className="hidden md:flex gap-2">
                    <button 
                        className="w-8 h-8 md:w-10 md:h-10 rounded border border-[#009FE3] flex items-center justify-center text-[#009FE3] hover:bg-[#009FE3]/10 transition-colors" 
                        onClick={handlePrevious}
                        aria-label="Previous testimonial"
                    >
                        <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" stroke="#009FE3" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        className="w-8 h-8 md:w-10 md:h-10 rounded border border-[#009FE3] flex items-center justify-center text-[#009FE3] hover:bg-[#009FE3]/10 transition-colors" 
                        onClick={handleNext}
                        aria-label="Next testimonial"
                    >
                        <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" stroke="#009FE3" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${translateX}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full sm:w-[50%] lg:w-[40%] flex-shrink-0 px-2">
                            <Card className="rounded-xl md:rounded-2xl h-full">
                                <CardContent className="p-4 md:p-6 lg:p-8 flex flex-col h-full">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#009FE3] flex items-center justify-center mb-4 md:mb-6">
                                        <Quote className="w-4 h-4 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <p className="text-[#444] text-sm md:text-base mb-6 md:mb-8">{testimonial.quote}</p>
                                    <div className="flex items-center gap-3 md:gap-4 mt-auto">
                                        <Avatar className="w-10 h-10 md:w-12 md:h-12">
                                            <AvatarImage src="" alt={testimonial.name} />
                                            <AvatarFallback className="bg-[#ececec] text-[#666] font-semibold text-sm md:text-base">
                                                {getInitials(testimonial.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <span className="block font-semibold text-base md:text-lg">{testimonial.name}</span>
                                            <span className="block text-xs md:text-sm text-[#888]">{testimonial.position}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:hidden flex gap-4">
                <button
                    className="w-8 h-8 md:w-10 md:h-10 rounded border border-[#009FE3] flex items-center justify-center text-[#009FE3] hover:bg-[#009FE3]/10 transition-colors"
                    onClick={handlePrevious}
                    aria-label="Previous testimonial"
                >
                    <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" stroke="#009FE3" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="w-8 h-8 md:w-10 md:h-10 rounded border border-[#009FE3] flex items-center justify-center text-[#009FE3] hover:bg-[#009FE3]/10 transition-colors"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                >
                    <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" stroke="#009FE3" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

        </section>
    )
}