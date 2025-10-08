/**
 * Kegiatan Section Component
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
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, BookOpen, Music, Palette } from "lucide-react";
import Image from "next/image";

const activities = [
  {
    title: "Praktek Kerja Lapangan (PKL)",
    date: "Setiap Tahun",
    category: "Pendidikan",
    icon: BookOpen,
    description: "Siswa kelas XI melaksanakan praktik kerja di industri selama 3-6 bulan untuk meningkatkan kompetensi dan pengalaman kerja nyata.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470",
  },
  {
    title: "Lomba Kompetensi Siswa (LKS)",
    date: "Tingkat Kota - Nasional",
    category: "Kompetisi",
    icon: Trophy,
    description: "Ajang kompetisi tahunan untuk mengasah kemampuan siswa dalam bidang teknik dan vokasi, meraih berbagai prestasi gemilang.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1470",
  },
  {
    title: "Ekstrakurikuler",
    date: "Setiap Minggu",
    category: "Organisasi",
    icon: Users,
    description: "Berbagai kegiatan ekstrakurikuler seperti Paskibra, PMR, Pramuka, Robotika, dan olahraga untuk mengembangkan soft skills siswa.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1632",
  },
  {
    title: "Festival Seni & Budaya",
    date: "Acara Tahunan",
    category: "Seni",
    icon: Palette,
    description: "Perayaan seni budaya sekolah dengan penampilan musik, tari, teater, dan pameran karya siswa.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1469",
  },
  {
    title: "Seminar & Workshop",
    date: "Rutin Berkala",
    category: "Pengembangan",
    icon: BookOpen,
    description: "Menghadirkan praktisi industri dan profesional untuk berbagi ilmu dan pengalaman kepada siswa.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470",
  },
  {
    title: "Kejuaraan Olahraga",
    date: "Inter-School",
    category: "Olahraga",
    icon: Trophy,
    description: "Turnamen olahraga antar sekolah dalam berbagai cabang seperti basket, futsal, voli, dan badminton.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function KegiatanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kegiatan" ref={ref} className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-6">
            Aktivitas Siswa
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Kegiatan & <span className="text-primary">Prestasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Berbagai kegiatan dan pencapaian yang membanggakan dari siswa-siswi SMK Negeri 6 Surakarta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30 group overflow-hidden">
                  {/* Image Header */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <Badge variant="secondary" className="absolute top-4 right-4 text-xs font-semibold">
                      {activity.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <Icon className="h-6 w-6 text-accent flex-shrink-0" />
                    </div>
                    <CardTitle className="text-xl leading-tight">{activity.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{activity.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
