import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white w-full container mx-auto flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
                <Image src="/assets/Sentinel_logo.png" alt="Sentinel Standards Logo" width={120} height={32} priority />
                <span className="sr-only">Sentinel Standards</span>
            </div>
            <div className="flex items-center gap-12">
                <a href="#about" className="text-[#0a1a2f] text-base font-medium hover:underline">About</a>
                <a href="#products" className="text-[#0a1a2f] text-base font-medium hover:underline">Products</a>
                <a href="#blog" className="text-[#0a1a2f] text-base font-medium hover:underline">Blog</a>
                <a href="#contact" className="text-[#0a1a2f] text-base font-medium hover:underline">Contact</a>
            </div>
        </nav>
    )
}