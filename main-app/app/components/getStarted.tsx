"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { JSX, SVGProps } from "react";
import { useRouter } from "next/navigation";

export default function GetStarted() {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-medium">Welcome! Let's get you started..</h2>
      <div className="flex flex-col items-center space-y-2">
        <h3 className="text-lg font-medium">Profile Image</h3>
        <p className="text-sm text-gray-400">Choose a profile image</p>
        <Avatar className="w-24 h-24">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>
            <CameraIcon className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>
        <Button className="bg-gray-200 text-black rounded-full px-4 py-2">
          Choose image
        </Button>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">Name</h3>
        <p className="text-sm text-gray-400">Type in your name</p>
        <Input
          className="bg-gray-700 text-white rounded-full px-4 py-2"
          placeholder="Enter your name"
        />
      </div>
      <Button className="bg-blue-600 text-white rounded-full px-6 py-2">
        Connect
      </Button>
    </div>
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
