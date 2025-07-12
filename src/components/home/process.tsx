import Image from "next/image";

export default function Process() {
  return (
    <section className="flex flex-col lg:flex-row justify-between my-16 gap-4 lg:gap-0">
      {/* Left: Title */}
      <div className="lg:w-[50%] flex flex-col justify-between items-stretch lg:pr-12">
        <div>
          <span className="text-[#0077A3] text-lg font-medium mb-8 block">Our Process</span>
          <h2 className="text-[#181F1C] text-4xl font-semibold leading-tight mb-4">From our lab to yours</h2>
        </div>
        <Image src="/assets/landing-process.png" alt="Sentinel Box" width={650} height={260} className="object-contain " />
      </div>
      {/* Right: Steps */}
      <div className="lg:w-[50%] pr-12 flex flex-col gap-12">
        {/* Step 1 */}
        <div className="flex flex-col items-start gap-2">
          <Image src="/assets/atom.svg" alt="Microscope" width={40} height={40} />
          <h3 className="text-xl font-semibold mb-1">Compound Synthesis</h3>
          <p className="text-lg">Each N-glycan target contains a uniformly labled <sup>13</sup>C<sub>6</sub> N-Acetylglucosamine and is custom synthesized using an enzymatic strategy to ensure absolute stereo- and regiocontrol.</p>

        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-start gap-2">
          <div className="w-10 h-10 rounded-full bg-[#0C7792] flex items-center justify-center text-white text-2xl font-bold">
            <Image src="/assets/microscope.svg" alt="Microscope" width={40} height={40} />
          </div>
          <h3 className="text-xl font-semibold mb-1">Quality Control & Validation</h3>
          <p className="text-lg">Structural integrity of each compound is validated using a combination of NMR, high-resolution mass spectrometry, and reductive animation analysis. All data are available in a <a href="#" className="underline text-[#009FE3]">downloadable QC certificate</a>.</p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-start gap-2">
          <Image src="/assets/package.svg" alt="Microscope" width={40} height={40} />
          <h3 className="text-xl font-semibold mb-1">Packaging & Labeling</h3>
          <p className="text-lg">Compounds are delivered in individually labeled, high-recovery glass vials containing 10 ug of solid material.</p>

        </div>
        {/* Step 4 */}
        <div className="flex flex-col items-start gap-2">
          <Image src="/assets/distribution.svg" alt="Microscope" width={40} height={40} />
          <h3 className="text-xl font-semibold mb-1">Distribution</h3>
          <p className="text-lg">Standards are distributed through our joint venture partner, <a href="#" className="underline text-[#009FE3]">Omicron Biochemicals, Inc.</a>, or you can contact us directly.</p>

        </div>
      </div>
    </section>
  )
}