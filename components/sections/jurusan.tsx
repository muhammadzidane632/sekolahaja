/**
 * Jurusan Section Component
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
import Image from "next/image";
import { 
  Laptop, 
  Wrench, 
  Car, 
  Cpu, 
  Factory,
  ShoppingBag 
} from "lucide-react";

const majors = [
  {
    name: "Teknik Komputer dan Jaringan",
    icon: Laptop,
    description: "Mempelajari instalasi, konfigurasi, dan maintenance jaringan komputer serta troubleshooting sistem.",
    skills: ["Networking", "Server", "Troubleshooting", "Cisco"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1634",
    color: "primary",
  },
  {
    name: "Rekayasa Perangkat Lunak",
    icon: Cpu,
    description: "Mengembangkan kemampuan programming, desain aplikasi, dan pengembangan software modern.",
    skills: ["Programming", "Web Development", "Mobile Apps", "Database"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470",
    color: "accent",
  },
  {
    name: "Teknik Kendaraan Ringan",
    icon: Car,
    description: "Mempelajari perawatan, perbaikan, dan teknologi kendaraan bermotor roda empat.",
    skills: ["Mesin", "Kelistrikan", "Chasis", "Diagnostik"],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1632",
    color: "primary",
  },
  {
    name: "Teknik Pemesinan",
    icon: Wrench,
    description: "Menguasai teknik pembuatan dan pengolahan logam menggunakan mesin-mesin industri.",
    skills: ["CNC", "Bubut", "Frais", "CAD/CAM"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470",
    color: "accent",
  },
  {
    name: "Teknik Elektronika Industri",
    icon: Factory,
    description: "Mempelajari sistem kontrol otomasi industri dan perawatan peralatan elektronika.",
    skills: ["PLC", "Automation", "Robotics", "Maintenance"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470",
    color: "primary",
  },
  {
    name: "Bisnis Daring dan Pemasaran",
    icon: ShoppingBag,
    description: "Mengembangkan kemampuan pemasaran digital, e-commerce, dan manajemen bisnis online.",
    skills: ["Digital Marketing", "E-Commerce", "Social Media", "Analytics"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374",
    color: "accent",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function JurusanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="jurusan" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
            Program Keahlian
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Jurusan & <span className="text-primary">Kompetensi Keahlian</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pilih jurusan yang sesuai dengan minat dan bakatmu untuk membangun karir profesional di industri modern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {majors.map((major, index) => {
            const Icon = major.icon;
            return (
              <motion.div
                key={major.name}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 group overflow-hidden bg-white">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={major.image}
                      alt={major.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl leading-tight">{major.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {major.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {major.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs font-medium">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
