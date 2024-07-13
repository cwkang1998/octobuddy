import { Badge } from "@/components/ui/badge";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6GGAhGCVrfi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { JSX, SVGProps } from "react";

import Header from "./components/header";
import RecentTransactions from "./components/recentTransactions";
import SideBar from "./components/sideBar";

export default function Dashboard() {
	return (
		<div className="grid min-h-screen w-full grid-cols-[280px_1fr] overflow-hidden">
			<SideBar />
			<div className="flex flex-col">
				<Header />
				<main className="flex-1 p-4 md:p-6">
					<div className="grid gap-4 md:gap-8">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
							<Card>
								<CardHeader className="pb-3">
									<CardTitle>You Owe</CardTitle>
									<CardDescription className="text-4xl font-bold">
										$125.00
									</CardDescription>
								</CardHeader>
								<CardFooter>
									<div className="text-sm text-muted-foreground">
										To 3 friends
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader className="pb-3">
									<CardTitle>Owed to You</CardTitle>
									<CardDescription className="text-4xl font-bold">
										$75.00
									</CardDescription>
								</CardHeader>
								<CardFooter>
									<div className="text-sm text-muted-foreground">
										From 2 friends
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader className="pb-3">
									<CardTitle>Total Expenses</CardTitle>
									<CardDescription className="text-4xl font-bold">
										$450.00
									</CardDescription>
								</CardHeader>
								<CardFooter>
									<div className="text-sm text-muted-foreground">
										In the last 30 days
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader className="pb-3">
									<CardTitle>Groups</CardTitle>
									<CardDescription className="text-4xl font-bold">
										4
									</CardDescription>
								</CardHeader>
								<CardFooter>
									<div className="text-sm text-muted-foreground">
										You belong to
									</div>
								</CardFooter>
							</Card>
						</div>
						<RecentTransactions />
					</div>
				</main>
			</div>
		</div>
	);
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>XIcon</title>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
