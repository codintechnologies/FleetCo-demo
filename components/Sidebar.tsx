import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const nav = [
	{ href: '/', label: 'Dashboard', icon: '🏠' },
	{ href: '/(modules)/assets', label: 'Asset', icon: '🚚' },
	{ href: '/(modules)/trips', label: 'Trips', icon: '🧭' },
	{ href: '/(modules)/tyres', label: 'Tyres', icon: '🛞' },
	{ href: '/(modules)/fuel', label: 'Fuel', icon: '⛽' },
	{ href: '/(modules)/maintenance', label: 'Maintenance', icon: '🧰' },
	{ href: '/(modules)/safety', label: 'Safety', icon: '🛡️' },
	{ href: '/(modules)/hr', label: 'User Management', icon: '👥' },
	{ href: '/(modules)/users', label: 'Access', icon: '🔐' },
	{ href: '/(modules)/settings', label: 'Settings', icon: '⚙️' }
];

export function Sidebar() {
	const pathname = usePathname();
	return (
		<aside className="w-64 bg-white border-r flex flex-col">
			<div className="h-16 flex items-center gap-2 px-4 border-b">
				<div className="h-9 w-9 rounded-md bg-primary text-white grid place-items-center font-bold">FC</div>
				<div className="font-semibold text-lg">FleetCo</div>
			</div>
			<nav className="p-3 space-y-1 overflow-y-auto">
				{nav.map(item => (
					<Link
						key={item.href}
						href={item.href}
						className={clsx(
							'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium',
							pathname === item.href
								? 'bg-primary text-white'
								: 'hover:bg-surface-alt text-gray-700'
						)}
					>
						<span className="w-5 text-center">{item.icon}</span>
						{item.label}
					</Link>
				))}
			</nav>
		</aside>
	);
}

