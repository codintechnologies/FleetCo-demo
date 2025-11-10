type Props = { label: string; value: string; trend?: string };

export function Stat({ label, value, trend }: Props) {
	return (
		<div className="bg-white rounded-xl border border-gray-200 shadow-card p-4">
			<div className="text-sm text-gray-500">{label}</div>
			<div className="mt-1 text-3xl font-semibold">{value}</div>
			{trend && <div className="text-xs text-gray-500 mt-1">{trend}</div>}
		</div>
	);
}

