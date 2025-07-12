import { Button } from "../ui/button";

export default function About() {
    return (
        <section className="flex flex-col lg:flex-row justify-between my-6 md:my-8 gap-6 lg:gap-0">
            {/* Left column */}
            <div className="w-full lg:w-[50%] flex flex-col justify-between pt-2">
                <span className="text-[#0077A3] text-base md:text-lg font-medium mb-4 md:mb-8 block">About Us</span>
                <span className="text-[#444] text-xl md:text-2xl font-normal">Suporting scientists in<br />glycomics and proteomics</span>
            </div>
            {/* Right column */}
            <div className="w-full lg:w-[50%] flex flex-col justify-center gap-6 md:gap-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-full lg:w-[90%] leading-tight mb-6 md:mb-8">
                    Sentinel Standards provides high-purity, isotopically labeled N-glycan reference material to support glycomics and proteomics research.
                </h2>
                <Button 
                    variant="outline" 
                    className="border-[#009FE3] text-[#009FE3] hover:bg-[#009FE3]/10 w-fit px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium"
                >
                    Learn more
                </Button>
            </div>
        </section>
    )
}