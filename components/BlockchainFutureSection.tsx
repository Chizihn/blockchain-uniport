// components/BlockchainFutureSection.tsx
import Image from "next/image";
import { Users, BookOpen, Trophy, Code2, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function BlockchainFutureSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2-column grid – image left, text right */}
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-16 lg:grid-cols-2 lg:gap-y-0">
          {/* ── LEFT: IMAGE ── */}
          <div className="relative  ">
            {/* <div className="aspect-5/4 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xl ring-1 ring-gray-400/10"> */}
            <div className="w-full h-[500px] lg:h-[700px] overflow-hidden rounded-2xl ">
              <Image
                src="/images/achieve.png"
                alt="Students collaborating on a blockchain project"
                fill
                className="object-cover"
                priority
              />

              {/* 500+ badge – centered vertically, 24 px from left edge */}
              <div className="absolute right-2 bottom-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg">
                {/* 48 × 48 circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-600/10">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <div className="leading-tight">
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Student Members</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: TEXT ── */}
          <div className="lg:pl-4">
            <SectionHeader
              badge="About Us"
              title={
                <>
                  Building Africa&apos;s{" "}
                  <span className="text-blue-600">Blockchain </span>Future
                </>
              }
              align="left"
              padding="none"
              badgeVariant="outline"
            />

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Blockchain UniPort is the official blockchain technology community
              at the University of Port Harcourt. We&apos;re dedicated to
              empowering students with blockchain knowledge, fostering
              innovation, and creating pathways to real-world opportunities in
              the Web3 ecosystem.
            </p>

            {/* Feature list – exactly as in the mock */}
            <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
              {/* 1 */}
              <div className="flex gap-4">
                <dt className="flex-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-600/10">
                    <BookOpen className="h-7 w-7 text-blue-600" />
                  </div>
                </dt>
                <dd>
                  <strong className="font-semibold text-gray-900">
                    Blockchain Education.
                  </strong>{" "}
                  Comprehensive learning programs covering blockchain
                  fundamentals, smart contracts, and Web3 development
                </dd>
              </div>

              {/* 2 */}
              <div className="flex gap-4">
                <dt className="flex-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-600/10">
                    <Trophy className="h-7 w-7 text-blue-600" />
                  </div>
                </dt>
                <dd>
                  <strong className="font-semibold text-gray-900">
                    Mentorship Programs.
                  </strong>{" "}
                  Connect with industry experts and experienced blockchain
                  developers for guidance and career growth
                </dd>
              </div>

              {/* 3 */}
              <div className="flex gap-4">
                <dt className="flex-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-600/10">
                    <Code2 className="h-7 w-7 text-blue-600" />
                  </div>
                </dt>
                <dd>
                  <strong className="font-semibold text-gray-900">
                    Hands-on Projects.
                  </strong>{" "}
                  Build real-world blockchain applications and contribute to
                  open-source Web3 projects
                </dd>
              </div>

              {/* 4 */}
              <div className="flex gap-4">
                <dt className="flex-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-600/10">
                    <Rocket className="h-7 w-7 text-blue-600" />
                  </div>
                </dt>
                <dd>
                  <strong className="font-semibold text-gray-900">
                    Career Opportunities.
                  </strong>{" "}
                  Access to internships, hackathons, and job opportunities in
                  the blockchain ecosystem
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
