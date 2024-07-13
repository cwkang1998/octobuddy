/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2MNf0nnEANm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation";

export default function SplitBill() {
    const router = useRouter();
  const [splitMethod, setSplitMethod] = useState("equal")
  const [members, setMembers] = useState([
    { name: "John", amount: 0 },
    { name: "Jane", amount: 0 },
    { name: "Bob", amount: 0 },
    { name: "Alice", amount: 0 },
  ])
  const [totalBill, setTotalBill] = useState(500)
  const handleSplitMethodChange = (method: SetStateAction<string>) => {
    setSplitMethod(method)
  }
  const handleMemberAmountChange = (index: number, amount: number) => {
    const updatedMembers = [...members]
    updatedMembers[index].amount = amount
    setMembers(updatedMembers)
  }
  const handleTotalBillChange = (amount: SetStateAction<number>) => {
    setTotalBill(amount)
  }
  const calculateEqualShare = () => {
    return totalBill / members.length
  }
  const calculateBalance = () => {
    const totalContribution = members.reduce((acc, member) => acc + member.amount, 0)
    return totalBill - totalContribution
  }
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
          <div className="flex items-center justify-between mb-2">
            <Label htmlFor="total-bill">Total Bill</Label>
            <Input
              id="total-bill"
              type="number"
              value={totalBill}
              onChange={(e) => handleTotalBillChange(parseFloat(e.target.value))}
              className="w-32"
            />
          </div>
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
                  <AvatarFallback>{member.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{member.name}</span>
              </div>
              {splitMethod === "equal" ? (
                <span className="font-medium">${calculateEqualShare().toFixed(2)}</span>
              ) : (
                <Input
                  type="number"
                  value={member.amount}
                  onChange={(e) => handleMemberAmountChange(index, parseFloat(e.target.value))}
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
            <span className="font-medium">${members.reduce((acc, member) => acc + member.amount, 0).toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Balance</span>
            <span className={`font-medium ${calculateBalance() >= 0 ? "text-green-500" : "text-red-500"}`}>
              ${calculateBalance().toFixed(2)}
            </span>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button type="submit" onClick={() => router.push('/')}>Confirm Split</Button>
        </div>
      </div>
    </div>
  )
}