"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2Eu6afFVV5B
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import type { JSX, SVGProps } from "react";

export default function Home() {
  const debts = [
    { description: "Rubys Birthday Dinner", people: 6, amountDue: 204.0 },
    { description: "Lunch with friends", people: 4, amountDue: 50.0 },
    { description: "Groceries", people: 2, amountDue: 30.0 },
    { description: "Gas", people: 1, amountDue: 20.0 },
  ];

  const receivables = [
    { description: "Office Party", people: 10, amountDue: 150.0 },
  ];

  const totalDebt = debts.reduce((total, debt) => total + debt.amountDue, 0);
  const totalReceivable = receivables.reduce(
    (total, receivable) => total + receivable.amountDue,
    0
  );
  const totalDebtDue = totalDebt - totalReceivable;

  const router = useRouter();
  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">Total Debt Due</p>
          <h1 className="text-4xl font-bold">${totalDebtDue.toFixed(2)}</h1>
        </div>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>UA</AvatarFallback>
        </Avatar>
      </div>
      <Button
        className="w-full"
        variant="outline"
        onClick={() => router.push("/bill")}
      >
        Create Expenses
      </Button>
      <div>
        <h2 className="text-lg font-bold">Debts</h2>
        <Card className="mb-2 mt-2">
          <Button
            className="w-full bg-primary text-primary-foreground"
            onClick={() => router.push(`/payment?amount=${totalDebtDue.toFixed(2)}`)}
          >
            Settle All Balances
          </Button>
        </Card>

        <div className="space-y-4">
                    {debts.map((debt, index) => (
                        <Card key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                            <div>
                                <h3 className="text-base font-semibold">{debt.description}</h3>
                                <p className="text-sm text-muted-foreground">{debt.people} people</p>
                                <p className="text-sm text-muted-foreground">Amount due: ${debt.amountDue.toFixed(2)}</p>
                            </div>
                            <Button className="bg-primary text-primary-foreground">Pay</Button>
                        </Card>
                    ))}
                </div>
      </div>
      <div>
                <h2 className="text-lg font-bold">Receivables</h2>
                {receivables.map((receivable, index) => (
                    <Card key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <div>
                            <h3 className="text-base font-semibold">{receivable.description}</h3>
                            <p className="text-sm text-muted-foreground">{receivable.people} people</p>
                            <p className="text-sm text-muted-foreground">Amount due: ${receivable.amountDue.toFixed(2)}</p>
                        </div>
                        <ChevronRightIcon className="w-6 h-6 text-muted-foreground" />
                    </Card>
                ))}
            </div>
    </div>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
