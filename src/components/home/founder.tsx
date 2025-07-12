import { Button } from "../ui/button";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 md:gap-8">
      <div className="lg:hidden">
        <span className="text-base md:text-lg font-medium mb-3 md:mb-4 block">Meet the Founder</span>
        <h2 className="text-[#181F1C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 md:mb-8">
          Dr. Anthony Prudden
        </h2>
      </div>
      {/* Image - shown first on mobile */}
      <div className="rounded-xl md:rounded-2xl overflow-hidden flex items-center lg:justify-end order-1 lg:order-2">
        <Image
          src="/assets/founder.png"
          alt="Dr. Anthony Prudden"
          width={420}
          height={400}
          className="object-cover w-full max-w-md lg:max-w-none"
        />
      </div>

      {/* Left: Text */}
      <div className="w-full lg:w-[75%] flex flex-col justify-between gap-6 md:gap-0 order-2 lg:order-1">
        <div className="hidden lg:block">
          <span className="text-base md:text-lg font-medium mb-3 md:mb-4 block">Meet the Founder</span>
          <h2 className="text-[#181F1C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 md:mb-8">
            Dr. Anthony Prudden
          </h2>
        </div>
        <div>
          <p className="text-[#444] text-sm md:text-lg mb-6 md:mb-8">
            Dr. Anthony Prudden is a synthetic carbohydrate chemist who earned his PhD under the supervision of Geert-Jan Boons from the University of Georgia. His graduate work focused on the creation of the largest collection of synthetic human milk oligosaccharides. After graduating, Anthony pioneered methodologies for producing complex symmetric and asymmetric N-linked glycans of exceptional purity. His current synthetic efforts focus on the development of carbohydrate-based tools and reagents to advance research in glycomics and proteomics.
          </p>
          <Button
            variant="outline"
            className="border-[#009FE3] text-[#009FE3] hover:bg-[#009FE3]/10 w-fit px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium"
          >
            Discover more
          </Button>
        </div>
      </div>
    </section>
  )
}