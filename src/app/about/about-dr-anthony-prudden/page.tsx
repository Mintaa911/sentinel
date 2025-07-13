import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QuoteIcon } from "lucide-react";

export default function AboutDrAnthonyPrudden() {
	return (
		<div className="md:space-y-24 space-y-12">
			<div className="flex flex-col lg:flex-row justify-between gap-12">
				<div className="md:w-[40%] flex flex-col justify-center gap-4 md:gap-8">
					<h1 className="text-[#0C7792]">Meet the Founder</h1>
					<div className="space-y-4">
						<p className="md:text-4xl font-bold">Dr. Anthony Prudden</p>
						<p className="text-gray-500 font-light text-lg">
							Dr. Anthony Prudden is a synthetic carbohydrate chemist who received his PhD form the University of Georgia under the guidance of Dr. Geert-Jan Boons.  He has over 10 years of experience working on an array of important glyco-targets such as N- and O-glycans, human milk oligosaccharides, and glycopeptides.
						</p>
					</div>
					<Button className="bg-[#0C7792] text-white w-fit">Get in touch</Button>
				</div>
				<div className="w-[60%] w-[500px] max-w-full">
					<Image src="/assets/founder.png" alt="Dr. Anthony Prudden" width={300} height={100} className="rounded-xl w-full h-full object-cover" />
				</div>

			</div>
			<div className="flex flex-col lg:flex-row justify-between gap-12">
				<div className="md:w-[40%] flex flex-col gap-4 md:gap-8">
					<h1 className="text-[#0C7792]">Short Biography</h1>
					<div className="space-y-4">
						<p className="md:text-4xl font-bold">Dr. Get to Know the Founder & Lead Scientist of Sentinel Standards</p>

					</div>
				</div>
				<div className="w-[60%] w-[500px] max-w-full space-y-4">
					<p className="text-gray-500 font-light text-lg">
						During the course of his graduate studies, Anthony developed the largest known collection of synthetic human milk oligosaccharides (HMOs) which were used to fabricate a first-of-its-kind microarray for high-throughput screening; the results of which illustrated how immune and viral proteins interact with particular carbohydrate epitopes found in breastmilk (PNAS 2017).
					</p>
					<p className="text-gray-500 font-light text-lg">
						After finishing his graduate studies, Dr. Prudden remained in the laboratory of Dr. Boons as a post-doctoral researcher where he devised   a chemo-enzymatic strategy to assemble complex symmetric and asymmetric N-glycans. This carbohydrate class is important in a myriad of biological functions ranging from protein folding and cell signaling, to antibody activity and biomarker development. Due to the heterogeneous nature of these structures, determining how a specific N-glycan structure modulates a protein’s activity has remained a challenge. To address this problem, Anthony pioneered a synthetic methodology to access single structure N-glycans of exceptional purity. The results of this work have been published (Nature Chem 2018)  and the technology developed resulted in the issuance of a patent.
					</p>
					<p className="text-gray-500 font-light text-lg">
						Dr. Prudden has contributed to numerous academic collaborations, has worked as a consultant to a glyco-focused biotech company, and is listed as an inventor on several patents.
					</p>
					<Button variant="outline" className="text-[#0C7792] w-fit p-6  border-1 border-[#0C7792]">
						<Image src="/assets/google-scholar.png" alt="Google Scholar" width={20} height={20} />
						<span>Google Scholar</span>
					</Button>
				</div>

			</div>
			<section className="w-full bg-[#D8F3F6] rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-4 py-6 md:py-16 px-4 md:px-8">
				<QuoteIcon className="text-[#0C7792] opacity-50 w-12 h-12" />
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 max-w-3xl">
					Providing high-quality research products will help scientists answer difficult questions.
				</h2>
				<p className="text-gray-500 font-light text-lg">
					Dr. Anthony Prudden
				</p>
			</section>
			<section className="flex flex-col lg:flex-row justify-between gap-12">
				<div className="md:w-[40%] flex flex-col justify-center gap-4 md:gap-8">
					<h1 className="text-[#0C7792]">Personal Mission</h1>
					<div className="space-y-4">
						<p className="md:text-4xl font-bold">With the right tools, Science can advance</p>
						<p className="text-gray-500 font-light text-lg">
							Sentinel Standards aims to equip research professionals with high-quality carbohydrate tools to facilitate discoveries in the
							Glycobiology field. Our flagship product is a collection of isotopically (13C6-GlcNAc) labeled N-glycan standards that
							collectively represent  50% of the total serum N-glycome. In addition to N-glycan standards, the team has expertise in the
							custom synthesis of:

						</p>
						<ul className="list-disc list-inside text-sm text-gray-500">
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
				<div className="w-[60%] w-[500px] max-w-full">
					<Image src="/assets/personal-mission.png" alt="Dr. Anthony Prudden" width={300} height={100} className="rounded-xl w-full h-full object-cover" />
				</div>

			</section>
			<section className="w-full bg-[#04313C] rounded-xl md:rounded-2xl flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 mb-12 md:mb-16 lg:mb-24 px-4 md:px-8">
				<h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 max-w-3xl">
					Interested in learning more about our analytical standards or how we can assist with your project?
				</h2>
				<p className="text-[#D1E6E6] text-sm md:text-base lg:text-lg text-center mb-6 md:mb-8 lg:mb-10 max-w-2xl">
					Whether you’re exploring collaboration opportunities or have technical questions about our glycan compounds - we’re happy to hear from you!
				</p>
				<Button className="bg-white text-[#0C4A53] font-medium px-6 md:px-8 py-2 md:py-3 rounded-md w-fit text-base md:text-lg">
					Get in touch
				</Button>
			</section>
		</div>
	)
}