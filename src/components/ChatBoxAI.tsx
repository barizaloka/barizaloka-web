'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

// Definisi interface untuk pesan chat
interface ChatMessage {
  text: string;
  isUser: boolean; 
}

const ChatBoxAI: React.FC = () => {
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

  return (
    <>
      {/* Tombol Chatbox */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Tanya AI
      </button>

      {/* Chatbox Modal */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-8 w-full max-w-sm h-96 bg-white rounded-xl shadow-2xl flex flex-col z-50">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-purple-600 text-white rounded-t-xl">
            <h3 className="font-bold">Chat dengan AI</h3>
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
                Halo! Silakan ajukan pertanyaan seputar LMS kami atau hal lainnya.
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      msg.isUser ? 'bg-purple-200 text-purple-900' : 'bg-gray-100 text-gray-800'
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

export default ChatBoxAI;
