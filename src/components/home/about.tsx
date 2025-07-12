import { Button } from "../ui/button";

export default function About() {
    return (
        <section className="flex justify-between my-8">
            {/* Left column */}
            <div className="w-[30%] flex flex-col justify-between pt-2">
                <span className="text-[#0077A3] text-lg font-medium mb-8 block">About Us</span>
                <span className="text-[#444] text-2xl font-normal">Suporting scientists in<br />glycomics and proteomics</span>
            </div>
            {/* Right column */}
            <div className="w-[70%] flex flex-col justify-center gap-8">
                <h2 className="text-5xl w-[80%] leading-tight mb-8">Sentinel Standards provides high-purity, isotopically labeled N-glycan reference material to support glycomics and proteomics research.</h2>
                <Button variant="outline" className="border-[#009FE3] text-[#009FE3] hover:bg-[#009FE3]/10 w-fit px-8 py-3 text-lg font-medium">Learn more</Button>
            </div>
        </section>
    )
}