import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative  h-[70vh] min-h-[400px] bg-transparent rounded-2xl overflow-hidden flex items-stretch shadow-xl">
            {/* Background image */}
            <Image
                src="/assets/landing-hero.png"
                alt="Glycomics Hero"
                fill
                className="object-cover object-center z-0"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f]/90 via-[#0a1a2f]/70 to-transparent z-10" />
            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center h-full pl-8 pr-4 py-8 max-w-[60%]">
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">Pioneering Precision<br />in Glycomics</h1>
                <p className="text-white text-lg mb-8 max-w-xl">Isotopically labeled N-glycans for confident, reproducible analysis in proteomics, glycomics, and biopharma.</p>
                <Button className="bg-white text-[#0a1a2f] font-medium px-6 py-2 rounded-md w-fit">Learn more</Button>
            </div>
            {/* Watermark */}
            <div className="absolute bottom-8 right-8 z-30 bg-black/40 px-4 py-2 rounded text-white text-lg font-semibold flex flex-col items-start">
                <span className="text-base font-bold">iStock</span>
                <span className="text-xs font-normal">Credit: Svisio</span>
            </div>
        </section>  
    )
}