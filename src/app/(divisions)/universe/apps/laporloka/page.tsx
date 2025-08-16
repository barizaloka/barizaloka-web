'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PortalLaporanWargaDescription: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-gray-800 mb-10 text-center"
                >
                    Tentang Portal Laporan Warga
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl mx-auto"
                >
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        <Link
                            href="https://laporloka.my.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                            Portal Laporan Warga
                        </Link>{' '}
                        adalah sebuah platform daring yang dirancang untuk memfasilitasi warga dalam menyampaikan laporan terkait berbagai isu atau kejadian di lingkungan mereka.
                    </p>

                    <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                        Fitur Utama:
                    </motion.h3>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.2 }}
                        className="space-y-3 text-gray-700"
                    >
                        {[
                            'Formulir Pelaporan: Warga dapat dengan mudah mengisi formulir untuk mengirimkan laporan, yang meliputi detail seperti judul laporan, deskripsi kejadian, pemilihan desa (contoh: Karangasem), dan informasi lokasi yang lebih spesifik.',
                            'Daftar Laporan Terbaru: Halaman utama menampilkan daftar laporan-laporan terbaru yang telah dikirimkan oleh warga, memberikan gambaran terkini mengenai isu-isu yang ada.',
                            'Navigasi Sederhana: Terdapat menu navigasi yang jelas dengan opsi "Beranda" dan "Tentang" untuk memudahkan pengguna dalam menjelajahi situs.',
                            'Informasi Hak Cipta: Bagian bawah situs mencantumkan informasi hak cipta © 2025 Portal Laporan Warga, menunjukkan legalitas dan pembaruan platform.',
                            'Motto Pelayanan: Portal ini memiliki motto "Melayani dengan sepenuh hati untuk kemajuan bersama", yang mencerminkan komitmennya terhadap pelayanan publik.',
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-2"
                            >
                                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-gray-700 mt-8 leading-relaxed"
                    >
                        Dengan adanya portal ini, diharapkan proses penyampaian dan penanganan laporan dari warga dapat menjadi lebih efisien dan transparan, sehingga terciptanya lingkungan yang lebih baik.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default PortalLaporanWargaDescription;
