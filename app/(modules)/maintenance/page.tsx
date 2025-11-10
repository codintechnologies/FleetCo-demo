import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';

export default function MaintenancePage() {
	return (
		<div className="space-y-6">
			<PageHeader title="Maintenance" subtitle="Preventive schedules and work orders" />
			<Card title="Open Work Orders">
				<ul className="space-y-3">
					<li className="p-3 rounded border bg-white flex justify-between">
						<span>Brake pads replacement • T 123 ABC</span>
						<span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">High</span>
					</li>
					<li className="p-3 rounded border bg-white flex justify-between">
						<span>Oil change • T 456 DEF</span>
						<span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span>
					</li>
				</ul>
			</Card>
		</div>
	);
}

