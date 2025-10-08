# Website SMK Negeri 6 Surakarta

Website resmi SMK Negeri 6 Surakarta yang dibangun dengan Next.js, Tailwind CSS, shadcn/ui, dan Framer Motion.

## 🎯 Fitur

- ✅ **Navigation Bar** - Menu navigasi responsif dengan mobile menu
- ✅ **Hero Section** - Landing page dengan animasi dan call-to-action
- ✅ **Profil Sekolah** - Visi, Misi, dan Sejarah sekolah
- ✅ **Jurusan** - Informasi lengkap tentang 6 jurusan yang tersedia
- ✅ **Kegiatan & Prestasi** - Showcase aktivitas dan pencapaian siswa
- ✅ **Galeri Foto** - Galeri dengan lightbox interaktif
- ✅ **Kontak** - Form kontak dan informasi lokasi sekolah
- ✅ **Footer** - Informasi kontak lengkap dan media sosial
- ✅ **Animasi Halus** - Framer Motion untuk transisi yang smooth
- ✅ **Responsif** - Tampilan optimal di desktop, tablet, dan mobile
- ✅ **SEO Friendly** - Metadata yang optimal untuk mesin pencari

## 🛠️ Teknologi

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **TypeScript**: Type-safe development

## 🚀 Instalasi

### Prerequisites
- Node.js 20+ 
- npm atau yarn

### Langkah-langkah

1. Clone repository ini:
```bash
git clone <repository-url>
cd sekolahh
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## 📝 Scripts

- `npm run dev` - Menjalankan development server dengan Turbopack
- `npm run build` - Build aplikasi untuk production
- `npm start` - Menjalankan production server

## 🎨 Tema Warna

Website menggunakan skema warna sekolah:
- **Primary (Biru)**: oklch(0.55 0.15 240) - Warna utama sekolah
- **Accent (Hijau)**: oklch(0.65 0.15 150) - Aksen untuk highlight
- **Background**: Putih/Light gray untuk kesegaran dan profesionalitas
- **Foreground**: Dark gray untuk teks yang mudah dibaca

## 📂 Struktur Folder

```
sekolahh/
├── app/
│   ├── layout.tsx          # Root layout dengan Navigation & Footer
│   ├── page.tsx            # Homepage dengan semua sections
│   └── globals.css         # Global styles & theme
├── components/
│   ├── navigation.tsx      # Navigation bar
│   ├── footer.tsx          # Footer component
│   ├── sections/
│   │   ├── hero.tsx        # Hero section
│   │   ├── profile.tsx     # Profile section (Visi/Misi/Sejarah)
│   │   ├── jurusan.tsx     # Jurusan section
│   │   ├── kegiatan.tsx    # Kegiatan & Prestasi section
│   │   ├── gallery.tsx     # Gallery with lightbox
│   │   └── contact.tsx     # Contact form & info
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # Utility functions
```

## 🖼️ Mengganti Gambar

Untuk mengganti gambar placeholder dengan foto sekolah asli:

1. Tambahkan foto ke folder `/public/images/`
2. Update komponen yang relevan di `components/sections/`
3. Gunakan komponen `Image` dari Next.js untuk optimasi

## 🗺️ Google Maps

Update file `components/sections/contact.tsx` dengan embed Google Maps untuk lokasi sekolah.

## 📱 Customisasi

### Mengubah Konten
Edit file-file di folder `components/sections/` untuk mengubah konten setiap section.

### Mengubah Warna
Edit file `app/globals.css` pada bagian `:root` untuk mengubah tema warna.

## 🌐 Deploy

Deploy ke Vercel, Netlify, atau platform hosting lainnya dengan mudah!

## 📞 Informasi Kontak

**SMK Negeri 6 Surakarta**
- Alamat: Jl. LU Adisucipto No. 38, Kerten, Laweyan, Surakarta
- Telepon: +62 271 123456
- Email: info@smkn6solo.sch.id
- Website: smkn6solo.sch.id

## 📄 License

© 2025 SMK Negeri 6 Surakarta. All rights reserved.

**Designed & Developed by Muhammad Zidane Sungkar**

---

## 🙏 Acknowledgments

- **Developer**: Muhammad Zidane Sungkar
- **Design & Development**: Custom built with modern web technologies
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **Animations**: Framer Motion
- **Framework**: Next.js & React

# sekolahaja
