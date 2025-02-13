"use client"

import { useState } from "react"

function ErrorSimulator({ message = "Something went wrong" }: { message?: string }) {
  const [error, setError] = useState(false)

  if (error) {
    throw new Error(message)
  }

  return (
    <div className="flex justify-center p-4">
      <button
        onClick={() => setError(true)}
        className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors duration-200 shadow-sm"
      >
        Simulate Error
      </button>
    </div>
  )
}

export default function ErrorWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen p-4">
      <ErrorSimulator message="Something went wrong in the root layout" />
      <div className="mt-4">
        {children}
      </div>
    </div>
  )
}