/**
 * Footer Component
 * SMK Negeri 6 Surakarta Website
 * 
 * @author Muhammad Zidane Sungkar
 * @copyright 2025 Muhammad Zidane Sungkar
 */

"use client";

import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-bold text-xl">SMKN 6 Surakarta</h3>
                <p className="text-sm opacity-90">Sekolah Kejuruan Berkualitas</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Mencetak lulusan yang kompeten, berakhlak mulia, dan siap bersaing di dunia kerja maupun industri.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Kontak Kami</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm opacity-90">
                Jl. LU Adisucipto No. 38, Kerten, Laweyan, Surakarta
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm opacity-90">+62 271 123456</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <a href="mailto:info@smkn6solo.sch.id" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                info@smkn6solo.sch.id
              </a>
            </div>
          </div>

          {/* Social Media & Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/smkn6solo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/smkn6solo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@smkn6solo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <a
                href="https://smkn6solo.sch.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                smkn6solo.sch.id
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center space-y-2">
            <p className="text-sm opacity-75">
              &copy; {new Date().getFullYear()} SMK Negeri 6 Surakarta. All rights reserved.
            </p>
            <p className="text-xs opacity-60">
              Designed & Developed by Muhammad Zidane Sungkar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
