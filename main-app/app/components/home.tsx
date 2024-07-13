"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2Eu6afFVV5B
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Bill } from "../types/bill";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [debts, setDebts] = useState<Bill[]>([
    {
      description: "Rubys Birthday Dinner",
      people: [
        {
          name: "John Doe",
          amount: 34,
          address: "0x123456789abcdef0123456789abcdef01234567",
        },
        {
          name: "Alice Williams",
          amount: 34,
          address: "0xfedcba9876543210fedcba9876543210fedcba9",
        },
        {
          name: "Bob Johnson",
          amount: 34,
          address: "0x0123456789abcdef0123456789abcdef01234567",
        },
        {
          name: "Tom Davis",
          amount: 34,
          address: "0x0123456789abcdef0123456789abcdef01234567",
        },
        { name: "Sarah Smith", amount: 34, address: "0x5678...9012" },
        { name: "Mike Johnson", amount: 34, address: "0x3456...7890" },
      ],
      amountDue: 204.0,
    },
    {
      description: "Lunch with friends",
      people: [
        {
          name: "John Doe",
          amount: 12.5,
          address: "0x123456789abcdef0123456789abcdef01234567",
        },
        {
          name: "Alice Williams",
          amount: 12.5,
          address: "0xfedcba9876543210fedcba9876543210fedcba9",
        },
        {
          name: "Bob Johnson",
          amount: 12.5,
          address: "0x0123456789abcdef0123456789abcdef01234567",
        },
        {
          name: "Tom Davis",
          amount: 12.5,
          address: "0x0123456789abcdef0123456789abcdef01234567",
        },
      ],
      amountDue: 50.0,
    },
    {
      description: "Groceries",
      people: [
        {
          name: "John Doe",
          amount: 15,
          address: "0x123456789abcdef0123456789abcdef01234567",
        },
        {
          name: "Alice Williams",
          amount: 15,
          address: "0xfedcba9876543210fedcba9876543210fedcba9",
        },
      ],
      amountDue: 30.0,
    },
   
  ]);

  const [receivables, setReceivables] = useState<Bill[]>([
    {
      description: "Office Party",
      people: [
        {
          name: "John Doe",
          amount: 50,
          address: "0x123456789abcdef0123456789abcdef01234567",
        },
        {
          name: "Alice Williams",
          amount: 50,
          address: "0xfedcba9876543210fedcba9876543210fedcba9",
        },
        {
          name: "Bob Johnson",
          amount: 50,
          address: "0x0123456789abcdef0123456789abcdef01234567",
        },
      ],
      amountDue: 150.0,
    },
  ]);

  const addedBills = new Set();

  useEffect(() => {
    const billData = searchParams.get("bill");
    if (billData) {
      const newBill: Bill = JSON.parse(decodeURIComponent(billData));
      if (!addedBills.has(newBill.description)) {
        setReceivables((prevReceivables) => [...prevReceivables, newBill]);
        addedBills.add(newBill.description);
      }
    }
  }, [searchParams]);

  const totalDebt = debts.reduce((total, debt) => total + debt.amountDue, 0);
  const totalReceivable = receivables.reduce(
    (total, receivable) => total + receivable.amountDue,
    0
  );
  const totalDebtDue = totalDebt - totalReceivable;

  const router = useRouter();

  const accumulateBalances = () => {
    const balances: { [key: string]: { name: string; address: string; amount: number } } = {};

    debts.forEach(debt => {
      debt.people.forEach(person => {
        if (!balances[person.address]) {
          balances[person.address] = { name: person.name, address: person.address, amount: 0 };
        }
        balances[person.address].amount += person.amount;
      });
    });

    return Object.values(balances);
  };

  const handleSettleAllBalances = () => {
    const accumulatedBalances = accumulateBalances();
    console.log(accumulatedBalances);
    const balancesData = encodeURIComponent(JSON.stringify(accumulatedBalances));
    router.push(`/payment?balances=${balancesData}`);
  };

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
            onClick={handleSettleAllBalances}
          >
            Settle All Balances
          </Button>
        </Card>

        <div className="space-y-4">
          {debts.map((debt, index) => (
            <Card
              key={index}
              className="flex justify-between items-center p-4 bg-muted rounded-lg"
            >
              <div>
                <h3 className="text-base font-semibold">{debt.description}</h3>
                <p className="text-sm text-muted-foreground">
                  {debt.people.length} people
                </p>
                <p className="text-sm text-muted-foreground">
                  Amount due: ${debt.amountDue.toFixed(2)}
                </p>
                
              </div>
              <Button className="bg-primary text-primary-foreground">
                Pay
              </Button>
            </Card>
          ))}
        </div>
        
        <div>
          <h2 className="text-lg font-bold mt-4">Receivables</h2>
          {receivables.map((receivable, index) => (
            <Card
              key={index}
              className="flex justify-between items-center p-4 bg-muted rounded-lg"
            >
              <div>
                <h3 className="text-base font-semibold">
                  {receivable.description}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {receivable.people.length} people
                </p>
                <p className="text-sm text-muted-foreground">
                  Amount due: ${receivable.amountDue.toFixed(2)}
                </p>
              </div>
              {/* <ChevronRightIcon className="w-6 h-6 text-muted-foreground" /> */}
            </Card>
          ))}
        </div>
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
