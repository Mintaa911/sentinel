import { Button } from "../ui/button";

export default function CTA() {
    return (
        <section className="w-full bg-[#04313C] rounded-xl md:rounded-2xl flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 mb-12 md:mb-16 lg:mb-24 px-4 md:px-8">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 max-w-3xl">
                Ready to integrate high-quality glycans into your research?
            </h2>
            <p className="text-[#D1E6E6] text-sm md:text-base lg:text-lg text-center mb-6 md:mb-8 lg:mb-10 max-w-2xl">
                Whether you&apos;re looking to explore available compounds or discuss a custom synthesis project – we&apos;re happy to help!
            </p>
            <Button className="bg-white text-[#0C4A53] font-medium px-6 md:px-8 py-2 md:py-3 rounded-md w-fit text-base md:text-lg">
                Contact us
            </Button>
        </section>
    )
}