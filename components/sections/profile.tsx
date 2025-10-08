/**
 * Profile Section Component
 * SMK Negeri 6 Surakarta Website
 * 
 * @author Muhammad Zidane Sungkar
 * @copyright 2025 Muhammad Zidane Sungkar
 */

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, History } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function ProfileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="profil" ref={ref} className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
            Tentang Kami
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Profil <span className="text-primary">Sekolah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SMK Negeri 6 Surakarta merupakan lembaga pendidikan kejuruan yang berkomitmen mencetak generasi unggul dan profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visi */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Menjadi SMK unggulan yang menghasilkan lulusan berkualitas, berkarakter, dan berdaya saing global dalam bidang teknologi dan industri.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30 bg-gradient-to-br from-white to-accent/5">
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-br from-accent to-accent/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl text-accent">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="text-base">Menyelenggarakan pendidikan vokasi berkualitas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="text-base">Membentuk karakter siswa yang berakhlak mulia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="text-base">Mengembangkan kompetensi sesuai kebutuhan industri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="text-base">Membangun kemitraan dengan dunia usaha dan industri</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sejarah */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <History className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Sejarah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Didirikan pada tahun 1970-an, SMK Negeri 6 Surakarta telah berkontribusi dalam mencetak lulusan profesional yang siap kerja. 
                  Berlokasi strategis di Jl. LU Adisucipto, sekolah ini terus berinovasi mengikuti perkembangan teknologi dan kebutuhan industri.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
