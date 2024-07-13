/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JhzOn2c74ft
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { JSX, SVGProps, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export default function AddTransactions() {
    const router = useRouter();
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [payer, setPayer] = useState("")
  const [splitMethod, setSplitMethod] = useState("equal")
  const [friends, setFriends] = useState<string[]>([])
  const [customSplits, setCustomSplits] = useState<{ [key: number]: number }>({})
  const addFriend = () => {
    setFriends([...friends, ""])
    setCustomSplits({ ...customSplits, [friends.length]: 0 })
  }
  const removeFriend = (index: number) => {
    const newFriends = [...friends]
    newFriends.splice(index, 1)
    setFriends(newFriends)
    const newCustomSplits = { ...customSplits }
    delete newCustomSplits[index]
    setCustomSplits(newCustomSplits)
  }
  const handleCustomSplitChange = (index: number, value: number) => {
    setCustomSplits({ ...customSplits, [index]: value })
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log({
      title,
      amount,
      date,
      payer,
      splitMethod,
      friends,
      customSplits,
    })
  }
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Add Transaction</CardTitle>
        <CardDescription>Record a new transaction and split the cost with your friends.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="title">Transaction Title</Label>
          <Input
            id="title"
            placeholder="Dinner at Sushi Place"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="payer">Payer</Label>
          <Input id="payer" placeholder="Enter payer's name" value={payer} onChange={(e) => setPayer(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="split-method">Split Method</Label>
          <RadioGroup
            id="split-method"
            value={splitMethod}
            onValueChange={setSplitMethod}
            className="flex items-center gap-4"
          >
            <Label htmlFor="split-equal" className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem id="split-equal" value="equal" />
              Equal
            </Label>
            <Label htmlFor="split-custom" className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem id="split-custom" value="custom" />
              Custom
            </Label>
          </RadioGroup>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="friends">Friends</Label>
          <div className="grid gap-2">
            {friends.map((friend, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  id={`friend-${index}`}
                  placeholder={`Friend ${index + 1}`}
                  value={friend}
                  onChange={(e) => {
                    const newFriends = [...friends]
                    newFriends[index] = e.target.value
                    setFriends(newFriends)
                  }}
                />
                {splitMethod === "custom" && (
                  <Input
                    id={`custom-split-${index}`}
                    type="number"
                    placeholder="Custom split"
                    value={customSplits[index] || 0}
                    onChange={(e) => handleCustomSplitChange(index, parseFloat(e.target.value))}
                  />
                )}
                <Button variant="ghost" size="icon" onClick={() => removeFriend(index)}>
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" onClick={addFriend}>
              Add Friend
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={router.back}>
          Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Save Transaction
        </Button>
      </CardFooter>
    </Card>
  )
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
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