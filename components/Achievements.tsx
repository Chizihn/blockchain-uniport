// components/Achievements.tsx
import {
  Trophy,
  GraduationCap,
  Users,
  Code2,
  Briefcase,
  BookOpen,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const achievements = [
  {
    id: 1,
    icon: Trophy,
    title: "ETHGlobal Hackathon",
    subtitle: "Top 10 finalist in Africa region",
    value: "2024",
    valueColor: "text-blue-600",
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Best Student Community",
    subtitle: "Nigeria Tech Awards recognition",
    value: "2023",
    valueColor: "text-blue-600",
  },
  {
    id: 3,
    icon: Users,
    title: "Active Community",
    subtitle: "Over 500 registered members",
    value: "500+",
    valueColor: "text-blue-600",
  },
  {
    id: 4,
    icon: Code2,
    title: "Projects Built",
    subtitle: "Blockchain and Web3 applications",
    value: "25+",
    valueColor: "text-blue-600",
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Internship Placements",
    subtitle: "Members placed in tech companies",
    value: "50+",
    valueColor: "text-blue-600",
  },
  {
    id: 6,
    icon: BookOpen,
    title: "Workshops Conducted",
    subtitle: "Blockchain education sessions",
    value: "30+",
    valueColor: "text-blue-600",
  },
];

export function Achievements() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Our Impact"
          title="Our Achievements"
          description="Celebrating our journey in blockchain education and innovation at UniPort"
          align="center"
          padding="none"
          badgeVariant="outline"
        />

        {/* Grid: 3 columns on lg, 2 on sm, 1 on mobile */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-600/10">
                <item.icon
                  className="h-7 w-7 text-blue-600"
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-1 text-base leading-6 text-gray-600">
                {item.subtitle}
              </p>

              {/* Value */}
              <p
                className={`mt-3 text-sm font-semibold leading-5 ${item.valueColor}`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
