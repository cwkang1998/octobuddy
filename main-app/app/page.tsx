"use client";
import { Button } from "@/components/ui/button";

import { useEffect, useState, type JSX, type SVGProps } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePrivy } from "@privy-io/react-auth";

export default function Page() {
	const router = useRouter();
	const { authenticated, login } = usePrivy();

	useEffect(() => {
		if (authenticated) {
			router.push("/home");
		}
	}, [authenticated, router]);

	return (
		<div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center space-y-8">
			<div className="flex flex-col items-center space-y-4">
				{/* <img src="/@/public/logo.png" alt="OctoBuddy Logo" className="w-20 h-20" /> */}

				<Image src="/logo.png" alt="OctoBuddy Logo" width={80} height={80} />
				<h1 className="text-3xl font-bold">OctoBuddy</h1>
				<p className="text-center text-sm">
					Seamless group payments from every chain
				</p>
				<div className="flex flex-col space-y-4 w-full max-w-xs">
					<Button
						className="w-full bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-450"
						onClick={() => login()}
					>
						Sign In
					</Button>
				</div>
			</div>
		</div>
	);
}
