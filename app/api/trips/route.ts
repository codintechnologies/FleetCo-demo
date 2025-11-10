import { NextResponse } from 'next/server';
import { fetchTrips } from '@/lib/services';

export async function GET() {
	const data = await fetchTrips();
	return NextResponse.json(data);
}

