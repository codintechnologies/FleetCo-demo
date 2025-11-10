'use client';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';
import { useQuery } from '@tanstack/react-query';
import { Trip } from '@/lib/types';

export default function TripsPage() {
	const { data } = useQuery<Trip[]>({
		queryKey: ['trips'],
		queryFn: async () => {
			const res = await fetch('/api/trips');
			return res.json();
		}
	});

	return (
		<div className="space-y-6">
			<PageHeader title="Trips" subtitle="Plan, dispatch, track and settle trips" />
			<Card title="Recent Trips">
				<div className="divide-y">
					{(data ?? []).map(t => (
						<div key={t.id} className="py-3 flex items-center justify-between">
							<div>
								<div className="font-medium">{t.origin} → {t.destination}</div>
								<div className="text-sm text-gray-500">{t.driver} • {t.distanceKm} km</div>
							</div>
							<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded capitalize">{t.status.replace('_',' ')}</span>
						</div>
					))}
				</div>
			</Card>
		</div>
	);
}

