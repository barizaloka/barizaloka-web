'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PortalLaporanWargaDescription: React.FC = () => {
    // Variasi untuk animasi
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 font-sans">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-gray-800 mb-10 text-center"
                >
                    Tentang Portal Laporan Warga 📝
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl mx-auto"
                >
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        <span className="font-semibold text-indigo-600">Portal Laporan Warga</span> adalah sebuah platform daring yang dirancang untuk memfasilitasi warga dalam menyampaikan laporan terkait berbagai isu atau kejadian di lingkungan mereka. 🤝
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
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4 text-gray-700"
                    >
                        <motion.li variants={itemVariants} className="flex items-start gap-2">
                            <span>✍️</span>
                            <span>
                                Formulir Pelaporan: Warga dapat dengan mudah mengisi formulir untuk mengirimkan laporan, yang meliputi detail seperti judul laporan, deskripsi kejadian, pemilihan desa (contoh: Karangasem), dan informasi lokasi yang lebih spesifik.
                            </span>
                        </motion.li>
                        <motion.li variants={itemVariants} className="flex items-start gap-2">
                            <span>📜</span>
                            <span>
                                Daftar Laporan Terbaru: Halaman utama menampilkan daftar laporan-laporan terbaru yang telah dikirimkan oleh warga, memberikan gambaran terkini mengenai isu-isu yang ada.
                            </span>
                        </motion.li>
                        <motion.li variants={itemVariants} className="flex items-start gap-2">
                            <span>🧭</span>
                            <span>
                                Navigasi Sederhana: Terdapat menu navigasi yang jelas dengan opsi Beranda dan Tentang untuk memudahkan pengguna dalam menjelajahi situs.
                            </span>
                        </motion.li>
                        <motion.li variants={itemVariants} className="flex items-start gap-2">
                            <span>❤️</span>
                            <span>
                                Motto Pelayanan: Portal ini memiliki motto Melayani dengan sepenuh hati untuk kemajuan bersama, yang mencerminkan komitmennya terhadap pelayanan publik.
                            </span>
                        </motion.li>
                    </motion.ul>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-gray-700 mt-8 leading-relaxed"
                    >
                        Dengan adanya portal ini, diharapkan proses penyampaian dan penanganan laporan dari warga dapat menjadi lebih efisien dan transparan, sehingga terciptanya lingkungan yang lebih baik. 🌿
                    </motion.p>

                    <div className="flex justify-center mt-8">
                        {/* Mengganti Link dari next/link dengan tag <a> standar untuk kompatibilitas */}
                        <motion.a
                            href="https://laporloka.my.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-colors transform"
                        >
                            Kunjungi Website Sekarang! 🚀
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PortalLaporanWargaDescription;
