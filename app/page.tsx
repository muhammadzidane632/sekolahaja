/**
 * Home Page
 * SMK Negeri 6 Surakarta Website
 * 
 * @author Muhammad Zidane Sungkar
 * @copyright 2025 Muhammad Zidane Sungkar
 */

import HeroSection from "@/components/sections/hero";
import ProfileSection from "@/components/sections/profile";
import JurusanSection from "@/components/sections/jurusan";
import KegiatanSection from "@/components/sections/kegiatan";
import GallerySection from "@/components/sections/gallery";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <ProfileSection />
      <JurusanSection />
      <KegiatanSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
