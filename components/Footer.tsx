import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Partners", href: "/partners" },
  { label: "Events", href: "/events" },
] as const;

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: "https://facebook.com/blockchainuniport",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/blockchainuniport",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/blockchainuniport",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/blockchainuniport",
    label: "LinkedIn",
  },
] as const;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-linear-to-b from-[#101828] to-[#1E2939] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center relative">
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-0.5">
                  <div className="h-1 w-5 bg-white rounded-full"></div>
                  <div className="h-1 w-5 bg-white/70 rounded-full"></div>
                  <div className="h-1 w-5 bg-white/40 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">
                  Blockchain <span className="text-blue-400">UniPort</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              The official blockchain technology community at the University of
              Port Harcourt, empowering students with Web3 knowledge and
              opportunities.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <a
                href="mailto:blockchainuniport@gmail.com"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                blockchainuniport@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">
              Connect With Us
            </h3>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {currentYear} Blockchain UniPort. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>In partnership with</span>
            <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">UP</span>
            </div>
            <span className="text-gray-300">University of Port Harcourt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
