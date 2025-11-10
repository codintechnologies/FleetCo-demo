import { NextResponse } from 'next/server';
import { fetchVehicles } from '@/lib/services';

export async function GET() {
	const data = await fetchVehicles();
	return NextResponse.json(data);
}

