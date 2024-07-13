"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0qdG00TUYqS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { useRouter } from "next/navigation";

export default function GroupTransactions() {
    const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-10 bg-background px-4 py-3 shadow-sm sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <UsersIcon className="h-5 w-5" />
            </div>
            <h1 className="text-lg font-semibold">Splitwise Group</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="grid gap-1 text-right">
              <div className="text-sm font-medium text-muted-foreground">
                You owe
              </div>
              <div className="text-lg font-semibold text-red-500">$125.00</div>
            </div>
            <div className="grid gap-1 text-right">
              <div className="text-sm font-medium text-muted-foreground">
                You're owed
              </div>
              <div className="text-lg font-semibold text-green-500">$75.00</div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6">
        <div className="grid gap-6">
          <Card>
            <Button className="w-full" onClick={() => router.push("/addtransaction")}>
              
              Add Transaction
            </Button>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg bg-background p-4 shadow-sm">
                  <div className="rounded-full bg-red-500 p-2 text-white">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Dinner at Acme Cafe</div>
                    <div className="text-sm text-muted-foreground">
                      You borrowed $25.00 from Alex
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">-$25.00</div>
                    <div className="text-sm text-muted-foreground">
                      2023-06-15
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg bg-background p-4 shadow-sm">
                  <div className="rounded-full bg-green-500 p-2 text-white">
                    <ArrowUpIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Groceries at Acme Mart</div>
                    <div className="text-sm text-muted-foreground">
                      Alex borrowed $50.00 from you
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">+$50.00</div>
                    <div className="text-sm text-muted-foreground">
                      2023-06-12
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg bg-background p-4 shadow-sm">
                  <div className="rounded-full bg-red-500 p-2 text-white">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Movie Tickets</div>
                    <div className="text-sm text-muted-foreground">
                      You borrowed $15.00 from Sarah
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">-$15.00</div>
                    <div className="text-sm text-muted-foreground">
                      2023-06-10
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg bg-background p-4 shadow-sm">
                  <div className="rounded-full bg-green-500 p-2 text-white">
                    <ArrowUpIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Rent Payment</div>
                    <div className="text-sm text-muted-foreground">
                      Sarah borrowed $100.00 from you
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">+$100.00</div>
                    <div className="text-sm text-muted-foreground">
                      2023-06-01
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function ArrowDownIcon(
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
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
