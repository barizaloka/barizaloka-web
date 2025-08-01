import { NextResponse } from 'next/server';

const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(request: Request) {
	if (!API_KEY) {
		return NextResponse.json({ error: 'GEMINI_API_KEY is not configured.' }, { status: 500 });
	}

	try {
		const { contents } = await request.json(); // Mengambil isi dari body request

		// Payload untuk Gemini API. Menggunakan model gemini-2.5-flash-preview-05-20 yang direkomendasikan.
		const payload = {
			contents: [{
				parts: [{
					text: contents.parts[0].text // Mengambil teks dari pesan pengguna
				}]
			}]
		};

		const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;

		let response;
		let retries = 0;
		const maxRetries = 5;
		const baseDelay = 1000;

		// Logika retry dengan exponential backoff
		while (retries < maxRetries) {
			try {
				response = await fetch(apiUrl, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload)
				});

				if (response.ok) {
					break;
				} else if (response.status === 429) {
					retries++;
					const delay = baseDelay * Math.pow(2, retries);
					await new Promise(resolve => setTimeout(resolve, delay));
				} else {
					throw new Error(`API error: ${response.statusText}`);
				}
			} catch (error) {
				retries++;
				const delay = baseDelay * Math.pow(2, retries);
				await new Promise(resolve => setTimeout(resolve, delay));
				if (retries === maxRetries) {
					throw error;
				}
			}
		}

		if (!response || !response.ok) {
			throw new Error('Failed to fetch from Gemini API after multiple retries.');
		}

		const result = await response.json();
		const botResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text || 'Maaf, ada masalah saat memproses permintaan Anda.';

		// Mengembalikan respons dari AI ke klien
		return NextResponse.json({ text: botResponse });

	} catch (error) {
		console.error('Error in AI API endpoint:', error);
		return NextResponse.json({ error: 'Terjadi kesalahan di server.' }, { status: 500 });
	}
}
