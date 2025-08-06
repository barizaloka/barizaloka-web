'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import komponen Image dari next/image

// --- Definisi Tipe Data (Interfaces) ---

interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  alt?: string;
  caption?: string;
}

// --- Komponen-komponen ---

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    {/* Menggunakan next/image untuk performa yang lebih baik */}
    <div className="relative w-full h-48">
      <Image
        src={course.imageUrl}
        alt={course.title}
        fill={true}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6">
      <div className="text-sm font-semibold text-white bg-purple-600 rounded-full px-3 py-1 inline-block mb-3">
        {course.category}
      </div>
      <h3 className="text-2xl font-bold text-purple-700 mb-2">
        {course.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
      <Link
        href={`/lms/course/${course.id}`}
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
      >
        Pelajari Sekarang
      </Link>
    </div>
  </div>
);

const FAQAccordion: React.FC<{ faq: FAQItem }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-purple-800"
      >
        {faq.question}
        <span className="text-purple-600 text-2xl transform transition-transform duration-200">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && <p className="mt-4 text-gray-600 pr-8">{faq.answer}</p>}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between h-full">
    <p className="text-lg italic text-gray-700 mb-6 flex-grow">
      {testimonial.quote}
    </p>
    <div>
      <p className="font-semibold text-purple-700">{testimonial.author}</p>
      <p className="text-sm text-gray-500">{testimonial.role}</p>
    </div>
  </div>
);

// Halaman LMS Utama
const LMSPage: React.FC = () => {
  // Data dummy untuk kursus
  const courses: Course[] = [
    {
      id: '1',
      title: 'Dasar-Dasar Pemrograman',
      description:
        'Pelajari konsep dasar algoritma, struktur data, dan logika pemrograman yang fundamental.',
      imageUrl: 'https://placehold.co/400x250/C084FC/FFFFFF?text=Coding',
      category: 'Pemrograman',
    },
    {
      id: '2',
      title: 'Pengenalan Web Development',
      description:
        'Mulai perjalanan Anda di dunia web dengan HTML, CSS, dan JavaScript.',
      imageUrl: 'https://placehold.co/400x250/A78BFA/FFFFFF?text=Web+Dev',
      category: 'Web Development',
    },
    {
      id: '3',
      title: 'Data Science untuk Pemula',
      description:
        'Panduan step-by-step untuk memahami dan mengolah data menggunakan Python.',
      imageUrl: 'https://placehold.co/400x250/8B5CF6/FFFFFF?text=Data+Science',
      category: 'Data Science',
    },
    {
      id: '4',
      title: 'UI/UX Design dengan Figma',
      description:
        'Pelajari cara mendesain antarmuka pengguna yang menarik dan intuitif.',
      imageUrl: 'https://placehold.co/400x250/FBCFE8/FFFFFF?text=UI/UX',
      category: 'Desain',
    },
  ];

  // Data dummy untuk FAQ
  const faqs: FAQItem[] = [
    {
      question: 'Apakah ini gratis?',
      answer:
        'Benar, ini gratis tanpa ada syarat ikut apapun. Kami percaya pendidikan berkualitas harus dapat diakses oleh semua orang.',
    },
    {
      question: 'Bagaimana sistem belajarnya?',
      answer:
        'Akan ada mentornya yang membimbing teman-teman sesuai course yang dipilih yang bertanggung jawab mengarahkan dan tanya jawab, lalu teman-teman akan mempelajari materinya dari sumber seperti YouTube, maupun artikel, dan bahkan ada sesi di discord sendiri dan secara Live di YouTube.',
    },
    {
      question: 'Apakah hasil pembelajaran di sini dapat sertifikat?',
      answer:
        'Iya, setelah menyelesaikan course maka akan dapat sertifikat bahwa ananda telah menyelesaikan course tersebut. Sertifikat ini dapat digunakan untuk portofolio atau melamar pekerjaan.',
    },
    {
      question: 'Siapa saja yang bisa bergabung?',
      answer:
        'Siapa saja yang memiliki semangat belajar tinggi, terutama mereka yang tertarik di dunia teknologi dan informatika. Tidak ada batasan usia atau latar belakang pendidikan.',
    },
  ];

  // Data dummy untuk testimoni
  const testimonials: Testimonial[] = [
    {
      quote:
        'Kursus di sini sangat membantu saya yang awam. Mentornya sabar dan materinya mudah dipahami.',
      author: 'Putri S.',
      role: 'Mahasiswa',
    },
    {
      quote:
        'Sistem belajarnya fleksibel dan interaktif. Sangat cocok untuk saya yang bekerja.',
      author: 'Rudi H.',
      role: 'Profesional',
    },
  ];

  // Data dummy untuk galeri
  const galleryItems: GalleryItem[] = [
    {
      type: 'image',
      url: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Galeri+Foto+1',
      alt: 'Suasana Live di Discord',
    },
    {
      type: 'image',
      url: 'https://placehold.co/600x400/C084FC/FFFFFF?text=Galeri+Foto+2',
      alt: 'Mentor sedang mengajar',
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      caption: 'Video Sesi Live Belajar',
    }, // Ganti dengan URL video yang relevan
    {
      type: 'image',
      url: 'https://placehold.co/600x400/A78BFA/FFFFFF?text=Galeri+Foto+3',
      alt: 'Tampilan Papan Diskusi',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col justify-between">
      {/* Navbar Sederhana */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-700">
          <Link
            href="/course"
            className="hover:text-purple-800 transition-colors duration-300"
          >
            Barizaloka LMS
          </Link>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-28">
        {/* --- Jumbotron Motivasi (Diperbarui) --- */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center my-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4">
            Pembelajaran Informatika Secara Gratis
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Dunia teknologi terus berkembang, jangan sampai tertinggal.
            Manfaatkan setiap kesempatan untuk belajar dan asah skill-mu di mana
            pun dan kapan pun. Masa depan digital ada di tanganmu!
          </p>
          <Link
            href="#courses"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Mulai Belajar Sekarang
          </Link>
        </div>
        {/* --- Akhir Jumbotron Motivasi --- */}

        {/* Courses Section */}
        <section id="courses" className="py-12">
          <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-10">
            Pilihan Course Kami
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Temukan berbagai course menarik yang dirancang untuk membimbing Anda
            dari nol hingga mahir, dengan kurikulum yang terstruktur dan mentor
            berpengalaman.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 mt-10">
          <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-12">
            Cara Belajar di Sini
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} faq={faq} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-purple-100 rounded-3xl shadow-xl mt-20"
        >
          <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-12">
            Apa Kata Mereka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 mt-20">
          <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-12">
            Galeri Pembelajaran
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl shadow-lg overflow-hidden bg-white"
              >
                {/* Menggunakan next/image untuk gambar galeri */}
                {item.type === 'image' && (
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={item.url}
                      alt={item.alt || `Galeri Foto ${index + 1}`}
                      fill={true}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                {item.type === 'video' && (
                  <div className="relative pt-[56.25%]">
                    {' '}
                    {/* 16:9 Aspect Ratio */}
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={item.url}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={item.caption}
                    ></iframe>
                  </div>
                )}
                {item.caption && (
                  <div className="p-4 text-center text-gray-700">
                    {item.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LMSPage;
