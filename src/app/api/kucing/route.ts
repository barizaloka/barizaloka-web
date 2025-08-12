import { NextResponse } from "next/server";

export function GET() {
  // Data dummy nama-nama kucing
    const namaKucing = [
      { id: 1, nama: 'Milo' },
      { id: 2, nama: 'Luna' },
      { id: 3, nama: 'Oreo' },
      { id: 4, nama: 'Simba' },
      { id: 5, nama: 'Nala' },
      { id: 6, nama: 'Leo' },
      { id: 7, nama: 'Chloe' },
      { id: 8, nama: 'Bella' },
      { id: 9, nama: 'Oliver' },
      { id: 10, nama: 'Mimi' },
    ];

    // Mengirimkan respons dalam format JSON
    return NextResponse.json(namaKucing);
}