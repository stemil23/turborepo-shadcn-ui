

import { Charts } from "@repo/ui/components/demo/blockDemo";

export default function Page(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col gap-y-2">
				<h1 className="text-4xl font-bold">Docs</h1>
				<Charts />
			</div>
		</main>
	);
}