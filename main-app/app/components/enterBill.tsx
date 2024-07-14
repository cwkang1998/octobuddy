"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7UMLeG8n0qu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { type SetStateAction, useState } from "react";

export default function EnterBill() {
	const router = useRouter();
	const [billAmount, setBillAmount] = useState("");
	const [billPurpose, setBillPurpose] = useState("");

	const handleAmountChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setBillAmount(e.target.value);
	};

	const handlePurposeChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setBillPurpose(e.target.value);
	};

	const handleSubmit = () => {
		if (billAmount && billPurpose) {
			router.push(
				`/addmembers?amount=${billAmount}&purpose=${encodeURIComponent(
					billPurpose,
				)}`,
			);
		} else {
			alert("Please enter both the bill amount and purpose");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-background px-4">
			<div className="w-full max-w-md space-y-8">
				<div className="flex flex-col items-center space-y-2">
					<p className="text-muted-foreground">Please input bill amount</p>
					<div className="relative flex items-center text-6xl font-bold">
						<span className="absolute left-2 text-4xl text-muted-foreground">
							$
						</span>
						<input
							type="number"
							value={billAmount}
							onChange={handleAmountChange}
							className="w-full pl-8 bg-transparent border-none outline-none text-center"
							placeholder="0.00"
						/>
					</div>
				</div>
				<div className="w-full">
					<Input
						type="text"
						placeholder="What is this bill for?"
						className="text-base"
						value={billPurpose}
						onChange={handlePurposeChange}
					/>
				</div>
				<Button className="w-full" onClick={handleSubmit}>
					Create Group
				</Button>
			</div>
		</div>
	);
}
