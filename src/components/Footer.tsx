import { Target } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

export function Footer() {
  const navigate = useNavigate();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/#mission" },
      { name: "Our Methodology", href: "/methodology" },
      { name: "Contact", href: "/#contact" }
    ],
    categories: [
      { name: "Hunting Knives", href: "/category/hunting_knives" },
      { name: "Regional Intelligence", href: "/#regional" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Affiliate Disclosure", href: "#" }
    ]
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (href.startsWith("#")) {
      // Handle placeholder links
      trackEvent("click_footer_link", { href });
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-orange-600" />
              <span className="text-zinc-100 uppercase tracking-wider font-bold">
                Enormous Tiger
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Our approach involves a precise and systematic evaluation of every product, a methodology built on a foundation of more than 30 years of accumulated knowledge derived from the intense operational requirements of military and emergency response.

            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-zinc-100 uppercase tracking-wider text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-zinc-400 hover:text-orange-600 text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-zinc-100 uppercase tracking-wider text-sm mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-zinc-400 hover:text-orange-600 text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-zinc-100 uppercase tracking-wider text-sm mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-zinc-400 hover:text-orange-600 text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Enormous Tiger. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-orange-600"></div>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">
                Only Vetted Products Make The Cut
              </p>
            </div>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
          <p className="text-zinc-500 text-xs leading-relaxed text-center">
            <span className="text-orange-600 uppercase tracking-wide">Affiliate Disclosure:</span> Enormous Tiger
            participates in affiliate programs. When you purchase through our assessed product links, we may earn
            a commission at no additional cost to you. This supports our mission to provide independent, field-tested
            product intelligence. Our assessments remain unbiased and based solely on operational performance.
          </p>
        </div>
      </div>
    </footer>
  );
}