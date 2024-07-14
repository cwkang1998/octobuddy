"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/clCTL6mRGzE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Balance {
	name: string;
	address: string;
	amount: number;
}

export default function Payment() {
	const searchParams = useSearchParams();
	const balancesEncoded = searchParams.get("balances");
	const [balances, setBalances] = useState<Balance[]>([]);

	useEffect(() => {
		if (balancesEncoded) {
			const decodedBalances = JSON.parse(decodeURIComponent(balancesEncoded));
			setBalances(decodedBalances);
		}
	}, [balancesEncoded]);

	const totalPayment = balances.reduce(
		(total, balance) => total + balance.amount,
		0,
	);

	return (
		<div className="flex flex-col h-full w-full bg-background text-foreground p-6 md:p-8 lg:p-10">
			<div className="mb-6 md:mb-8 lg:mb-10">
				<h1 className="text-2xl font-bold">Make Payment</h1>
			</div>
			<div className="mb-6 md:mb-8 lg:mb-10 bg-card rounded-md p-4 md:p-6 lg:p-8 shadow-md">
				<div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">
					<h2 className="text-lg font-semibold">Total Payment</h2>
					<div className="text-2xl font-bold">${totalPayment.toFixed(2)}</div>
				</div>
				<div className="space-y-4 md:space-y-6 lg:space-y-8">
					{balances.map((balance, index) => (
						<div key={index} className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
									{balance.name.charAt(0).toUpperCase()}
								</div>
								<div>
									<div className="font-medium">{balance.name}</div>
									<div className="text-muted-foreground text-sm">
										{balance.address.slice(0, 8)}...{balance.address.slice(-4)}
									</div>
								</div>
							</div>
							<div className="font-medium">${balance.amount.toFixed(2)}</div>
						</div>
					))}
				</div>
			</div>
			<div className="mt-auto">
				<Button className="w-full">Confirm Payment</Button>
			</div>
		</div>
	);
}
