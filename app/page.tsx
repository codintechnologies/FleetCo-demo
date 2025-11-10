import { PageHeader } from '@/components/PageHeader';
import { Stat } from '@/components/Stat';

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<PageHeader title="Dashboard" subtitle="Good morning! Here's your fleet overview." />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Stat label="Active Trips" value="12" trend="+3 today" />
				<Stat label="Vehicles En Route" value="38" trend="65% utilization" />
				<Stat label="Open Work Orders" value="7" trend="2 urgent" />
				<Stat label="Fuel Cost (30d)" value="$24,500" trend="+4.2%" />
			</div>
		</div>
	);
}

