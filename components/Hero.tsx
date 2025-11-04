import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[550px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Partners Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/60 to-white/80" /> */}

      {/* Content */}
      <div className="relative z-10 w-full">
        <SectionHeader
          badge="Ecosystem"
          title={
            <>
              Our <span className="text-blue-600">Partners</span> & Sponsors
            </>
          }
          description="Collaborating with leading blockchain platforms and organizations to empower our community"
          align="center"
          padding="lg"
        />
      </div>
    </section>
  );
};
