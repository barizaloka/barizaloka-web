'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

// Definisi interface untuk pesan chat
interface ChatMessage {
  text: string;
  isUser: boolean;
}

const FloatButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    // Menambahkan pesan user dengan properti isUser: true
    setMessages(prevMessages => [...prevMessages, { text, isUser: true }]);
    setInput('');
    setIsLoading(true);

    try {
      // Panggil endpoint API lokal kita, bukan Gemini API secara langsung
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: { parts: [{ text: text }] } })
      });

      if (!response.ok) {
        throw new Error('Gagal berkomunikasi dengan server.');
      }

      const result = await response.json();
      const botResponse = result.text || 'Maaf, ada masalah saat memproses permintaan Anda.';

      // Menambahkan pesan dari AI dengan properti isUser: false
      setMessages(prevMessages => [...prevMessages, { text: botResponse, isUser: false }]);

    } catch (error) {
      console.error('Error fetching from local API:', error);
      setMessages(prevMessages => [...prevMessages, { text: 'Maaf, terjadi kesalahan. Silakan coba lagi.', isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);


  const pathname = usePathname();
  // Memeriksa apakah path saat ini dimulai dengan '/roadmap'
  const isRoadmapPage = pathname.startsWith('/roadmap');

  // Jika ini adalah halaman roadmap, jangan render apa pun
  if (isRoadmapPage) {
    return null; // Menggunakan null agar tidak ada elemen yang dirender
  }

  // Nomor WhatsApp tujuan (ganti dengan nomor Anda, format internasional tanpa tanda + atau spasi)
  const whatsappNumber = '6287714625940'; // Contoh: Ganti dengan nomor WhatsApp Anda
  const whatsappMessage = encodeURIComponent('Halo, saya ingin bertanya tentang...'); // Pesan default

  return (
    <>
      {/* Tombol WhatsApp */}
      <div className="fixed bottom-2 right-2 flex flex-col items-end gap-4 z-50">
        {/* Tombol WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 20.91A.996.996 0 0 0 1 22h22a1 1 0 0 0 .943-1.09l-2-18a1 1 0 0 0-.943-.91H2.057a1 1 0 0 0-.943.91l-2 18zM17.5 12.25c0-.414-.336-.75-.75-.75h-2a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 .75.75h2a.75.75 0 0 0 .75-.75v-2zm-6 0c0-.414-.336-.75-.75-.75h-2a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 .75.75h2a.75.75 0 0 0 .75-.75v-2zM5.5 12.25c0-.414-.336-.75-.75-.75h-2a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 .75.75h2a.75.75 0 0 0 .75-.75v-2z" />
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            <path d="M16.6 7.4c-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6l-1.8 1.8-1.8-1.8c-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6c-.8.8-.8 2.1 0 2.9l1.8 1.8-1.8 1.8c-.4.4-.6.9-.6 1.4s.2 1 .6 1.4c.8.8 2.1.8 2.9 0l1.8-1.8 1.8 1.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2.1 0-2.9l-1.8-1.8 1.8-1.8c.8-.8.8-2.1 0-2.9z" />
          </svg>
          Chat via WA
        </a>

        {/* Tombol Chatbox AI */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Tanya AI
        </button>
      </div>

      {/* Chatbox Modal */}
      {isChatOpen && (
        <div className="
          fixed bottom-3 left-2 right-2 h-[60vh] /* Mobile styles: full width, 60% height, sticks to bottom */
          sm:bottom-24 sm:right-8 sm:left-auto sm:max-w-sm sm:h-96 /* Desktop styles: original positioning and size */
          bg-white rounded-xl shadow-2xl flex flex-col z-50
        ">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-purple-600 text-white rounded-t-xl">
            <h3 className="font-bold">Chat dengan AI (Beta)</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages Area */}
          <div ref={chatMessagesRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 italic">
                Halo! Berikut adalah AI yang masih tahap pengembangan.
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${msg.isUser ? 'bg-purple-200 text-purple-900' : 'bg-gray-100 text-gray-800'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3 animate-pulse">
                  ...
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              placeholder="Ketik pesan Anda..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !isLoading) {
                  sendMessage(input);
                }
              }}
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-800"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={isLoading}
              className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition duration-200 disabled:bg-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatButton;
