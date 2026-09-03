"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white transition hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          Nikhil
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li
              className="group relative text-sm text-slate-300 transition hover:text-white"
              key={link.name}
            >
              <a href={link.href}>
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume */}
        <a
          className="hidden rounded-lg border border-blue-500/30 bg-blue-600/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 md:block"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#030712]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-slate-300 transition hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-blue-500/30 bg-blue-600/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}