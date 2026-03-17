"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  game: [
    { name: "Tournaments", href: "/tournaments" },
    { name: "Games", href: "/games" },
    { name: "Rules", href: "/games#rules" },
    { name: "Leaderboard", href: "/leaderboard" },
  ],
  content: [
    { name: "Blog", href: "/blog" },
    { name: "Videos", href: "/videos" },
    { name: "News", href: "/blog?category=news" },
    { name: "Guides", href: "/blog?category=guides" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Discord", href: "#", icon: "💬" },
    { name: "YouTube", href: "#", icon: "📺" },
    { name: "Instagram", href: "#", icon: "📸" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="text-7xl leading-none text-primary" aria-label="Raiceanu's Game">
                  🃏
                </span>
              </Link>
              <p className="text-muted-foreground mb-4 max-w-md">
                The ultimate destination for poker enthusiasts. Join tournaments,
                learn from experts, and connect with the poker community.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Game Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Game</h3>
            <ul className="space-y-2">
              {footerLinks.game.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Content Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Content</h3>
            <ul className="space-y-2">
              {footerLinks.content.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Raiceanu&apos;s Game. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-muted-foreground text-sm">Made with ❤️ for poker lovers</span>
            <div className="flex items-center space-x-1">
              <span className="text-lg">🃏</span>
              <span className="text-lg">♠️</span>
              <span className="text-lg">♥️</span>
              <span className="text-lg">♦️</span>
              <span className="text-lg">♣️</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
