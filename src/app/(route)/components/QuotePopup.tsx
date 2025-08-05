// components/QuotePopup.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Definisi tipe data untuk quote
interface Quote {
  id: number;
  title: string;
	summary: string;
  content: string;
  author?: string;
}

interface ModalProps {
  quote: Quote;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ quote, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-purple-700 mb-4">{quote.title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">{quote.content}</p>
        {quote.author && (
          <p className="text-right text-purple-500 font-semibold italic">- {quote.author}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

const QuotePopup: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      setError(null);
      try {
        setQuote({
            title: "Motivasi Hidup",
						summary: "Kutipan yang menginspirasi untuk hidup lebih baik.",
            content: "Belajar adalah kunci untuk membuka pintu kesuksesan.",
            id: 2
        });
      } catch (err) {
        setError('Gagal memuat kutipan.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  const handleClose = () => {
    setIsModalOpen(false); // Tutup modal
    setIsPopupVisible(false); // Hapus popup
  };

  if (isLoading || error || !quote) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {isModalOpen && <Modal quote={quote} onClose={handleClose} />}
      </AnimatePresence>

      <AnimatePresence>
        {isPopupVisible && ( // Gunakan state ini untuk mengontrol render
          <motion.div
            initial={{ opacity: 0, x: -100, y: 100 }} // Ubah x menjadi -100 untuk animasi dari kiri
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -100, y: 100 }} // Ubah x menjadi -100 untuk animasi keluar ke kiri
            transition={{ duration: 0.5, type: "spring", damping: 10 }}
            className="fixed bottom-4 left-4 z-50 p-4 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-purple-500/50 transition-shadow"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex items-start">
              <div className="text-3xl mr-3 text-purple-600">💡</div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-purple-700">Kutipan Menggugah Jiwa</p>
                <p className="text-xs text-gray-600 line-clamp-2">{quote.summary}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuotePopup;