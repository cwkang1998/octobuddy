"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V6MZlAnoyyt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

import { useRouter } from "next/navigation";

export default function ManageGroup() {
  const router = useRouter();
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mb-6">Your Groups</h1>
        <Button onClick={() => router.push('/creategroup')}>Create New Group</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Family Expenses</h2>
              <div className="flex items-center">
                <UsersIcon className="w-5 h-5 mr-1" />
                <span>4</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div>Your Balance</div>
              <div className="text-red-500">-$50.00</div>
            </div>
          </div>
          <div className="bg-muted p-4 flex justify-end">
            <Button variant="outline" size="sm">
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </Card>
        <Card className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Roommates</h2>
              <div className="flex items-center">
                <UsersIcon className="w-5 h-5 mr-1" />
                <span>3</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div>Your Balance</div>
              <div className="text-green-500">$25.00</div>
            </div>
          </div>
          <div className="bg-muted p-4 flex justify-end">
            <Button variant="outline" size="sm">
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </Card>
        <Card className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Vacation Fund</h2>
              <div className="flex items-center">
                <UsersIcon className="w-5 h-5 mr-1" />
                <span>6</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div>Your Balance</div>
              <div className="text-green-500">$75.00</div>
            </div>
          </div>
          <div className="bg-muted p-4 flex justify-end">
            <Button variant="outline" size="sm">
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </Card>
        <Card className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Utilities</h2>
              <div className="flex items-center">
                <UsersIcon className="w-5 h-5 mr-1" />
                <span>2</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div>Your Balance</div>
              <div className="text-red-500">-$20.00</div>
            </div>
          </div>
          <div className="bg-muted p-4 flex justify-end">
            <Button variant="outline" size="sm">
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </Card>
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
