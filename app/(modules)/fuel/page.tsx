import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';

export default function FuelPage() {
	return (
		<div className="space-y-6">
			<PageHeader title="Fuel Management" subtitle="Issues, consumption, variance and cost" />
			<Card title="Monthly Overview">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="p-4 rounded-lg border bg-white">
						<div className="text-sm text-gray-500">Volume</div>
						<div className="text-2xl font-semibold">28,400 L</div>
					</div>
					<div className="p-4 rounded-lg border bg-white">
						<div className="text-sm text-gray-500">Cost</div>
						<div className="text-2xl font-semibold">$34,120</div>
					</div>
					<div className="p-4 rounded-lg border bg-white">
						<div className="text-sm text-gray-500">Variance</div>
						<div className="text-2xl font-semibold text-red-600">-2.1%</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

