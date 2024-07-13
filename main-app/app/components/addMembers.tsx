"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Bmx9Kj3W4Vs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


import { JSX, SetStateAction, SVGProps, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";

export default function AddMembers() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      address: "0x123456789abcdef0123456789abcdef01234567",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "0xfedcba9876543210fedcba9876543210fedcba9",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      address: "0x0123456789abcdef0123456789abcdef01234567",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Alice Williams",
      address: "0xfedcba9876543210fedcba9876543210fedcba9",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Tom Davis",
      address: "0x0123456789abcdef0123456789abcdef01234567",
      avatar: "/placeholder-user.jpg",
    },
  ])
  const [selectedContacts, setSelectedContacts] = useState<{ id: number; name?: string; address?: string; avatar?: string }[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [splitMethod, setSplitMethod] = useState("even")
  const [customSplits, setCustomSplits] = useState<{ [key: number]: number }>({})
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const toggleContact = (contact: { id: any; name?: string; address?: string; avatar?: string }) => {
    if (selectedContacts.includes(contact)) {
      setSelectedContacts(selectedContacts.filter((c) => c.id !== contact.id))
    } else {
      setSelectedContacts([...selectedContacts, contact])
    }
  }
  const router = useRouter();

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Select Group Members</CardTitle>
        <CardDescription>Choose the members you want to split the bill with.</CardDescription>
      </CardHeader>

      <CardContent>
      
      <h2 className="text-lg font-medium">Recent Groups</h2>
      
      <div className="flex items-center gap-4 mb-4">

        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
      </div>
        <div className="flex items-center gap-4 mb-6">
          <Input
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button variant="outline" onClick={() => router.push('/contacts')}>
            <PlusIcon className="w-4 h-4" />
            Add New Contact            
          </Button>
        </div>
        <div className="grid gap-4">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-colors hover:bg-muted ${
                selectedContacts.includes(contact) ? "bg-muted" : ""
              }`}
              onClick={() => toggleContact(contact)}
            >
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>{contact.name?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 grid gap-1">
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-muted-foreground">{contact.address.slice(0, 8)}...</div>
              </div>
              {selectedContacts.includes(contact) && <CheckIcon className="w-5 h-5 text-primary" />}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
            <Button className="w-full" onClick={() => router.push('/splitbill')}>Split Bill</Button>

      </CardFooter>
    </Card>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 5v14" />
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