"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
    const router = useRouter()
    const handleRetry = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {error.message}
                </h1>
                <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Try Again
                </button>
            </div>
        </div>
    )
}