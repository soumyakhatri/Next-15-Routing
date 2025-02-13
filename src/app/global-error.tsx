"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <html>
            <body className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">
                        {error.message}
                    </h1>
                    <button 
                        onClick={() => window.location.reload()}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                    >
                        Refresh
                    </button>
                </div>
            </body>
        </html>
    )
}