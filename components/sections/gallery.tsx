/**
 * Gallery Section Component
 * SMK Negeri 6 Surakarta Website
 * 
 * @author Muhammad Zidane Sungkar
 * @copyright 2025 Muhammad Zidane Sungkar
 */

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Sample gallery images (you can replace these with actual school photos)
const galleryImages = [
  {
    id: 1,
    title: "Gedung Sekolah",
    category: "Fasilitas",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486",
    description: "Gedung utama SMK Negeri 6 Surakarta dengan fasilitas modern",
  },
  {
    id: 2,
    title: "Laboratorium Komputer",
    category: "Fasilitas",
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374",
    description: "Lab komputer dengan perangkat terkini untuk praktikum siswa",
  },
  {
    id: 3,
    title: "Bengkel Otomotif",
    category: "Fasilitas",
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1374",
    description: "Bengkel praktik untuk jurusan teknik kendaraan ringan",
  },
  {
    id: 4,
    title: "Kegiatan Praktek",
    category: "Kegiatan",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470",
    description: "Siswa sedang melakukan praktik di bengkel",
  },
  {
    id: 5,
    title: "Upacara Bendera",
    category: "Kegiatan",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1632",
    description: "Upacara bendera rutin setiap hari Senin",
  },
  {
    id: 6,
    title: "Lomba Kompetensi",
    category: "Prestasi",
    src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1396",
    description: "Siswa meraih juara dalam lomba kompetensi siswa",
  },
  {
    id: 7,
    title: "Ekstrakurikuler",
    category: "Kegiatan",
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1593",
    description: "Kegiatan ekstrakurikuler olahraga",
  },
  {
    id: 8,
    title: "Perpustakaan",
    category: "Fasilitas",
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470",
    description: "Perpustakaan dengan koleksi buku lengkap",
  },
  {
    id: 9,
    title: "Wisuda Siswa",
    category: "Kegiatan",
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470",
    description: "Pelepasan siswa kelas XII",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("Semua");

  const categories = ["Semua", "Fasilitas", "Kegiatan", "Prestasi"];

  const filteredImages = filter === "Semua" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="galeri" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
            Dokumentasi
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Galeri <span className="text-primary">Foto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Dokumentasi kegiatan dan fasilitas SMK Negeri 6 Surakarta.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full px-6"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-primary/30">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-sm font-semibold text-white">{image.title}</p>
                  <p className="text-xs text-white/80 mt-1">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95">
            {selectedImageData && (
              <div className="relative">
                {/* Image Display */}
                <div className="relative aspect-video">
                  <Image
                    src={selectedImageData.src}
                    alt={selectedImageData.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Image Info */}
                <div className="bg-black/80 backdrop-blur-sm p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedImageData.title}</h3>
                  <p className="text-white/80">{selectedImageData.description}</p>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white h-12 w-12 rounded-full backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white h-12 w-12 rounded-full backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
