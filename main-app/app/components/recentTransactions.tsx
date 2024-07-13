import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kwgX4QsYnLR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function RecentTransactions() {
	return (
		<div>
			<Card>
				<CardHeader className="flex items-center justify-between">
					<CardTitle>Recent Transactions</CardTitle>
					<Button variant="ghost" size="sm">
						View All
					</Button>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Date</TableHead>
								<TableHead>Description</TableHead>
								<TableHead>Amount</TableHead>
								<TableHead>Balance</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>2023-06-01</TableCell>
								<TableCell>Dinner at Acme Restaurant</TableCell>
								<TableCell className="text-red-500">-$45.00</TableCell>
								<TableCell>$125.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>2023-05-28</TableCell>
								<TableCell>Groceries at Supermart</TableCell>
								<TableCell className="text-red-500">-$75.00</TableCell>
								<TableCell>$170.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>2023-05-15</TableCell>
								<TableCell>Rent Payment</TableCell>
								<TableCell className="text-green-500">+$1,200.00</TableCell>
								<TableCell>$245.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>2023-05-10</TableCell>
								<TableCell>Movie Tickets</TableCell>
								<TableCell className="text-red-500">-$25.00</TableCell>
								<TableCell>-$955.00</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
