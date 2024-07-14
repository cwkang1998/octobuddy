import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import Image from "next/image";


export default function LoginPrompt() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <Card className="w-full max-w-md p-6 bg-white text-black rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-lg font-medium">Log in or Sign Up</h2>
          <Image src="/logo.png" alt="OctoBuddy Logo" width={80} height={80} />
          <h1 className="text-2xl font-bold">OctoBuddy</h1>
          <Button className="flex items-center space-x-2 bg-gray-200 text-black rounded-full px-6 py-2">
            <WalletIcon className="w-5 h-5" />
            <span>Continue with a wallet</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500">© Protected by Privy</p>
        </div>
      </Card>
    </div>
  );
}

function ArrowRightIcon(
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function WalletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
