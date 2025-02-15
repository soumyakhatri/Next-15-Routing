"use client"

import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter()
    return (
        <button 
            onClick={() => router.back()}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            ← Go back
        </button>
    )
}