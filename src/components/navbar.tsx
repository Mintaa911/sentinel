"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Memoize submenu data to prevent unnecessary re-renders
    const aboutSubMenu = useMemo(() => [
        { name: "About Sentinel Standards", href: "/about/about-sentinel-standards" },
        { name: "About Dr. Anthony Prudden", href: "/about/about-dr-anthony-prudden" },
    ], []);

    const productsSubMenu = useMemo(() => [
        { name: "N-Glycans", href: "/products/n-glycans" },
    ], []);

    // Optimized event handlers using useCallback
    const handleDropdownToggle = useCallback((dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }, [activeDropdown]);

    const handleDropdownEnter = useCallback((dropdown: string) => {
        setActiveDropdown(dropdown);
    }, []);

    const handleDropdownLeave = useCallback(() => {
        setActiveDropdown(null);
    }, []);

    const handleMenuToggle = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);

    const handleMenuClose = useCallback(() => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
            <nav className="container mx-auto flex items-center justify-between py-2 px-4 md:py-4 md:px-0">
                <div className="flex items-center gap-2 md:gap-3">
                    <Link href="/">
                        <Image
                            src="/assets/Sentinel_logo.png"
                            alt="Sentinel Standards Logo"
                            width={100}
                            height={26}
                            className="w-auto h-auto"
                            priority
                        />
                        <span className="sr-only">Sentinel Standards</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {/* About Section */}
                    <div className="relative">
                        <Button
                            variant="ghost"
                            className="text-[#0a1a2f] text-sm lg:text-base font-medium hover:underline hover:text-[#0C7792] p-0 h-auto"
                            onClick={() => handleDropdownToggle('about')}
                            onMouseEnter={() => handleDropdownEnter('about')}
                            aria-expanded={activeDropdown === 'about'}
                            aria-haspopup="true"
                        >
                            About
                        </Button>
                        {activeDropdown === 'about' && (
                            <div
                                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                                onMouseEnter={() => handleDropdownEnter('about')}
                                onMouseLeave={handleDropdownLeave}
                                role="menu"
                            >
                                {aboutSubMenu.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-[#0a1a2f] hover:bg-gray-100 transition-colors duration-200"
                                        onClick={handleMenuClose}
                                        role="menuitem"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Products Section */}
                    <div className="relative">
                        <Button
                            variant="ghost"
                            className="text-[#0a1a2f] text-sm lg:text-base font-medium hover:underline hover:text-[#0C7792] p-0 h-auto"
                            onClick={() => handleDropdownToggle('products')}
                            onMouseEnter={() => handleDropdownEnter('products')}
                            aria-expanded={activeDropdown === 'products'}
                            aria-haspopup="true"
                        >
                            Products
                        </Button>
                        {activeDropdown === 'products' && (
                            <div
                                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                                onMouseEnter={() => handleDropdownEnter('products')}
                                onMouseLeave={handleDropdownLeave}
                                role="menu"
                            >
                                {productsSubMenu.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-[#0a1a2f] hover:bg-gray-100 transition-colors duration-200"
                                        onClick={handleMenuClose}
                                        role="menuitem"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/blog" className="text-[#0a1a2f] text-sm lg:text-base font-medium hover:underline hover:text-[#0C7792]">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-[#0a1a2f] text-sm lg:text-base font-medium hover:underline hover:text-[#0C7792]">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={handleMenuToggle}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span className={`block w-5 h-0.5 bg-[#0a1a2f] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                        <span className={`block w-5 h-0.5 bg-[#0a1a2f] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-5 h-0.5 bg-[#0a1a2f] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
                    <div className="flex flex-col py-4 px-4 space-y-2">
                        <Link
                            href="/"
                            className="text-[#0a1a2f] text-base font-semibold"
                            onClick={handleMenuClose}
                        >
                            Home
                        </Link>
                        <Separator className="" />
                        {/* About Mobile Section */}
                        <div className="space-y-2">
                            <div
                                className="text-[#0a1a2f] text-base font-semibold p-0 h-auto flex justify-between w-full cursor-pointer"
                                onClick={() => handleDropdownToggle('about')}
                                role="button"
                                tabIndex={0}
                                aria-expanded={activeDropdown === 'about'}
                            >
                                About
                                {activeDropdown === 'about' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                            {activeDropdown === 'about' && (
                                <div className="space-y-2">
                                    {aboutSubMenu.map((item) => (
                                        <div key={item.name} className="space-y-2">
                                            <Separator />
                                            <Link
                                                href={item.href}
                                                className="block font-medium text-sm text-[#0a1a2f] ml-8"
                                                onClick={handleMenuClose}
                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Separator className="" />
                        {/* Products Mobile Section */}
                        <div className="space-y-2">
                            <div
                                className="text-[#0a1a2f] text-base font-semibold p-0 h-auto flex justify-between w-full cursor-pointer"
                                onClick={() => handleDropdownToggle('products')}
                                role="button"
                                tabIndex={0}
                                aria-expanded={activeDropdown === 'products'}
                            >
                                Products
                                {activeDropdown === 'products' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                            {activeDropdown === 'products' && (
                                <div className="space-y-2">
                                    {productsSubMenu.map((item) => (
                                        <div key={item.name} className="space-y-2">
                                            <Separator />
                                            <Link
                                                href={item.href}
                                                className="block font-medium text-sm text-[#0a1a2f] ml-8"
                                                onClick={handleMenuClose}
                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Separator className="" />
                        <Link
                            href="/blog"
                            className="text-[#0a1a2f] text-base font-semibold"
                            onClick={handleMenuClose}
                        >
                            Blog
                        </Link>
                        <Separator className="" />
                        <Link
                            href="/contact"
                            className="text-[#0a1a2f] text-base font-semibold"
                            onClick={handleMenuClose}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}