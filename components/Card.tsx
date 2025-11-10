import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
	title?: string;
	subtitle?: string;
	className?: string;
	children?: ReactNode;
};

export function Card({ title, subtitle, className, children }: Props) {
	return (
		<div className={clsx('bg-white rounded-xl shadow-card border border-gray-200', className)}>
			{(title || subtitle) && (
				<div className="px-4 py-3 border-b">
					{title && <h3 className="font-semibold">{title}</h3>}
					{subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
				</div>
			)}
			<div className="p-4">{children}</div>
		</div>
	);
}

