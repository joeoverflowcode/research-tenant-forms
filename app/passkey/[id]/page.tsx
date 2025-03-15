"use client"
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import {use} from 'react'


interface Params {
    id: string;
}

interface KeyPageProps{
    params: Promise<Params>
}

export default function KeyPage({ params }: KeyPageProps) {
  const searchParams = useSearchParams();
  
  const userName = searchParams.get("userName");
  const date = searchParams.get("date");
  const status = searchParams.get("status");
  const {id} = use(params)

  const splitKey = id.split("")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">New Key Details</h1>
      <div className="bg-alternate-green p-6 rounded-lg shadow-md text-black">
        <span className="flex">
        <p className="mr-1">{userName}</p>
<p>created a new guest key code!
</p>
        </span>
        {/*strong>Key ID: {params.id}</p> */}
        <p>Date: {date}</p>
        <p>Status: {status}</p>

        <div className="flex my-4 gap-2 justify-center">
            {splitKey.map((digit, index) =>(
                <div key={index}
                className="flex border-1 border-black p-4 rounded-md bg-alternate-light-gray shadow-lg">
                    <p className="text-2xl font-bold">{digit}</p>
                    </div>
            ))}
        </div>
            <div className="w-full flex justify-end px-2">
                <Send className="text-black w-10 h-10"/>
                </div>
      </div>
      <a
        href="/passkey"
        className="mt-4 px-6 py-2 bg-secondary-blue text-white rounded-lg font-bold"
      >
        Generate another key
      </a>
    </div>
  );
}