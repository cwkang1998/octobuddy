"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BviSh1jSAyM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { Logo } from "@/public/logo.png"



export default function Login() {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center space-y-4">
      {/* <img src="/@/public/logo.png" alt="OctoBuddy Logo" className="w-20 h-20" /> */}
        
      <Image src="/logo.png" alt="OctoBuddy Logo" width={80} height={80} />
        <h1 className="text-3xl font-bold">OctoBuddy</h1>
        <p className="text-center text-sm">Seamless group payments from every chain</p>
        <div className="flex flex-col space-y-4 w-full max-w-xs">
        <Button
          className="w-full bg-blue-600 text-white rounded-full px-6 py-2"
          onClick={() => router.push('/login')}
        >
          Sign In
        </Button>
        <Button className="text-blue-600 w-full">Sign Up</Button>
      </div>
      </div>

      
    </div>
  )
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
  )
}