/**
 * Navigation Component
 * SMK Negeri 6 Surakarta Website
 * 
 * @author Muhammad Zidane Sungkar
 * @copyright 2025 Muhammad Zidane Sungkar
 */

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { name: "Beranda", href: "#beranda" },
  { name: "Profil", href: "#profil" },
  { name: "Jurusan", href: "#jurusan" },
  { name: "Kegiatan", href: "#kegiatan" },
  { name: "Galeri", href: "#galeri" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and School Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-primary to-primary/80 p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-lg">
              <GraduationCap className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-primary leading-tight">SMKN 6</div>
              <div className="text-xs text-muted-foreground font-medium">Surakarta</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-2 pb-4 border-b">
                    <div className="bg-primary p-2 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-primary">SMKN 6 Surakarta</div>
                    </div>
                  </div>
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
