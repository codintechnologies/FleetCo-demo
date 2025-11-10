import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';

export default function SafetyPage() {
	return (
		<div className="space-y-6">
			<PageHeader title="Safety Management" subtitle="Incidents, inspections and compliance" />
			<Card title="Recent Incidents">
				<div className="space-y-3">
					<div className="p-3 rounded border bg-white">
						<div className="font-medium">Minor collision • T 789 GHI</div>
						<div className="text-sm text-gray-500">No injuries • Claim filed</div>
					</div>
					<div className="p-3 rounded border bg-white">
						<div className="font-medium">Pre-trip inspection failed • T 456 DEF</div>
						<div className="text-sm text-gray-500">Headlight not working • Fixed</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

