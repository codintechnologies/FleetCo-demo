import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';

export default function UsersPage() {
	return (
		<div className="space-y-6">
			<PageHeader title="User Management" subtitle="Roles, permissions and teams" />
			<Card title="Team Members">
				<ul className="space-y-2">
					<li className="flex items-center justify-between p-3 border rounded bg-white">
						<span>Default User</span>
						<span className="text-xs bg-primary-light text-primary-dark px-2 py-1 rounded">Fleet Manager</span>
					</li>
					<li className="flex items-center justify-between p-3 border rounded bg-white">
						<span>Operations</span>
						<span className="text-xs bg-primary-light text-primary-dark px-2 py-1 rounded">Dispatcher</span>
					</li>
				</ul>
			</Card>
		</div>
	);
}

