// app/api/quotes/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/barizaloka-web/lib/db';

export async function GET() {
  try {
    const quotes = await prisma.quote.findMany();
    if (quotes.length === 0) {
      return NextResponse.json({ message: "No quotes found" }, { status: 404 });
    }

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    return NextResponse.json(randomQuote);
  } catch (error) {
    console.error('Failed to fetch a random quote:', error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}