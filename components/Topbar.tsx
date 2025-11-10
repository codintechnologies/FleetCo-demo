export function Topbar() {
	return (
		<header className="h-16 border-b bg-white flex items-center justify-between px-4">
			<div className="flex-1">
				<input
					type="text"
					placeholder="Search for actions or people"
					className="w-full max-w-xl rounded-md border px-3 py-2 text-sm bg-surface focus:outline-none"
				/>
			</div>
			<div className="flex items-center gap-3">
				<div className="h-8 w-8 rounded-full bg-primary text-white grid place-items-center">👤</div>
			</div>
		</header>
	);
}

