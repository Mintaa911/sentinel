import { Button } from "../ui/button";

export default function CTA() {
    return (
        <section className="w-full bg-[#04313C] rounded-2xl flex flex-col items-center justify-center py-24 mb-24">
            <h2 className="text-white text-4xl font-semibold text-center mb-6 max-w-3xl">Ready to integrate high-quality glycans into your research?</h2>
            <p className="text-[#D1E6E6] text-lg text-center mb-10 max-w-2xl">Whether you’re looking to explore available compounds or discuss a custom synthesis project – we’re happy to help!</p>
            <Button className="bg-white text-[#0C4A53] font-medium px-8 py-3 rounded-md w-fit text-lg">Contact us</Button>
        </section>
    )
}