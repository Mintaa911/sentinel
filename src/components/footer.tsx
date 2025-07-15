import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="relative bottom-0  mt-16 w-full bg-[#181F1C] text-white pt-10 md:pt-12 pb-6 px-4 md:px-0">
      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start pb-6 md:pb-8">
        {/* Logo */}
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/assets/Sentinel_logo.png"
              alt="Sentinel Standards Logo"
              width={32}
              height={32}
              className="md:w-10 md:h-10"
            />
            <span className="font-bold text-base md:text-lg tracking-tight">SENTINEL<br />STANDARDS</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm md:text-base mb-2">LINKS</span>
          <a href="#" className="text-white/80 hover:underline text-sm md:text-base">Home</a>
          <a href="#" className="text-white/80 hover:underline text-sm md:text-base">About Founder</a>
          <a href="#" className="text-white/80 hover:underline text-sm md:text-base">About the Company</a>
          <a href="#" className="text-white/80 hover:underline text-sm md:text-base">Contact</a>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm md:text-base mb-2">PRODUCTS</span>
          <a href="#" className="text-white/80 hover:underline text-sm md:text-base">N-Glycans</a>
        </div>

        {/* Subscribe */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm md:text-base mb-2">Subscribe to stay in touch</span>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base"
            />
            <Button
              type="submit"
              variant="outline"
              className="border-[#009FE3] text-[#009FE3] hover:bg-[#009FE3]/10 px-4 md:px-6 py-2 text-sm md:text-base"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <hr className="border-t border-white/10 my-4 md:my-6" />

      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-2 text-xs md:text-sm text-white/80 px-2">
        <span>© 2025 Sentinel Standarts. All rights reserved.</span>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}