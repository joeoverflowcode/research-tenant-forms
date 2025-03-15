"use client"
import { useRouter } from "next/navigation";
import Lock from "@/components/lock";

export default function Home() {
  const router = useRouter();
    const generateKey = (): string =>{
        const min= 1000;
        const max = 9999
        return Math.floor(Math.random()* (max-min +1) +min).toString()
    }

  const handleGenerateKey = () => {
    const keyData = {
      id: generateKey(),
      userName: "Tenant 01", // This can be a user input
      date: new Date().toLocaleDateString(),
      status: "Active",
    };

    // Redirect to the key page with query params
    router.push(`/passkey/${keyData.id}?userName=${keyData.userName}&date=${keyData.date}&status=${keyData.status}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Lock />

      <button
        onClick={handleGenerateKey}
        className="px-10 py-3 bg-button text-white text-2xl font-bold rounded-lg mt-10"
      >
        Generate Key
      </button>
    </div>
  );
}