type Props = { title: string; subtitle?: string };

export function PageHeader({ title, subtitle }: Props) {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h1 className="text-2xl font-bold">{title}</h1>
				{subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
			</div>
		</div>
	);
}

