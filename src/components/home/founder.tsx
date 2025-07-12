import { Button } from "../ui/button";
import Image from "next/image";

export default function Founder() {
    return (
        <section className="w-full grid grid-cols-2 items-stretch gap-8">
        {/* Left: Text */}
        <div className="w-[75%] flex flex-col justify-between">
          <div className="">
            <span className=" text-lg font-medium mb-4 block">Meet the Founder</span>
            <h2 className="text-[#181F1C] text-5xl font-semibold leading-tight mb-8">Dr. Anthony Prudden</h2>
          </div>
          <div>
            <p className="text-[#444] text-lg mb-8">Dr. Anthony Prudden is a synthetic carbohydrate chemist who earned his PhD under the supervision of Geert-Jan Boons from the University of Georgia. His graduate work focused on the creation of the largest collection of synthetic human milk oligosaccharides. After graduating, Anthony pioneered methodologies for producing complex symmetric and asymmetric N-linked glycans of exceptional purity. His current synthetic efforts focus on the development of carbohydrate-based tools and reagents to advance research in glycomics and proteomics.</p>
            <Button variant="outline" className="border-[#009FE3] text-[#009FE3] hover:bg-[#009FE3]/10 w-fit px-8 py-3 text-lg font-medium">Discover more</Button>
          </div>
        </div>
      
        <div className=" rounded-2xl overflow-hidden flex items-center justify-end">
          <Image src="/assets/founder.png" alt="Dr. Anthony Prudden" width={420} height={400} className=" object-cover" />
        </div>
      </section>
    )
}