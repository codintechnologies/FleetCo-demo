import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';
import { useQuery } from '@tanstack/react-query';
import { Vehicle } from '@/lib/types';

export default function AssetsPage() {
	const { data } = useQuery<Vehicle[]>({
		queryKey: ['assets'],
		queryFn: async () => {
			const res = await fetch('/api/assets');
			return res.json();
		}
	});

	return (
		<div className="space-y-6">
			<PageHeader title="Fleet Assets" subtitle="Vehicles, trailers and equipment" />
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{(data ?? []).map(v => (
					<Card key={v.id} title={v.regNo} subtitle={`${v.make} ${v.model} • ${v.year} • ${v.status.replace('_',' ')}`} />
				))}
			</div>
		</div>
	);
}

