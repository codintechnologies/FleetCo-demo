import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';

export default function TyresPage() {
	return (
		<div className="space-y-6">
			<PageHeader title="Tyre Management" subtitle="Inventory, rotation, tread and cost tracking" />
			<Card title="Tyre Inventory">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="p-4 rounded-lg border bg-white">
						<div className="font-medium">11R22.5</div>
						<div className="text-sm text-gray-500">In stock: 24 • Avg tread: 12 mm</div>
					</div>
					<div className="p-4 rounded-lg border bg-white">
						<div className="font-medium">315/80R22.5</div>
						<div className="text-sm text-gray-500">In stock: 14 • Avg tread: 10 mm</div>
					</div>
					<div className="p-4 rounded-lg border bg-white">
						<div className="font-medium">185/70R14</div>
						<div className="text-sm text-gray-500">In stock: 32 • Avg tread: 8 mm</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

