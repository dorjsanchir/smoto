"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Нүүр", href: "/" },
    { label: "Бараа", href: "/products" },
    { label: "Брэндүүд", href: "/brands" },
    { label: "Бидний тухай", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F59E0B] bg-[#0a0a0a]/95 backdrop-blur">
      <div className="flex h-[88px] items-center justify-between px-6 lg:px-16">
        <Link href="/" className="text-[#F59E0B] text-[28px] font-bold tracking-[2px]">
          SMOTO
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition-colors hover:text-[#F59E0B] ${
                pathname === item.href ? "text-[#F59E0B]" : "text-[#e5e5e5]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative p-2 text-[#e5e5e5] hover:text-[#F59E0B] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>

          <button
            className="md:hidden p-2 text-[#e5e5e5]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#333333] bg-[#0a0a0a] px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-[15px] font-medium text-[#e5e5e5] hover:text-[#F59E0B]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
