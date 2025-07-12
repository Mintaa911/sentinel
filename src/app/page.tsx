
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Product from "@/components/home/product";
import Process from "@/components/home/process";
import Stats from "@/components/home/stats";
import Founder from "@/components/home/founder";
import Testimonial from "@/components/home/testimonial";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-12 md:gap-24">
      <Hero />
      <About />
      <Product />
      <Process />
      <Stats />
      <Founder />
      <Testimonial />
      <CTA />
    </main>
  );
}
