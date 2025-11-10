export type Vehicle = {
	id: string;
	regNo: string;
	make: string;
	model: string;
	year: number;
	status: 'in_yard' | 'en_route' | 'maintenance';
	primaryDriver?: string;
};

export type Trip = {
	id: string;
	vehicleId: string;
	driver: string;
	origin: string;
	destination: string;
	distanceKm: number;
	status: 'planned' | 'en_route' | 'completed' | 'delayed';
	startDate: string;
};

