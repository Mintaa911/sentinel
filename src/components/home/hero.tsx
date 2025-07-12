import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[350px] md:min-h-[400px] bg-transparent rounded-xl md:rounded-2xl overflow-hidden flex items-stretch shadow-xl">
            {/* Background image */}
            <Image
                src="/assets/landing-hero.png"
                alt="Glycomics Hero"
                fill
                className="object-cover object-center z-0"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2f]/100 via-[#0a1a2f]/90 to-transparent sm:bg-gradient-to-r sm:from-[#0a1a2f]/90 sm:via-[#0a1a2f]/70 sm:to-transparent z-10" />
            {/* Content */}
            <div className="relative z-20 flex flex-col justify-start sm:justify-center h-full px-4 sm:pl-6 md:pl-8 pr-4 pt-8 sm:py-6 md:py-8 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                <h1 className="text-white text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                    Pioneering Precision<br />in Glycomics
                </h1>
                <p className="text-white text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-full sm:max-w-xl">
                    Isotopically labeled N-glycans for confident, reproducible analysis in proteomics, glycomics, and biopharma.
                </p>
                <Button className="bg-white text-[#0a1a2f] font-medium px-4 sm:px-6 py-2 rounded-md w-fit text-sm sm:text-base">
                    Learn more
                </Button>
            </div>
            {/* Watermark */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-30 bg-black/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-white text-sm sm:text-base md:text-lg font-semibold flex flex-col items-start">
                <span className="text-sm sm:text-base font-bold">iStock</span>
                <span className="text-xs font-normal">Credit: Svisio</span>
            </div>
        </section>  
    )
}