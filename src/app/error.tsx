"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
    const router = useRouter()
    const retry = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-gray-900">Oops! Something went wrong</h1>
                    <p className="text-lg text-red-600">{error.message}</p>
                </div>
                
                <button
                    onClick={retry}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Try Again
                </button>
            </div>
        </div>
    )
}