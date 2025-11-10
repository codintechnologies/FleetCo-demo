import { Trip, Vehicle } from './types';

export const vehicles: Vehicle[] = [
	{ id: 'v1', regNo: 'T 123 ABC', make: 'Toyota', model: 'Hiace', year: 2022, status: 'en_route', primaryDriver: 'John Doe' },
	{ id: 'v2', regNo: 'T 456 DEF', make: 'Hino', model: '300', year: 2020, status: 'in_yard', primaryDriver: 'Jane Smith' },
	{ id: 'v3', regNo: 'TR-78', make: 'Generic', model: 'Flatbed Trailer', year: 2019, status: 'maintenance' }
];

export const trips: Trip[] = [
	{ id: 't1', vehicleId: 'v1', driver: 'John Doe', origin: 'Dar es Salaam', destination: 'Arusha', distanceKm: 450, status: 'en_route', startDate: '2024-01-30' },
	{ id: 't2', vehicleId: 'v2', driver: 'Jane Smith', origin: 'Dodoma', destination: 'Mwanza', distanceKm: 380, status: 'delayed', startDate: '2024-01-28' }
];

