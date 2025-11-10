import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';

export default function SettingsPage() {
	return (
		<div className="space-y-6">
			<PageHeader title="Settings" subtitle="Company, billing and integrations" />
			<Card title="Branding">
				<p className="text-sm text-gray-600">
					Add your logo and choose theme colors inspired by the provided SAP-style design.
				</p>
			</Card>
		</div>
	);
}

