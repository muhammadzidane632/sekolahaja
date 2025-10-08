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
  ShoppingBag,
  Palette,
  Music,
  BookOpen
} from "lucide-react";

const majors = [
  {
    name: "Rekayasa Perangkat Lunak",
    icon: Cpu,
    description: "Mempelajari pengembangan aplikasi, pemrograman web dan mobile, serta database management untuk menjadi software developer profesional.",
    skills: ["Java", "PHP", "Mobile Apps", "Web Development"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470",
    color: "primary",
  },
  {
    name: "Usaha Layanan Pariwisata",
    icon: ShoppingBag,
    description: "Mempelajari manajemen pariwisata, hospitality, tour guide, dan pelayanan prima untuk industri pariwisata modern.",
    skills: ["Tour Guide", "Hospitality", "Event Planning", "Customer Service"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421",
    color: "accent",
  },
  {
    name: "Desain Komunikasi Visual",
    icon: Palette,
    description: "Mengembangkan kreativitas dalam desain grafis, multimedia, animasi, dan branding untuk industri kreatif.",
    skills: ["Graphic Design", "Video Editing", "Animation", "Adobe Suite"],
    image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?q=80&w=1374",
    color: "primary",
  },
  {
    name: "Broadcasting dan Perfilman",
    icon: Music,
    description: "Mempelajari produksi film, penyiaran televisi dan radio, videografi, serta teknik editing profesional.",
    skills: ["Video Production", "Cinematography", "Broadcasting", "Editing"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1471",
    color: "accent",
  },
  {
    name: "Manajemen Perkantoran dan Layanan Bisnis",
    icon: Factory,
    description: "Menguasai administrasi perkantoran, kesekretarisan, manajemen dokumen, dan pelayanan bisnis modern.",
    skills: ["Office Management", "Administration", "Secretarial", "Business"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469",
    color: "primary",
  },
  {
    name: "Pemasaran",
    icon: ShoppingBag,
    description: "Mengembangkan strategi pemasaran, digital marketing, sales, dan kewirausahaan untuk menciptakan profesional bisnis.",
    skills: ["Marketing Strategy", "Digital Marketing", "Sales", "Entrepreneurship"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374",
    color: "accent",
  },
  {
    name: "Akuntansi dan Keuangan Lembaga",
    icon: BookOpen,
    description: "Mempelajari pembukuan, perpajakan, analisis keuangan, dan manajemen akuntansi untuk lembaga dan perusahaan.",
    skills: ["Accounting", "Financial Analysis", "Taxation", "Auditing"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1470",
    color: "primary",
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
