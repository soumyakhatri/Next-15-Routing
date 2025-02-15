"use client"

import { useState } from 'react'

// export const metadata = {
//     title: "Products Layout Page",
//     description: "Description About Products Layout Page",
// }

// const generateRandom = () => {
//     //returns either 0 or 1
//     return Math.floor(Math.random() * 2)
// }

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    // if (generateRandom() === 1) {
    //     throw new Error("Error In Products Layout")
    // }
    const [input, setInput] = useState("")
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold text-gray-900 whitespace-nowrap">Products Layout</h1>
                <div className="flex items-center gap-4 flex-1">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter text..."
                    />
                    <p className="text-sm text-gray-600 whitespace-nowrap">Go to some other page in products and the input value won't change</p>
                </div>
            </div>
            {children}
        </div>
    )
}