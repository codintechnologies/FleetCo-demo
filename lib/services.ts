import { trips, vehicles } from './mock';
import { Trip, Vehicle } from './types';

export async function fetchVehicles(): Promise<Vehicle[]> {
	// Simulate latency
	await new Promise(r => setTimeout(r, 200));
	return vehicles;
}

export async function fetchTrips(): Promise<Trip[]> {
	await new Promise(r => setTimeout(r, 200));
	return trips;
}

