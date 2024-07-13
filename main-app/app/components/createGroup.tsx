"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AbUz0jcGmVO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { useRouter } from "next/navigation";

export default function CreateGroup() {
  const router = useRouter();
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create New Group</CardTitle>
        <CardDescription>
          Fill out the details and add members to your new group.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="groupName">Group Name</Label>
            <Input id="groupName" placeholder="Enter group name" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="groupDescription">Group Description</Label>
            <Textarea
              id="groupDescription"
              placeholder="Enter group description"
              rows={3}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="searchMembers">Add Members</Label>
            <div className="relative">
              <Input
                id="searchMembers"
                placeholder="Search and select members"
                className="pr-10"
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">
                      john@example.com
                    </p>
                  </div>
                </div>
                <Checkbox id="member-1" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Jane Arden</p>
                    <p className="text-sm text-muted-foreground">
                      jane@example.com
                    </p>
                  </div>
                </div>
                <Checkbox id="member-2" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">
                      sarah@example.com
                    </p>
                  </div>
                </div>
                <Checkbox id="member-3" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={router.back}>Cancel</Button>
        <Button onClick={() => router.push("/groupview")}>Create Group</Button>
      </CardFooter>
    </Card>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
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
