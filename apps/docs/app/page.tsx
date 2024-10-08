"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { ToastDemo } from "@repo/ui/components/demo/toastDemo";
import { NeonGradientCard } from "@repo/ui/components/magicui/neon-gradient-card";
import { RainbowButton } from "@repo/ui/components/magicui/rainbow-button";
import { RetroGridDemo } from "../components/retrogrid";

export default function Page(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col  p-24">
			<div className="flex flex-col gap-y-2">
				<h1 className="text-4xl font-bold">Docs</h1>
				<div className="flex flex-col m-9">
					<RainbowButton>Get Unlimited Access</RainbowButton>
				</div>
				<Button>Click me</Button>
				<Label>Email</Label>
				<Input type="email" placeholder="Email" />
				<Button>Submit</Button>
				<ToastDemo />
				<NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
					</span>
				</NeonGradientCard>

				<RetroGridDemo />
			</div>
		</main>
	);
}