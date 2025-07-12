import { Button } from "./button";
import Image from "next/image";
import { Input } from "./input";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181F1C] text-white pt-12 pb-6 px-0">
    <div className="w-full container mx-auto grid grid-cols-4 gap-8 items-start pb-8">
      {/* Logo */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/assets/Sentinel_logo.png" alt="Sentinel Standards Logo" width={40} height={40} />
          <span className="font-bold text-lg tracking-tight">SENTINEL<br/>STANDARDS</span>
        </div>
      </div>
      {/* Links */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-base mb-2">LINKS</span>
        <a href="#" className="text-white/80 hover:underline">Home</a>
        <a href="#" className="text-white/80 hover:underline">About Founder</a>
        <a href="#" className="text-white/80 hover:underline">About the Company</a>
        <a href="#" className="text-white/80 hover:underline">Contact</a>
      </div>
      {/* Products */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-base mb-2">PRODUCTS</span>
        <a href="#" className="text-white/80 hover:underline">N-Glycans</a>
      </div>
      {/* Subscribe */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-base mb-2">Subscribe to stay in touch</span>
        <form className="flex gap-2">
          <Input type="email" placeholder="Enter your email" className="bg-white text-black px-4 py-2 rounded" />
          <Button type="submit" variant="outline" className="border-[#009FE3] text-[#009FE3] hover:bg-[#009FE3]/10 px-6">Subscribe</Button>
        </form>
      </div>
    </div>
    <hr className="border-t border-white/10 my-6" />
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white/80 px-2">
      <span>© 2025 Sentinel Standarts. All rights reserved.</span>
      <div className="flex gap-6">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Cookies Settings</a>
      </div>
    </div>
  </footer> 
  );
}