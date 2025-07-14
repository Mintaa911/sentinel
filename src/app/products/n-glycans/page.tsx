"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { Download } from "lucide-react";
export default function Products() {
  const [activeTab, setActiveTab] = useState("significance");

  return (
    <main className="space-y-8 md:space-y-16">
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Products</span>
        <span className="text-[#178CA4] font-semibold">/</span>
        <span className="text-[#178CA4] font-semibold">N-Glycans</span>
      </div>
      <section className="flex flex-col md:flex-row gap-4  md:gap-12">
        <div className="w-[750px] max-w-full">
          <Image src="/assets/landing-product.png" alt="N-Glycans Product" width={750} height={750} className="rounded-xl w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">N-Glycans</h1>
          <h2 className="text-xl font-semibold mb-2 text-[#222] dark:text-[#222] opacity-80">Characteristics of library members</h2>
          <ul className="space-y-3 mb-4">
            {[
              "Six carbon-13 atoms allow absolute quantification (AQUA)",
              "Includes α2,3- and α2,6-sialic acid motifs",
              "Symmetric and asymmetric structures available",
              "Core fucose",
              "Immunogenic epitopes e.g., Neu5Gc and αGal motifs",
              "Synthesized to support QbD compliance to ensure batch-to-batch consistency"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base text-gray-600">
                <span className="mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#19B6D2]" xmlns="http://www.w3.org/2000/svg">

                    <path d="M6 10.5L9 13.5L14 8.5" stroke="#19B6D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-2xl font-bold mb-2 text-gray-600">
            $300 <span className="text-base font-normal">/ vial (10 μg)</span>
          </div>
          <Button className="bg-[#178CA4] hover:bg-[#12718a] text-white text-lg font-medium px-8 py-6 rounded-md w-full ">
            Contact us for Purchase
          </Button>
        </div>
      </section>

      <section>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="w-full bg-transparent border-b border-gray-300 shadow-none rounded-none pl-16 md:px-64">
            <TabsTrigger
              value="significance"
              className="text-gray-400 data-[state=active]:text-[#178CA4] data-[state=active]:border-b-2 data-[state=active]:border-b-[#178CA4] rounded-none px-4 bg-transparent shadow-none transition-colors"
            >
              Significance
            </TabsTrigger>
            <TabsTrigger
              value="problem"
              className="text-gray-400 data-[state=active]:text-[#178CA4] data-[state=active]:border-b-2 data-[state=active]:border-b-[#178CA4] rounded-none px-4 bg-transparent shadow-none transition-colors"
            >
              Problem
            </TabsTrigger>
            <TabsTrigger
              value="solution"
              className="text-gray-400 data-[state=active]:text-[#178CA4] data-[state=active]:border-b-2 data-[state=active]:border-b-[#178CA4] rounded-none px-4 bg-transparent shadow-none transition-colors"
            >
              Solution
            </TabsTrigger>
            <TabsTrigger
              value="references"
              className="text-gray-400 data-[state=active]:text-[#178CA4] data-[state=active]:border-b-2 data-[state=active]:border-b-[#178CA4] rounded-none px-4 bg-transparent shadow-none transition-colors"
            >
              References
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="text-gray-400 data-[state=active]:text-[#178CA4] data-[state=active]:border-b-2 data-[state=active]:border-b-[#178CA4] rounded-none px-4 bg-transparent shadow-none transition-colors"
            >
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="significance">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
              <h1 className="text-3xl font-semibold">Significance</h1>
              <div className="col-span-2 space-y-4">
                <p className="font-bold">
                  N-glycosylation (N-glycans) represents an important class of biomolecules receiving significant attention for their application in disease diagnosis and therapeutic development. A major hurdle associated with identifying a protein’s or biofluid’s N-glycan composition stems from the lack of well-defined standards that can be used as analytical reference material.
                </p>
                <p>
                  Convincing evidence illustrates that developing disease states can result in aberrant N-glycosylation levels indicating an increased probability of pathologic outcome (1-3). Furthermore, development of certain cancers and inflammatory conditions have been shown to alter glycosylation patterns simultaneously on several proteins resulting in an altered glyco-serum profile (4-5). Since early detection remains the best option for increased patient survival rates, there is an urgent need to develop serum screening platforms to identify the emergence of a health threat (6).  In addition to identifying high-value targets for biomarker discovery, identifying aberrant protein glycosylation motifs provides therapeutic targets for antibody development.
                </p>
                <p>
                  The fact that N-linked glycosylation modulates the activity of an underlying protein makes it a high-value target for functional studies and pharmaceutical design. Companies are increasingly incorporating Glycomics in their Quality by Design (QbD) analysis as promoted by the FDA (7). Due to the complex nature of protein glycosylation, this post-translational modification (PTM) is considered a critical quality attribute (CQA) which must be identified and measured at every step of a therapeutic's development process to ensure batch-to-batch similarity. Furthermore, The International Conference of Technical Requirements for Registration of Pharmaceuticals for Human Use (ICH) require characterization of glycosylation (8-9).
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="problem">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
              <h1 className="text-3xl font-semibold">Problem</h1>
              <div className="col-span-2 space-y-4">
                <span className="font-bold">
                  Difficulty with defining N-glycan structures is linked to their heterogeneous and isobaric (i.e., same monosaccharide composition, but different stereo-connectivity) nature.
                </span>
                <span>
                  This fact was highlighted by Jones et al in 2009 when 11 labs from academia, industry, and the regulatory sector were sent identical glycoprotein samples for N-glycan analysis. The results demonstrated lack of consistency between the groups when comparing sialic acid content / linkage or degree of branching (10)
                </span>

              </div>
            </div>
          </TabsContent>
          <TabsContent value="solution">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
              <h1 className="text-3xl font-semibold">Solution</h1>
              <div className="col-span-2 space-y-4">
                <p>
                  <span className="font-bold">
                    To help overcome the challenges associated with N-glycan structural assignment, a collection of the most abundant N-glycans found in human serum was created.
                  </span>
                  <span>
                    This library comprises structures containing common glyco-epitopes such as alpha 2,3-sialic acid, alpha 2,6-sialic acid, and core fucose.  Furthermore, the library members are presented as symmetric and asymmetric architectures.
                  </span>
                </p>
                <p>
                  <span className="font-bold">
                    In total, the collection  contains structures that make up more than 50% of the total serum N-glycome which is important since 82 of the top 100 most abundant serum proteins are glycosylated.
                  </span>
                  <span>
                    These glycosylated serum proteins include immunoproteins such as IgG, IgM, IgA, and acute phase proteins such as haptoglobin and kininogen (11-14).
                  </span>
                  <span className="font-bold">
                    In addition to structures found in serum, an additional collection of N-glycans has been synthesized containing common immunogenic motifs such as alpha 2,3-N-glycolylneuraminc acid, alpha 2,6-N-glycolylneuramic acid, and alpha 1,3-galactose.
                  </span>
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="references">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
              <h1 className="text-3xl font-semibold">References</h1>
              <div className="col-span-2 space-y-4">

                <ol className="list-decimal list-inside space-y-2">
                  <li>Tian, Y.; Zhang, H., Characterization of disease-associated N-linked glycoproteins. Proteomics 2013, 13 (3-4), 504-511.</li>
                  <li>Zhao, Y.-P.; Ruan, C.-P.; Wang, H.; Hu, Z.-Q.; Fang, M.; Gu, X.; Ji, J.; Zhao, J.-Y.; Gao, C.-F., Identification and assessment of new biomarkers for colorectal cancer with serum N-glycan profiling. Cancer 2012, 118 (3), 639-650.</li>
                  <li>Kyselova, Z.; Mechref, Y.; Kang, P.; Goetz, J. A.; Dobrolecki, L. E.; Sledge, G. W.; Schnaper, L.; Hickey, R. J.; Malkas, L. H.; Novotny, M. V., Breast Cancer Diagnosis and Prognosis through Quantitative Measurements of Serum Glycan Profiles. Clin Chem 2008, 54 (7), 1166.</li>
                  <li>Dempsey, E.; Rudd, P. M., Acute phase glycoproteins: bystanders or participants in carcinogenesis? Annals of the New York Academy of Sciences 2012, 1253 (1), 122-132.</li>
                  <li>Ruhaak, L. R.; Miyamoto, S.; Lebrilla, C. B., Developments in the Identification of Glycan Biomarkers for the Detection of Cancer. Molecular &amp;amp; Cellular Proteomics 2013, 12 (4), 846.</li>
                  <li>Singal, A. G.; Pillai, A.; Tiro, J., Early Detection, Curative Treatment, and Survival Rates for Hepatocellular Carcinoma Surveillance in Patients with Cirrhosis: A Meta-analysis. PLOS Med 2014, 11 (4), e1001624.</li>
                  <li>del Val, I. J.; Kontoravdi, C.; Nagy, J. M., Towards the implementation of quality by design to the production of therapeutic monoclonal antibodies with desired glycosylation patterns. Biotechnol Progr 2010, 26 (6), 1505-1527.</li>
                  <li>Navas, N.; Herrera, A.; Martínez-Ortega, A.; Salmerón-García, A.; Cabeza, J.; Cuadros-Rodríguez, L., Quantification of an intact monoclonal antibody, rituximab, by (RP)HPLC/DAD in compliance with ICH guidelines. Anal Bioanal Chem 2013, 405 (29), 9351-9363.</li>
                  <li>Mack, G., FDA balks at Myozyme scale-up. Nat Biotechnol 2008, 26, 592.</li>
                  <li>Thobhani, S.; Yuen, C.-T.; Bailey, M. J. A.; Jones, C., Identification and quantification of N-linked oligosaccharides released from glycoproteins: An inter-laboratory study. Glycobiology 2008, 19 (3), 201-211.</li>
                  <li>Song, T.; Aldredge, D.; Lebrilla, C. B., A Method for In-Depth Structural Annotation of Human Serum Glycans That Yields Biological Variations. Anal Chem 2015, 87 (15), 7754-7762.</li>
                  <li>Huhn, C.; Selman, M. H. J.; Ruhaak, L. R.; Deelder, A. M.; Wuhrer, M., IgG glycosylation analysis. Proteomics 2009, 9 (4), 882-913.</li>
                  <li>Tirumalai, R. S.; Chan, K. C.; Prieto, D. A.; Issaq, H. J.; Conrads, T. P.; Veenstra, T. D., Characterization of the low molecular weight human serum proteome. Molecular & cellular proteomics : MCP 2003, 2 (10), 1096-103.</li>
                  <li>Hortin, G. L.; Sviridov, D.; Anderson, N. L., High-Abundance Polypeptides of the Human Plasma Proteome Comprising the Top 4 Logs of Polypeptide Abundance. Clin Chem 2008, 54 (10), 1608.</li>
                </ol>

              </div>
            </div>
          </TabsContent>
          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
              <h1 className="text-3xl font-semibold col-span-1 md:col-span-1">Documents</h1>
              <div className="col-span-2 flex flex-col md:flex-row gap-6">
                {/* Card 1 */}
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center shadow-sm">
                  <div className="text-lg font-medium mb-6 text-black text-center">List of available N-glycans</div>
                  <a
                    href="/docs/list-of-nglycans.pdf"
                    download
                    className="flex items-center justify-center gap-2 border border-[#178CA4] text-[#178CA4] rounded-md px-6 py-2 font-medium transition-colors hover:bg-[#178CA4]/10 focus:outline-none focus:ring-2 focus:ring-[#178CA4]"
                  >
                    <Download className="w-5 h-5 mr-1" />
                    Download the PDF
                  </a>
                </div>
                {/* Card 2 */}
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center shadow-sm">
                  <div className="text-lg font-medium mb-6 text-black text-center">QC Certificates</div>
                  <a
                    href="/docs/qc-certificates.pdf"
                    download
                    className="flex items-center justify-center gap-2 border border-[#178CA4] text-[#178CA4] rounded-md px-6 py-2 font-medium transition-colors hover:bg-[#178CA4]/10 focus:outline-none focus:ring-2 focus:ring-[#178CA4]"
                  >
                    <Download className="w-5 h-5 mr-1" />
                    Download the PDF
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-8">
        <div className="w-full max-w-full space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-center">Complex N-Glycans</h1>
          <Image src="/assets/complex-nglycans.png" alt="Complex N-Glycans" width={1000} height={500} className="w-full h-full object-cover" />
        </div>
        <div className="w-full max-w-full space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-center">Core Fucosesylated Complex N-Glycans</h1>
          <Image src="/assets/core-fucosylated.png" alt="Complex N-Glycans" width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
        <div className="w-full max-w-full space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-center">Immunogenic N-Glycans</h1>
          <Image src="/assets/immunogenic.png" alt="Complex N-Glycans" width={1000} height={1000} className="w-full h-full object-cover" />
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
    </main>
  );
}