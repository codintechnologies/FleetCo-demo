import './globals.css';
import type { ReactNode } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';
import { Providers } from './providers';

export const metadata = {
	title: 'FleetCo | Transport Management',
	description: 'SaaS platform for transport and fleet management'
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-surface text-gray-900 antialiased">
				<Providers>
					<div className="flex h-screen">
						<Sidebar />
						<div className="flex-1 flex flex-col min-w-0">
							<Topbar />
							<main className="p-6 overflow-y-auto">{children}</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}

