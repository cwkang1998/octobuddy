"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7UMLeG8n0qu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";

export default function EnterBill() {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-muted-foreground">Please input bill amount</p>
          <div className="text-6xl font-bold">
            <span className="text-4xl text-muted-foreground mr-4">$</span>
            <span>42.99</span>
          </div>
        </div>
        <div className="w-full">
          <Input type="text" placeholder="What is this bill for?" className="text-base" />
        </div>
        <Button className="w-full" onClick={() => router.push('/addmembers')}>Create Group</Button>
      </div>
    </div>
  )
}