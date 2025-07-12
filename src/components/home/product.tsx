import { Button } from "../ui/button";
import Image from "next/image";

export default function Product() {
    return (
        <section className="" id="products">
            <div className="flex flex-col lg:flex-row justify-between mb-6 md:mb-8 gap-6 lg:gap-0">
                {/* Left: Title */}
                <div className="w-full lg:w-[50%] flex flex-col justify-start">
                    <span className="text-[#0077A3] text-base md:text-lg font-medium mb-4 md:mb-8 block">Our Product</span>
                    <h2 className="text-[#181F1C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 pr-24">
                        N-Glycan Standards for Confident Research
                    </h2>
                </div>
                {/* Right: Description and Button */}
                <div className="w-full lg:w-[50%] flex flex-col justify-center gap-6 md:gap-8">
                    <p className="text-[#181F1C] text-sm md:text-base mb-4 md:mb-6">
                        Our flagship product is a library of high-purity, isotopically labeled N-glycans designed to be employed as internal standards for glycomic and proteomic analyses. Library members are individually packaged in a high-recovery, 1.5 mL glass vial containing 10 ug of material for seamless incorporation into the end-user's experimental workflow.
                    </p>
                    <Button 
                        variant="outline" 
                        className="border-[#009FE3] text-[#009FE3] hover:bg-[#009FE3]/10 w-fit px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium"
                    >
                        See details
                    </Button>
                </div>
            </div>
            {/* Product Image */}
            <div className="w-full rounded-t-xl md:rounded-t-2xl overflow-hidden">
                <Image 
                    src="/assets/landing-product.png" 
                    alt="Glycan Membrane" 
                    width={1600} 
                    height={600} 
                    className="w-full h-auto object-cover" 
                />
            </div>
        </section> 
    )
}