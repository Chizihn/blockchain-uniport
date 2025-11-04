import Image from "next/image"; // Assuming Next.js Image component
import { SectionHeader } from "./SectionHeader";

const teamMembers = [
  {
    name: "Chukwuemeka Okafor",
    role: "Founder & President",
    degree: "Computer Science",
    description:
      "Passionate blockchain advocate with experience in smart contract development and Web3 education. Leading the vision to make UniPort a blockchain innovation hub.",
    imageUrl: "/images/team.png",
  },
  {
    name: "Blessing Nwosu",
    role: "Technical Lead",
    degree: "Software Engineering",
    description:
      "Full-stack Web3 developer specializing in DeFi protocols and dApp development. Coordinating technical workshops and hackathon preparations.",
    imageUrl: "/images/team.png",
  },
  {
    name: "David Akinola",
    role: "Operations Lead",
    degree: "Business Administration",
    description:
      "Managing community operations, partnerships, and event logistics. Building bridges between students and blockchain industry leaders.",
    imageUrl: "/images/team.png",
  },
  {
    name: "Grace Eze",
    role: "Community Manager",
    degree: "Information Technology",
    description:
      "Driving community engagement and member experience. Organizing study groups and ensuring every member has a voice in our ecosystem.",
    imageUrl: "/images/team.png",
  },
];

export function MeetOurTeam() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Leadership"
          title="Meet Our Team"
          description="Dedicated student leaders driving blockchain innovation and education at the University of Port Harcourt"
          align="center"
          padding="none"
          badgeVariant="outline"
        />
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <li key={member.name}>
              <div className="relative aspect-3/2 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  className="object-cover"
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  layout="fill"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {member.name}
              </h3>
              <p className="text-base leading-7 text-blue-600">{member.role}</p>
              <p className="text-sm leading-6 text-gray-600">{member.degree}</p>
              <p className="mt-4 text-sm leading-6 text-gray-700">
                {member.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
