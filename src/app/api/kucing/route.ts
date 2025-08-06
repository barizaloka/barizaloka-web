import { NextResponse } from "next/server";

export function GET() {
  // Data dummy nama-nama kucing
    const namaKucing = [
      { id: 1, nama: 'Milo' },
      { id: 2, nama: 'Luna' },
      { id: 3, nama: 'Oreo' },
      { id: 4, nama: 'Simba' },
    ];

    // Mengirimkan respons dalam format JSON
    return NextResponse.json(namaKucing);
}