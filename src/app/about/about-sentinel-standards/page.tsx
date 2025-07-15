import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CTA from "@/components/home/cta";
import Process from "@/components/home/process";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Sentinel Standards",
	description: "Sentinel Standards develops high-purity, isotopically labeled N-glycan reference material to support quantitative glycomics and proteomics research.",
}

export default function About() {
  const timeline = [
    {
      year: '2019',
      title: 'Sentinel Therapeutics, Inc established',
      desc: null,
    },
    {
      year: '2019',
      title: 'SBIR Grant Awarded – Phase I',
      desc: 'Phase I SBIR received to study human milk oligosaccharides as an anti-inflammatory agent.',
    },
    {
      year: '2020',
      title: 'Second SBIR Grant - Phase I',
      desc: 'Phase I SBIR received to develop a library of isotopically labeled N-glycan standards.',
    },
    {
      year: '2024',
      title: 'Sentinel Standards officially launched',
      desc: 'Sentinel Standards organized as a business line of Sentinel Therapeutics with the expressed goal of commercializing N-glycan reference material.',
    },
    {
      year: '2024',
      title: 'Strategic Partnership Formed',
      desc: 'Sentinel Standards establishes joint venture agreement with Omicron Biochemicals for distribution of isotopic library.',
    },
    {
      year: '2025',
      title: 'N-Glycan Product Launched',
      desc: null,
    },
  ]
  return (
    <div className="min-h-screen space-y-16">
      <div className="space-y-8 md:space-y-12">
        <div className="md:w-[60%] mx-auto flex flex-col items-center justify-center gap-3">
          <p className="text-center lg:text-lg text-[#0C7792]">About Sentinel Standards</p>
          <h1 className="text-3xl lg:text-6xl font-bold text-center leading-snug">Advancing Glycomics Through Precision Standards</h1>
          <p className="text-center lg:px-16 text-gray-500 font-light text-lg">Sentinel Standards develops high-purity, isotopically labeled N-glycan reference material to support quantitative glycomics and proteomics research.</p>
          <Button className="bg-[#0C7792] lg:py-6 lg:px-4 lg:text-lg">Contact Us</Button>
        </div>
        <div>
          <Image src="/assets/about1.png" alt="About Sentinel Standards" width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="space-y-4 lg:w-[60%]">
          <h2 className="text-[#0C7792] font-bold">Who we are</h2>
          <p className="md:text-2xl font-semibold">Scientists specializing in the synthesis of complex carbohydrates</p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 ">In 2024, Sentinel Standards was organized a business line of Sentinel Therapeutics and comprises a core team of glyco-scientists led by Dr. Anthony Prudden. The assembled division has decades of cumulative experience and has worked on a spectrum of glyco-related projects. Whether using a chemical, enzymatic, or chemo-enzymatic synthetic strategy, the team can produce targets on a scale  from  milligrams to grams to support biophysical analysis or functional studies. </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <Card className="bg-[#F1F3F5] md:py-10 md:px-6">
          <CardHeader>
            <Image src="/assets/our-mission.png" alt="Our Mission" width={40} height={40} />
          </CardHeader>
          <CardContent className="space-y-2">
            <h1 className="text-xl font-bold text-[#0C7792]">Our Mission</h1>
            <p className="text-gray-500">To capitalize on our synthetic expertise to deliver high-value   carbohydrate tools to scientists worldwide.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#F1F3F5] md:py-10 md:px-6">
          <CardHeader>
            <Image src="/assets/our-vision.png" alt="Our Vision" width={40} height={40} />
          </CardHeader>
          <CardContent className="space-y-2">
            <h1 className="text-xl font-bold text-[#0C7792]">Our Vision</h1>
            <p className="text-gray-500">To advance the scientific and medical community’s understanding of how complex carbohydrates mediate health and disease.</p>
          </CardContent>
        </Card>
      </div>
      <div className="bg-[#07363C] rounded-xl py-12 px-4 lg:px-16 mt-12 flex flex-col md:flex-row gap-12 md:gap-0">
        <div className="md:w-1/2 flex flex-col justify-between lg:justify-center">
          <h2 className="text-white text-3xl lg:text-5xl font-semibold mb-8">A Brief History of<br />Sentinel Standards</h2>
          <p className="text-gray-300 text-base lg:text-lg mt-4 md:mt-32 max-w-md">
            Since its founding, Sentinel Standards has been dedicated to advancing glycomics and proteomics research by providing high-purity, isotopically labeled N-glycan reference materials. Our commitment to quality and scientific rigor has made us a trusted partner for researchers worldwide.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="relative">
            {timeline.map((item, idx) => (
              <div className="flex items-stretch relative space-y-2" key={idx}>
                <div className="w-16 flex-shrink-0 text-gray-200 font-semibold text-right pr-4 pt-1">
                  {item.year}
                </div>
                <div className="relative flex flex-col items-center mr-4">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-[#0C7792] z-10"></div>

                  <div className="border-l-2 border-dotted border-gray-600 grow h-full" style={{ minHeight: '50px' }}></div>
                </div>

                <div className="flex-1 pb-6">
                  <div className="text-white font-bold leading-snug">{item.title}</div>
                  {item.desc && (
                    <div className="text-gray-400 text-sm mt-1 leading-snug">{item.desc}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-4">
          <p className="text-[#0C7792] font-bold text-sm">Why Us</p>
          <p className="text-2xl md:text-4xl font-semibold">Why Choose Us</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-2">
            <Image src="/assets/synthetic-rigor.png" alt="Why Us" width={40} height={40} />
            <p className="text-xl font-bold">Synthetic Rigor</p>
            <p className="text-gray-500">Each compound is synthesized using a panel of glycosyltransferases to ensure structural integrity.</p>
          </div>
          <div className="space-y-2">
            <Image src="/assets/reliable-reproducibility.png" alt="Why Us" width={40} height={40} />
            <p className="text-xl font-bold">Reliable Reproducibility</p>
            <p className="text-gray-500">Each target is aliquoted from a single synthetic preparation to eliminate batch-to-batch variation</p>
          </div>
          <div className="space-y-2">
            <Image src="/assets/uncompromising-quality.png" alt="Why Us" width={40} height={40} />
            <p className="text-xl font-bold">Uncompromising Quality</p>
            <p className="text-gray-500">High-field (600 MHz) NMR data along with high-resolution mass spectrometry data are available as a downloadable QC certificate.</p>
          </div>
          <div className="space-y-2">
            <Image src="/assets/flexibility-for-end-user.png" alt="Why Us" width={40} height={40} />
            <p className="text-xl font-bold">Flexibility for end-user</p>
            <p className="text-gray-500">Targets available as free-reducing glycans to provide flexibility to the end-user allowing for integration into analytical platforms such a LC-MS and capillary electrophoresis.</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute lg:left-1/2 lg:translate-x-1 lg:-top-16 z-20 w-[500px] max-w-full">
          <Image src="/assets/about2.png" alt="Our Approach" width={500} height={300} className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-16 border border-gray-200 rounded-xl shadow-lg bg-[#F1F3F5] px-4 lg:px-16 py-4 lg:py-10">
          <div className="lg:hidden relative -top-16 z-20 w-[400px] max-w-full mx-auto">
            <Image src="/assets/about2.png" alt="Our Approach" width={300} height={150} className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className="space-y-4 lg:space-y-8 flex flex-col justify-center">
            <p className="font-bold md:text-4xl">Our Approach</p>
            <div className="space-y-4 md:space-y-8 text-gray-500">
              <p>
                At Sentinel Standards, we call upon decades of synthetic experience to produce carbohydrate-based tools amenable to a variety of analytical methods ranging from mass spectrometry and capillary electrophoresis to surface plasmon resonance and biolayer interferometry. To achieve these goals, we employ chemical, enzymatic, and chemo-enzymatic methodologies in addition to rigorous purification techniques such as HPLC.
                Our flagship product is a collection of isotopically labeled N-glycan standards which   are representative of structures found in human plasma. In addition to expertise in N-glycan synthesis, the team also has synthetic experience in the following areas:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base">
                <li>O-glycans</li>
                <li>Human Milk Oligosaccharides</li>
                <li>Glyco-epitopes</li>
                <li>Glycopeptides</li>
                <li>Heparin and Heparan Sulfate Oligosaccharides</li>
                <li>Glycan biomarkers</li>
                <li>Carbohydrate modified dendrimers and nanoparticles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="md:flex justify-between">
          <p className="text-2xl font-bold">What We Do</p>
          <Button className="hidden md:block bg-[#0C7792] text-center">Contact Us</Button>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 text-white">
          <div className="bg-[#0c7792] rounded-xl p-4 space-y-16 flex flex-col justify-between">
            <Image src="/assets/flask2.png" alt="Experts in complex carbohydrate synthesis" width={40} height={40} />
            <div className="space-y-2">
              <p className="font-bold text-2xl">Experts in complex carbohydrate synthesis</p>
              <p>Leveraging decades of experience, the team has the technical skills to produce a wide-collection of glyco-targets using chemical, enzymatic, or chemo-enzymatic strategies. Our flagship product is a library of isotopically labeled N-glycans representing those   structures most abundant in human serum.</p>
            </div>
          </div>
          <div className="bg-[#0c7792] rounded-xl p-4 space-y-16 flex flex-col justify-between">
            <Image src="/assets/badge.png" alt="High-purity samples" width={40} height={40} />
            <div className="space-y-2">
              <p className="font-bold text-2xl">High-purity samples</p>
              <p>Synthesized targets must pass strict quality control guidelines such as NMR, mass spectrometry, and LC interrogation.</p>
            </div>
          </div>
          <div className="bg-[#0c7792] rounded-xl p-4 space-y-16 flex flex-col justify-between">
            <Image src="/assets/synthesized.png" alt="Experts in complex carbohydrate synthesis" width={40} height={40} />
            <div className="space-y-2">
              <p className="font-bold text-2xl">Synthesized for scientists</p>
              <p>Compounds are delivered in a ready-to-use format convenient for the end-user’s application.</p>
            </div>
          </div>
        </div>
        <Button variant="outline" className="md:hidden text-[#0c7792] border-1 border-[#0c7792] text-center w-full">Contact Us</Button>
      </div>

      <Process />
      <CTA />


    </div>
  )
}