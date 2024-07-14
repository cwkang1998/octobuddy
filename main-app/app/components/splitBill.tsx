/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2MNf0nnEANm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";
import { type SetStateAction, useEffect, useState } from "react";
import type { Bill } from "../types/bill";

export default function SplitBill() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const billAmount = searchParams.get("amount");
	const billPurpose = searchParams.get("purpose");
	const contactsEncoded = searchParams.get("contacts");
	const [splitMethod, setSplitMethod] = useState("equal");

	const [members, setMembers] = useState<
		{ name: string; amount: number; address: string }[]
	>([]);
	const [totalBill, setTotalBill] = useState(0);

	useEffect(() => {
		if (billAmount) {
			setTotalBill(Number.parseFloat(billAmount));
		}
		if (contactsEncoded) {
			setMembers(
				JSON.parse(decodeURIComponent(contactsEncoded)).map((contact: any) => ({
					...contact,
					amount: 0,
				})),
			);
		}
	}, [billAmount, contactsEncoded]);

	const handleSplitMethodChange = (method: SetStateAction<string>) => {
		setSplitMethod(method);
	};
	const handleMemberAmountChange = (index: number, amount: number) => {
		const updatedMembers = [...members];
		updatedMembers[index].amount = amount;
		setMembers(updatedMembers);
	};

	const calculateEqualShare = () => {
		return totalBill / members.length;
	};
	const calculateBalance = () => {
		const totalContribution = members.reduce(
			(acc, member) => acc + member.amount,
			0,
		);
		return totalBill - totalContribution;
	};

	const handleConfirmSplit = () => {
		const myShare =
			splitMethod === "equal"
				? calculateEqualShare()
				: members.find((member) => member.name === "Me")?.amount || 0;

		const people = members.map((member) => ({
			name: member.name,
			amount: splitMethod === "equal" ? calculateEqualShare() : member.amount,
			address: member.address,
		}));

		const amountDue = totalBill - myShare;

		const newBill: Bill = {
			description: billPurpose || "",
			people,
			amountDue,
		};

		const billData = encodeURIComponent(JSON.stringify(newBill));
		console.log(newBill);
		router.push(`/home?bill=${billData}`);
	};
	return (
		<div className="w-full max-w-2xl mx-auto p-6 md:p-8">
			<div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
				<h1 className="text-2xl font-bold">Split the Bill</h1>

				<div className="flex items-center justify-between mt-2 mb-2">
					<div className="flex items-center justify-center gap-4">
						<Button
							className="w-full"
							variant="default"
							onClick={() => handleSplitMethodChange("equal")}
						>
							Equal Split
						</Button>
						<Button
							className="w-full"
							variant="secondary"
							onClick={() => handleSplitMethodChange("exact")}
						>
							Custom Split
						</Button>
					</div>
				</div>
				<div className="mb-6">
					<div className="bg-muted rounded-md p-4">
						<p className="text-lg font-bold">
							{splitMethod === "equal"
								? `Each person owes $${calculateEqualShare().toFixed(2)}`
								: "Enter each person's contribution"}
						</p>
					</div>
				</div>
				<div className="space-y-4">
					{members.map((member, index) => (
						<div key={index} className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<Avatar className="w-8 h-8">
									<AvatarImage src="/placeholder-user.jpg" />
									<AvatarFallback>
										{member.name.charAt(0).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<span className="font-medium">{member.name}</span>
							</div>
							{splitMethod === "equal" ? (
								<span className="font-medium">
									${calculateEqualShare().toFixed(2)}
								</span>
							) : (
								<Input
									type="number"
									value={member.amount}
									onChange={(e) =>
										handleMemberAmountChange(
											index,
											Number.parseFloat(e.target.value),
										)
									}
									className="w-32"
								/>
							)}
						</div>
					))}
				</div>
				<Separator className="my-6" />
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<span className="font-medium">Total Bill</span>
						<span className="font-medium">${totalBill.toFixed(2)}</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="font-medium">Total Contribution</span>
						<span className="font-medium">
							$
							{members
								.reduce((acc, member) => acc + member.amount, 0)
								.toFixed(2)}
						</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="font-medium">Balance</span>
						<span
							className={`font-medium ${calculateBalance() >= 0 ? "text-green-500" : "text-red-500"}`}
						>
							${calculateBalance().toFixed(2)}
						</span>
					</div>
				</div>
				<div className="mt-6 flex justify-end">
					<Button type="submit" onClick={handleConfirmSplit}>
						Confirm Split
					</Button>
				</div>
			</div>
		</div>
	);
}
