"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white w-full container mx-auto flex items-center justify-between py-2 px-4 md:py-4 md:px-0">
            <div className="flex items-center gap-2 md:gap-3">
                <Image 
                    src="/assets/Sentinel_logo.png" 
                    alt="Sentinel Standards Logo" 
                    width={100} 
                    height={26} 
                    className="md:w-[120px] md:h-[32px]"
                    priority 
                />
                <span className="sr-only">Sentinel Standards</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
                <a href="#about" className="text-[#0a1a2f] text-sm lg:text-base font-medium hover:underline">About</a>
                <a href="#products" className="text-[#0a1a2f] text-sm lg:text-base font-medium hover:underline">Products</a>
                <a href="#blog" className="text-[#0a1a2f] text-sm lg:text-base font-medium hover:underline">Blog</a>
                <a href="#contact" className="text-[#0a1a2f] text-sm lg:text-base font-medium hover:underline">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-[#0a1a2f] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                    <span className={`block w-5 h-0.5 bg-[#0a1a2f] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-5 h-0.5 bg-[#0a1a2f] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
                    <div className="flex flex-col py-4 px-4 space-y-4">
                        <a 
                            href="#about" 
                            className="text-[#0a1a2f] text-base font-medium hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a 
                            href="#products" 
                            className="text-[#0a1a2f] text-base font-medium hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Products
                        </a>
                        <a 
                            href="#blog" 
                            className="text-[#0a1a2f] text-base font-medium hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </a>
                        <a 
                            href="#contact" 
                            className="text-[#0a1a2f] text-base font-medium hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}