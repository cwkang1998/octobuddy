/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XnNaXXv7hxW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"

export default function Contacts() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Splitwise</h1>
        <Button variant="secondary" size="sm">
          Add Contact
        </Button>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Contacts</h2>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              View all
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between bg-muted p-4 rounded-md">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-muted-foreground text-sm">john@example.com</div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <PlusIcon className="w-5 h-5" />
                <span className="sr-only">Add to expense</span>
              </Button>
            </div>
            <div className="flex items-center justify-between bg-muted p-4 rounded-md">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-muted-foreground text-sm">jane@example.com</div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <PlusIcon className="w-5 h-5" />
                <span className="sr-only">Add to expense</span>
              </Button>
            </div>
            <div className="flex items-center justify-between bg-muted p-4 rounded-md">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>BJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Bob Johnson</div>
                  <div className="text-muted-foreground text-sm">bob@example.com</div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <PlusIcon className="w-5 h-5" />
                <span className="sr-only">Add to expense</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-6 right-6">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Contact
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Contact</DialogTitle>
            <DialogDescription>Enter the details of your new contact.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" placeholder="Enter name" className="col-span-3" />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Enter email" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Contact</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
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