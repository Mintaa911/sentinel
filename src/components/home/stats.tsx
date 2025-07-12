import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function Stats() {
    return (
        <section className="w-full grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-2xl border-0 shadow-lg flex flex-col p-0 min-h-[200px] row-span-2">
              <CardContent className="p-6 flex flex-col h-full">
                <span className="text-4xl font-medium mb-4">5+</span>
                <div className="mt-auto">
                  <span className="text-base font-medium mb-2 block">Application Areas:</span>
                  <ul className="text-base list-disc list-inside">
                    <li>Academia</li>
                    <li>Pharma</li>
                    <li>Biotech</li>
                    <li>Biomarker development</li>
                    <li>Therapeutic QC</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <div className="row-span-2 space-y-4">
              <Card className="rounded-2xl bg-[#19B6D2] text-white flex flex-col items-start justify-between p-0 min-h-[200px]">
                <CardContent className="p-6 flex flex-col h-full">
                  <span className="text-4xl font-medium">2024</span>
                  <span className="text-base mt-auto">Business line developed</span>
                </CardContent>
              </Card>
              <Card className="rounded-2xl bg-[#E6F7FA] text-[#19B6D2] flex flex-col items-start justify-between p-0 min-h-[200px]">
                <CardContent className="p-6 flex flex-col h-full">
                  <span className="text-4xl font-medium">&gt;95%</span>
                  <span className="text-base text-[#181F1C] mt-auto">Compound Purity</span>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden col-span-2 row-span-2">
            <Image src="/assets/landing-card.png" alt="Lab 1" width={600} height={400} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-2xl border border-[#B9C6C6] bg-black/80 text-[#19B6D2] flex flex-col p-0">
              <CardContent className="p-6 flex flex-col h-full">
                <span className="text-4xl font-medium">&gt;92%</span>
                <span className="text-base text-white mt-auto"><span className="opacity-70">13C6</span> Enrichment</span>
              </CardContent>
            </Card>
            <Card className="rounded-2xl bg-[#7ED6E8] text-[#181F1C] flex flex-col items-start justify-between p-0 min-h-[200px]">
              <CardContent className="p-6 flex flex-col h-full">
                <span className="text-4xl font-medium">31</span>
                <span className="text-base mt-auto">Validated N-Glycans Standards</span>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-2xl bg-[#0C4A53] text-white flex flex-col items-start justify-between p-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                    <Image src="/assets/Flask.png" alt="Check" width={24} height={24} />
                </div>
                <span className="text-base mt-auto">Can be used as an internal standard for absolute quantification (AQUA) analysis.</span>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <Image src="/assets/landing-card2.png" alt="Lab 2" width={150} height={100} className="w-full h-[90%] object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image src="/assets/landing-card3.png" alt="Lab 3" width={150} height={100} className="w-full h-[90%] object-cover" />

              </div>
            </div>
          </div>
        </div>
      </section>   
    )
}