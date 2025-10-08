/**
 * Hero Section Component
 * SMK Negeri 6 Surakarta Website
 * 
 * @author Muhammad Zidane Sungkar
 * @copyright 2025 Muhammad Zidane Sungkar
 */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
          alt="Students learning"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm mb-6 border border-white/30">
                ✨ Sekolah Menengah Kejuruan Unggulan
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                SMK Negeri 6 
                <span className="block text-accent-foreground mt-2">Surakarta</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl leading-relaxed text-white/95 max-w-xl"
            >
              Membangun generasi profesional yang kompeten, berkarakter, dan siap bersaing di dunia kerja melalui pendidikan vokasi berkualitas tinggi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-5 pt-4"
            >
              <Button asChild size="lg" className="group bg-white text-primary hover:bg-white/90 h-14 px-8 text-base font-semibold shadow-xl">
                <Link href="#profil">
                  Tentang Kami
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" className="h-14 px-8 text-base font-semibold bg-accent text-white hover:bg-accent/90 shadow-xl border-2 border-accent hover:border-accent/80">
                <Link href="#jurusan">
                  Lihat Jurusan
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-white/30"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/30">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">1000+</p>
                <p className="text-sm text-white/80 font-medium">Siswa Aktif</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/30">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">6+</p>
                <p className="text-sm text-white/80 font-medium">Jurusan</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/30">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">50+</p>
                <p className="text-sm text-white/80 font-medium">Prestasi</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470"
                alt="SMKN 6 Surakarta Students"
                fill
                className="object-cover"
                quality={90}
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
                <p className="text-sm font-semibold text-primary mb-2">📍 Lokasi Strategis</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Jl. LU Adisucipto No. 38, Kerten, Laweyan, Surakarta
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
