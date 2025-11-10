import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';

export default function HRPage() {
	return (
		<div className="space-y-6">
			<PageHeader title="Fleet HR" subtitle="Drivers, training, certifications and payroll exports" />
			<Card title="Driver Directory">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="p-4 rounded-lg border bg-white">
						<div className="font-medium">John Doe</div>
						<div className="text-sm text-gray-500">Primary vehicle: T 123 ABC • Valid until: 2026-01-30</div>
					</div>
					<div className="p-4 rounded-lg border bg-white">
						<div className="font-medium">Jane Smith</div>
						<div className="text-sm text-gray-500">Primary vehicle: T 456 DEF • Valid until: 2025-11-02</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

