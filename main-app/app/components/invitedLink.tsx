"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P4vSv7hCq7f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function InvitedLink() {
	const router = useRouter();
	return (
		<div className="w-full max-w-md mx-auto p-6 bg-background rounded-lg shadow-lg">
			<div className="space-y-4">
				<div className="text-center">
					<h1 className="text-2xl font-bold">Join Group</h1>
					<p className="text-muted-foreground">
						You've been invited to join a group. Enter your details to accept
						the invitation.
					</p>
				</div>
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input id="name" placeholder="Enter your name" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="wallet">Wallet Address</Label>
					<Input id="wallet" placeholder="Enter your wallet address" />
				</div>
				<Button className="w-full" onClick={() => router.push("/groupview")}>
					Join Group
				</Button>
			</div>
		</div>
	);
}
